import { useTailwind } from '@/src/helpers/tailwind';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function HomeLayout() {
    const { tw } = useTailwind();

    return (
        <NativeTabs
            backgroundColor={tw.color('zinc-950')}
            tintColor={tw.color('orange-500')}
            minimizeBehavior='onScrollDown'
            // our FlatList-based lists (LegendList/DraggableFlatList) can misreport scroll edge, leaving the bar stuck transparent/light
            disableTransparentOnScrollEdge
        >
            <NativeTabs.Trigger name="overview">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={'house'} drawable='home' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="squadrons">
                <NativeTabs.Trigger.Label>Squadrons</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={'list.dash'} drawable='list' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="counter">
                <NativeTabs.Trigger.Label>Counter</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={'divide'} drawable='calculate' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="collection">
                <NativeTabs.Trigger.Label>Collection</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={'folder'} drawable='folder' />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="database" role='search'>
                <NativeTabs.Trigger.Label>Database</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf={'magnifyingglass'} drawable='search' />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}

