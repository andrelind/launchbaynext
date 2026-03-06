import amgConditions from 'lbn-core/src/assets/amg/conditions';
import legacyConditions from 'lbn-core/src/assets/legacy/conditions';
import xwaConditions from 'lbn-core/src/assets/xwa/conditions';
import { factionKeys } from 'lbn-core/src/helpers/enums';
import { Condition, Slot, Upgrade } from 'lbn-core/src/types';
import React, { FC, ReactNode, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// Build a merged condition lookup, preferring entries that have images
const allConditionsRaw: Condition[] = [...amgConditions, ...legacyConditions, ...xwaConditions];
const conditionsMap = new Map<string, Condition>();
for (const c of allConditionsRaw) {
  const existing = conditionsMap.get(c.xws);
  if (!existing || (!existing.image && c.image)) {
    conditionsMap.set(c.xws, c);
  }
}

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
  onConditionPress?: (uri: { uri?: string }) => void;
};

export const UpgradeComponent: FC<Props> = ({
  upgrade,
  slot,
  side,
  showFactions,
  showRestrictions,
  onPress,
  onImagePress,
  onConditionPress,
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
              icons={[f]}
              color={colorForFactionKey(f, true)}
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

  const art = upgradeArtUri(upgradeSide);
  const showImage = !standardLoadout && upgradeArtUri(upgradeSide);

  console.log(upgradeSide?.title, art);

  return (
    <View style={tw`flex-row`}>
      {showImage && (
        <TouchableOpacity
          style={tw`w-20 rounded-l-lg overflow-hidden`}
          activeOpacity={showImage ? 0.7 : 1}
          onPress={() => onImagePress?.(upgradeCardUri(upgradeSide))}
        >
          <ImageComponent
            transition={300}
            style={tw`w-20 h-full justify-end rounded-l-lg bg-zinc-700 flex-1`}
            uri={art}
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
                <Text style={tw`font-semibold text-sm text-black dark:text-white`}>
                  {attack.minrange !== attack.maxrange &&
                    `${attack.minrange}-${attack.maxrange}`}
                  {attack.minrange === attack.maxrange && `${attack.minrange}`}
                </Text>
              </View>
            )}
            {grants && <Grants grants={grants} />}
          </View>
          {showRestrictions && upgrade.restrictions && (
            <Text style={tw`mx-2 flex-row items-center text-zinc-900 dark:text-zinc-100`}>{restrictions()}</Text>
          )}
          {upgradeSide.conditions && upgradeSide.conditions.length > 0 && (
            <View style={tw`flex-row flex-wrap gap-1 mx-2 mb-1`}>
              {upgradeSide.conditions.map((cxws) => {
                const cond = conditionsMap.get(cxws);
                if (!cond) return null;
                return (
                  <TouchableOpacity
                    key={cxws}
                    style={tw`px-2 py-0.5 bg-zinc-200 dark:bg-zinc-600 rounded-full`}
                    activeOpacity={cond.image ? 0.7 : 1}
                    onPress={() => {
                      if (cond.image) {
                        onConditionPress?.({ uri: cond.image });
                      }
                    }}
                  >
                    <Text style={tw`text-xs text-zinc-800 dark:text-zinc-200`}>{cond.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
