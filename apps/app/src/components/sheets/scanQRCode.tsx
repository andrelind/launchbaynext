import { CameraView, useCameraPermissions } from 'expo-camera';
import { RuleSet } from 'lbn-core/src';
import { Button, SafeAreaView, Text } from 'react-native';
import ActionSheet, {
    SheetProps
} from 'react-native-actions-sheet';
import { useTailwind } from '../../helpers/tailwind';
import { useXwsStore } from '../../stores/xws';
import './types';

export const ScanQRCodeSheetId = 'ScanQRCodeSheet';
export type ScanQRCodeSheetProps = { ruleset: RuleSet };
export type ScanQRCodeSheetReturn = string | undefined;

const ScanQRCodeSheet = ({
    sheetId,
    payload
}: SheetProps<'ScanQRCodeSheet'>) => {
    const { tw } = useTailwind();
    const addSquadron = useXwsStore((s) => s.addSquadron);

    const [permission, requestPermission] = useCameraPermissions();
    return (
        <ActionSheet id={sheetId} useBottomSafeAreaPadding>
            {!permission?.granted && (
                <SafeAreaView style={tw`h-30 items-center justify-center gap-y-2`}>
                    <Text style={tw`text-center`}>We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title="Grant Permission" />
                </SafeAreaView>
            )}

            {permission?.granted && (
                <SafeAreaView style={tw`h-100 p-3 items-center justify-center`}>
                    <CameraView
                        style={tw`h-full w-full rounded-md m-3 p-3`}
                        facing={'back'}
                        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                        onBarcodeScanned={(result) => {

                        }}
                    />
                </SafeAreaView>
            )}
        </ActionSheet>
    );
};

export default ScanQRCodeSheet;
