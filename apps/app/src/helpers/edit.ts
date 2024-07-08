import assets from 'lbn-core/src';

import { bumpMinor, bumpPatch } from 'lbn-core/src/helpers/versioning';
import { SlotKey, Upgrade, UpgradeXWS } from 'lbn-core/src/types';
import { collectionStore } from '../stores/collection';

import { PilotXWS, XWS } from '../stores/types';

import { cleanupUpgrades2, loadShip2, pointsForSquadron2 } from 'lbn-core/src/helpers/loading';
import { upgradesForSlot2 } from './select';

export const addShip2 = (
  list: XWS,
  shipXws: string,
  pilotXws: string,
  upgrades?: UpgradeXWS
) => {
  const collection = collectionStore.getState();

  const edit: XWS = JSON.parse(JSON.stringify(list));
  const pilot: PilotXWS = {
    id: pilotXws,
    ship: shipXws,
    upgrades: upgrades || {},
    points: 0,
  };

  const ship = loadShip2(pilot, list);
  // Check for free configurations
  const configs = upgradesForSlot2(
    ship,
    'Configuration',
    list.format,
    list.ruleset,
    [],
    true,
    collection
  ).filter((u) => u.finalCost === 0);

  const blacklist = [
    'vectoredcannonsrz1',
    'tiedefenderelite',
    'sensitivecontrols',
  ];

  if (
    configs.length === 1 &&
    !pilot.upgrades.configuration &&
    ship.pilot?.slots?.includes('Configuration') &&
    !blacklist.includes(configs[0].xws)
  ) {
    pilot.upgrades.configuration = [configs[0].xws];
  }

  // Check for "standarized" upgrades equipped to other
  // ships with the same shipXws
  edit.pilots.forEach((p) => {
    if (p.ship === shipXws) {
      // Loop upgrades
      p.upgrades &&
        Object.keys(p.upgrades).forEach((k) => {
          const key = k as SlotKey;
          const ups = p.upgrades![key];
          if (ups) {
            ups.forEach((uXws) => {
              const upgrade: Upgrade = JSON.parse(
                JSON.stringify(
                  assets.ruleset[list.ruleset].upgrades[key].find(
                    (u) => u.xws === uXws
                  )
                )
              );
              if (
                upgrade?.standarized &&
                !pilot.upgrades?.[key]?.find((x) => x === uXws)
              ) {
                if (!pilot.upgrades![key]) {
                  pilot.upgrades![key] = [];
                }
                pilot.upgrades![key]?.push(uXws);
              }
            });
          }
        });
    }
    return p;
  });

  edit.pilots = [...edit.pilots, pilot];
  edit.points = pointsForSquadron2(edit);
  edit.version = bumpMinor(edit.version || '2.5.0');

  return edit;
};

export const setUpgrade2 = (
  xws: XWS,
  pilotIndex: number,
  key: SlotKey,
  slotIndex: number,
  u?: Upgrade
) => {
  const squad: XWS = JSON.parse(JSON.stringify(xws));

  const pilot = squad.pilots[pilotIndex];
  if (!pilot || !key) {
    return xws;
  }
  if (!pilot.upgrades) {
    pilot.upgrades = {};
  }

  if (!u) {
    if (pilot.upgrades[key]) {
      const removed = pilot.upgrades[key]?.splice(slotIndex, 1);

      // Load upgrade, check for "standarized"
      try {
        const upgrade: Upgrade = JSON.parse(
          JSON.stringify(
            assets.ruleset[xws.ruleset].upgrades[key].find(
              (up) => up.xws === removed?.[0]
            )
          )
        );
        if (upgrade?.standarized) {
          squad.pilots = squad.pilots.map((p) => {
            if (
              p.ship === pilot.ship &&
              p.upgrades?.[key]?.find((x) => x === upgrade.xws)
            ) {
              // Found it, remove it
              p.upgrades[key] = p.upgrades[key]?.filter(
                (x) => x !== upgrade.xws
              );
            }
            return p;
          });
        }
      } catch (error) {
        console.error(error);
      }

      if (pilot.upgrades[key]?.length === 0) {
        delete pilot.upgrades[key];
      }
    }
  } else {
    if (!pilot.upgrades[key]) {
      pilot.upgrades[key] = [];
    }
    if (slotIndex > pilot.upgrades[key]!.length) {
      pilot.upgrades[key]?.push(u.xws);
    } else {
      pilot.upgrades[key]![slotIndex] = u.xws;
    }

    // Handle standarized
    if (u.standarized) {
      // Look up all other and add it to them too
      squad.pilots = squad.pilots.map((p) => {
        if (p.ship === pilot.ship) {
          if (p.upgrades?.[key]) {
            if (p.upgrades?.[key]?.find((x) => x === u.xws)) {
              // Found it, no need to add
            } else {
              p.upgrades[key]?.push(u.xws);
            }
          } else {
            // No upgrade, just add it
            p.upgrades = { ...p.upgrades };
            p.upgrades[key] = [u.xws];
          }
        }
        return p;
      });
    }
  }

  // Make sure we have correct amount of upgrades
  const ship = loadShip2(pilot, squad);
  // FIXME: CleanupUpgrades should work with just ship...
  pilot.upgrades = cleanupUpgrades2(pilot.upgrades, ship, squad);

  squad.points = pointsForSquadron2(squad);
  squad.version = bumpPatch(squad.version || '2.5.0');
  return squad;
};
