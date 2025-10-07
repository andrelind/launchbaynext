import { useTailwind } from '@/src/helpers/tailwind';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function HomeLayout() {
    const { tw } = useTailwind();

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
                <Icon sf={'cloud.fog.fill'} drawable='search' />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
