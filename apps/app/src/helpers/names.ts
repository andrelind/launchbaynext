import { RuleSet, assets } from 'lbn-core/src';
import { getFaction } from 'lbn-core/src/helpers/convert';
import { FactionKey, GameData, PilotXWS, SlotKey } from 'lbn-core/src/types';
import { useGameDataStore } from '../stores/gameData';

let pilots: { [s: string]: string } = {};
let upgrades: { [s: string]: string } = {};

export const pilotName = (
  pilot: PilotXWS,
  xws: { faction: FactionKey; ruleset: RuleSet },
  gameData?: GameData | null,
) => {
  if (pilots[pilot.id]) {
    return pilots[pilot.id];
  }

  const gd = gameData ?? useGameDataStore.getState().data;
  const faction = getFaction(xws.faction);
  const ship = gd?.pilots[faction]?.[pilot.ship] ?? assets[xws.ruleset].pilots[faction][pilot.ship];
  const p = ship?.pilots.find(pp => pp.xws === pilot.id);
  if (p) {
    pilots[pilot.id] = p.name;
  }
  return pilots[pilot.id];
};

export const upgradeName = (xws: string, slotKey: SlotKey, ruleset: RuleSet, gameData?: GameData | null) => {
  if (upgrades[xws]) {
    return upgrades[xws];
  }

  const gd = gameData ?? useGameDataStore.getState().data;
  const upgradeList = gd?.upgrades[slotKey] ?? assets[ruleset].upgrades[slotKey];
  const upgrade = upgradeList.find(u => u.xws === xws);
  if (upgrade) {
    upgrades[xws] = upgrade.sides[0].title;
  }

  return upgrades[xws];
};
