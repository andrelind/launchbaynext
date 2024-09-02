import { Octicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { RuleSet, assets } from 'lbn-core/src';
import { factions, slotKeys } from 'lbn-core/src/helpers/enums';
import { TShip, loadShip2 } from 'lbn-core/src/helpers/loading';
import { getFactionKey } from 'lbn-core/src/helpers/serializer';
import { ShipType, UpgradeBase } from 'lbn-core/src/types';
import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import { PilotListItem } from '../components/PilotListItem';
import { SegmentedControl } from '../components/SegmentedControl';
import { UpgradeComponent } from '../components/Upgrade';
import { useTailwind } from '../helpers/tailwind';
import { darkgrey } from '../theme';
import { DatabaseStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<DatabaseStackParams, 'Database'>;

type Data = { ship?: ShipType; pilot?: TShip; upgrade?: UpgradeBase };

const segments = ['xwa', 'legacy', 'amg'] as RuleSet[];

export const DatabaseScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();

  const [needle, setNeedle] = useState<string>('');

  const [ruleset, setRuleset] = useState<RuleSet>('xwa');

  const updateHeader = () => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        headerIconColor: tw.color('orange-500'),
        textColor: tw.prefixMatch('dark') ? tw.color('white') : tw.color('black'),
        barTintColor: tw.prefixMatch('dark') ? tw.color('zinc-800') : tw.color('white'),
        hideWhenScrolling: false,
        onChangeText: (e) => setNeedle(e.nativeEvent.text.toLowerCase()),
      },
    });
  }

  useLayoutEffect(() => {
    Platform.OS === 'ios' && updateHeader();
    Platform.OS === 'android' && setTimeout(() => {
      updateHeader();
    }, 0);
  }, [navigation, tw]);

  const refreshData = (): Data[] => {
    if (needle.length < 3) {
      return [];
    }

    const fPilots: TShip[] = [];
    const fUpgrades: UpgradeBase[] = [];

    factions.forEach((faction) => {
      Object.keys(assets[ruleset].pilots[faction]).forEach((key) => {
        const ship: ShipType = assets[ruleset].pilots[faction][key];
        const filtered = ship.pilots.filter(
          (p) =>
            p.name.toLowerCase().includes(needle) ||
            (p.ability && p.ability.toLowerCase().includes(needle)) ||
            (ship.ability &&
              ship.ability.name.toLowerCase().includes(needle)) ||
            (ship.ability && ship.ability.text.toLowerCase().includes(needle))
        );
        if (filtered.length > 0) {
          fPilots.push(
            ...filtered.map((pilot) =>
              Object.assign(
                {},
                loadShip2(
                  {
                    id: pilot.xws,
                    ship: ship.xws,
                    upgrades: {},
                    points: 0,
                  },
                  {
                    faction: getFactionKey(faction),
                    format: 'Extended',
                    ruleset
                  }
                )
              )
            )
          );
        }
      });
    });

    slotKeys.forEach((slot) => {
      assets[ruleset].upgrades[slot].forEach((upgrade) => {
        if (upgrade.sides[0].title.toLowerCase().indexOf(needle) >= 0) {
          fUpgrades.push(upgrade);
        } else if (upgrade.sides[0].conditions) {
          upgrade.sides[0].conditions.forEach((x) => {
            const condition = assets[ruleset].conditions.find((c) => c.xws === x);
            if (
              condition &&
              condition.name.toLowerCase().indexOf(needle) >= 0
            ) {
              fUpgrades.push(upgrade);
            }
          });
        }
      });
    });

    return [
      ...fPilots.map((pilot) => ({ pilot })),
      ...fUpgrades.map((upgrade) => ({ upgrade })),
    ];
  };

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Data>) => {
    const { ship, pilot: p, upgrade } = item;
    const pilot = p?.pilot;

    return (
      <View>
        {pilot && <PilotListItem key={`${p.xws}_${pilot.xws}`} pilot={pilot} ship={{ ...ship!, pointsWithUpgrades: pilot?.cost }} ruleset={ruleset} />}

        {upgrade && (
          <UpgradeComponent
            showRestrictions
            upgrade={{ ...upgrade, finalCost: -1, available: 0 }}
          />
        )}
      </View>
    );
  }, []);

  const data = refreshData();

  return (
    <FlashList
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={tw`p-2`}
      estimatedItemSize={100}
      keyExtractor={({ ship, pilot, upgrade }, index) => {
        if (ship) {
          return `${ship.faction}_${ship.xws}_${index}`;
        }
        if (pilot) {
          return `${pilot.faction}_${pilot.xws}_${pilot.pilot?.xws}`;
        }
        if (upgrade) {
          return upgrade.xws;
        }
        return uuid();
      }}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={tw`h-2`} />}
      ListHeaderComponent={() => (
        <SegmentedControl segments={['XWA', 'Legacy', 'AMG']} selectedSegment={segments.indexOf(ruleset)} onChange={(index) => {
          setRuleset(segments[index] as RuleSet);
        }} />
      )
      }
      ListEmptyComponent={() => (
        <View style={tw`flex items-center justify-center p-2 h-100`}>
          {/* <MagnifyingGlassIcon size={50} color={darkgrey} /> */}
          <Octicons name="search" size={50} color={darkgrey} />
          <Text style={tw`text-[${darkgrey}] pt-6`}>
            On this screen you can easily search for all ships, pilots and
            upgrades in the game!
          </Text>
        </View>
      )}
    />
  );
};

export default DatabaseScreen;
