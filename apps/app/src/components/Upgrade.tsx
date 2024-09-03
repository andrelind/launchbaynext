import { keyFromFaction } from 'lbn-core/src/helpers/convert';
import { factionKeys } from 'lbn-core/src/helpers/enums';
import { Slot, Upgrade } from 'lbn-core/src/types';
import React, { FC, ReactNode, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colorForDifficulty, colorForFactionKey } from '../helpers/colors';
import { upgradeArtUri, upgradeCardUri } from '../helpers/images';
import { getUpgradeCost } from '../helpers/select';
import { useTailwind } from '../helpers/tailwind';
import { red } from '../theme';
import FormattedText from './FormattedText';
import Grants from './Grants';
import { ImageComponent } from './Image';
import StatsComponent, { colorForStat } from './ShipStats';
import { ShipFont } from './fonts/ShipIcon';
import { XWingFont } from './fonts/XWingIcon';

type Props = {
  upgrade?: Upgrade;
  slot?: Slot;
  side?: number;
  count?: number;
  standardLoadout?: boolean;
  limitWarning?: boolean;
  showFactions?: boolean;
  showRestrictions?: boolean;
  onPress?: () => void;
  onImagePress?: (uri?: { uri?: string }) => void;
};

export const UpgradeComponent: FC<Props> = ({
  upgrade,
  slot,
  side,
  showFactions,
  showRestrictions,
  onPress,
  onImagePress,
  count,
  standardLoadout,
}) => {
  const { tw } = useTailwind();

  const restrictions = useCallback(() => {
    const res: (string | ReactNode)[] = [];
    if (upgrade?.standarized) {
      res.push('Standarized');
    }
    for (const r of upgrade?.restrictions || []) {
      if (r.action) {
        res.push(
          <XWingFont
            key={r.action.type}
            icons={[r.action.type]}
            color={colorForDifficulty(r.action.difficulty)}
            size={5}
          />
        );
      }
      if (r.arcs) {
        for (const arc of r.arcs) {
          res.push(<XWingFont key={arc} icons={[arc]} size={5} />);
        }
      }
      if (r.baseSizes) {
        for (const s of r.baseSizes) {
          res.push(<XWingFont key={s} icons={[`base${s}`]} size={5} />);
        }
      }
      if (r.character) {
        r.character.forEach((c) => res.push(c));
      }
      if (r.chassis) {
        r.chassis.forEach((c) =>
          res.push(<ShipFont key={c} icons={[c]} size={5} />)
        );
      }
      if (r.equipped) {
        res.push(`Equipped ${r.equipped.join(', ')}`);
      }
      if (r.factions) {
        for (const f of r.factions) {
          res.push(
            <XWingFont
              key={f}
              icons={[keyFromFaction(f)]}
              color={colorForFactionKey(keyFromFaction(f), true)}
              size={5}
            />
          );
        }
      }
      if (r.initiative) {
        res.push(
          <Text key={'i'} style={tw`text-primary-500`}>
            {r.initiative.min && `Min I${r.initiative.min}`}
            {r.initiative.max && `Max I${r.initiative.max}`}
          </Text>
        );
      }
      if (r['non-limited']) {
        res.push('Non limited');
      }
      if (r.sides) {
        for (const s of r.sides) {
          if (s === 'dark') {
            res.push('Dark Side');
          } else if (s === 'light') {
            res.push('Light Side');
          }
        }
      }
      if (r.solitary) {
        res.push('Solitary');
      }
      if (r.stat) {
        res.push(
          <View style={tw`flex-row items-center`}>
            <XWingFont
              key={r.stat.type}
              color={colorForStat(r.stat.type)}
              icons={[r.stat.type]}
              size={5}
            />

            <Text style={tw`text-[${colorForStat(r.stat.type)!}]`}>
              {r.stat.value}
            </Text>
          </View>
        );
      }
      if (r.keywords) {
        res.push(r.keywords.join(', '));
      }
    }

    return res;
  }, [upgrade?.restrictions, upgrade?.standarized]);

  if (!upgrade && slot) {
    return (
      <TouchableOpacity
        style={tw`p-2 flex-row items-center rounded-lg bg-white dark:bg-zinc-800`}
        onPress={onPress}
      >
        <XWingFont icons={[slot]} size={6} />
        <Text style={tw`ml-2 text-sm dark:text-white`}>{slot}</Text>
      </TouchableOpacity>
    );
  }

  if (!upgrade) {
    return null;
  }

  const upgradeSide = upgrade?.sides[side || 0];
  const { attack, device, grants } = upgradeSide;

  const showImage = !standardLoadout && upgradeArtUri(upgradeSide);

  return (
    <View style={tw`flex-row`}>
      {showImage && (
        <TouchableOpacity
          activeOpacity={showImage ? 0.7 : 1}
          onPress={() => onImagePress?.(upgradeCardUri(upgradeSide))}
        >
          <ImageComponent
            recyclingKey={upgradeArtUri(upgradeSide)?.uri}
            transition={300}
            style={tw`w-20 h-full justify-end rounded-l-lg bg-zinc-700 flex-1`}
            uri={upgradeArtUri(upgradeSide)}
          />
        </TouchableOpacity>
      )}
      <View style={tw`flex-1`}>
        <View
          style={tw`flex flex-1 flex-row items-center justify-between px-2 py-0.5 bg-zinc-800 dark:bg-zinc-700 ${showImage ? 'rounded-tr-lg' : 'rounded-t-lg'
            }`}
        >
          <View style={tw`flex-1 flex-row items-center justify-between`}>
            <View
              style={tw`flex-row items-center justify-between gap-x-1 flex-1`}
            >
              <View style={tw`flex-row`}>
                {upgradeSide?.slots.map((s, i) => (
                  <XWingFont
                    key={`${s}_${i}`}
                    color={'#fff'}
                    icons={[s]}
                    size={6}
                  />
                ))}
              </View>

              <View style={tw`flex-1 flex-row items-center gap-x-2`}>
                <View style={tw`flex-1 flex-row items-center justify-center gap-x-1`}>

                  <Text style={tw`font-bold text-white dark:text-white flex-1 text-center`}>
                    {upgrade.limited > 0 && `${'•'.repeat(upgrade.limited)} `}
                    {upgradeSide?.title}
                    {Boolean(count) && <Text style={tw``}>{` (${count})`}</Text>}
                  </Text>
                  <StatsComponent
                    charges={upgradeSide?.charges}
                    force={upgradeSide?.force}
                  />
                </View>
              </View>

              {!standardLoadout && (
                <Text style={tw`text-white dark:text-white font-bold text-sm`}>
                  {upgrade?.finalCost === -1
                    ? getUpgradeCost(upgrade?.cost)
                    : upgrade?.finalCost}
                </Text>
              )}
              {standardLoadout && <View style={tw`w-2`} />}
            </View>
          </View>
        </View>

        <View
          // activeOpacity={showImage ? 0.7 : 1}
          style={tw`bg-white dark:bg-zinc-800 ${showImage ? 'rounded-br-lg' : 'rounded-b-lg'
            }  pb-1`}
        // onPress={onPress}
        >
          {showFactions &&
            factionKeys?.map((f) => (
              <XWingFont
                key={f}
                color={colorForFactionKey(f)}
                icons={[f]}
                size={5}
              />
            ))}

          <View style={tw`${device ? 'flex' : 'flex-row'} mx-2 py-1 gap-1`}>
            {upgradeSide.ability && (
              <FormattedText style={tw`flex-1 text-black dark:text-white`} text={upgradeSide.ability} />
            )}
            {upgradeSide.text && (
              <FormattedText
                style={tw`flex-1 italic text-black dark:text-white`}
                text={upgradeSide.text}
              />
            )}

            {device && (
              <FormattedText
                style={tw`mt-2 text-black dark:text-white`}
                text={`<strong>Effect:</strong> ${device.effect}`}
              />
            )}

            {attack && (
              <View style={tw`flex-col items-center ml-2`}>
                {attack && attack.ordnance && (
                  <XWingFont icons={['ordnance']} size={5} />
                )}
                <Text>
                  <XWingFont icons={[attack.arc]} size={5} color={red} />
                  <Text style={tw`font-bold text-sm text-[${red}]`}>
                    {attack.value}
                  </Text>
                </Text>
                <Text style={tw`font-semibold text-sm`}>
                  {attack.minrange !== attack.maxrange &&
                    `${attack.minrange}-${attack.maxrange}`}
                  {attack.minrange === attack.maxrange && `${attack.minrange}`}
                </Text>
              </View>
            )}
            {grants && <Grants grants={grants} />}
          </View>
          {showRestrictions && upgrade.restrictions && (
            <Text style={tw`mx-2 flex-row items-center`}>{restrictions()}</Text>
          )}
        </View>
      </View>
    </View>
  );
};
