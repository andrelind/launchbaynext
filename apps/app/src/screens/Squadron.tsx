import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TShip, loadShip2 } from 'lbn-core/src/helpers/loading';
import React, { FC, useLayoutEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { useShallow } from 'zustand/react/shallow';
import { PilotListItem } from '../components/PilotListItem';
import { ExportSquadronSheetId } from '../components/sheets/exportSquadron';
import { SwipeComponent } from '../components/SwipeComponent';
import { useAvailability } from '../helpers/collection';
import { useTailwind } from '../helpers/tailwind';
import { useXwsStore } from '../stores/xws';
import { red } from '../theme';
import { ListStackParams } from '../types/navigation';

type EShip = TShip & { key: string };

type Props = NativeStackScreenProps<ListStackParams, 'Squadron'>;

export const SquadronScreen: FC<Props> = ({ route, navigation }) => {
  const { uid } = route.params;

  const { tw } = useTailwind();

  const { xws, lists, setLists, copyShip, removeShip } =
    useXwsStore(useShallow((s) => ({
      xws: s.lists?.find((l) => l.vendor.lbn.uid === uid),
      lists: s.lists,
      setLists: s.setLists,
      copyShip: s.copyShip,
      removeShip: s.removeShip,
    })));

  // @ts-ignore
  const ships: EShip[] | undefined = xws?.pilots
    .map((p, i) => {
      try {
        return { key: `${p.id}_${i}`, ...loadShip2(p, xws) };
      } catch (error) {
        console.log(error);
      }
    })
    .filter((x) => x);

  const available = useAvailability(xws);
  const hasMissingItems =
    available.ships?.filter((a) => a.count < 0)?.length > 0 ||
    available.upgrades?.filter((a) => a.count < 0)?.length > 0;

  if (!xws) {
    return <View />;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={tw`items-center`}>
          <Text style={tw`text-base font-bold text-white`}>{xws?.name}</Text>
          <Text style={tw`text-sm text-gray-400 -mt-1`}>
            {xws?.points} points
          </Text>
        </View>
      ),
      headerRight: () => (
        <View style={tw`flex-row items-center justify-center`}>
          <TouchableOpacity
            style={tw`p-2`}
            onPress={() => {
              SheetManager.show(ExportSquadronSheetId, { payload: { xws } });
            }}
          >
            <Feather name="share" style={tw`text-primary-500`} size={24} />
          </TouchableOpacity>
        </View>
      ),

      title: xws?.name,
    });
  }, [xws?.name, xws?.points, xws?.version]);

  const renderHeader = () => (
    <View>
      {hasMissingItems && (
        <Animated.View
          entering={FadeIn}
          layout={Layout.springify()}
          exiting={FadeOut}
        >
          <TouchableOpacity
            style={tw`flex-row items-center justify-center p-4 gap-x-2 rounded-lg`}
            onPress={() => {
              navigation.navigate('MissingItems', { uid });
            }}
          >
            <Feather name="alert-triangle" size={24} color={red} />

            <Text style={tw`text-white`}>
              Not all items are available in the collection
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );


  if (!ships || !xws) {
    return <View />;
  }

  return (
    <View style={tw`flex-1`}>
      <DraggableFlatList
        style={tw`h-full`}
        contentContainerStyle={tw`px-2 py-2 pb-20`}
        data={ships || []}
        keyExtractor={(s: TShip, i: number) => `${s.xws}_${i}`}
        renderItem={({ item, getIndex, drag }) => {
          const index = getIndex() || 0;
          return (
            <SwipeComponent
              style={tw`p-1`}
              onPress={() => {
                navigation.navigate('Pilot', {
                  uid,
                  pilotIndex: index || 0,
                  factionKey: xws?.faction,
                });
              }}
              onLongPress={drag}
              onLeftAction={() => {
                copyShip(xws, index);
              }}
              onRightAction={() => {
                removeShip(xws, index);
              }}
            >
              <PilotListItem key={item.key} pilot={item?.pilot!} ship={item} ruleset={xws?.ruleset} slim />
            </SwipeComponent>
          )
        }}
        onDragBegin={() => {
          // Navigation.mergeOptions(componentId, {
          //   topBar: { visible: false },
          // });
        }}
        onDragEnd={({ from, to }: any) => {
          const copy = { ...xws! };
          const cutOut = copy.pilots!.splice(from, 1)[0];
          copy.pilots!.splice(to, 0, cutOut);
          lists?.splice(lists!.indexOf(xws!), 1, copy);
          setLists(lists!);

          // Navigation.mergeOptions(componentId, {
          //   topBar: { visible: true },
          // });
        }}
        // ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
      />

      <TouchableOpacity
        style={tw`bg-orange-500 h-12 w-12 rounded-full absolute bottom-4 left-2 items-center justify-center`}
        onPress={async () => {
          navigation.navigate('SelectModal', {
            screen: 'SquadronSettings',
            params: { uid },
          });
        }}
      >
        <Feather name="settings" color={'white'} size={26} />
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-orange-500 h-12 w-12 rounded-full absolute bottom-4 right-2 items-center justify-center`}
        onPress={async () => {
          navigation.navigate('SelectModal', {
            screen: 'SelectShip',
            params: { uid },
          });
        }}
      >
        <Feather name="plus" color={'white'} size={36} />
      </TouchableOpacity>


    </View>
  );
};



export default SquadronScreen;
