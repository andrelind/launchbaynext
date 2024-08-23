import { colorForFactionKey } from '@/src/helpers/colors';
import { Feather } from '@expo/vector-icons';
import { factionFromKey } from 'lbn-core/src/helpers/convert';
import { factionKeys, formats } from 'lbn-core/src/helpers/enums';
import React from 'react';
import { Text, View } from 'react-native';
import ActionSheet, {
    SheetProps
} from 'react-native-actions-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTailwind } from '../../helpers/tailwind';
import { filterStore } from '../../stores/filter';
import { xwsStore } from '../../stores/xws';
import { XWingFont } from '../fonts/XWingIcon';
import './types';

export const FilterSquadronsSheetId = 'FilterSquadronsSheet';
export type FilterSquadronsSheetProps = {};
export type FilterSquadronsSheetReturn = string | undefined;

const FilterSquadronsSheet = ({
    sheetId,
}: SheetProps<'FilterSquadronsSheet'>) => {
    const { tw } = useTailwind();

    const { filters, setFilters, tags, setTags } = filterStore(
        s => ({
            filters: s.filters,
            setFilters: s.setFilters,
            tags: s.tags,
            setTags: s.setTags,
        }),
    );

    const allTags = xwsStore(s => s.lists)
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

    return (
        <ActionSheet id={sheetId} useBottomSafeAreaPadding>
            <View>
                <View style={tw`flex-row`}>
                    <View style={tw`p-3 gap-y-3`}>
                        <Text style={tw`font-semibold`}>
                            Faction
                        </Text>
                        {factionKeys.map(f => (
                            <TouchableOpacity key={f} style={tw`gap-x-2 flex-row items-center`} onPress={() => {
                                const v = filters[f];
                                if (!v) {
                                    setFilters({ ...filters, [f]: true });
                                } else {
                                    delete filters[f];
                                    setFilters({ ...filters });
                                }
                            }}>
                                <XWingFont icons={[f]} color={colorForFactionKey(f, true)} size={5} style={tw`w-5 items-center justify-center`} />
                                <Text style={tw`font-medium`}>{factionFromKey(f)}</Text>
                                <Feather name='check' size={15} color={Boolean(filters[f]) ? 'black' : 'white'} />
                            </TouchableOpacity>

                        ))}
                    </View>
                    <View style={tw`p-3 gap-y-3`}>
                        <Text style={tw`font-semibold`}>
                            Format
                        </Text>
                        {formats.map(f => (
                            <TouchableOpacity key={f} style={tw`gap-x-2 flex-row items-center`} onPress={() => {
                                const v = filters[f];
                                if (!v) {
                                    setFilters({ ...filters, [f]: true });
                                } else {
                                    delete filters[f];
                                    setFilters({ ...filters });
                                }
                            }}>
                                <Text style={tw`font-medium`}>{f}</Text>
                                <Feather name='check' size={15} color={Boolean(filters[f]) ? 'black' : 'white'} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={tw`px-3 pb-3 gap-y-3`}>
                    <Text style={tw`font-semibold`}>
                        Tags
                    </Text>
                    <View style={tw`flex-row items-center`} >
                        {allTags?.map(f => (
                            <TouchableOpacity key={f} style={tw`gap-x-2 flex-row items-center`} onPress={() => {
                                if (!tags.includes(f)) {
                                    setTags([...tags, f]);
                                } else {
                                    setTags(tags.filter(t => t !== f));
                                }
                            }}>
                                <Text style={tw`font-medium`}>{f}</Text>
                                <Feather name='check' size={15} color={tags.includes(f) ? 'black' : 'white'} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </View>
        </ActionSheet>
    );
};

export default FilterSquadronsSheet;
