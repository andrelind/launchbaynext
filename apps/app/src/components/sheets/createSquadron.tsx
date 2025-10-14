import { importFromClipboard } from '@/src/helpers/import';
import * as Clipboard from 'expo-clipboard';
import { RuleSet } from 'lbn-core/src';
import { factionFromKey } from 'lbn-core/src/helpers/convert';
import { factionKeys } from 'lbn-core/src/helpers/enums';
import { FactionKey } from 'lbn-core/src/types';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import Toast from 'react-native-toast-message';
import { colorForFactionKey } from '../../helpers/colors';
import { useTailwind } from '../../helpers/tailwind';
import { useXwsStore } from '../../stores/xws';
import { XWingFont } from '../fonts/XWingIcon';
import './types';

export type CreateSquadronSheetProps = { ruleset: RuleSet };
export type CreateSquadronSheetReturn = string | undefined;

const CreateSquadronSheet = ({
  sheetId,
  payload
}: SheetProps<'CreateSquadronSheet'>) => {
  const { tw } = useTailwind();
  const addSquadron = useXwsStore((s) => s.addSquadron);

  const onPress = async (f: FactionKey) => {
    Alert.alert('Ruleset', 'Select the ruleset for the new squadron',
      [
        {
          text: 'X-Wing Alliance',
          onPress: async () => {
            const item = addSquadron(f, payload?.ruleset !== 'amg' ? 'Extended' : 'Standard', 'xwa');
            SheetManager.hide(sheetId, { payload: item.vendor.lbn.uid, });
          }
        },
        {
          text: '2.0 Legacy',
          onPress: async () => {
            const item = addSquadron(f, payload?.ruleset !== 'amg' ? 'Extended' : 'Standard', 'legacy');
            SheetManager.hide(sheetId, { payload: item.vendor.lbn.uid, });
          }
        },
        {
          text: 'AMG',
          onPress: async () => {
            const item = addSquadron(f, payload?.ruleset !== 'amg' ? 'Extended' : 'Standard', 'amg');
            SheetManager.hide(sheetId, { payload: item.vendor.lbn.uid, });
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <ActionSheet id={sheetId} useBottomSafeAreaPadding>
      <View style={tw`flex-row `}>
        <TouchableOpacity
          style={tw`px-3 py-3 flex-1 items-center`}
          onPress={async () => {
            const clipboard = await Clipboard.getStringAsync();
            if (clipboard.length > 0) {
              // setToastMessage({ text: 'Importing', color: darkgrey });
              Toast.show({
                type: 'info',
                text1: 'Importing from clipboard',
              });
              const id = await importFromClipboard(clipboard);
              if (id) {
                Toast.show({
                  type: 'success',
                  text1: 'Squadron imported',
                });
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'Error importing from clipboard',
                });
              }
              SheetManager.hide(sheetId, { payload: id });
            } else {
              Toast.show({
                type: 'error',
                text1: 'Error importing from clipboard',
              });
              SheetManager.hide(sheetId);
            }
          }}
        >
          <Text style={tw`text-black`}>Import from clipboard</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={tw`px-3 py-3 flex-1 items-center`}
          onPress={async () => {
            await SheetManager.hide(sheetId);
            setTimeout(() => {
              SheetManager.show('ScanQRCodeSheet', { payload });
            }, 300);
          }}
        >
          <Text style={{ color: 'black' }}>Import from QR</Text>
        </TouchableOpacity> */}
        <View />
      </View>
      <View style={tw`pt-2 border-t mx-3 border-gray-300 flex-row`}>
        <View style={tw`flex flex-1`}>
          {factionKeys.slice(0, 4).map((f) => (
            <TouchableOpacity
              key={f}
              style={tw`px-3 py-2 items-center`}
              onPress={async () => { onPress(f) }}
            >
              <XWingFont
                icons={[f]}
                size={10}
                color={colorForFactionKey(f, true)}
              />

              <Text>{factionFromKey(f)}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={tw`flex flex-1`}>
          {factionKeys.slice(4).map((f) => (
            <TouchableOpacity
              key={f}
              style={tw`px-3 py-2 items-center`}
              onPress={async () => { onPress(f) }}
            >
              <XWingFont
                icons={[f]}
                size={10}
                color={colorForFactionKey(f, true)}
              />

              <Text>{factionFromKey(f)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ActionSheet>
  );
};

export default CreateSquadronSheet;
