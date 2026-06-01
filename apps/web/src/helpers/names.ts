import { getFaction } from 'lbn-core/src/helpers/convert';
import type { FactionKey, GameData, PilotXWS, SlotKey } from 'lbn-core/src/types';

let pilots: { [s: string]: string } = {};
let upgrades: { [s: string]: string } = {};

export const pilotName = (pilot: PilotXWS, faction: FactionKey, gameData?: GameData) => {
  if (pilots[pilot.id]) {
    return pilots[pilot.id];
  }

  const factionPilots = gameData?.pilots[getFaction(faction)] ?? {};
  const ship = factionPilots[pilot.ship];
  const p = ship?.pilots.find(pp => pp.xws === pilot.id);
  if (p) {
    pilots[pilot.id] = p.name;
  }
  return pilots[pilot.id];
};

export const upgradeName = (xws: string, slotKey: SlotKey, gameData?: GameData) => {
  if (upgrades[xws]) {
    return upgrades[xws];
  }

  const upgradeList = gameData?.upgrades[slotKey] ?? [];
  const upgrade = upgradeList.find(u => u.xws === xws);
  if (upgrade) {
    upgrades[xws] = upgrade.sides[0].title;
  }

  return upgrades[xws];
};
