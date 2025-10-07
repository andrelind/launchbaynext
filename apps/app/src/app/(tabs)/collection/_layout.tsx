import { useTailwind } from '@/src/helpers/tailwind';
import { Stack, useGlobalSearchParams } from 'expo-router';
import { SourceKey } from 'lbn-core/src/sources';

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function CollectionLayout() {
    const { tw } = useTailwind();

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
        }} />
    </Stack>;
}
