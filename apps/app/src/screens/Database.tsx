import { Octicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { RuleSet, assets } from 'lbn-core/src';
import { factions, slotKeys } from 'lbn-core/src/helpers/enums';
import { TShip, loadShip2 } from 'lbn-core/src/helpers/loading';
import { getFactionKey } from 'lbn-core/src/helpers/serializer';
import { ShipType, UpgradeBase } from 'lbn-core/src/types';
import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import { PilotListItem } from '../components/PilotListItem';
import { UpgradeComponent } from '../components/Upgrade';
import { useTailwind } from '../helpers/tailwind';
import { darkgrey } from '../theme';
import { DatabaseStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<DatabaseStackParams, 'Database'>;

type Data = { ship?: ShipType; pilot?: TShip; upgrade?: UpgradeBase };

export const DatabaseScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();

  const [needle, setNeedle] = useState<string>('');

  const [ruleset, setRuleset] = useState<RuleSet>('xwa');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        textColor: 'white',
        hideWhenScrolling: false,
        onChangeText: (e) => setNeedle(e.nativeEvent.text.toLowerCase()),
      },
    });
  }, [navigation]);

  const refreshData = (): Data[] => {
    if (needle.length < 3) {
      return [];
    }

    // const fShips: ShipType[] = [];
    const fPilots: TShip[] = [];
    const fUpgrades: UpgradeBase[] = [];

    factions.forEach((faction) => {
      Object.keys(assets[ruleset].pilots[faction]).forEach((key) => {
        const ship: ShipType = assets[ruleset].pilots[faction][key];
        // if (ship.name.toLowerCase().includes(needle)) {
        //   fShips.push(ship);
        // }

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
      // ...fShips.map((ship) => ({ ship })),
      ...fPilots.map((pilot) => ({ pilot })),
      ...fUpgrades.map((upgrade) => ({ upgrade })),
    ];
  };

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Data>) => {
    const { ship, pilot: p, upgrade } = item;
    const pilot = p?.pilot;

    return (
      <View>
        {/* {ship && (
          <View enableShadow={false} paddingH-8 paddingB-8 row flex>
            <View flex>
              <View flex marginL-5>
                <View row spread centerV>
                  <Image
                    style={styles.icon}
                    source={{ uri: ship.icon || ' ' }}
                    // resizeMode={Image.Image.re}
                  />
                  <Text text80M>{ship.name || ' '}</Text>
                </View>
              </View>

              <View row spread centerV>
                <ShipStats stats={ship?.stats} />
                <Dial dial={ship?.dial} />
                <ActionsComponent actions={ship.actions} />
              </View>

              {ship?.ability && (
                <View
                  flex
                  marginT-8
                  backgroundColor={'#1E2228'}
                  paddingV-8
                  paddingH-9
                  br30
                >
                  <Text text80M>{ship?.ability?.name}</Text>
                  <FormattedText text80 text={ship?.ability?.text} />
                </View>
              )}
            </View>
          </View>
        )} */}

        {pilot && <PilotListItem key={`${p.xws}_${pilot.xws}`} pilot={pilot} />}

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
