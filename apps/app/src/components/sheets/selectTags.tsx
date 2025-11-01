import { smooth } from '@/src/helpers/animation';
import { FC, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import { useTailwind } from '../../helpers/tailwind';
import { useXwsStore } from '../../stores/xws';

export const SelectTagsSheetId = 'SelectTagsSheet';
export type SelectTagsSheetProps = { uid: string };
export type SelectTagsSheetReturn = undefined;


const SelectTagsSheet: FC<SheetProps<'SelectTagsSheet'>> = ({
  sheetId,
  payload,
}) => {
  const { tw } = useTailwind();

  const { uid } = payload!;
  const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
  const selected = xws?.vendor.lbn.tags || [];
  const setTags = useXwsStore((s) => s.setTags);
  const allTags =
    useXwsStore(s => s.lists)
      ?.map(xws => xws.vendor.lbn.tags || [])
      .reduce((a, c) => {
        (c || []).forEach(tag => {
          if (!a?.includes(tag)) {
            a?.push(tag);
          }
        });
        return a;
      }, [] as string[]) || [];

  const [inputValue, setInputValue] = useState<string>();

  return (
    <ActionSheet id={sheetId} useBottomSafeAreaPadding containerStyle={tw`android:pb-24`}>
      <View style={tw`flex m-2 gap-y-2`}>
        {selected.length > 0 && (
          <>
            <Text style={tw`font-semibold`}>
              Selected tags
            </Text>
            <View style={tw`flex-row gap-x-2`}>
              {selected.map((tag, i) => (
                <TouchableOpacity
                  key={`${tag}_${i}`}
                  style={tw`px-1 py-0.5 border border-zinc-400 rounded-full`}
                  onPress={() => {
                    const tt = [...selected];
                    tt.splice(i, 1);
                    setTags(uid, tt);
                    smooth();
                  }}>
                  <Text key={tag} style={tw`text-xs`}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
        <View style={tw``}>
          <TextInput
            style={tw`py-2`}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={'New tag'}
            onSubmitEditing={(e) => {
              if (e.nativeEvent.text.length > 0) {
                const tt = [...selected];
                if (!tt.includes(e.nativeEvent.text.trim())) {
                  tt.push(e.nativeEvent.text.trim());
                }
                setTags(uid, tt);
                setInputValue(undefined);
                smooth();
              }
            }}
          />

          <Text style={tw`font-semibold`}>
            From other squadrons
          </Text>
          <View style={tw`flex-row gap-x-2`}>
            {allTags
              .filter(tag => !selected.includes(tag))
              .map(tag => (
                <TouchableOpacity
                  key={tag}
                  style={tw`px-1 py-0.5 border border-zinc-400 rounded-full`}
                  onPress={() => {
                    const tt = [...selected];
                    if (!tt.includes(tag)) {
                      tt.push(tag);
                    }
                    setTags(uid, tt);
                    smooth();
                  }}>
                  <Text key={tag} style={tw`text-xs`}>{tag}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    </ActionSheet>
  );
};

export default SelectTagsSheet;
