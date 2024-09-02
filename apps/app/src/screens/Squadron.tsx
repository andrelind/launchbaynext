import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import { TShip, loadShip2 } from 'lbn-core/src/helpers/loading';
import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import Dialog from 'react-native-dialog';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { PilotListItem } from '../components/PilotListItem';
import { ExportSquadronSheetId } from '../components/sheets/exportSquadron';
import {
  PilotActionSheetId
} from '../components/sheets/pilotActions';
import {
  SelectFormatSheetId
} from '../components/sheets/selectFormat';
import { smooth } from '../helpers/animation';
import Assets from '../helpers/assets';
import { useAvailability } from '../helpers/collection';
import { colorForFormat } from '../helpers/colors';
import { useTailwind } from '../helpers/tailwind';
import { xwsStore } from '../stores/xws';
import { blue, orange, red } from '../theme';
import { ListStackParams } from '../types/navigation';

type EShip = TShip & { key: string };

type Props = NativeStackScreenProps<ListStackParams, 'Squadron'>;

export const SquadronScreen: FC<Props> = ({ route, navigation }) => {
  const { uid } = route.params;

  const { tw } = useTailwind();
  const { width } = useWindowDimensions()

  const { xws, setFormat, setRuleset, setName, setWins, setTies, setLosses, setTags } =
    xwsStore((s) => ({
      xws: s.lists?.find((l) => l.vendor.lbn.uid === uid),
      setFormat: s.setFormat,
      setRuleset: s.setRuleset,
      setName: s.setName,
      setWins: s.setWins,
      setTies: s.setTies,
      setLosses: s.setLosses,
      setTags: s.setTags,
    }));

  const [page, setPage] = useState(0);

  const listRef = useRef<FlashList<EShip>>(null);
  const [columns, setColumns] = useState(1);

  const [showRename, setShowRename] = useState(false);
  const [tempName, setTempName] = useState<string | undefined>(
    xws?.name !== 'New Squadron' ? xws?.name : undefined
  );

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

  // useLayoutEffect(() => {
  //   const missingItems =
  //     available.ships?.filter((a) => a.count < 0)?.length > 0 ||
  //     available.upgrades?.filter((a) => a.count < 0)?.length > 0;

  //   setHasMissingItems(missingItems);
  // }, [available]);

  if (!xws) {
    return <View />;
  }

  // useNavigationButtonPress(e => {
  //   switch (e.buttonId) {
  //     case 'calc': {
  //       return Navigation.showModal({
  //         component: {
  //           name: 'Calculator',
  //           passProps: { uid },
  //         },
  //       });
  //     }
  //     case 'share': {
  //       return Navigation.showModal({
  //         component: {
  //           name: 'Export',
  //           passProps: { xws, onMessage: setMessage },
  //         },
  //       });
  //     }
  // }, componentId);

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
              listRef?.current?.prepareForLayoutAnimationRender();
              smooth();
              setColumns(columns === 2 ? 1 : 2);
            }}
          >
            <Feather
              name={columns === 2 ? 'list' : 'grid'}
              style={tw`text-primary-500`}
              size={24}
            />
          </TouchableOpacity>
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
  }, [xws?.name, xws?.points, columns]);

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

  const renderFooter = () => (
    <View style={tw`px-2 gap-y-6 py-3`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-sm text-white`}>Name</Text>
        <Button
          title={xws?.name}
          color={orange}
          onPress={() => {
            Platform.OS === 'ios'
              ? Alert.prompt(
                'Change name',
                'Please type in the new name of this squadron',
                (text) => setName(uid, text),
                undefined,
                xws?.name !== 'New Squadron' ? xws?.name : undefined
              )
              : setShowRename(true);
          }}
        />
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-sm text-white`}>Ruleset</Text>
        <Button
          title={xws?.ruleset || 'amg'}
          color={blue}
          onPress={() => {
            Alert.alert('Change ruleset', 'Do you want to change the ruleset?', [
              {
                text: 'X-Wing Alliance',
                onPress: () => setRuleset(uid, 'xwa'),
              },
              {
                text: '2.0 Legacy',
                onPress: () => setRuleset(uid, 'legacy'),
              },
              {
                text: 'AMG',
                onPress: () => setRuleset(uid, 'amg'),
              },
              {
                text: 'Cancel',
                style: 'cancel',
              }
            ]);
          }}
        />
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-sm text-white`}>Format</Text>
        <Button
          title={xws?.format || 'Extended'}
          color={colorForFormat(xws?.format || 'Extended')}
          onPress={() => {
            SheetManager.show<'SelectFormatSheet'>(SelectFormatSheetId, { payload: { uid } });
          }}
        />
      </View>
      <View style={tw``}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-bold text-sm text-white`}>Obstacles</Text>
          <Button
            title="Edit"
            color={tw.color('primary-500')}
            onPress={() => {
              SheetManager.show('SelectObstaclesSheet', { payload: { uid } });
            }}
          />
        </View>
        <View style={tw`flex-row gap-x-2`}>
          {xws?.obstacles?.map((o, i) => (
            <Image
              transition={300}
              key={`${o}_${i}`}
              style={tw`h-12 w-12 rounded-lg`}
              source={Assets.obstacles[o]}
            />
          ))}
        </View>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-sm text-white`}>Tags</Text>
        <Button
          title="Edit"
          color={tw.color('primary-500')}
          onPress={() => {
            SheetManager.show('SelectTagsSheet', { payload: { uid } });
          }}
        />
      </View>

      <View style={tw`px-2 flex-row gap-x-2 items-center`}>
        {xws?.vendor.lbn.tags?.map((tag, i) => (
          <Text key={tag} style={tw`text-xs text-white`}>{tag}</Text>
        ))}
      </View>


      <View style={tw`flex-row justify-around`}>
        <View style={tw`items-center w-1/4`}>
          <TouchableOpacity
            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
            onPress={() => setWins(uid, (xws?.vendor.lbn.wins || 0) + 1)}
          >
            <Text style={tw`text-lg text-white`}>+</Text>
          </TouchableOpacity>
          <Text style={tw`text-white font-bold my-2`}>
            Wins {xws?.vendor.lbn.wins || 0}
          </Text>
          <TouchableOpacity
            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
            onPress={() => setWins(uid, (xws?.vendor.lbn.wins || 0) - 1)}
          >
            <Text style={tw`text-lg text-white`}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`items-center w-1/4`}>
          <TouchableOpacity
            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
            onPress={() => setTies(uid, (xws?.vendor.lbn.ties || 0) + 1)}
          >
            <Text style={tw`text-lg text-white`}>+</Text>
          </TouchableOpacity>
          <Text style={tw`text-white font-bold my-2`}>
            Ties {xws?.vendor.lbn.ties || 0}
          </Text>
          <TouchableOpacity
            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
            onPress={() => setTies(uid, (xws?.vendor.lbn.ties || 0) - 1)}
          >
            <Text style={tw`text-lg text-white`}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`items-center w-1/4`}>
          <TouchableOpacity
            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
            onPress={() => setLosses(uid, (xws?.vendor.lbn.losses || 0) + 1)}
          >
            <Text style={tw`text-lg text-white`}>+</Text>
          </TouchableOpacity>
          <Text style={tw`text-white font-bold my-2`}>
            Losses {xws?.vendor.lbn.losses || 0}
          </Text>
          <TouchableOpacity
            style={tw`rounded-full border-gray-500 border-2 h-10 w-10 items-center justify-center`}
            onPress={() => setLosses(uid, (xws?.vendor.lbn.losses || 0) - 1)}
          >
            <Text style={tw`text-lg text-white`}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (!ships || !xws) {
    return <View />;
  }

  return (
    <View style={tw`flex flex-1`}>
      {renderHeader()}

      <ScrollView style={tw`flex-1`} horizontal pagingEnabled showsHorizontalScrollIndicator={false}
        onScroll={e => {
          if (e.nativeEvent.contentOffset.x > (width / 2)) {
            setPage(1)
          } else {
            setPage(0)
          }
        }}>
        <View style={tw`w-screen`}>
          <FlashList
            ref={listRef}
            numColumns={columns}
            data={ships || []}
            estimatedItemSize={138}
            keyExtractor={(l: EShip) => l.key}
            contentContainerStyle={tw`px-2 py-2`}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={tw`flex-1 p-1`}
                onPress={() => {
                  navigation.navigate('Pilot', {
                    uid,
                    pilotIndex: index || 0,
                    factionKey: xws?.faction,
                  });
                }}
                onLongPress={async () => SheetManager.show<'PilotActionSheet'>(PilotActionSheetId, {
                  payload: { uid, pilotIndex: index },
                })
                }
              >
                <PilotListItem key={item.key} pilot={item?.pilot!} ship={item} ruleset={xws?.ruleset} slim />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={tw`h-2`} />}
          />
        </View>

        <ScrollView style={tw`flex flex-1 w-screen`}>
          {renderFooter()}
        </ScrollView>
      </ScrollView>

      <View style={tw`items-center flex-row justify-center gap-x-2 mb-2`}>
        <View
          style={tw`${page === 0 || page > 1000 ? 'bg-zinc-500' : 'border border-zinc-500'} rounded-full h-3 w-3`}
        />
        <View
          style={tw`${page === 1 ? 'bg-zinc-500' : 'border border-zinc-500'} rounded-full h-3 w-3`}
        />
      </View>

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

      <Dialog.Container visible={showRename}>
        <Dialog.Title>Change name</Dialog.Title>
        <Dialog.Description>
          Please type in the new name of the squadron
        </Dialog.Description>
        <Dialog.Input value={tempName} onChangeText={setTempName} />
        <Dialog.Button label="Cancel" onPress={() => setShowRename(false)} />
        <Dialog.Button
          label="OK"
          onPress={() => {
            setName(uid, tempName || '');
            setTempName(undefined);
            setShowRename(false);
          }}
        />
      </Dialog.Container>
    </View>
  );
};



export default SquadronScreen;
