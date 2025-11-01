import { red } from '@/src/theme';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { exportAsText, exportAsTTS, exportAsXws } from 'lbn-core/src/helpers/import+export';
import { serialize } from 'lbn-core/src/helpers/serializer';
import { XWS } from 'lbn-core/src/types';
import { Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, {
    SheetManager,
    SheetProps
} from 'react-native-actions-sheet';
import Toast from 'react-native-toast-message';
import { useTailwind } from '../../helpers/tailwind';
import './types';

export const ExportSquadronSheetId = 'ExportSquadronSheet';
export type ExportSquadronSheetProps = { xws: XWS };
export type ExportSquadronSheetReturn = string | undefined;

const ExportSquadronSheet = ({
    sheetId,
    payload
}: SheetProps<'ExportSquadronSheet'>) => {
    const { tw } = useTailwind();

    if (!payload?.xws) {
        return null;
    }

    const lbx = serialize(payload.xws);
    const url = `https://launchbaynext.app/?lbx=${lbx}`;
    const printUrl = `https://launchbaynext.app/print?lbx=${lbx}`;

    return (
        <ActionSheet id={sheetId} useBottomSafeAreaPadding containerStyle={tw`android:pb-24`}>
            <View style={tw`p-2 gap-y-2`}>
                <Text style={tw`text-lg font-semibold`}>Export Squadron</Text>

                <View style={tw`border-t mx-3 border-gray-300 flex-row justify-evenly`}>
                    <TouchableOpacity style={tw`px-3 py-2 items-center`} onPress={() => {
                        Clipboard.setStringAsync(exportAsXws(payload.xws))
                        Toast.show({
                            type: 'success',
                            text1: 'XWS copied to clipboard',
                        });
                        SheetManager.hide(sheetId);
                    }}>
                        <Feather name='clipboard' size={20} color={red} />
                        <Text>XWS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`px-3 py-2 items-center`} onPress={() => {
                        Clipboard.setStringAsync(url)
                        Toast.show({
                            type: 'success',
                            text1: 'Link copied to clipboard',
                        });
                        SheetManager.hide(sheetId);
                    }}>
                        <Feather name='clipboard' size={20} color={red} />
                        <Text>Link</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`px-3 py-2 items-center`} onPress={() => {
                        Clipboard.setStringAsync(exportAsTTS(payload.xws))
                        Toast.show({
                            type: 'success',
                            text1: 'Link copied to clipboard',
                        });
                        SheetManager.hide(sheetId);
                    }}>
                        <Feather name='clipboard' size={20} color={red} />
                        <Text>TTS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`px-3 py-2 items-center`} onPress={() => {
                        Clipboard.setStringAsync(exportAsText(payload.xws))
                        Toast.show({
                            type: 'success',
                            text1: 'Link copied to clipboard',
                        });
                        SheetManager.hide(sheetId);
                    }}>
                        <Feather name='clipboard' size={20} color={red} />
                        <Text>Text</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`px-3 py-2 items-center`} onPress={() => {
                        Clipboard.setStringAsync(printUrl)
                        Toast.show({
                            type: 'success',
                            text1: 'Link copied to clipboard',
                        });
                        SheetManager.hide(sheetId);
                    }}>
                        <Feather name='clipboard' size={20} color={red} />
                        <Text>Print URL</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ActionSheet>
    );
};

export default ExportSquadronSheet;
