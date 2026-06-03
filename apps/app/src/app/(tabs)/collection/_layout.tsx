import { useTailwind } from '@/src/helpers/tailwind';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { SourceKey } from 'lbn-core/src/sources';

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function CollectionLayout() {
    const { tw } = useTailwind();
    const router = useRouter();

    const { sourceKey } = useGlobalSearchParams<{ sourceKey: SourceKey }>();

    return <Stack screenOptions={{
        headerStyle: { backgroundColor: tw.color('zinc-950'), },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: tw.color('zinc-950') },
    }} >
        <Stack.Screen name="index" options={{
            title: 'Collection',
        }} />
        <Stack.Screen name="details" options={{
            headerShown: true,
            title: sourceKey,
            headerSearchBarOptions: {
                placeholder: 'Search...',
                placement: 'automatic',
                hideNavigationBar: false,
                autoFocus: false,
                hideWhenScrolling: false,
                autoCapitalize: 'none',
                inputType: 'text',
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
