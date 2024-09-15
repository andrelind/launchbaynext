import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import { keyFromSlot } from 'lbn-core/src/helpers/convert';
import { loadShip2, loadUpgrades2 } from 'lbn-core/src/helpers/loading';
import { Slot } from 'lbn-core/src/types';
import React, { FC, useLayoutEffect, useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Dialog from 'react-native-dialog';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  Layout,
} from 'react-native-reanimated';
import { ActionsComponent } from '../components/Actions';
import Dial from '../components/Dial';
import FormattedText from '../components/FormattedText';
import { ImageComponent } from '../components/Image';
import ShipStats from '../components/ShipStats';
import { SwipeComponent } from '../components/SwipeComponent';
import { UpgradeComponent } from '../components/Upgrade';
import { useTailwind } from '../helpers/tailwind';
import { loadoutStore } from '../stores/loadout';
import { xwsStore } from '../stores/xws';
import { ListStackParams } from '../types/navigation';

type Props = NativeStackScreenProps<ListStackParams, 'Pilot'>;

export const PilotScreen: FC<Props> = ({ route, navigation }) => {
  const { uid, pilotIndex, factionKey } = route.params;

  const { tw } = useTailwind();
  const xws = xwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
  const pilot = xws?.pilots[pilotIndex];

  const ship = pilot && loadShip2(pilot, xws);
  const upgrades = loadUpgrades2(ship, xws?.format);
  const setUpgrade = xwsStore((s) => s.setUpgrade);

  const addLoadout = loadoutStore((s) => s.addLoadout);

  const [flipped, setFlipped] = useState<number[]>([]);
  const [showRename, setShowRename] = useState(false);
  const [tempName, setTempName] = useState<string | undefined>();

  const showHardpointPicker =
    ship?.ability?.slotOptions &&
    !ship?.ability?.slotOptions.find((sl) => ship?.upgrades?.[keyFromSlot(sl)]);

  const hardpointOptions: Slot[] = ship?.ability?.slotOptions || [];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={tw`items-center`}>
          <Text style={tw`text-base font-bold text-white`}>
            {ship?.pilot?.name}
          </Text>

          {xws?.ruleset.includes('legacy') && (
            <Text style={tw`text-sm text-gray-300 -mt-1`}>
              {`${(xws?.points)}/200`}
            </Text>
          )}

          {(xws?.ruleset.includes('xwa') || xws?.ruleset.includes('amg')) && !ship?.pilot?.standardLoadout && (
            <Text style={tw`text-sm text-zinc-300 -mt-1`}>
              {`Loadout ${(ship?.pointsWithUpgrades || 0) - (ship?.pilot?.cost || 0)
                }/${ship?.pilot?.loadout}`}
            </Text>
          )}
        </View>
      ),
      headerRight: () => {
        if (!ship) {
          return;
        }
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectModal', {
                screen: 'SelectPilot',
                params: { uid, shipXws: ship?.xws, pilotIndex },
              });
            }}
          >
            <Feather
              name="refresh-cw"
              size={20}
              color={tw.color('primary-500')}
            />
          </TouchableOpacity>
        );
      },
    });
  }, [ship?.pilot]);

  if (!ship?.pilot) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={tw`mt-2 gap-y-2 pb-2`}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View entering={FadeInUp} style={tw`flex-1 mx-2`}>
        <View style={tw`flex bg-white dark:bg-zinc-800 rounded-lg pb-2 gap-y-2`}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Image', {
                url: { uri: ship?.pilot?.image },
              });
            }}
          >
            <ImageComponent
              uri={{ uri: ship?.pilot?.artwork }}
              style={tw`h-40 w-full rounded-t-lg justify-end`}
            >
              <BlurView tint="dark" style={tw`px-2 py-0.5 rounded-t-lg`}>
                <View
                  style={tw`flex flex-row items-center justify-between bg-transparent`}
                >
                  <View
                    style={tw`flex flex-1 flex-row items-center gap-x-2 bg-transparent`}
                  >
                    <ShipStats initiative={ship?.pilot?.initiative || 0} />
                    <View>
                      <Text style={tw`font-bold text-white`}>
                        {ship?.pilot &&
                          ship?.pilot?.limited > 0 &&
                          `${'•'.repeat(ship?.pilot?.limited)} `}
                        {ship?.pilot?.name}
                      </Text>
                      {Boolean(ship?.pilot?.caption) && (
                        <Text style={tw`italic text-white`}>
                          {ship?.pilot?.caption}
                        </Text>
                      )}
                    </View>
                    <ShipStats
                      horizontal
                      engagement={ship?.pilot?.engagement}
                      force={ship?.pilot?.force}
                      charges={ship?.pilot?.charges}
                    />
                  </View>

                  <View style={tw`flex flex-row items-center bg-transparent`}>
                    <Text style={tw`ml-2 font-bold text-right text-white`}>
                      {xws?.ruleset.includes('legacy') ? ship?.pointsWithUpgrades : ship?.pilot?.cost}
                    </Text>
                  </View>
                </View>
              </BlurView>
            </ImageComponent>
          </TouchableOpacity>

          <View style={tw`flex-row mx-2`}>
            {ship?.pilot?.ability && (
              <FormattedText style={tw`text-black dark:text-white`} text={ship?.pilot?.ability} />
            )}

            {!ship?.pilot?.ability && ship?.pilot?.text && (
              <FormattedText style={tw`italic text-black dark:text-white`} text={ship?.pilot?.text} />
            )}
          </View>

          <View style={tw`flex-row justify-between items-center px-2`}>
            <ShipStats stats={ship?.pilot?.stats || ship?.stats} />
            <Dial dial={ship?.dial} />
            <ActionsComponent
              actions={ship?.pilot.shipActions || ship.actions}
            />
          </View>
          {ship?.pilot?.shipAbility && (
            <View style={tw`mx-2`}>
              <FormattedText
                style={tw`text-black dark:text-white`}
                text={`<strong>${ship?.pilot?.shipAbility?.name || ship?.ability?.name
                  }</strong>: ${ship?.pilot?.shipAbility?.text || ship?.ability?.text
                  }`}
              />
            </View>
          )}
        </View>
      </Animated.View>

      <View style={tw`gap-y-2`}>
        {!ship?.pilot?.standardLoadout &&
          upgrades
            ?.filter((u) => u.upgrade)
            .map((u, i) => {
              const equipped = upgrades.filter(
                (up) => up.slot === u.slot && up.upgrade
              );
              const slotIndex = equipped.findIndex((up) => up === u);

              // const getSlotIndex = () => {
              //   let slotIndex = 0;
              //   for (let j = 0; j < upgrades.length; j++) {
              //     if (upgrades[j]?.slot === u.slot) {
              //       if (j === i) {
              //         return slotIndex + 1;
              //       }
              //       slotIndex += 1;
              //     }
              //   }
              //   return 0;
              // };
              return (
                <SwipeComponent
                  showFlip
                  key={`${u.slot}_${i}_${u.upgrade?.xws}`}
                  onLeftAction={
                    u.upgrade?.sides?.length !== 1
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
                  onRightAction={
                    u.upgrade
                      ? () => {
                        setUpgrade(
                          xws!,
                          pilotIndex,
                          keyFromSlot(u.slot),
                          slotIndex
                        );
                      }
                      : undefined
                  }
                  onPress={() => {
                    navigation.navigate('SelectModal', {
                      screen: 'SelectUpgrade',
                      params: {
                        uid,
                        index: pilotIndex,
                        slot: u.slot,
                        slotIndex,
                        faction: factionKey,
                      },
                    });
                  }}
                >
                  <Animated.View
                    style={tw`w-full px-2`}
                    key={`${u.slot}_${i}_${u.upgrade?.xws}`}
                    entering={FadeIn.delay(i * 50 + 100)}
                    exiting={FadeOut}
                  >
                    <UpgradeComponent
                      side={flipped.includes(i) ? 1 : 0}
                      upgrade={u.upgrade}
                      slot={u.slot}
                      onImagePress={(url) => {
                        navigation.navigate('Image', { url });
                      }}
                    />
                  </Animated.View>
                </SwipeComponent>
              );
            })}

        {showHardpointPicker &&
          hardpointOptions.map((u) => (
            <Animated.View
              key={`hardpoint_${u}`}
              style={tw`w-full px-2`}
              entering={FadeIn}
              layout={Layout.springify()}
              exiting={FadeOut}
            >
              <UpgradeComponent
                slot={u}
                onPress={() => {
                  navigation.navigate('SelectModal', {
                    screen: 'SelectUpgrade',
                    params: {
                      uid,
                      index: pilotIndex,
                      slot: u,
                      slotIndex: 0,
                      faction: factionKey,
                    },
                  });
                }}
              />
            </Animated.View>
          ))}

        {ship?.pilot?.standardLoadout &&
          ship?.pilot?.upgrades?.map((u, i) => (
            <Animated.View
              key={`standard_${u.xws}_${i}`}
              style={tw`px-2`}
              entering={FadeIn}
              exiting={FadeOut}
            >
              <UpgradeComponent
                side={flipped.includes(i) ? 1 : 0}
                upgrade={{ ...u, finalCost: 0, available: 0 }}
                standardLoadout
              />
            </Animated.View>
          ))}
      </View>

      <View style={tw`gap-y-2 flex-row flex-wrap`}>
        {upgrades
          ?.filter((u) => !u.upgrade)
          .map((u, i) => {
            const equipped = upgrades.filter(
              (up) => up.slot === u.slot && up.upgrade
            );
            const slotIndex = equipped.length;

            return (
              <Animated.View
                style={tw`${'pl-2'}  `}
                key={`${u.slot}_${i}_ ${slotIndex}`}
                entering={FadeIn}
                exiting={FadeOut}
              >
                <UpgradeComponent
                  side={flipped.includes(i) ? 1 : 0}
                  upgrade={u.upgrade}
                  slot={u.slot}
                  onPress={() => {
                    navigation.navigate('SelectModal', {
                      screen: 'SelectUpgrade',
                      params: {
                        uid,
                        index: pilotIndex,
                        slot: u.slot,
                        slotIndex,
                        faction: factionKey,
                      },
                    });
                  }}
                />
              </Animated.View>
            );
          })}
      </View>

      {!ship?.pilot?.standardLoadout && (
        <View style={tw`flex-row items-center justify-between mx-2 mb-4`}>
          <Text style={tw`text-white dark:text-white font-bold text-sm`}>Loadouts</Text>
          <Button
            title="Save"
            color={tw.color('primary-500')}
            onPress={() => {
              Platform.OS === 'ios'
                ? Alert.prompt(
                  'Name of loadout',
                  'What do you want to call this loadout?',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    {
                      text: 'OK',
                      onPress: (name) => {
                        if (
                          !name ||
                          (name?.length || 0) === 0 ||
                          !ship ||
                          !ship.pilot
                        ) {
                          return;
                        }
                        addLoadout(
                          name,
                          factionKey,
                          ship?.xws,
                          ship?.pilot?.xws,
                          pilot?.upgrades
                        );
                      },
                    },
                  ]
                )
                : setShowRename(true);
            }}
          />
          <Button
            title="Load"
            color={tw.color('primary-500')}
            onPress={() => {
              navigation.navigate('SelectLoadout', {
                uid,
                index: pilotIndex,
                faction: factionKey,
                shipXws: ship?.xws,
                pilotXws: ship?.pilot?.xws,
              });
            }}
          />
        </View>
      )}

      <Dialog.Container visible={showRename}>
        <Dialog.Title style={tw`text-black`}>Name of loadout</Dialog.Title>
        <Dialog.Description style={tw`text-zinc-400`}>
          What do you want to call this loadout?
        </Dialog.Description>
        <Dialog.Input style={tw`text-black`} value={tempName} onChangeText={setTempName} />
        <Dialog.Button label="Cancel" onPress={() => setShowRename(false)} />
        <Dialog.Button
          label="OK"
          onPress={() => {
            if (
              !tempName ||
              (tempName?.length || 0) === 0 ||
              !ship ||
              !ship.pilot
            ) {
              return;
            }
            addLoadout(
              tempName,
              factionKey,
              ship?.xws,
              ship?.pilot?.xws,
              pilot?.upgrades
            );
            setTempName(undefined);
            setShowRename(false);
          }}
        />
      </Dialog.Container>
    </ScrollView>
  );
};

export default PilotScreen;
