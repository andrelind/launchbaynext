import { ShipFont } from '@/src/components/fonts/ShipIcon';
import { useShipTypes } from '@/src/helpers/select';
import { useTailwind } from '@/src/helpers/tailwind';
import { useXwsStore } from '@/src/stores/xws';
import { LegendList } from '@legendapp/list';
import { useLocalSearchParams, useRouter } from 'expo-router/build/exports';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useShallow } from 'zustand/react/shallow';

export default function SelectShipScreen() {
    const router = useRouter()
    const { tw } = useTailwind();
    const { uid, shipXws, pilotIndex } = useLocalSearchParams();
    const xws = useXwsStore(
        useShallow((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid))
    );
    const shipList = useShipTypes(xws, true);

    const data =
        shipList
            ?.filter((s) =>
                xws?.format === 'Extended' && s.xws === 'syliureclasshyperspacering'
                    ? false
                    : true
            )
            .filter((s) => (shipXws ? s.xws === shipXws : true))
            .sort((a, b) =>
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            ) || [];

    return (
        <LegendList
            contentContainerStyle={tw`py-2 px-2 android:pb-24 ios:pb-10`}
            data={data}
            estimatedItemSize={56}
            recycleItems
            keyExtractor={(item) => item.xws}
            // style={{ height: 400, width: 400 }}
            renderItem={({ item, index }) => (
                <Animated.View entering={FadeInUp.delay(index * 25)} style={tw`px-2`}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            router.push({
                                pathname: 'ships/pilots',
                                params: {
                                    uid,
                                    shipXws: item.xws,
                                    pilotIndex,
                                }
                            });
                        }}
                        style={tw`flex-1 flex-row items-center`}
                    >
                        <View style={tw`w-12 items-center`}>
                            <ShipFont icons={[item.xws]} size={12} style={tw`text-white`} />
                        </View>
                        <Text style={tw`text-white font-bold ml-3`}>{item.name}</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
        />
    );
};
