import { SimpleItem } from '@/src/components/SimpleItem';
import { SwipeComponent } from '@/src/components/SwipeComponent';
import { useTailwind } from '@/src/helpers/tailwind';
import { useLoadoutStore } from '@/src/stores/loadout';
import { useXwsStore } from '@/src/stores/xws';
import { useLocalSearchParams } from 'expo-router';
import { loadShip2, loadUpgrade2 } from 'lbn-core/src/helpers/loading';
import { FactionKey, SlotKey } from 'lbn-core/src/types';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function LoadoutsScreen() {
  const { tw } = useTailwind();
  const { uid, index, faction, pilotXws, shipXws } = useLocalSearchParams<{ uid: string; index: string; faction: FactionKey; pilotXws: string; shipXws: string; }>();

  console.log('LoadoutsScreen render', { uid, index, faction, pilotXws, shipXws });


  if (!pilotXws) {
    return null;
  }

  const data = useLoadoutStore((s) => s.loadouts)?.filter(
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
          <Text style={tw`text-zinc-500`}>No saved loadouts found</Text>
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
            onRightAction={() => useLoadoutStore.getState().removeLoadout(item.id)}
          >
            <SimpleItem
              text={item.name}
              subtitle={upgrades}
              hideArrow
              onPress={() => {
                useXwsStore
                  .getState()
                  .setUpgradesForPilot(uid, parseInt(index), item.upgrades);
                // navigation.pop();
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

