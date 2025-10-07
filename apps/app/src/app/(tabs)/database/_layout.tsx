import { useTailwind } from '@/src/helpers/tailwind';
import { SortingType } from '@/src/stores/filter';
import { useIsFocused } from '@react-navigation/native';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

const sortings: SortingType[] = [
    'Alphabetically',
    'Faction',
    'Points',
    'Wins',
    'Created Date',
    'Format',
];

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function OverviewLayout() {
    const { tw } = useTailwind();
    const router = useRouter();

    const [showHeader, setShowHeader] = useState(true);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && isLiquidGlassAvailable()) {
            setTimeout(() => {
                setShowHeader(false);
            }, 100);
        }
    }, [isFocused]);

    return <Stack screenOptions={{
        headerStyle: { backgroundColor: tw.color('zinc-950'), },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: tw.color('zinc-950') },
    }} >
        <Stack.Screen name="index" options={{
            title: 'Database',
            // headerShown: isLiquidGlassAvailable() ? false : true,
            headerShown: showHeader,
            headerSearchBarOptions: {
                placeholder: "Search...",
                placement: "automatic",
                hideNavigationBar: false,
                autoFocus: false,
                hideWhenScrolling: false,
                autoCapitalize: "none",
                inputType: "text",

                headerIconColor: tw.color('orange-500'),
                textColor: tw.prefixMatch('dark') ? tw.color('white') : tw.color('black'),
                barTintColor: tw.prefixMatch('dark') ? tw.color('zinc-800') : tw.color('white'),

                onChangeText(e) {
                    router.setParams({ needle: e.nativeEvent.text.toLowerCase() });
                },
            },
        }} />

    </Stack>;
}

