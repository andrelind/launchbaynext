import { PilotListItem } from '@/src/components/PilotListItem';
import { SwipeComponent } from '@/src/components/SwipeComponent';
import { useAvailability } from '@/src/helpers/collection';
import { useTailwind } from '@/src/helpers/tailwind';
import { useXwsStore } from '@/src/stores/xws';
import { red } from '@/src/theme';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { loadShip2, TShip } from 'lbn-core/src/helpers/loading';
import React from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { useShallow } from 'zustand/react/shallow';

type EShip = TShip & { key: string };

export default function SquadronScreen() {
    const { uid } = useLocalSearchParams();
    const router = useRouter();
    const { tw } = useTailwind();

    const { xws, lists, setLists, copyShip, removeShip } =
        useXwsStore(useShallow((s) => ({
            xws: s.lists?.find((l) => l.vendor.lbn.uid === uid),
            lists: s.lists,
            setLists: s.setLists,
            copyShip: s.copyShip,
            removeShip: s.removeShip,
        })));

    // @ts-ignore
    const ships: EShip[] | undefined = xws?.pilots
        .map((p, i) => {
            try {
                return { key: `${p.id}_${i}`, ...loadShip2(p, xws) };
            } catch (error) {
                console.log(error);
            }
        })
        .filter((x) => x);

    const available = useAvailability(xws);
    const hasMissingItems =
        available.ships?.filter((a) => a.count < 0)?.length > 0 ||
        available.upgrades?.filter((a) => a.count < 0)?.length > 0;

    if (!xws) {
        return <View />;
    }

    const renderHeader = () => (
        <View>
            {hasMissingItems && (
                <Animated.View
                    entering={FadeIn}
                    layout={Layout.springify()}
                    exiting={FadeOut}
                >
                    <TouchableOpacity
                        style={tw`flex-row items-center justify-center p-4 gap-x-2 rounded-lg`}
                        onPress={() => {
                            router.push({ pathname: `(tabs)/squadrons/missing`, params: { uid } });
                        }}
                    >
                        <Feather name="alert-triangle" size={24} color={red} />

                        <Text style={tw`text-white`}>
                            Not all items are available in the collection
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    );


    if (!ships || !xws) {
        return <View />;
    }

    return (
        <View style={tw`flex-1`}>
            <DraggableFlatList
                // style={tw`h-full`}
                contentContainerStyle={tw`px-2 py-2 android:pb-24`}
                showsVerticalScrollIndicator={false}
                data={ships || []}
                keyExtractor={(s: TShip, i: number) => `${s.xws}_${i}`}
                renderItem={({ item, getIndex, drag }) => {
                    const index = getIndex() || 0;
                    return (
                        <SwipeComponent
                            style={tw`p-1`}
                            onPress={() => {
                                router.push({
                                    pathname: `(tabs)/squadrons/pilot/${uid}`,
                                    params: {
                                        pilotIndex: index || 0,
                                        factionKey: xws?.faction,
                                    },
                                });
                            }}
                            onLongPress={drag}
                            onLeftAction={() => {
                                copyShip(xws, index);
                            }}
                            onRightAction={() => {
                                removeShip(xws, index);
                            }}
                        >
                            <PilotListItem key={item.key} pilot={item?.pilot!} ship={item} ruleset={xws?.ruleset} slim />
                        </SwipeComponent>
                    )
                }}
                onDragBegin={() => {
                }}
                onDragEnd={({ from, to }: any) => {
                    const copy = { ...xws! };
                    const cutOut = copy.pilots!.splice(from, 1)[0];
                    copy.pilots!.splice(to, 0, cutOut);
                    lists?.splice(lists!.indexOf(xws!), 1, copy);
                    setLists(lists!);
                }}
                // ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={Platform.OS === 'android' ? <View style={{ height: 30 }} /> : undefined}
            />
        </View>
    );
};
