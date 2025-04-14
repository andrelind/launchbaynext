import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { FC, useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { ShipFont } from '../components/fonts/ShipIcon';
import { shipTypes } from '../helpers/select';
import { useTailwind } from '../helpers/tailwind';
import { xwsStore } from '../stores/xws';
import { SelectStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<SelectStackParams, 'SelectShip'>;

export const SelectShipScreen: FC<Props> = ({ route, navigation }) => {
  const { uid, shipXws, pilotIndex } = route.params;

  const { tw } = useTailwind();
  const xws = xwsStore(
    useCallback((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid), [uid])
  );
  console.log('xws', xws);

  const shipList = xws && shipTypes(xws, true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={tw`mr-2`}
        >
          <Text style={tw`text-orange-500 text-base`}>Close</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const data =
    shipList
      ?.filter((s) =>
        xws?.format === 'Extended' && s.xws === 'syliureclasshyperspacering'
          ? false
          : true
      )
      .filter((s) => (shipXws ? s.xws === shipXws : true))
      .sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      ) || [];

  return (
    <FlashList
      data={data}
      estimatedItemSize={56}
      renderItem={({ item, index }) => (
        <Animated.View entering={FadeInUp.delay(index * 25)} style={tw`px-2`}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.push('SelectPilot', {
                uid,
                shipXws: item.xws,
                pilotIndex,
              });
            }}
            style={tw`flex-1 flex-row items-center`}
          >
            <View style={tw`w-12 items-center`}>
              <ShipFont icons={[item.xws]} size={12} style={tw`text-white`} />
            </View>
            <Text style={tw`text-white font-bold ml-3`}>{item.name}</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    />
  );
};

export default SelectShipScreen;
