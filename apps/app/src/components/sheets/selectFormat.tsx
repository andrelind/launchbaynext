import { formats } from 'lbn-core/src/helpers/enums';
import { Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { colorForFormat } from '../../helpers/colors';
import { useTailwind } from '../../helpers/tailwind';
import { xwsStore } from '../../stores/xws';
import './types';

export const SelectFormatSheetId = 'SelectFormatSheet';
export type SelectFormatSheetProps = { uid: string };
export type SelectFormatSheetReturn = undefined;

const SelectFormatSheet = ({
  sheetId,
  payload,
}: SheetProps<'SelectFormatSheet'>) => {
  const { tw } = useTailwind();

  const { uid } = payload!;
  const setFormat = xwsStore((s) => s.setFormat);

  return (
    <ActionSheet id={sheetId} useBottomSafeAreaPadding>
      <View style={tw`flex items-center`}>
        {formats.map((f) => (
          <TouchableOpacity
            key={f}
            onPress={async () => {
              await SheetManager.hide(SelectFormatSheetId);
              setFormat(uid, f);
            }}
          >
            <Text style={tw`text-[${colorForFormat(f)}] py-3 font-semibold`}>
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ActionSheet>
  );
};

export default SelectFormatSheet;
