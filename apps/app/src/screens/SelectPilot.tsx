import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { FC, useLayoutEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import { PilotListItem } from '../components/PilotListItem';
import { countForPilot2 } from '../helpers/collection';
import { shipTypes } from '../helpers/select';
import { useTailwind } from '../helpers/tailwind';
import { useCollectionStore } from '../stores/collection';
import { useXwsStore } from '../stores/xws';
import { SelectStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<SelectStackParams, 'SelectPilot'>;

export const SelectPilotScreen: FC<Props> = ({ route, navigation }) => {
  const { width } = useWindowDimensions();
  const { uid, shipXws, pilotIndex } = route.params;

  const { tw } = useTailwind();
  const collection = useCollectionStore();
  const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
  const shipList = xws && shipTypes(xws, true);
  const addShip = useXwsStore((s) => s.addShip);
  const changePilot = useXwsStore((s) => s.changePilot);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={tw`text-orange-500 text-base`}>Close</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const ship = shipList
    ?.find((s) => (shipXws ? s.xws === shipXws : true))

  const data = ship
    ?.pilots.sort((a, b) => {
      if (a.initiative < b.initiative) {
        return 1;
      } else if (a.initiative > b.initiative) {
        return -1;
      } else if (a.cost < b.cost) {
        return 1;
      } else if (a.cost > b.cost) {
        return -1;
      }
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

  const columns = width > 600 ? 2 : 1;

  if (!xws || !ship) return null;

  return (
    <FlashList
      data={data}
      estimatedItemSize={123}
      ItemSeparatorComponent={() => <View style={tw`h-2`} />}
      contentContainerStyle={tw`p-2`}
      numColumns={columns}
      renderItem={({ item, index }) => {
        const count = countForPilot2(collection, item.xws, xws);
        return (
          <TouchableOpacity
            key={item.xws}
            activeOpacity={0.7}
            style={tw`flex-1 ${index % 2 === 0 || columns === 1 ? '' : 'pl-2'}`}
            onPress={() => {
              if (pilotIndex !== undefined) {
                changePilot(uid, pilotIndex, item.xws);
                navigation.goBack();
              } else {
                addShip(uid, shipXws, item.xws);
                navigation.getParent()?.goBack();
              }
            }}
          >
            <PilotListItem pilot={item} ship={{ ...ship, pointsWithUpgrades: item.cost }} count={count} ruleset={xws?.ruleset} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default SelectPilotScreen;
