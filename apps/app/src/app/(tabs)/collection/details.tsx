import { ShipFont } from '@/src/components/fonts/ShipIcon';
import { useTailwind } from '@/src/helpers/tailwind';
import { useCollectionStore } from '@/src/stores/collection';
import { Octicons } from '@expo/vector-icons';
import { LegendList, LegendListRenderItemProps } from '@legendapp/list';
import { useLocalSearchParams } from 'expo-router';
import { assets } from 'lbn-core/src';
import { factions, slotKeys } from 'lbn-core/src/helpers/enums';
import sources, { SourceKey } from 'lbn-core/src/sources';
import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

type Source = { id: string, xws: string; name: string; icons: string[] };
type Section = { title: string; data: Source[] };

export default function CollectionDetailScreen() {
    const { tw } = useTailwind();
    const [needle, setNeedle] = useState<string>();

    const {
        expansions,
        setExpansions,
        ships,
        setShips,
        pilots,
        setPilots,
        upgrades,
        setUpgrades,
    } = useCollectionStore();

    // useNavigationSearchBarUpdate(v => {
    //   v.isFocused && setNeedle(v.text);
    // }, componentId);

    const { sourceKey } = useLocalSearchParams<{ sourceKey: SourceKey }>();

    //   useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerTitle: sourceKey,
    //     });
    //   });

    const getter = () => {
        switch (sourceKey) {
            case 'Additional Pilots':
                return { get: pilots, set: setPilots };
            case 'Additional Ships':
                return { get: ships, set: setShips };
            case 'Additional Upgrades':
                return { get: upgrades, set: setUpgrades };
            default:
                return { get: expansions, set: setExpansions };
        }
    };
    const { get, set } = getter();

    const nameFromWave = (wave: number): string => {
        switch (wave) {
            case 0:
                return 'Core Sets';
            default:
                return `Wave ${wave}`;
        }
    };

    const getSections = (source?: SourceKey, n?: string): (Source | string)[] => {
        const lc = (n || '').toLowerCase();

        if (!source) {
            return [];
        }

        switch (source) {
            case 'Additional Ships': {
                const list: Source[] = [];

                factions.forEach((f) => {

                    Object.keys(assets['xwa'].pilots[f]).forEach((key) => {
                        const ship = assets['xwa'].pilots[f][key];
                        if (list.filter((l) => l.xws === ship.xws).length > 0) {
                            return;
                        }
                        if (!n || (n && ship.name.toLowerCase().indexOf(lc) >= 0)) {
                            list.push({
                                id: ship.xws + '_' + ship.faction,
                                xws: ship.xws,
                                name: ship.name,
                                icons: [ship.xws],
                            });
                        }
                    });
                });

                return list
            }
            case 'Additional Pilots': {
                const list: (Source | string)[] = [];


                // let sections: Section[] = [];

                factions.forEach((f) => {
                    Object.keys(assets['xwa'].pilots[f]).forEach((key) => {
                        const ship = assets['xwa'].pilots[f][key];

                        const pilotList: Source[] = ship.pilots
                            .map((p) => ({
                                id: p.xws + '_' + ship.xws,
                                xws: p.xws,
                                name: p.name,
                                icons: [ship.xws],
                            }))
                            .filter((s) => {
                                if (!n || (n && s.name.toLowerCase().indexOf(lc) >= 0)) {
                                    return true;
                                }
                                return false;
                            });

                        if (pilotList.length > 0) {
                            list.push(ship.name + ' (' + f + ')');
                            list.push(...pilotList);

                            // sections.push({ title: ship.name, data: pilotList });
                        }
                    });
                });

                // sections = sections.sort((a, b) => a.title.localeCompare(b.title));
                // return sections;
                return list
            }
            case 'Additional Upgrades': {
                const list: (Source | string)[] = [];
                slotKeys.forEach((key) => {
                    let upgradesList: Source[] = [];
                    const l = assets['xwa'].upgrades[key];
                    if (l) {
                        upgradesList = l
                            .map((u) => ({
                                id: u.xws,
                                xws: u.xws,
                                name: u.sides[0].title,
                                icons: [],
                            }))
                            .filter((s) => {
                                if (!n || (n && s.name.toLowerCase().indexOf(lc) >= 0)) {
                                    return true;
                                }
                                return false;
                            });
                    }

                    if (upgradesList.length > 0) {
                        list.push(key);
                        list.push(...upgradesList);
                    }
                });

                return list;
            }
            default: {
                const sections: Section[] = [];
                sources[source]
                    ?.filter((s) => {
                        if (!n || (n && s.name.toLowerCase().indexOf(lc) >= 0)) {
                            return true;
                        }
                        return false;
                    })
                    ?.forEach((src) => {
                        const sectionKey = nameFromWave(src.wave);
                        const section: Section = sections.filter(
                            (s) => s.title === sectionKey
                        )[0];
                        const s = { ...src, id: src.xws, icons: Object.keys(src.contents.ships) };

                        if (!section) {
                            sections.push({ title: sectionKey, data: [s] });
                        } else {
                            section.data.push(s);
                        }
                    });

                sections.sort((a, b) => a.title.localeCompare(b.title));

                const innerList: (Source | string)[] = [];
                sections.forEach((s) => {
                    innerList.push(s.title);
                    innerList.push(...s.data);
                });

                return innerList;
            }
        }
    };

    const renderSectionHeader = (item: { section: Section }) => {
        if (item.section.title === '') {
            return null;
        }
        return (
            <Text style={tw`font-bold text-primary-500 py-2`}>
                {item.section.title}
            </Text>
        );
    };

    const renderItem =
        ({ item }: LegendListRenderItemProps<Source | string>) => {
            if (typeof item === 'string') {
                return renderSectionHeader({ section: { title: item, data: [] } });
            }


            const { name, icons, xws } = item;
            const v = get[xws] || 0;

            return (
                <View style={tw`flex-row justify-between items-center gap-x-2`}>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white font-semibold flex-wrap`}>{name}</Text>
                        <View style={tw`flex-row items-center gap-x-2`}>
                            {icons.map((icon, i) => (
                                <ShipFont
                                    key={`${icon}_${i}`}
                                    icons={[icon]}
                                    size={8}
                                    color="#fff"
                                />
                            ))}
                        </View>
                    </View>

                    <View
                        style={tw`flex-row justify-center items-center bg-white dark:bg-zinc-800 rounded-lg`}
                    >
                        <TouchableOpacity
                            style={tw`p-4`}
                            onPress={() => {
                                const exp = Object.assign({}, get);
                                const nv = v - 1;
                                if (nv === 0) {
                                    delete exp[xws];
                                } else {
                                    exp[xws] = nv;
                                }
                                set(exp, true);
                                get[xws] = exp[xws];
                            }}
                        >
                            <Octicons name="dash" size={30} style={tw`text-black dark:text-white`} />
                        </TouchableOpacity>
                        <Text style={tw`text-black dark:text-white text-lg font-bold`}>{v}</Text>
                        <TouchableOpacity
                            style={tw`p-4`}
                            onPress={() => {
                                const exp = Object.assign({}, get);
                                const nv = v + 1;
                                if (nv === 0) {
                                    delete exp[xws];
                                } else {
                                    exp[xws] = nv;
                                }
                                set(exp, true);
                                get[xws] = exp[xws];
                            }}
                        >
                            <Octicons name="plus" size={30} style={tw`text-black dark:text-white`} />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        };



    const data = getSections(sourceKey, needle);

    return (
        <LegendList
            contentContainerStyle={tw`p-3`}
            data={data}
            recycleItems
            keyExtractor={(item) => typeof item === 'string' ? item : item.xws}
            renderItem={renderItem}
            // renderSectionHeader={renderSectionHeader}
            // SectionSeparatorComponent={() => <View style={tw`h-2`} />}
            ItemSeparatorComponent={() => <View style={tw`h-2`} />}
        />
    );
};

