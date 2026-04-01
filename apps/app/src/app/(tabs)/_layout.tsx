import { useTailwind } from '@/src/helpers/tailwind';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

let NativeTabsModule: typeof import('expo-router/unstable-native-tabs') | null = null;
if (Platform.OS !== 'web') {
    NativeTabsModule = require('expo-router/unstable-native-tabs');
}

function WebTabs() {
    const { tw } = useTailwind();
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: tw.color('zinc-950'), borderTopColor: tw.color('zinc-800') },
            tabBarActiveTintColor: tw.color('orange-500'),
            tabBarInactiveTintColor: tw.color('zinc-400'),
        }}>
            <Tabs.Screen name="overview" options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
            }} />
            <Tabs.Screen name="squadrons" options={{
                tabBarLabel: 'Squadrons',
                tabBarIcon: ({ color, size }) => <Feather name="list" size={size} color={color} />,
            }} />
            <Tabs.Screen name="counter" options={{
                tabBarLabel: 'Counter',
                tabBarIcon: ({ color, size }) => <Feather name="divide" size={size} color={color} />,
            }} />
            <Tabs.Screen name="collection" options={{
                tabBarLabel: 'Collection',
                tabBarIcon: ({ color, size }) => <Feather name="folder" size={size} color={color} />,
            }} />
            <Tabs.Screen name="database" options={{
                tabBarLabel: 'Database',
                tabBarIcon: ({ color, size }) => <Feather name="search" size={size} color={color} />,
            }} />
        </Tabs>
    );
}

function NativeTabsLayout() {
    const { tw } = useTailwind();
    const { NativeTabs, Icon, Label } = NativeTabsModule!;
    return (
        <NativeTabs
            backgroundColor={tw.color('zinc-950')}
            tintColor={tw.color('orange-500')}
            minimizeBehavior='onScrollDown'
        >
            <NativeTabs.Trigger name="overview">
                <Label>Home</Label>
                <Icon sf={'house'} drawable='home' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="squadrons">
                <Label>Squadrons</Label>
                <Icon sf={'list.dash'} drawable='list' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="counter">
                <Label>Counter</Label>
                <Icon sf={'divide'} drawable='calculate' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="collection">
                <Label>Collection</Label>
                <Icon sf={'folder'} drawable='folder' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="database" role='search'>
                <Label>Database</Label>
                <Icon sf={'magnifyingglass'} drawable='search' />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}

export default function HomeLayout() {
    if (Platform.OS === 'web') {
        return <WebTabs />;
    }
    return <NativeTabsLayout />;
}
