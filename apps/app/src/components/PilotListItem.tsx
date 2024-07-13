import { BlurView } from 'expo-blur';
import { RuleSet } from 'lbn-core/src';
import { TShip, getStandardLoadout } from 'lbn-core/src/helpers/loading';
import { Pilot } from 'lbn-core/src/types';
import { FC } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useTailwind } from '../helpers/tailwind';
import ActionsComponent from './Actions';
import FormattedText from './FormattedText';
import { ImageComponent } from './Image';
import ShipStats from './ShipStats';
import { XWingFont } from './fonts/XWingIcon';

type Props = {
  pilot: Pilot;
  ship: TShip;
  ruleset: RuleSet;
  count?: number;
  slim?: boolean;
};

export const PilotListItem: FC<Props> = ({ pilot, ship, count, slim, ruleset }) => {
  const { tw } = useTailwind();

  pilot?.standardLoadout && !pilot?.upgrades && getStandardLoadout({ ruleset }, pilot);

  const upgradesCost =
    pilot?.upgrades?.map((u) => u.finalCost)?.reduce((a, b) => a + b, 0) || 0;

  return (
    <Animated.View entering={FadeIn} style={tw`flex flex-1`}>
      <View style={tw`flex bg-white dark:bg-zinc-800 rounded-lg pb-1 gap-y-1`}>
        <ImageComponent
          transition={300}
          uri={{ uri: pilot.artwork }}
          style={tw`${slim ? 'h-24' : 'h-30'
            }  w-full rounded-t-lg justify-end bg-zinc-800`}
        >
          <BlurView tint="dark" style={tw` px-2 py-0.5`}>
            <View
              style={tw`flex flex-row items-center justify-between bg-transparent`}
            >
              <View style={tw`flex flex-row items-center gap-x-2`}>
                {!slim && <ShipStats initiative={pilot?.initiative || 0} />}
                <View>
                  <Text style={tw`font-bold text-white`}>
                    {pilot &&
                      pilot?.limited > 0 &&
                      `${'•'.repeat(pilot?.limited)} `}
                    {pilot?.name}
                    {count !== undefined && (
                      <Text
                        style={tw`pl-2 font-normal text-gray-400`}
                      >{` (${count})`}</Text>
                    )}
                  </Text>
                  {pilot?.caption && (
                    // (slim ? pilot?.caption?.length <= 20 : true) && (
                    <Text style={tw`italic text-white`}>{pilot?.caption}</Text>
                  )}
                </View>

                {!slim && (
                  <ShipStats
                    horizontal
                    engagement={pilot?.engagement}
                    force={pilot?.force}
                    charges={pilot?.charges}
                  />
                )}
              </View>

              <View style={tw`flex flex-row items-center`}>
                <View>
                  <Text style={tw`ml-2 font-bold text-right text-white`}>
                    {ruleset === 'legacy' ? ship?.pointsWithUpgrades : pilot?.cost}
                  </Text>

                  {pilot.loadout !== undefined &&
                    <>
                      {!pilot?.standardLoadout && !slim && (
                        <Text
                          style={tw`ml-2 text-white`}
                        >{`Loadout ${pilot?.loadout}`}</Text>
                      )}
                      {!pilot?.standardLoadout && pilot.loadout && slim && (
                        <Text
                          style={tw`ml-2 text-white`}
                        >{`${upgradesCost}/${pilot?.loadout}`}</Text>
                      )}
                    </>}
                </View>
              </View>
            </View>
          </BlurView>
        </ImageComponent>

        {!slim && (
          <View style={tw`flex-row mx-2`}>
            {pilot?.ability && (
              <FormattedText style={tw`flex-1 dark:text-white`} text={pilot?.ability} />
            )}

            {!pilot?.ability && pilot?.text && (
              <FormattedText style={tw`flex-1 italic dark:text-white`} text={pilot?.text} />
            )}

            {pilot?.shipActions && (
              <ActionsComponent actions={pilot.shipActions} />
            )}
          </View>
        )}

        <View style={tw`mx-2`}>
          {pilot.slots && pilot.slots?.length > 0 && !slim && (
            <XWingFont size={5} icons={pilot.slots} style={tw`text-black dark:text-white`} />
          )}

          {(pilot?.upgrades?.length || 0) > 0 && (
            <Text style={tw`italic text-zinc-500 dark:text-zinc-400`}>
              {pilot?.upgrades?.map((u) => u.sides[0].title).join(', ')}
            </Text>
          )}

          {(pilot?.upgrades?.length || 0) === 0 && slim && (
            <Text style={tw`italic text-zinc-500 dark:text-zinc-400`}>No upgrades equipped</Text>
          )}
        </View>
      </View>
    </Animated.View>
  );
};
