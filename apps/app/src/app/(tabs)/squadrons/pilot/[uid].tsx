import ActionsComponent from '@/src/components/Actions';
import Dial from '@/src/components/Dial';
import FormattedText from '@/src/components/FormattedText';
import { ImageComponent } from '@/src/components/Image';
import ShipStats from '@/src/components/ShipStats';
import { SwipeComponent } from '@/src/components/SwipeComponent';
import { UpgradeComponent } from '@/src/components/Upgrade';
import { useTailwind } from '@/src/helpers/tailwind';
import { useLoadoutStore } from '@/src/stores/loadout';
import { useXwsStore } from '@/src/stores/xws';
import { BlurView } from 'expo-blur';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { keyFromSlot } from 'lbn-core/src/helpers/convert';
import { loadShip2, loadUpgrades2 } from 'lbn-core/src/helpers/loading';
import { FactionKey, Slot } from 'lbn-core/src/types';
import React, { useState } from 'react';
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
    FadeOut
} from 'react-native-reanimated';

export default function PilotScreen() {
    const router = useRouter();
    const { uid, pilotIndex, factionKey } = useLocalSearchParams();

    const { tw } = useTailwind();
    const xws = useXwsStore((s) => s.lists?.find((l) => l.vendor.lbn.uid === uid));
    const pilot = xws?.pilots[parseInt(pilotIndex as string, 10)];

    const ship = pilot && loadShip2(pilot, xws);
    const upgrades = loadUpgrades2(ship, xws?.format);
    const setUpgrade = useXwsStore((s) => s.setUpgrade);

    const addLoadout = useLoadoutStore((s) => s.addLoadout);

    const [flipped, setFlipped] = useState<number[]>([]);
    const [showRename, setShowRename] = useState(false);
    const [tempName, setTempName] = useState<string | undefined>();

    const showHardpointPicker =
        !ship?.pilot?.standardLoadout &&
        ship?.ability?.slotOptions &&
        !ship?.ability?.slotOptions.find((sl) => ship?.upgrades?.[keyFromSlot(sl)]);

    const hardpointOptions: Slot[] = ship?.ability?.slotOptions || [];

    if (!ship?.pilot) {
        return null;
    }

    return (
        <ScrollView
            contentContainerStyle={tw`mt-2 gap-y-2 android:pb-30 ios:pb-2`}
            showsVerticalScrollIndicator={false}
        >
            <Animated.View entering={FadeInUp} style={tw`flex-1 mx-2`}>
                <View style={tw`flex bg-white dark:bg-zinc-800 rounded-lg pb-2 gap-y-2`}>
                    <TouchableOpacity
                        style={tw`overflow-hidden rounded-t-lg`}
                        activeOpacity={0.7}
                        onPress={() => {
                            router.push({
                                pathname: 'sheets/image',
                                params: { uri: ship?.pilot?.image, },
                            })
                        }}
                    >
                        <ImageComponent
                            uri={{ uri: ship?.pilot?.artwork }}
                            style={tw`h-40 w-full justify-end`}
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

                    {(ship?.pilot?.shipAbility || ship?.ability) && (
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
                                                    parseInt(pilotIndex as string, 10),
                                                    keyFromSlot(u.slot),
                                                    slotIndex
                                                );
                                            }
                                            : undefined
                                    }
                                    onPress={() => {
                                        router.push({
                                            pathname: `/upgrades`,
                                            params: {
                                                uid,
                                                index: parseInt(pilotIndex as string, 10),
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
                                                router.push({
                                                    pathname: 'sheets/image',
                                                    params: url,
                                                })
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
                            // layout={Layout.springify()}
                            exiting={FadeOut}
                        >
                            <UpgradeComponent
                                slot={u}
                                onPress={() => {
                                    router.push({
                                        pathname: `/upgrades`,
                                        params: {
                                            uid,
                                            index: parseInt(pilotIndex as string, 10),
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
                                        router.push({
                                            pathname: `/upgrades`,
                                            params: {
                                                uid,
                                                index: parseInt(pilotIndex as string, 10),
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

            {!ship?.pilot?.standardLoadout && Platform.OS !== 'ios' && (
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
                                            onPress: (name?: string) => {
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
                                                    factionKey as FactionKey,
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
                            router.push({
                                pathname: 'sheets/loadouts',
                                params: {
                                    uid,
                                    index: pilotIndex,
                                    faction: xws?.faction,
                                    shipXws: ship?.xws,
                                    pilotXws: ship?.pilot?.xws,
                                }
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
                            factionKey as FactionKey,
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

