import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { loadShip2, loadUpgrade2 } from 'lbn-core/src/helpers/loading';
import { SlotKey } from 'lbn-core/src/types';
import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SimpleItem } from '../components/SimpleItem';
import { SwipeComponent } from '../components/SwipeComponent';
import { useTailwind } from '../helpers/tailwind';
import { loadoutStore } from '../stores/loadout';
import { xwsStore } from '../stores/xws';
import { ListStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<ListStackParams, 'SelectLoadout'>;

export const LoadoutsScreen: FC<Props> = ({ route, navigation }) => {
  const { tw } = useTailwind();
  const { uid, index, faction, pilotXws, shipXws } = route.params;

  const data = loadoutStore((s) => s.loadouts)?.filter(
    (l) =>
      l.faction === faction && l.shipXws === shipXws && l.pilotXws === pilotXws
  );

  const ship = loadShip2(
    { id: pilotXws, ship: shipXws, points: 0, upgrades: {}, },
    { faction, format: 'Extended', ruleset: 'xwa' }
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(i) => i.id}
      ListEmptyComponent={() => (
        <View style={tw`flex-1 items-center justify-center h-100`}>
          <Text style={tw`text-slate-500`}>No saved loadouts found</Text>
        </View>
      )}
      renderItem={({ item }) => {
        const upgrades = Object.keys(item.upgrades)
          .map((key) => {
            const s = key as SlotKey;
            return item.upgrades[s]
              ?.map((xws) => {
                return loadUpgrade2(xws, s, ship, 'xwa')?.sides[0].title;
              })
              .reduce((a, c) => [...a, c], [] as string[])
              .join(', ');
          })
          .join(', ');

        return (
          <SwipeComponent
            showFlip
            onRightAction={() => loadoutStore.getState().removeLoadout(item.id)}
          >
            <SimpleItem
              text={item.name}
              subtitle={upgrades}
              hideArrow
              onPress={() => {
                xwsStore
                  .getState()
                  .setUpgradesForPilot(uid, index, item.upgrades);
                // Navigation.dismissModal(componentId);
              }}
            />
          </SwipeComponent>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default LoadoutsScreen;
