import { XWingFont } from '@/src/components/fonts/XWingIcon';
import { SimpleItem } from '@/src/components/SimpleItem';
import { colorForFactionKey } from '@/src/helpers/colors';
import { useTailwind } from '@/src/helpers/tailwind';
import { LegendList } from '@legendapp/list';
import { useRouter } from 'expo-router';
import { keyFromFaction } from 'lbn-core/src/helpers/convert';
import { factions } from 'lbn-core/src/helpers/enums';
import { SourceKey } from 'lbn-core/src/sources';
import React from 'react';
import { View } from 'react-native';

export default function CollectionScreen() {
    const { tw } = useTailwind();
    const router = useRouter();
    const data = [
        ...factions.map(f => ({
            title: f,
            icon: f,
        })),
        { title: 'Epic', icon: undefined },
        { title: 'Core Sets and Card Packs', icon: undefined },
        { title: 'Additional Ships', icon: undefined },
        { title: 'Additional Pilots', icon: undefined },
        { title: 'Additional Upgrades', icon: undefined },
    ];

    return (
        <LegendList
            recycleItems
            contentContainerStyle={tw`p-3 android:pb-28`}
            estimatedItemSize={48}
            data={data}
            keyExtractor={i => i.title}
            renderItem={({ item }) => {
                const { title, icon } = item;
                return (
                    <SimpleItem
                        icon={
                            icon && (
                                <View style={tw`w-7 items-center mr-2`}>
                                    <XWingFont
                                        icons={[keyFromFaction(icon)]}
                                        size={7}
                                        color={colorForFactionKey(keyFromFaction(icon), !tw.prefixMatch('dark'))}
                                    />
                                </View>
                            )
                        }
                        text={title}
                        onPress={() => {
                            const sourceKey: SourceKey = title === 'Core Sets and Card Packs' ? 'Core Sets' : (title as SourceKey);
                            router.push({ pathname: '(tabs)/collection/details', params: { sourceKey } });
                        }}
                    />
                );
            }}
            ItemSeparatorComponent={() => <View style={tw`h-2`} />}
        />
    );
}
