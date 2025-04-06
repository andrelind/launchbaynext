import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { FC, useLayoutEffect, useState } from 'react';
import {
    Alert,
    Button,
    Platform,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import Dialog from 'react-native-dialog';
import {
    SelectFormatSheetId
} from '../components/sheets/selectFormat';
import Assets from '../helpers/assets';
import { colorForFormat } from '../helpers/colors';
import { useTailwind } from '../helpers/tailwind';
import { xwsStore } from '../stores/xws';
import { blue, orange } from '../theme';
import { SelectStackParams } from '../types/navigation';


type Props = NativeStackScreenProps<SelectStackParams, 'SquadronSettings'>;

export const SquadronSettingsScreen: FC<Props> = ({ route, navigation }) => {
    const { uid } = route.params;

    const { tw } = useTailwind();

    const { xws, setRuleset, setName, setWins, setTies, setLosses, setTags } =
        xwsStore((s) => ({
            xws: s.lists?.find((l) => l.vendor.lbn.uid === uid),
            setRuleset: s.setRuleset,
            setName: s.setName,
            setWins: s.setWins,
            setTies: s.setTies,
            setLosses: s.setLosses,
            setTags: s.setTags,
        }));

    const [showRename, setShowRename] = useState(false);
    const [tempName, setTempName] = useState<string | undefined>(
        xws?.name !== 'New Squadron' ? xws?.name : undefined
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={tw`items-center`}>
                    <Text style={tw`text-base font-bold text-white`}>{xws?.name}</Text>
                    <Text style={tw`text-sm text-gray-400 -mt-1`}>
                        {xws?.points} points
                    </Text>
                </View>
            ),
            title: xws?.name,
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => { navigation.pop(); }}
                    style={tw`mr-2`}
                >
                    <Text style={tw`text-orange-500 text-base`}>Close</Text>
                </TouchableOpacity>
            ),
        });
    }, [xws?.name, xws?.points, xws?.version]);


    if (!xws) {
        return <View />;
    }

    return (
        <View style={tw`flex flex-1`}>


            <View style={tw`px-2 gap-y-6 py-3`}>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`font-bold text-sm text-white`}>Name</Text>
                    <Button
                        title={xws?.name}
                        color={orange}
                        onPress={() => {
                            Platform.OS === 'ios'
                                ? Alert.prompt(
                                    'Change name',
                                    'Please type in the new name of this squadron',
                                    (text) => setName(uid, text),
                                    undefined,
                                    xws?.name !== 'New Squadron' ? xws?.name : undefined
                                )
                                : setShowRename(true);
                        }}
                    />
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`font-bold text-sm text-white`}>Ruleset</Text>
                    <Button
                        title={xws?.ruleset || 'amg'}
                        color={blue}
                        onPress={() => {
                            Alert.alert('Change ruleset', 'Do you want to change the ruleset?', [
                                {
                                    text: 'X-Wing Alliance',
                                    onPress: () => setRuleset(uid, 'xwa'),
                                },
                                {
                                    text: '2.0 Legacy',
                                    onPress: () => setRuleset(uid, 'legacy'),
                                },
                                {
                                    text: 'AMG',
                                    onPress: () => setRuleset(uid, 'amg'),
                                },
                                {
                                    text: 'Cancel',
                                    style: 'cancel',
                                }
                            ]);
                        }}
                    />
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`font-bold text-sm text-white`}>Format</Text>
                    <Button
                        title={xws?.format || 'Extended'}
                        color={colorForFormat(xws?.format || 'Extended')}
                        onPress={() => {
                            SheetManager.show<'SelectFormatSheet'>(SelectFormatSheetId, { payload: { uid } });
                        }}
                    />
                </View>
                <View style={tw``}>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text style={tw`font-bold text-sm text-white`}>Obstacles</Text>
                        <Button
                            title="Edit"
                            color={tw.color('primary-500')}
                            onPress={() => {
                                SheetManager.show('SelectObstaclesSheet', { payload: { uid } });
                            }}
                        />
                    </View>
                    <View style={tw`flex-row gap-x-2`}>
                        {xws?.obstacles?.map((o, i) => (
                            <Image
                                transition={300}
                                key={`${o}_${i}`}
                                style={tw`h-12 w-12 rounded-lg`}
                                source={Assets.obstacles[o]}
                            />
                        ))}
                    </View>
                </View>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`font-bold text-sm text-white`}>Tags</Text>
                    <Button
                        title="Edit"
                        color={tw.color('primary-500')}
                        onPress={() => {
                            SheetManager.show('SelectTagsSheet', { payload: { uid } });
                        }}
                    />
                </View>

                <View style={tw`px-2 flex-row gap-x-2 items-center`}>
                    {xws?.vendor.lbn.tags?.map((tag, i) => (
                        <Text key={tag} style={tw`text-xs text-white`}>{tag}</Text>
                    ))}
                </View>


                <View style={tw`flex-row justify-around`}>
                    <View style={tw`items-center w-1/4`}>
                        <TouchableOpacity
                            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
                            onPress={() => setWins(uid, (xws?.vendor.lbn.wins || 0) + 1)}
                        >
                            <Text style={tw`text-lg text-white`}>+</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-white font-bold my-2`}>
                            Wins {xws?.vendor.lbn.wins || 0}
                        </Text>
                        <TouchableOpacity
                            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
                            onPress={() => setWins(uid, (xws?.vendor.lbn.wins || 0) - 1)}
                        >
                            <Text style={tw`text-lg text-white`}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={tw`items-center w-1/4`}>
                        <TouchableOpacity
                            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
                            onPress={() => setTies(uid, (xws?.vendor.lbn.ties || 0) + 1)}
                        >
                            <Text style={tw`text-lg text-white`}>+</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-white font-bold my-2`}>
                            Ties {xws?.vendor.lbn.ties || 0}
                        </Text>
                        <TouchableOpacity
                            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
                            onPress={() => setTies(uid, (xws?.vendor.lbn.ties || 0) - 1)}
                        >
                            <Text style={tw`text-lg text-white`}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={tw`items-center w-1/4`}>
                        <TouchableOpacity
                            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
                            onPress={() => setLosses(uid, (xws?.vendor.lbn.losses || 0) + 1)}
                        >
                            <Text style={tw`text-lg text-white`}>+</Text>
                        </TouchableOpacity>
                        <Text style={tw`text-white font-bold my-2`}>
                            Losses {xws?.vendor.lbn.losses || 0}
                        </Text>
                        <TouchableOpacity
                            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
                            onPress={() => setLosses(uid, (xws?.vendor.lbn.losses || 0) - 1)}
                        >
                            <Text style={tw`text-lg text-white`}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Dialog.Container visible={showRename}>
                <Dialog.Title style={tw`text-black`}>Change name</Dialog.Title>
                <Dialog.Description style={tw`text-zinc-400`}>
                    Please type in the new name of the squadron
                </Dialog.Description>
                <Dialog.Input style={tw`text-black`} value={tempName} onChangeText={setTempName} />
                <Dialog.Button label="Cancel" onPress={() => setShowRename(false)} />
                <Dialog.Button
                    label="OK"
                    onPress={() => {
                        setName(uid, tempName || '');
                        setTempName(undefined);
                        setShowRename(false);
                    }}
                />
            </Dialog.Container>
        </View>
    );
};



export default SquadronSettingsScreen;
