import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { keyFromFaction } from 'lbn-core/src/helpers/convert';
import { factions } from 'lbn-core/src/helpers/enums';
import { SourceKey } from 'lbn-core/src/sources';
import React, { FC } from 'react';
import { View } from 'react-native';
import { SimpleItem } from '../components/SimpleItem';
import { XWingFont } from '../components/fonts/XWingIcon';
import { colorForFactionKey } from '../helpers/colors';
import { useTailwind } from '../helpers/tailwind';
import { CollectionStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<CollectionStackParams, 'Collection'>;

export const CollectionScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();
  const data = [
    ...factions.map((f) => ({
      title: f,
      icon: f,
    })),
    { title: 'Epic', icon: undefined },
    { title: 'Core Sets and Card Packs', icon: undefined },
    { title: 'Additional Ships', icon: undefined },
    { title: 'Additional Pilots', icon: undefined },
    { title: 'Additional Upgrades', icon: undefined },
  ];

  return (
    <FlashList
      contentContainerStyle={tw`p-3`}
      estimatedItemSize={48}
      data={data}
      keyExtractor={(i) => i.title}
      renderItem={({ item }) => {
        const { title, icon } = item;
        return (
          <SimpleItem
            icon={
              icon && (
                <View style={tw`w-7 items-center mr-2`}>
                  <XWingFont
                    icons={[keyFromFaction(icon)]}
                    size={7}
                    color={colorForFactionKey(keyFromFaction(icon), !tw.prefixMatch('dark'))}
                  />
                </View>
              )
            }
            text={title}
            onPress={() => {
              const sourceKey: SourceKey =
                title === 'Core Sets and Card Packs'
                  ? 'Core Sets'
                  : (title as SourceKey);
              navigation.navigate('CollectionDetail', { sourceKey });
            }}
          />
        );
      }}
      ItemSeparatorComponent={() => <View style={tw`h-2`} />}
    />
  );
};

export default CollectionScreen;
