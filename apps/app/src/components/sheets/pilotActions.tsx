import { Feather } from '@expo/vector-icons';
import { loadShip2 } from 'lbn-core/src/helpers/loading';
import { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import { useShallow } from 'zustand/react/shallow';
import { smooth } from '../../helpers/animation';
import { useTailwind } from '../../helpers/tailwind';
import { useXwsStore } from '../../stores/xws';
import './types';

export const PilotActionSheetId = 'PilotActionSheet';
export type PilotActionSheetProps = { uid: string; pilotIndex: number };
export type PilotActionSheetReturn = undefined;

const PilotActionSheet = ({
  sheetId,
  payload,
}: SheetProps<'PilotActionSheet'>) => {
  const { tw } = useTailwind();
  const { width } = useWindowDimensions();

  const { uid, pilotIndex } = payload!;
  const [index, setIndex] = useState(pilotIndex);

  const { lists, setLists, copyShip, removeShip } = useXwsStore(useShallow((s) => ({
    lists: s.lists,
    setLists: s.setLists,
    copyShip: s.copyShip,
    removeShip: s.removeShip,
  })));

  const xws = lists?.find((l) => l.vendor.lbn.uid === uid);
  const ship = xws && loadShip2(xws?.pilots[index], xws);

  const doSetIndex = (newIndex: number) => {
    if (!xws || !lists) return;
    const copy = Object.assign({}, xws);
    copy.pilots = [...copy.pilots];

    const cutOut = copy.pilots.splice(index, 1)[0];
    if (!cutOut) return;
    copy.pilots?.splice(newIndex, 0, cutOut);
    lists?.splice(lists.indexOf(xws), 1, copy);
    smooth();
    setLists(lists);
    setIndex(newIndex);
  };

  return (
    <ActionSheet id={sheetId} useBottomSafeAreaPadding containerStyle={tw`android:pb-24`}>
      <View style={tw`gap-y-3 m-3`}>
        <View style={tw`flex flex-row items-start justify-between`}>
          <TouchableOpacity
            style={tw`items-center justify-center`}
            onPress={() => {
              xws && copyShip(xws, index);
            }}
          >
            <Feather name="copy" size={20} color={tw.color('blue-500')} />
            <Text style={tw`text-blue-500 mt-1`}>Copy</Text>
          </TouchableOpacity>
          <View style={tw`items-center`}>
            <Text style={tw`text-black font-semibold`}>{ship?.pilot?.name}</Text>
            {ship?.pilot?.caption && (
              <Text style={tw`text-gray-400 italic`}>{ship?.pilot?.caption}</Text>
            )}
          </View>
          <TouchableOpacity
            style={tw`items-center justify-center`}
            onPress={async () => {
              await SheetManager.hide(sheetId);
              xws && removeShip(xws, index);
            }}
          >
            <Feather name="trash" size={20} color={tw.color('red-500')} />
            <Text style={tw`text-red-500 mt-1`}>Delete</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex items-center justify-center`}>
          <TouchableOpacity
            style={tw`p-1`}
            onPress={() => {
              const newIndex = index - Math.floor(width / 150);
              index > 0 ? doSetIndex(newIndex) : doSetIndex(0);
            }}
          >
            <Feather name="chevron-up" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row items-center justify-around`}>
          <TouchableOpacity
            style={tw`p-1`}
            onPress={() => {
              const newIndex = index - 1;
              index > 0 ? doSetIndex(newIndex) : doSetIndex(0);
            }}
          >
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-1`}
            onPress={() => {
              const newIndex = index + 1;
              if (newIndex < (xws?.pilots.length || 0)) doSetIndex(newIndex);
            }}
          >
            <Feather name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex items-center justify-center`}>
          <TouchableOpacity
            style={tw`p-1`}
            onPress={() => {
              const newIndex = index + Math.floor(width / 150);
              if (newIndex < (xws?.pilots.length || 0)) doSetIndex(newIndex);
            }}
          >
            <Feather name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default PilotActionSheet;
