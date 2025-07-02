import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { assets } from 'lbn-core/src';
import { factionFromKey } from 'lbn-core/src/helpers/convert';
import { ShipBase, Upgrade } from 'lbn-core/src/types';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAvailability } from '../helpers/collection';
import { useTailwind } from '../helpers/tailwind';
import { useXwsStore } from '../stores/xws';
import { ListStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<ListStackParams, 'MissingItems'>;

export const MissingItemsScreen: FC<Props> = ({ route, navigation }) => {
  const { uid } = route.params;
  const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
  const available = useAvailability(xws);
  const { tw } = useTailwind();

  if (!xws) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-white text-2xl`}>List not found</Text>
      </View>
    );
  }

  const missingShips = available.ships
    .filter((s) => s.count < 0)
    .map((s) => {
      const ship: ShipBase =
        assets[xws.ruleset].pilots[factionFromKey(xws?.faction || 'firstorder')][s.xws];
      return { ...s, name: ship.name };
    });
  const missingPilots = available.pilots
    .filter((p) => p.count < 0)
    .map((p) => {
      const pilot = assets[xws.ruleset].pilots[factionFromKey(xws?.faction || 'firstorder')][
        p.shipXws
      ].pilots
        .filter((x) => x)
        .filter((c) => c.xws === p.xws)[0];
      return { ...p, name: pilot.name };
    });
  const missingUpgrades = available.upgrades
    .filter((s) => s.count < 0)
    .map((u) => {
      const upgrade: Upgrade = JSON.parse(
        JSON.stringify(assets[xws.ruleset].upgrades[u.key].find((s) => s.xws === u.xws))
      );
      return { ...u, name: upgrade.sides[0].title };
    });

  return (
    <ScrollView contentContainerStyle={tw`px-2`}>
      {missingShips.length > 0 && (
        <View style={tw`py-2 gap-y-1`}>
          <Text style={tw`text-white font-bold text-lg`}>Ships</Text>
          {missingShips.map((item) => (
            <View key={item.xws}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-white`}>{item.name}</Text>
                <Text style={tw`text-white`}>{item.count}</Text>
              </View>
              <Text style={tw`text-white`}>{item.sources.join(', ')}</Text>
            </View>
          ))}
        </View>
      )}

      {missingPilots.length > 0 && (
        <View style={tw`py-2 gap-y-1`}>
          <Text style={tw`text-white font-bold text-lg`}>Pilots</Text>
          {missingPilots.map((item) => (
            <View key={item.xws}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-white`}>{item.name}</Text>
                <Text style={tw`text-white`}>{item.count}</Text>
              </View>
              <Text style={tw`text-white`}>{item.sources.join(', ')}</Text>
            </View>
          ))}
        </View>
      )}

      {missingUpgrades.length > 0 && (
        <View style={tw`py-2 gap-y-1`}>
          <Text style={tw`text-white font-bold text-lg`}>Upgrades</Text>
          {missingUpgrades.map((item) => (
            <View key={item.xws}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-white`}>{item.name}</Text>
                <Text style={tw`text-white`}>{item.count}</Text>
              </View>
              <Text style={tw`text-white`}>{item.sources.join(', ')}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default MissingItemsScreen;
