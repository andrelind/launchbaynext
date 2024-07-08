
import { RuleSet, assets } from 'lbn-core/src';
import { getFaction } from 'lbn-core/src/helpers/import+export';
import { FactionKey, PilotXWS, SlotKey } from 'lbn-core/src/types';

let pilots: { [s: string]: string } = {};
let upgrades: { [s: string]: string } = {};

export const pilotName = (pilot: PilotXWS, xws: { faction: FactionKey, ruleset: RuleSet }) => {
  if (pilots[pilot.id]) {
    return pilots[pilot.id];
  }

  const ship = assets[xws.ruleset].pilots[getFaction(xws.faction)][pilot.ship];
  const p = ship?.pilots.find((pp) => pp.xws === pilot.id);
  if (p) {
    pilots[pilot.id] = p.name;
  }
  return pilots[pilot.id];
};

export const upgradeName = (xws: string, slotKey: SlotKey, ruleset: RuleSet) => {
  if (upgrades[xws]) {
    return upgrades[xws];
  }

  const upgrade = assets[ruleset].upgrades[slotKey].find((u) => u.xws === xws);
  if (upgrade) {
    upgrades[xws] = upgrade.sides[0].title;
  }

  return upgrades[xws];
};
