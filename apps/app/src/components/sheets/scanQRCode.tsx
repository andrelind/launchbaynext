import { RuleSet } from 'lbn-core/src';
import { Button, Platform, Text } from 'react-native';
import ActionSheet, {
    SheetProps
} from 'react-native-actions-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from '../../helpers/tailwind';
import { useXwsStore } from '../../stores/xws';
import './types';

let CameraModule: typeof import('expo-camera') | null = null;
if (Platform.OS !== 'web') {
    CameraModule = require('expo-camera');
}

export const ScanQRCodeSheetId = 'ScanQRCodeSheet';
export type ScanQRCodeSheetProps = { ruleset: RuleSet };
export type ScanQRCodeSheetReturn = string | undefined;

function NativeCameraContent() {
    const { tw } = useTailwind();
    const { CameraView, useCameraPermissions } = CameraModule!;
    const [permission, requestPermission] = useCameraPermissions();

    return (
        <>
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
        </>
    );
}

const ScanQRCodeSheet = ({
    sheetId,
    payload
}: SheetProps<'ScanQRCodeSheet'>) => {
    const { tw } = useTailwind();
    const addSquadron = useXwsStore((s) => s.addSquadron);

    return (
        <ActionSheet id={sheetId} useBottomSafeAreaPadding>
            {Platform.OS === 'web' ? (
                <SafeAreaView style={tw`h-30 items-center justify-center gap-y-2`}>
                    <Text style={tw`text-center`}>QR code scanning is not available on web</Text>
                </SafeAreaView>
            ) : (
                <NativeCameraContent />
            )}
        </ActionSheet>
    );
};

export default ScanQRCodeSheet;
