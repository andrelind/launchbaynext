import { useTailwind } from '@/src/helpers/tailwind';
import { SortingType, useFilterStore } from '@/src/stores/filter';
import { useGameDataStore } from '@/src/stores/gameData';
import { useLoadoutStore } from '@/src/stores/loadout';
import { useXwsStore } from '@/src/stores/xws';
import { Button, Host, Menu } from '@expo/ui/swift-ui';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { factionFromKey } from 'lbn-core/src/helpers/convert';
import { factionKeys, formats } from 'lbn-core/src/helpers/enums';
import { exportAsText, exportAsTTS, exportAsXws } from 'lbn-core/src/helpers/import+export';
import { loadShip2 } from 'lbn-core/src/helpers/loading';
import { serialize } from 'lbn-core/src/helpers/serializer';
import { FactionKey } from 'lbn-core/src/types';
import { Alert, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import Toast from 'react-native-toast-message';
import { useShallow } from 'zustand/react/shallow';

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

    const { uid, pilotIndex, factionKey } = useGlobalSearchParams();

    const xws = useXwsStore(s => s.lists?.find((l) => l.vendor.lbn.uid === uid));
    const addLoadout = useLoadoutStore((s) => s.addLoadout);

    const pilot = xws?.pilots[parseInt(pilotIndex as string, 10)];
    const gd = useGameDataStore(s => s.data);
    const ship = pilot && loadShip2(pilot, xws, gd ?? undefined);
    const manifestData = useGameDataStore(s => s.manifestData);

    const { filters, setFilters, tags, setTags, sorting, setFirstSorting, setSecondSorting } = useFilterStore(
        useShallow(s => ({
            filters: s.filters,
            setFilters: s.setFilters,
            tags: s.tags,
            setTags: s.setTags,
            sorting: s.sorting,
            setFirstSorting: s.setFirstSorting,
            setSecondSorting: s.setSecondSorting,
        })),
    );

    const allTags = useXwsStore(s => s.lists)
        ?.map(xws => xws?.vendor?.lbn?.tags)
        ?.reduce((a, c) => {
            (c || []).forEach(tag => {
                if (!a?.includes(tag)) {
                    a?.push(tag);
                }
            });
            return a;
        }, []);

    for (const tag of tags) {
        if (!allTags?.includes(tag)) {
            setTags(tags.filter(t => t !== tag));
        }
    }

    const filterCount = Object.keys(filters).length + tags.length;

    const lbx = serialize(xws, manifestData ?? undefined);
    const url = `https://launchbaynext.app/?lbx=${lbx}`;
    const printUrl = `https://launchbaynext.app/print?lbx=${lbx}`;

    return <Stack screenOptions={{
        headerStyle: { backgroundColor: tw.color('zinc-950'), },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: tw.color('zinc-950') },
    }} >
        <Stack.Screen name="index" options={{
            title: 'Squadrons',
            headerSearchBarOptions: {
                placeholder: "Search...",
                placement: "automatic",
                hideNavigationBar: true,
                // autoFocus: true,
                hideWhenScrolling: true,
                autoCapitalize: "none",
                inputType: "text",
                onChangeText(e) {
                    router.setParams({ needle: e.nativeEvent.text.toLowerCase() });
                },
            },
            headerLeft: () => (
                Platform.OS === 'ios' ? (
                    <Host>
                        <Menu label={
                            <TouchableOpacity style={tw`px-2`}>
                                <View style={{ width: 28, height: 28 }}>
                                    <Feather name='filter' style={[tw`text-white`, { position: 'absolute', bottom: 0, left: 0 }]} size={24} color={tw.color('white')} />
                                    {filterCount > 0 && (
                                        <View style={[tw`absolute top-0 right-0 bg-primary-500 rounded-full min-w-4 h-4 items-center justify-center`, { paddingHorizontal: 2 }]}>
                                            <Text style={tw`text-white text-xs font-bold leading-none`}>{filterCount}</Text>
                                        </View>
                                    )}
                                </View>
                            </TouchableOpacity>
                        }>
                            <Menu label="Filter">
                                <Menu label="Faction">
                                    {factionKeys.map(f => (
                                        <Button
                                            key={f}
                                            label={factionFromKey(f)}
                                            systemImage={filters[f] ? 'checkmark' : undefined}
                                            onPress={() => {
                                                console.log('Changing faction', f, filters[f]);
                                                if (filters[f]) {
                                                    delete filters[f];
                                                    setFilters({ ...filters });
                                                } else {
                                                    setFilters({ ...filters, [f]: true });
                                                }
                                            }}
                                        />
                                    ))}
                                </Menu>

                                <Menu label="Format">
                                    {formats.map(f => (
                                        <Button
                                            key={f}
                                            label={f}
                                            systemImage={filters[f] ? 'checkmark' : undefined}
                                            onPress={() => {
                                                console.log('Changing format', f, filters[f]);
                                                if (filters[f]) {
                                                    delete filters[f];
                                                    setFilters({ ...filters });
                                                } else {
                                                    setFilters({ ...filters, [f]: true });
                                                }
                                            }}
                                        />
                                    ))}
                                </Menu>
                                <Menu label="Tags">
                                    {allTags?.map(tag => (
                                        <Button
                                            key={tag}
                                            label={tag}
                                            systemImage={tags.includes(tag) ? 'checkmark' : undefined}
                                            onPress={() => {
                                                console.log('Changing tag', tag, !tags.includes(tag));
                                                if (!tags.includes(tag)) {
                                                    setTags([...tags, tag]);
                                                } else {
                                                    setTags(tags.filter(t => t !== tag));
                                                }
                                            }}
                                        />
                                    ))}
                                </Menu>
                                <Button
                                    label="Clear all"
                                    systemImage='xmark.circle'
                                    onPress={() => {
                                        setFilters({});
                                        setTags([]);
                                    }}
                                />
                            </Menu>

                            <Menu label="Sort">
                                <Menu label="Primary">
                                    {sortings.map(f => (
                                        <Button key={f}
                                            label={f}
                                            systemImage={sorting.first === f ? 'checkmark' : undefined}
                                            onPress={() => setFirstSorting(f)}
                                        />
                                    ))}
                                </Menu>
                                <Menu label="Secondary">
                                    {sortings.map(f => (
                                        <Button key={f}
                                            label={f}
                                            systemImage={sorting.second === f ? 'checkmark' : undefined}
                                            onPress={() => setSecondSorting(f)}
                                        />
                                    ))}
                                </Menu>
                            </Menu>
                        </Menu>
                    </Host>
                ) : (
                    <>
                        <TouchableOpacity style={tw`mr-2`}
                            onPress={() => { SheetManager.show('FilterSquadronsSheet'); }}
                        >
                            <View style={{ width: 26, height: 26 }}>
                                <Feather name="filter" size={20} color={tw.color('primary-500')} style={{ position: 'absolute', bottom: 0, left: 0 }} />
                                {filterCount > 0 && (
                                    <View style={[tw`absolute top-0 right-0 bg-primary-500 rounded-full min-w-4 h-4 items-center justify-center`, { paddingHorizontal: 2 }]}>
                                        <Text style={tw`text-white text-xs font-bold leading-none`}>{filterCount}</Text>
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`mr-2`}
                            onPress={() => { SheetManager.show('SortSquadronsSheet'); }}
                        >
                            <Feather name='align-left' size={20} color={tw.color('primary-500')} />
                        </TouchableOpacity>
                    </>
                )),
            headerRight: () => (
                <TouchableOpacity
                    style={tw`p-2`}
                    onPress={async () => {
                        if (Platform.OS === 'ios') {
                            router.push({ pathname: 'sheets/createSquadron', params: { ruleset: 'xwa' } });
                        } else {
                            const uid = await SheetManager.show('CreateSquadronSheet', { payload: { ruleset: 'xwa' } });
                            if (uid) {
                                router.push(`(tabs)/squadrons/squadron/${uid}`);
                            }
                        }
                    }}
                >
                    <Feather
                        name="plus"
                        size={20}
                        color={Platform.OS === 'ios' ? tw.color('white') : tw.color('primary-500')}
                    />
                </TouchableOpacity>
            )
        }} />
        <Stack.Screen name="squadron/[uid]" options={{
            headerBackButtonDisplayMode: 'minimal',
            navigationBarTranslucent: true,
            headerTitle: () => (
                <View style={tw`items-center`}>
                    <Text style={tw`text-base font-bold text-white`}>{xws?.name}</Text>
                    <Text style={tw`text-sm text-gray-400 -mt-1`}>
                        {xws?.points} points
                    </Text>
                </View>
            ),
            headerLeft: () => (Platform.OS === 'android' ? (
                <View style={tw`flex-row items-center justify-center gap-x-2`}>
                    <TouchableOpacity
                        onPress={async () => {
                            router.back();
                        }}
                    >
                        <Feather name='arrow-left' color={tw.color('white')} size={26} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            router.push({
                                pathname: `squadrons/settings`,
                                params: { uid },
                            });
                        }}
                    >
                        <Feather name="settings" color={tw.color('orange-500')} size={20} />
                    </TouchableOpacity>
                </View>
            ) : undefined),
            headerRight: () => Platform.OS === 'ios' ? (
                <Host >
                    <Menu label={
                        <TouchableOpacity
                            style={tw`px-2`}
                        >
                            <Feather name='more-horizontal' style={tw`white`} size={24} color={tw.color('white')} />
                        </TouchableOpacity>
                    }>
                        <Button
                            label="Add pilot"
                            systemImage={'plus.circle'}
                            onPress={() => {
                                router.push({
                                    pathname: `ships`,
                                    params: { uid },
                                });
                            }}
                        />
                        <Button
                            label="Settings"
                            systemImage={'gearshape'}
                            onPress={() => {
                                router.push({
                                    pathname: `squadrons/settings`,
                                    params: { uid },
                                });
                            }}
                        />
                        <Menu label="Export" systemImage='square.and.arrow.up'>
                            <Button label="XWS" onPress={() => {
                                Clipboard.setStringAsync(exportAsXws(xws!))
                                Toast.show({
                                    type: 'success',
                                    text1: 'XWS copied to clipboard',
                                });
                            }} />
                            <Button label="Link" onPress={() => {
                                Clipboard.setStringAsync(url)
                                Toast.show({
                                    type: 'success',
                                    text1: 'Link copied to clipboard',
                                });
                            }} />
                            <Button label="TTS" onPress={() => {
                                Clipboard.setStringAsync(exportAsTTS(xws!))
                                Toast.show({
                                    type: 'success',
                                    text1: 'Link copied to clipboard',
                                });
                            }} />
                            <Button label="Text" onPress={() => {
                                Clipboard.setStringAsync(exportAsText(xws!))
                                Toast.show({
                                    type: 'success',
                                    text1: 'Link copied to clipboard',
                                });
                            }} />
                            <Button label="Print URL" onPress={() => {
                                Clipboard.setStringAsync(printUrl)
                                Toast.show({
                                    type: 'success',
                                    text1: 'Link copied to clipboard',
                                });
                            }} />
                        </Menu>
                    </Menu>
                </Host >
            ) : (
                <View style={tw`flex-row items-center justify-center gap-x-2`}>
                    <TouchableOpacity style={tw`mr-2`}
                        onPress={() => { SheetManager.show('ExportSquadronSheet', { payload: { xws: xws! } }); }}
                    >
                        <Feather name='share-2' size={20} color={tw.color('primary-500')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            router.push({
                                pathname: `ships`,
                                params: { uid },
                            });
                        }}
                    >
                        <Feather name="plus" color={tw.color('orange-500')} size={30} />
                    </TouchableOpacity>
                </View>
            )
        }} />
        < Stack.Screen name="pilot/[uid]" options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: () => (
                <View style={tw`items-center`}>
                    <Text style={tw`text-base font-bold text-white`}>
                        {ship?.pilot?.name}
                    </Text>

                    {xws?.ruleset.includes('legacy') && (
                        <Text style={tw`text-sm text-gray-300 -mt-1`}>
                            {`${(xws?.points)}/200`}
                        </Text>
                    )}

                    {xws?.ruleset === 'xwa' && !ship?.pilot?.standardLoadout && (
                        <Text style={tw`text-sm text-zinc-300 -mt-1`}>
                            {`Loadout ${(ship?.pointsWithUpgrades || 0) - (ship?.pilot?.cost || 0)
                                }/${ship?.pilot?.loadout}`}
                        </Text>
                    )}
                </View>
            ),
            headerRight: () => Platform.OS === 'ios' ? (
                <Host >
                    <Menu label={
                        <TouchableOpacity style={tw`px-2`}                            >
                            <Feather name='more-horizontal' style={tw`white`} size={24} color={tw.color('white')} />
                        </TouchableOpacity>
                    }>
                        <Button
                            label="Change pilot"
                            systemImage={'arrow.triangle.2.circlepath'}
                            onPress={() => {
                                router.push({ pathname: 'ships/pilots', params: { uid, shipXws: ship?.xws, pilotIndex } });
                            }}
                        />
                        <Button
                            label="Save loadout"
                            systemImage={'tray.and.arrow.down'}
                            onPress={() => {
                                Alert.prompt(
                                    'Name of loadout',
                                    'What do you want to call this loadout?',
                                    [
                                        { text: 'Cancel', style: 'cancel' },
                                        {
                                            text: 'OK',
                                            onPress: (name?: string) => {
                                                if (
                                                    !name ||
                                                    (name?.length || 0) === 0 ||
                                                    !ship ||
                                                    !ship.pilot
                                                ) {
                                                    return;
                                                }
                                                addLoadout(
                                                    name,
                                                    factionKey as FactionKey,
                                                    ship?.xws,
                                                    ship?.pilot?.xws,
                                                    pilot?.upgrades
                                                );
                                            },
                                        },
                                    ]
                                )
                            }}
                        />
                        <Button
                            label="Load loadout"
                            systemImage={'tray.and.arrow.up'}
                            onPress={() => {
                                router.push({
                                    pathname: 'sheets/loadouts',
                                    params: {
                                        uid,
                                        index: pilotIndex,
                                        faction: xws?.faction,
                                        shipXws: ship?.xws,
                                        pilotXws: ship?.pilot?.xws,
                                    }
                                });
                            }}
                        />
                    </Menu>
                </Host>
            ) : (
                <TouchableOpacity style={tw`p-2`} onPress={() => {
                    router.push({ pathname: 'ships/pilots', params: { uid, shipXws: ship?.xws, pilotIndex } });
                }}
                >
                    <Feather
                        name="refresh-cw"
                        size={20}
                        color={tw.color('white')}
                    />
                </TouchableOpacity>
            )
        }} />
        < Stack.Screen name="settings" options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: 'Settings',
        }} />
        < Stack.Screen name="missing" options={{
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: 'Missing Items',
        }} />
    </Stack >;
}

