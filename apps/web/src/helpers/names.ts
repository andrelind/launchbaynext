import pilotData from 'lbn-core/src/assets/xwa/pilots';
import upgradeData from 'lbn-core/src/assets/xwa/upgrades';
import { getFaction } from 'lbn-core/src/helpers/convert';
import type { FactionKey, PilotXWS, SlotKey } from 'lbn-core/src/types';


let pilots: { [s: string]: string } = {};
let upgrades: { [s: string]: string } = {};

export const pilotName = (pilot: PilotXWS, faction: FactionKey) => {
  if (pilots[pilot.id]) {
    return pilots[pilot.id];
  }

  const ship = pilotData[getFaction(faction)][pilot.ship];
  const p = ship?.pilots.find((pp) => pp.xws === pilot.id);
  if (p) {
    pilots[pilot.id] = p.name;
  }
  return pilots[pilot.id];
};

export const upgradeName = (xws: string, slotKey: SlotKey) => {
  if (upgrades[xws]) {
    return upgrades[xws];
  }

  const upgrade = upgradeData[slotKey].find((u) => u.xws === xws);
  if (upgrade) {
    upgrades[xws] = upgrade.sides[0].title;
  }

  return upgrades[xws];
};
