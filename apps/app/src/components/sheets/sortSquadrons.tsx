import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import ActionSheet, {
    SheetProps
} from 'react-native-actions-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useShallow } from 'zustand/react/shallow';
import { useTailwind } from '../../helpers/tailwind';
import { SortingType, useFilterStore } from '../../stores/filter';
import './types';

export const SortSquadronsSheetId = 'SortSquadronsSheet';
export type SortSquadronsSheetProps = {};
export type SortSquadronsSheetReturn = string | undefined;

const sortings: SortingType[] = [
    'Alphabetically',
    'Faction',
    'Points',
    'Wins',
    'Created Date',
    'Format',
];

const SortSquadronsSheet = ({
    sheetId,
}: SheetProps<'SortSquadronsSheet'>) => {
    const { tw } = useTailwind();

    const { sorting, setFirstSorting, setSecondSorting } = useFilterStore(
        useShallow(
            s => ({
                sorting: s.sorting,
                setFirstSorting: s.setFirstSorting,
                setSecondSorting: s.setSecondSorting,
            }))
    );

    return (
        <ActionSheet id={sheetId} useBottomSafeAreaPadding containerStyle={tw`android:pb-24`}>
            <View>
                <View style={tw`flex-row`}>
                    <View style={tw`p-3 gap-y-3`}>
                        <Text style={tw`font-semibold`}>
                            First sorting
                        </Text>
                        {sortings.map(f => (
                            <TouchableOpacity key={f} style={tw`gap-x-2 flex-row items-center`} onPress={() => {
                                setFirstSorting(f);
                            }}>
                                <Text style={tw`font-medium`}>{f}</Text>
                                <Feather name='check' size={15} color={sorting.first === f ? 'black' : 'white'} />
                            </TouchableOpacity>

                        ))}
                    </View>
                    <View style={tw`p-3 gap-y-3`}>
                        <Text style={tw`font-semibold`}>
                            Second sorting
                        </Text>
                        {sortings.map(f => (
                            <TouchableOpacity key={f} style={tw`gap-x-2 flex-row items-center`} onPress={() => {
                                setSecondSorting(f);
                            }}>
                                <Text style={tw`font-medium`}>{f}</Text>
                                <Feather name='check' size={15} color={sorting.second === f ? 'black' : 'white'} />
                            </TouchableOpacity>

                        ))}
                    </View>
                </View>
            </View>
        </ActionSheet>
    );
};

export default SortSquadronsSheet;
