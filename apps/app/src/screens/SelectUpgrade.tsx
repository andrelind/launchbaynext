import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { keyFromSlot } from 'lbn-core/src/helpers/convert';
import { loadShip2 } from 'lbn-core/src/helpers/loading';
import { Upgrade } from 'lbn-core/src/types';
import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SwipeComponent } from '../components/SwipeComponent';
import { UpgradeComponent } from '../components/Upgrade';
import { countForUpgrade2 } from '../helpers/collection';
import { upgradesForSlot2 } from '../helpers/select';
import { useTailwind } from '../helpers/tailwind';
import { useCollectionStore } from '../stores/collection';
import { useXwsStore } from '../stores/xws';
import { SelectStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<SelectStackParams, 'SelectUpgrade'>;

export const SelectUpgradeScreen: FC<Props> = ({ route, navigation }) => {
  const { uid, slot, faction, index, slotIndex } = route.params;

  const { tw } = useTailwind();
  const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
  const ships = xws?.pilots.map((p) => loadShip2(p, xws));
  const pilot = xws?.pilots[index];
  const ship = pilot && loadShip2(pilot, xws);

  const setUpgrade = useXwsStore((s) => s.setUpgrade);

  const [flipped, setFlipped] = useState<number[]>([]);
  const [hide, setHide] = useState(false);
  const collection = useCollectionStore();

  const upgrades =
    xws &&
    ships &&
    ship &&
    upgradesForSlot2(ship, slot, xws?.format, xws.ruleset, ships, !hide, collection);

  // useNavigationButtonPress(e => {
  //   if (e.buttonId === 'done') {
  //     Navigation.dismissModal(componentId);
  //   } else {
  //     Navigation.mergeOptions(componentId, {
  //       topBar: {
  //         leftButtons: [
  //           {
  //             id: 'toggle',
  //             color: blue,
  //             text: hide ? 'Hide unavailable' : 'Show unavailable',
  //           },
  //         ],
  //       },
  //     });
  //     smooth();
  //     setHide(!hide);
  //   }
  // }, componentId);

  // useEffect(() => {
  //   Navigation.mergeOptions(componentId, {
  //     topBar: {
  //       leftButtons: [{ id: 'toggle', color: blue, text: 'Hide unavailable' }],
  //       rightButtons: [{ id: 'done', text: 'Done' }],
  //     },
  //   });
  // }, [componentId]);

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
  }, []);

  const renderItem = useCallback(
    ({ item, index: i }: ListRenderItemInfo<Upgrade>) => {
      return (
        <SwipeComponent
          showFlip
          onPress={() => {
            const key = keyFromSlot(slot);
            setUpgrade(xws!, index, key, slotIndex, item);
            navigation.goBack();
          }}
          onLeftAction={
            item.sides?.length !== 1
              ? () => {
                if (flipped.includes(i)) {
                  flipped.splice(flipped.indexOf(i), 1);
                } else {
                  flipped.push(i);
                }
                setFlipped([...flipped]);
              }
              : undefined
          }
        >
          <UpgradeComponent
            showRestrictions
            side={flipped.includes(i) ? 1 : 0}
            slot={slot}
            upgrade={item}
            count={countForUpgrade2(collection, item.xws, xws)}
            onImagePress={() => {
              const uri = item.sides[flipped.includes(i) ? 1 : 0].image;
              navigation.navigate('Image', { url: { uri } });
            }}
          />
        </SwipeComponent>
      );
    },
    [flipped, index, setUpgrade, slot, slotIndex, xws]
  );

  return (
    <FlashList
      estimatedItemSize={150}
      contentContainerStyle={tw`px-2 pt-2 pb-6`}
      data={upgrades || []}
      keyExtractor={(s, i) => `${s.xws}_${i}`}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={tw`h-2`} />}
    />
  );
};

export default SelectUpgradeScreen;
