import { Image } from 'expo-image';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import Assets from '../../helpers/assets';
import { useTailwind } from '../../helpers/tailwind';
import { useXwsStore } from '../../stores/xws';

export const SelectObstaclesSheetId = 'SelectObstaclesSheet';
export type SelectObstaclesSheetProps = { uid: string };
export type SelectObstaclesSheetReturn = undefined;

const list = [
  { n: 'Core', t: 'coreasteroid', count: 6, offset: 0 },
  { n: 'Force Awakens Core', t: 'core2asteroid', count: 6, offset: 0 },
  {
    n: 'VT49 Decimator',
    t: 'vt49decimatordebris',
    count: 3,
    offset: 0,
  },
  { n: 'YT2400', t: 'yt2400debris', count: 3, offset: 0 },
  { n: 'Gas Clouds', t: 'gascloud', count: 6, offset: 1 },
  { n: 'Pride of Mandalore Asteroids', t: 'pomasteroid', count: 3, offset: 1 },
  { n: 'Pride of Mandalore Debris', t: 'pomdebris', count: 3, offset: 1 },
];

const SelectObstaclesSheet: FC<SheetProps<'SelectObstaclesSheet'>> = ({
  sheetId,
  payload,
}) => {
  const { tw } = useTailwind();

  const { uid } = payload!;
  const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
  const setObstacles = useXwsStore((s) => s.setObstacles);

  return (
    <ActionSheet id={sheetId} useBottomSafeAreaPadding>
      <View style={tw`flex m-2`}>
        {list.map((o) => (
          <View key={o.t}>
            <Text style={tw`font-semibold`}>{o.n}</Text>
            <View style={tw`flex-row gap-x-2 items-center`}>
              {new Array(o.count).fill(0).map((_, i) => {
                const name = `${o.t}${i + o.offset}`;
                return (
                  <TouchableOpacity
                    style={tw`bg-white rounded-lg ${(xws?.obstacles || [])?.includes(name)
                      ? 'border-2 border-primary-500'
                      : ''
                      }`}
                    key={`${o.t}${i}`}
                    onPress={() => {
                      const s = [...(xws?.obstacles || [])];
                      if (s.includes(name)) {
                        s.splice(s.indexOf(name), 1);
                      } else {
                        s.push(name);
                      }
                      setObstacles(uid, s);
                    }}
                  >
                    <Image
                      style={tw`w-12 h-12 rounded-lg`}
                      source={Assets.obstacles[name]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </ActionSheet>
  );
};

export default SelectObstaclesSheet;
