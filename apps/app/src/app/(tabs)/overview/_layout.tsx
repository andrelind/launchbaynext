import { XWingFont } from '@/src/components/fonts/XWingIcon';
import { useTailwind } from '@/src/helpers/tailwind';
import { useSystemStore } from '@/src/stores/system';
import { Feather } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function OverviewLayout() {
    const { tw } = useTailwind();
    const user = useSystemStore((s) => s.user);

    return <Stack screenOptions={{
        headerStyle: { backgroundColor: tw.color('zinc-950'), },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: tw.color('zinc-950') },
    }} >
        <Stack.Screen name="index" options={{
            title: 'Overview',
            headerShown: true, headerTitle: () => (
                <View style={tw`items-center flex-row gap-x-1`}>
                    <XWingFont style={tw`text-2xl`} icons={['coordinate']} color={tw.color('orange-500')} />
                    <View>
                        <Text style={tw`text-xs font-normal text-zinc-400 -mb-1`}>
                            André Lind's
                        </Text>
                        <Text style={tw`text-base font-bold text-white`}>
                            Launch Bay Next
                        </Text>
                    </View>
                </View>),
            headerRight: user ? () => (
                <Link
                    style={tw`px-2`}
                    href='/overview/account'
                >
                    <Feather name='user' size={20} color={tw.color('white')} />
                </Link>
            ) : undefined,
        }} />
        <Stack.Screen name="login" options={{ headerShown: true, headerTitle: 'Login' }} />
        <Stack.Screen name="account" options={{ headerShown: true, headerTitle: 'Account' }} />
    </Stack>;
}
