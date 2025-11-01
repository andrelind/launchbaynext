import { SquadronComponent } from '@/src/components/Squadron';
import { pilotName } from '@/src/helpers/names';
import { useTailwind } from '@/src/helpers/tailwind';
import { useXwsStore } from '@/src/stores/xws';
import { XWS } from 'lbn-core/src/types';
import React from 'react';
import {
    Text,
    View
} from 'react-native';

import { useFilterStore } from '@/src/stores/filter';
import { LegendList, LegendListRenderItemProps } from "@legendapp/list";
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function SquadronsScreen() {
    const { tw } = useTailwind();
    const router = useRouter();

    const { needle } = useLocalSearchParams();

    const lists = useXwsStore(s => s.lists);
    const filters = useFilterStore(s => s.filters);
    const tags = useFilterStore(s => s.tags);

    const filtered = lists
        ?.filter(
            (list) => {
                if (!needle || needle.length === 0) { return true; }
                return list.name?.toLowerCase().includes(needle as string) ||
                    list.pilots?.filter((pilot) =>
                        pilotName(pilot, list)?.toLowerCase().includes(needle as string)
                    ).length > 0
            }
        )
        .filter((list) => {
            if (Object.keys(filters).length === 0) { return true; }
            console.log('filtering', filters, list.faction, list.format);
            return filters[list.faction] || filters[list.format];
        })
        .filter((list) => {
            if (tags.length === 0) { return true; }
            if (
                tags.length > 0 &&
                tags.filter((tag) => (list.vendor.lbn.tags || []).includes(tag))
                    .length === 0
            ) {
                return false;
            }
            return true;
        });

    const renderItem = ({ item }: LegendListRenderItemProps<XWS>) => (
        <SquadronComponent
            key={item.vendor.lbn.uid}
            item={item}
            onPress={() => {
                router.push(`(tabs)/squadrons/squadron/${item.vendor.lbn.uid}`);
            }}
        />
    );

    return (
        <>
            <LegendList
                style={tw`bg-zinc-950 flex-1`}
                contentContainerStyle={tw`py-2 px-2 android:pb-30`}
                showsVerticalScrollIndicator={false}
                data={filtered || []}
                keyExtractor={(l: XWS) => l.vendor.lbn.uid}
                ListEmptyComponent={() => (
                    <View style={tw`items-center justify-center flex-1 h-screen`}>
                        <Text style={tw`text-zinc-500 text-lg`}>No squadrons found</Text>
                    </View>
                )}
                renderItem={(renderItem)}
                recycleItems
            />
        </>
    );


};


