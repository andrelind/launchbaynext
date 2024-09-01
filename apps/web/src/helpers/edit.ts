import upgradeData from 'lbn-core/src/assets/xwa/upgrades';
import { cleanupUpgrades2, loadShip2, pointsForSquadron2 } from 'lbn-core/src/helpers/loading';
import { bumpMinor, bumpPatch } from 'lbn-core/src/helpers/versioning';
import type { PilotXWS, SlotKey, Upgrade, UpgradeXWS, XWS } from 'lbn-core/src/types';
import { upgradesForSlot2 } from './select';


export const addShip2 = (
  list: XWS,
  shipXws: string,
  pilotXws: string,
  upgrades?: UpgradeXWS
) => {
  const edit: XWS = JSON.parse(JSON.stringify(list));
  const pilot: PilotXWS = {
    id: pilotXws,
    ship: shipXws,
    upgrades: upgrades || {},
    points: 0,
  };

  const ship = loadShip2(pilot, { faction: list.faction, format: list.format, ruleset: list.ruleset || 'amg' });
  // Check for free configurations
  const configs = upgradesForSlot2(
    ship,
    'Configuration',
    list.format,
    [],
    true
  ).filter((u) => u.finalCost === 0);

  const blacklist = [
    'vectoredcannonsrz1',
    'tiedefenderelite',
    'sensitivecontrols',
  ];

  if (
    configs.length === 1 &&
    !pilot.upgrades.configuration &&
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
                JSON.stringify(upgradeData[key].find((u) => u.xws === uXws))
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
  edit.version = bumpMinor(edit.version || '2.0.0');

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
          JSON.stringify(upgradeData[key].find((up) => up.xws === removed?.[0]))
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
  const ship = loadShip2(pilot, { faction: squad.faction, format: squad.format, ruleset: squad.ruleset || 'amg' });
  // FIXME: CleanupUpgrades should work with just ship...
  pilot.upgrades = cleanupUpgrades2(pilot.upgrades, ship, { format: squad.format, ruleset: squad.ruleset || 'amg' });

  squad.points = pointsForSquadron2(squad);
  squad.version = bumpPatch(squad.version || '2.0.0');
  return squad;
};

export const changePilot2 = (
  xws: XWS,
  pilotIndex: number,
  pilotXws: string
) => {
  const edit: XWS = JSON.parse(JSON.stringify(xws));
  const pilot = edit.pilots[pilotIndex];
  pilot.id = pilotXws;
  const ship = loadShip2(pilot, { faction: edit.faction, format: edit.format, ruleset: edit.ruleset || 'amg' });
  edit.pilots[pilotIndex].upgrades = cleanupUpgrades2(
    pilot.upgrades,
    ship,
    { format: edit.format, ruleset: edit.ruleset || 'amg' }
  );

  const pilots = edit.pilots.map((p) => {
    const s = loadShip2(p, { faction: edit.faction, format: edit.format, ruleset: edit.ruleset || 'amg' });
    const upgrades = cleanupUpgrades2(p.upgrades, s, { format: edit.format, ruleset: edit.ruleset || 'amg' });

    return {
      ...p,
      points: s.pilot?.cost || 0,
      upgrades,
    };
  });
  return {
    ...edit,
    pilots,
    points: pilots.reduce((a, c) => a + c.points, 0),
  };
};

export const copyShip2 = (xws: XWS, pilotIndex: number) => {
  const edit: XWS = JSON.parse(JSON.stringify(xws));
  const pilot = edit.pilots[pilotIndex];
  if (!pilot) {
    return xws;
  }

  edit.pilots = [...edit.pilots, JSON.parse(JSON.stringify(pilot))];
  edit.points = pointsForSquadron2(edit);
  edit.version = bumpMinor(edit.version || '2.0.0');
  return edit;
};

export const removeShip2 = (xws: XWS, pilotIndex: number) => {
  const edit: XWS = JSON.parse(JSON.stringify(xws));

  edit.pilots.splice(pilotIndex, 1);
  edit.points = pointsForSquadron2(edit);
  edit.version = bumpMinor(edit.version || '2.0.0');
  return edit;
};

export const setTags = (xws: XWS, tags: string[]) => {
  const edit: XWS = JSON.parse(JSON.stringify(xws));

  edit.vendor.lbn.tags = tags;
  edit.version = bumpMinor(edit.version || '2.0.0');

  return edit;
};

export const toggleFormat = (xws: XWS) => {
  const edit = { ...xws };
  switch (edit.format) {
    case 'Standard':
      edit.format = 'Extended';
      break;
    case 'Extended':
      edit.format = 'Epic';
      break;
    case 'Epic':
      edit.format = 'Standard';
      break;
    default:
      edit.format = 'Standard';
      break;
  }
  edit.version = bumpMinor(edit.version || '2.0.0');
  return edit;
};
