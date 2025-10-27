import { PilotListItem } from '@/src/components/PilotListItem';
import { countForPilot2 } from '@/src/helpers/collection';
import { useShipTypes } from '@/src/helpers/select';
import { useTailwind } from '@/src/helpers/tailwind';
import { useCollectionStore } from '@/src/stores/collection';
import { useXwsStore } from '@/src/stores/xws';
import { LegendList } from '@legendapp/list';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pilot } from 'lbn-core/src/types';
import React from 'react';
import {
    TouchableOpacity,
    View,
    useWindowDimensions
} from 'react-native';

export default function SelectPilotScreen() {
    const { width } = useWindowDimensions();
    const router = useRouter();

    const { uid, shipXws, pilotIndex } = useLocalSearchParams();

    const { tw } = useTailwind();
    const collection = useCollectionStore();
    const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
    const shipList = xws && useShipTypes(xws, true);
    const addShip = useXwsStore((s) => s.addShip);
    const changePilot = useXwsStore((s) => s.changePilot);

    const ship = shipList
        ?.find((s) => (shipXws ? s.xws === shipXws : true))

    const data = ship
        ?.pilots.sort((a, b) => {
            if (a.initiative < b.initiative) {
                return 1;
            } else if (a.initiative > b.initiative) {
                return -1;
            } else if (a.cost < b.cost) {
                return 1;
            } else if (a.cost > b.cost) {
                return -1;
            }
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });

    const columns = width > 600 ? 2 : 1;

    if (!xws || !ship) return null;

    return (
        <LegendList

            data={data as Pilot[]}
            keyExtractor={(item) => item.xws}
            recycleItems
            ItemSeparatorComponent={() => <View style={tw`h-2`} />}
            contentContainerStyle={tw`p-2 android:pb-24 ios:pb-10`}
            numColumns={columns}
            renderItem={({ item, index }) => {
                const count = countForPilot2(collection, item.xws, xws);
                return (
                    <TouchableOpacity
                        key={item.xws}
                        activeOpacity={0.7}
                        style={tw`flex-1 ${index % 2 === 0 || columns === 1 ? '' : 'pl-2'}`}
                        onPress={() => {
                            if (pilotIndex !== undefined) {
                                changePilot(uid as string, parseInt(pilotIndex as string), item.xws);
                                router.back();
                            } else {
                                addShip(uid as string, shipXws as string, item.xws);
                                router.dismissTo('/(tabs)/squadrons/squadron/' + uid);
                            }
                        }}
                    >
                        <PilotListItem pilot={item} ship={{ ...ship, pointsWithUpgrades: item.cost }} count={count} ruleset={xws?.ruleset} />
                    </TouchableOpacity>
                );
            }}
        />
    );
};


