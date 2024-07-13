import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import SquadronComponent from '../components/SquadronComponent';
import { pilotName } from '../helpers/names';
import { useTailwind } from '../helpers/tailwind';
import { FilterState, filterStore } from '../stores/filter';
import { XWS, XWSState } from '../stores/types';
import { xwsStore } from '../stores/xws';
import { darkgrey } from '../theme';
import { ListStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<ListStackParams, 'Squadrons'>;

const xwsSel = (s: XWSState) => ({
  lists: s.lists,
  setLists: s.setLists,
  addSquadron: s.addSquadron,
});

const filterSel = (s: FilterState) => ({
  filters: s.filters,
  tags: s.tags,
  setFirstSorting: s.setFirstSorting,
  setSecondSorting: s.setSecondSorting,
});

export const SquadronsScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();

  const { lists, setLists, addSquadron } = xwsStore(xwsSel);
  const { filters, tags, setFirstSorting, setSecondSorting } =
    filterStore(filterSel);

  const [stateLists, setStateLists] = useState(lists);
  const [needle, setNeedle] = useState<string>('');

  // useNavigationSearchBarUpdate(e => {
  //   setNeedle(e.text?.toLowerCase());
  // }, componentId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {

        placeholder: 'Search',
        onChangeText: (t) => setNeedle(t?.nativeEvent.text.toLowerCase()),
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Filter');
          }}
          style={tw`mr-2`}
        >
          <Feather name="filter" size={20} color={tw.color('orange-500')} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Filter');
          }}
          style={tw`mr-2`}
        >
          <Feather name='align-left' size={20} color={tw.color('orange-500')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => setStateLists(lists), [lists]);

  const filtered = lists
    ?.filter(
      (list) =>
        list.name?.toLowerCase().includes(needle) ||
        list.pilots?.filter((pilot) =>
          pilotName(pilot, list)?.toLowerCase().includes(needle)
        ).length > 0
    )
    .filter((list) => {
      if (Object.keys(filters).length === 0) {
        return true;
      }
      return filters[list.faction] || filters[list.format];
    })
    .filter((list) => {
      if (tags.length === 0) {
        return true;
      }
      if (
        tags.length > 0 &&
        tags.filter((tag) => (list.vendor.lbn.tags || []).includes(tag))
          .length === 0
      ) {
        return false;
      }
      return true;
    });

  // const renderHeader = useCallback(
  //   () => (
  //     <View row paddingB-8>
  //       <Button
  //         flex
  //         backgroundColor={'transparent'}
  //         text70M
  //         label={'Filter'}
  //         iconSource={() => <FunnelIcon stroke={blue} />}
  //         onPress={
  //           () => {}
  //           // Navigation.showModal({ component: { name: 'Filter' } })
  //         }
  //       />
  //       <Button
  //         flex
  //         backgroundColor={'transparent'}
  //         text70M
  //         label={'Sort'}
  //         iconSource={() => <BarsArrowDownIcon stroke={blue} />}
  //         onPress={
  //           () => {}
  //           // Navigation.showModal({ component: { name: 'Sorting' } })
  //         }
  //       />
  //     </View>
  //   ),
  //   [],
  // );

  return (
    <SafeAreaView style={tw`flex-1`}>
      {Platform.OS === 'android' && (
        <View paddingH-10>
          <TextInput
            autoCapitalize={'none'}
            placeholder={'Search'}
            autoCorrect={false}
            value={needle}
            onChangeText={(t) => setNeedle(t?.toLowerCase())}
            placeholderTextColor={darkgrey}
            underlineColorAndroid={darkgrey}
            style={{ color: 'white' }}
          />
        </View>
      )}

      <FlashList
        contentContainerStyle={tw`p-2`}
        data={filtered || []}
        keyExtractor={(l: XWS) => l.vendor.lbn.uid}
        estimatedItemSize={87}
        ListEmptyComponent={() => (
          <View style={tw`items-center justify-center flex-1 h-screen`}>
            <Text style={tw`text-zinc-500 text-lg`}>No squadrons found</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <SquadronComponent
            key={item.vendor.lbn.uid}
            item={item}
            onPress={() => {
              navigation.navigate('Squadron', { uid: item.vendor.lbn.uid });
            }}
          />
        )}
      />

      <TouchableOpacity
        style={tw`bg-orange-500 h-12 w-12 rounded-full absolute bottom-4 right-2 items-center justify-center`}
        onPress={async () => {
          Alert.alert('Ruleset', 'Select the ruleset for the new squadron',
            [
              {
                text: 'X-Wing Alliance',
                onPress: async () => {
                  const uid = await SheetManager.show('CreateSquadronSheet', { payload: { ruleset: 'xwa' } });
                  uid && navigation.navigate('Squadron', { uid });
                }
              },
              {
                text: '2.0 Legacy',
                onPress: async () => {
                  const uid = await SheetManager.show('CreateSquadronSheet', { payload: { ruleset: 'legacy' } });
                  uid && navigation.navigate('Squadron', { uid });
                }
              },
              {
                text: 'Cancel',
                style: 'cancel'
              }
            ]
          )
        }}
      >
        <Feather name="plus" color={'white'} size={36} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SquadronsScreen;
