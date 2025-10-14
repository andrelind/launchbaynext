import { SwipeComponent } from '@/src/components/SwipeComponent';
import { UpgradeComponent } from '@/src/components/Upgrade';
import { countForUpgrade2 } from '@/src/helpers/collection';
import { upgradesForSlot2 } from '@/src/helpers/select';
import { useTailwind } from '@/src/helpers/tailwind';
import { useCollectionStore } from '@/src/stores/collection';
import { useXwsStore } from '@/src/stores/xws';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { keyFromSlot } from 'lbn-core/src/helpers/convert';
import { loadShip2 } from 'lbn-core/src/helpers/loading';
import { Slot, Upgrade } from 'lbn-core/src/types';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

export default function SelectUpgradeScreen() {
    const router = useRouter();
    const { uid, slot, index, slotIndex } = useLocalSearchParams<{ uid: string, slot: Slot, index: string, slotIndex: string }>();

    const { tw } = useTailwind();
    const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
    const ships = xws?.pilots.map((p) => loadShip2(p, xws));
    const pilot = xws?.pilots[parseInt(index)];
    const ship = pilot && loadShip2(pilot, xws);

    const setUpgrade = useXwsStore((s) => s.setUpgrade);

    const [flipped, setFlipped] = useState<number[]>([]);
    const [hide, setHide] = useState(false);
    const collection = useCollectionStore();

    const upgrades =
        xws &&
        ships &&
        ship &&
        upgradesForSlot2(ship, slot, xws?.format, xws.ruleset, ships, !hide, collection);

    const renderItem = useCallback(
        ({ item, index: i }: LegendListRenderItemProps<Upgrade>) => {
            return (
                <SwipeComponent
                    showFlip
                    onPress={() => {
                        const key = keyFromSlot(slot);
                        setUpgrade(xws!, parseInt(index), key, parseInt(slotIndex), item);
                        router.back();
                    }}
                    onLeftAction={
                        item.sides?.length !== 1
                            ? () => {
                                if (flipped.includes(i)) {
                                    flipped.splice(flipped.indexOf(i), 1);
                                } else {
                                    flipped.push(i);
                                }
                                setFlipped([...flipped]);
                            }
                            : undefined
                    }
                >
                    <UpgradeComponent
                        showRestrictions
                        side={flipped.includes(i) ? 1 : 0}
                        slot={slot}
                        upgrade={item}
                        count={countForUpgrade2(collection, item.xws, xws)}
                        onImagePress={() => {
                            const uri = item.sides[flipped.includes(i) ? 1 : 0].image;
                            router.push({
                                pathname: 'sheets/image',
                                params: { uri },
                            })
                        }}
                    />
                </SwipeComponent>
            );
        },
        [flipped, index, setUpgrade, slot, slotIndex, xws]
    );

    return (
        <LegendList
            recycleItems
            estimatedItemSize={150}
            contentContainerStyle={tw`px-2 pt-2 pb-6`}
            data={upgrades || []}
            keyExtractor={(s, i) => `${s.xws}_${i}`}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={tw`h-2`} />}
        />
    );
};
