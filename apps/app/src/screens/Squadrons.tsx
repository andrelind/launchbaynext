import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useLayoutEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import DraggableFlatList from 'react-native-draggable-flatlist';
import SquadronComponent from '../components/Squadron';
import { move } from '../helpers/misc';
import { pilotName } from '../helpers/names';
import { useTailwind } from '../helpers/tailwind';
import { XWS } from '../stores/types';
import { useXwsStore } from '../stores/xws';
import { RenderItem } from '../types/draggable-flatlist';
import { ListStackParams } from '../types/navigation';


type Props = NativeStackScreenProps<ListStackParams, 'Squadrons'>;

export const SquadronsScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();

  const lists = useXwsStore(s => s.lists);
  const setLists = useXwsStore(s => s.setLists);
  // const filters = useFilterStore(s => s.filters);
  // const tags = useFilterStore(s => s.tags);
  // const setFirstSorting = useFilterStore(s => s.setFirstSorting);
  // const setSecondSorting = useFilterStore(s => s.setSecondSorting);

  const [stateLists, setStateLists] = useState(lists);
  const [needle, setNeedle] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        textColor: tw.prefixMatch('dark') ? tw.color('white') : tw.color('black'),
        barTintColor: tw.prefixMatch('dark') ? tw.color('zinc-800') : tw.color('white'),
        headerIconColor: tw.color('orange-500'),
        onChangeText: (t) => setNeedle(t?.nativeEvent.text.toLowerCase()),
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            SheetManager.show('FilterSquadronsSheet');
          }}
          style={tw`mr-2`}
        >
          <Feather name="filter" size={20} color={tw.color('orange-500')} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            SheetManager.show('SortSquadronsSheet');
          }}
          style={tw`mr-2`}
        >
          <Feather name='align-left' size={20} color={tw.color('orange-500')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // useEffect(() => setStateLists(lists), [lists]);

  const filtered = lists
    ?.filter(
      (list) =>
        list.name?.toLowerCase().includes(needle) ||
        list.pilots?.filter((pilot) =>
          pilotName(pilot, list)?.toLowerCase().includes(needle)
        ).length > 0
    )
  // .filter((list) => {
  //   if (Object.keys(filters).length === 0) {
  //     return true;
  //   }
  //   return filters[list.faction] || filters[list.format];
  // })
  // .filter((list) => {
  //   if (tags.length === 0) {
  //     return true;
  //   }
  //   if (
  //     tags.length > 0 &&
  //     tags.filter((tag) => (list.vendor.lbn.tags || []).includes(tag))
  //       .length === 0
  //   ) {
  //     return false;
  //   }
  //   return true;
  // });

  const renderItem: RenderItem<XWS> = ({ item, drag }) => (
    <SquadronComponent
      key={item.vendor.lbn.uid}
      item={item}
      onPress={() => {
        navigation.navigate('Squadron', { uid: item.vendor.lbn.uid });
      }}
      drag={drag}
    />
  );

  return (
    <SafeAreaView style={tw`flex-1`}>

      <DraggableFlatList
        contentContainerStyle={tw`py-2 px-2`}
        data={filtered || []}
        keyExtractor={(l: XWS) => l.vendor.lbn.uid}
        onDragBegin={() => { }}
        onDragEnd={({ from, to }: any) => {
          if (from !== to) {
            // setFirstSorting('Custom');
            // setSecondSorting('Custom');
          }

          if (filtered && stateLists) {
            const index = stateLists?.indexOf(filtered[from]);
            const delta = to - from;
            const newLists = move(stateLists, index, index + delta);
            setStateLists(newLists);
            setLists([...newLists]);
          }
        }}
        ListEmptyComponent={() => (
          <View style={tw`items-center justify-center flex-1 h-screen`}>
            <Text style={tw`text-zinc-500 text-lg`}>No squadrons found</Text>
          </View>
        )}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={tw`bg-orange-500 h-12 w-12 rounded-full absolute bottom-4 right-2 items-center justify-center`}
        onPress={async () => {
          const uid = await SheetManager.show('CreateSquadronSheet', { payload: { ruleset: 'xwa' } });
          if (uid === 'scanQR') {
            SheetManager.show('ScanQRCodeSheet');
          } else if (uid) {
            navigation.navigate('Squadron', { uid });
          }

        }}
      >
        <Feather name="plus" color={'white'} size={36} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SquadronsScreen;
