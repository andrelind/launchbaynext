import { FC, memo } from 'react';
import { Alert, Platform, Text, View } from 'react-native';

import { smooth } from '../helpers/animation';
import { colorForFactionKey } from '../helpers/colors';
import { pilotName } from '../helpers/names';
import { useTailwind } from '../helpers/tailwind';
import { XWS, XWSState } from '../stores/types';
import { xwsStore } from '../stores/xws';
import { SwipeComponent } from './SwipeComponent';
import { ShipFont } from './fonts/ShipIcon';
import { XWingFont } from './fonts/XWingIcon';

const selector = (s: XWSState) => ({
  copySquadron: s.copySquadron,
  removeSquadron: s.removeSquadron,
});

interface Props<XWS> {
  item: XWS;
  index?: number; // This is technically a "last known index" since cells don't necessarily rerender when their index changes
  drag?: () => void;
  isActive?: boolean;
  onPress?: () => void;
}

export const SquadronComponent: FC<Props<XWS>> = ({
  item,
  drag,
  isActive,
  onPress,
}) => {
  console.log('Render squadron', item.vendor.lbn.uid, item.name,);
  const { tw } = useTailwind();
  const { copySquadron, removeSquadron } = xwsStore(selector);

  if (!item) return null;

  const all = item?.pilots.map((p) => p.id);
  const fullCount = [...new Set(all)].map((u) => ({
    xws: u,
    count: all.filter((a) => a === u).length,
  }));

  const pNames = fullCount
    .map((u) => {
      const pilot = item?.pilots?.find((p) => p.id === u.xws);
      if (!pilot) {
        return '';
      }

      const name = pilotName(pilot, item);
      if (u.count > 1) {
        return `${u.count}x ${name}`;
      }
      return name;
    })
    .join(', ');

  return (
    <SwipeComponent
      style={tw`mb-2`}
      onPress={onPress}
      onLongPress={drag}
      onLeftAction={() => {
        Platform.OS === 'ios' && smooth();
        copySquadron(item.vendor.lbn.uid);
      }}
      onRightAction={() => {
        Alert.alert(
          'Delete squadron?',
          `Do you want to delete the squadron "${item.name}"?`,
          [
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                smooth();
                removeSquadron(item.vendor.lbn.uid);
              },
            },
            { text: 'Cancel', style: 'cancel' },
          ]
        );
      }}
    >
      <View style={tw`p-2 flex-row items-center bg-white dark:bg-zinc-800 rounded-lg gap-x-2`}>
        <View style={tw`items-center w-10`}>
          <XWingFont
            icons={[item.faction]}
            color={colorForFactionKey(item.faction)}
            size={6}
          />
          <Text style={tw`text-xs dark:text-white`}>{item.ruleset}</Text>
        </View>

        <View style={tw`flex flex-1`}>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-row gap-x-2 items-end`}>
              <Text style={tw`font-semibold dark:text-white`}>{item.name}</Text>
              {(item.vendor.lbn.wins > 0 || item.vendor.lbn.losses > 0) && (
                <Text style={tw`text-xs dark:text-white`}>
                  {item.vendor.lbn.wins} / {item.vendor.lbn.losses}
                </Text>
              )}
            </View>
            <Text style={tw`font-medium dark:text-white`}>{item.points}</Text>
          </View>
          <Text style={tw`text-xs dark:text-white`}>
            {pNames}
          </Text>
          <View style={tw`flex-row items-center justify-between`}>
            <ShipFont icons={item?.pilots?.map((p) => p.ship)} size={6} />

            {item.vendor.lbn.tags && item.vendor.lbn.tags.length > 0 && (
              <View style={tw``}>
                {item.vendor.lbn.tags.map(tag => (
                  <Text key={tag} style={tw`text-xs`}>{tag}</Text>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </SwipeComponent>
  );
};


export default memo(
  SquadronComponent,
  (a, b) =>
    a.item.version === b.item.version &&
    a.item.vendor.lbn.uid === b.item.vendor.lbn.uid &&
    a.isActive === b.isActive
);
