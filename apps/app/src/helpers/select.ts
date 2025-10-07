import { RuleSet, assets } from 'lbn-core/src';
import { factionFromKey, keyFromSlot } from 'lbn-core/src/helpers/convert';
import { allSlots, slotKeys } from 'lbn-core/src/helpers/enums';
import { TShip, freeSlotsForShip2, pointsForUpgrade2 } from 'lbn-core/src/helpers/loading';
import {
  Format,
  ShipType,
  Slot,
  SlotKey,
  Upgrade,
  UpgradeCostAgility,
  UpgradeCostInitiative,
  UpgradeCostSize,
  UpgradeCostValue,
  XWS,
} from 'lbn-core/src/types';
import { useCollectionStore } from '../stores/collection';
import { CollectionState } from '../stores/types';
import { countForShip2, countForUpgrade2 } from './collection';

export const getUpgradeCost = (cost: any) => {
  if (!cost) {
    return 0;
  }
  if (cost.value) {
    return `${(cost as UpgradeCostValue).value}`;
  }
  if (cost.variable && cost.variable === 'agility') {
    const typedCost = cost as UpgradeCostAgility;
    return Object.keys(typedCost.values)
      .map(key => `A${key}: ${typedCost.values[parseInt(key, 10)]}`)
      .join('\n');
  } else if (cost.variable && cost.variable === 'initiative') {
    const typedCost = cost as UpgradeCostInitiative;
    return Object.keys(typedCost.values)
      .map(key => `I${key}: ${typedCost.values[parseInt(key, 10)]}`)
      .join('\n');
  } else if (cost.variable && cost.variable === 'size') {
    const typedCost = cost as UpgradeCostSize;
    return Object.keys(typedCost.values)
      .slice(0, 3)
      .map(key => `${key}: ${typedCost.values[key as 'Small' | 'Medium' | 'Large' | 'Huge']}`)
      .join('\n');
  }
};

export const upgradesForSlot2 = (
  ship: TShip,
  slot: Slot,
  format: Format,
  ruleset: RuleSet,
  ships: TShip[],
  showUnavailable: boolean,
  collection: CollectionState,
  needle?: string,
): Upgrade[] => {
  const freeSlots = freeSlotsForShip2(ship, { ruleset });
  const allXws = usedShipXws2(ship);

  const upgrades: { [key in SlotKey]?: string[] } = {};
  slotKeys.forEach(key => {
    const slots = ship.upgrades && ship.upgrades[key];
    if (slots) {
      upgrades[key] = slots.map(u => u.xws);
    }
  });

  const data = assets[ruleset].upgrades[keyFromSlot(slot)]
    .map(u => ({
      ...u,
      finalCost: pointsForUpgrade2(u.cost, ship, { ruleset }),
      available: countForUpgrade2(collection, u.xws),
    }))
    .filter((u: Upgrade) => {
      switch (format) {
        case 'Extended':
          return true;
        case 'Standard':
          return u.standard;
        case 'Epic':
          return u.epic;
      }
    })
    .filter((u: Upgrade) => {
      if (u.standardLoadoutOnly && !ship.pilot?.standardLoadout) {
        return false;
      }

      if (u.available !== undefined && u.available !== null && u.available <= 0 && !showUnavailable) {
        return false;
      }

      const neededSlots: { [key in Slot]?: number } = {};
      allSlots.map(s => {
        neededSlots[s] = u.sides[0].slots.filter(is => is === s).length;
      });

      for (let i = 0; i < allSlots.length; i++) {
        const n = neededSlots[allSlots[i]];
        const f = freeSlots[allSlots[i]];
        if (n && f && n > 1 && f < n) {
          return false;
        }
        if (n && !f && allSlots[i] !== slot) {
          return false;
        }
        if (n && !f && n > 1) {
          return false;
        }
      }
      return true;
    })
    .filter((u: Upgrade) => {
      // Only 1 upgrade of each allowed
      if (allXws && allXws.indexOf(u.xws) >= 0) {
        return false;
      }

      if (!u.restrictions) {
        return true;
      }

      for (let j = 0; j < u.restrictions.length; j++) {
        const res = u.restrictions[j];
        let found = false;

        if (res.factions?.includes(ship.faction)) {
          found = true;
        } else if (res.baseSizes?.includes(ship.size)) {
          found = true;
        } else if (res.chassis?.includes(ship.xws)) {
          found = true;
        } else if (res.arcs?.find(a => ship.stats.find(s => s.arc === a))) {
          found = true;
        } else if (
          res.action &&
          ship.pilot?.shipActions?.find(a => {
            if (!res.action) {
              return false;
            }
            if (res.action.difficulty) {
              return a.type === res.action.type && a.difficulty === res.action.difficulty;
            }
            return a.type === res.action.type;
          })
        ) {
          found = true;
        } else if (
          res.action &&
          ship.actions &&
          !ship.pilot?.shipActions &&
          ship.actions.find(a => {
            if (!res.action) {
              return false;
            }
            if (res.action && res.action.difficulty) {
              return a.type === res.action.type && a.difficulty === res.action.difficulty;
            }
            return a.type === res.action.type;
          })
        ) {
          found = true;
        } else if (
          res.sides &&
          res.sides.find(
            s =>
              ship.pilot?.force?.side.includes(s) ||
              ship.pilot?.sides?.includes(s) ||
              Object.keys(ship.upgrades || {})
                .map(key => {
                  const m = ship.upgrades?.[key as SlotKey]
                    ?.map(uu => Boolean(uu.sides[0].force?.side?.includes(s)))
                    .filter(x => x);
                  return m && m?.length > 0;
                })
                .filter(x => x).length > 0,
          )
        ) {
          // A pilot can have force sides but also upgrades...!
          found = true;
        } else if (
          res.equipped &&
          ship.upgrades &&
          res.equipped.filter(e => ship.upgrades && ship.upgrades[keyFromSlot(e)]).length === res.equipped.length
        ) {
          found = true;
        } else if (res['non-limited'] && ship.pilot?.limited === 0) {
          found = true;
        } else if (ship.stats.find(s => res.stat && s.type === res.stat.type && s.value >= res.stat.value)) {
          found = true;
        } else if (res.initiative && ship?.pilot) {
          if (res.initiative.max && ship?.pilot?.initiative <= res.initiative.max) {
            found = true;
          } else if (res.initiative.min && ship?.pilot?.initiative >= res.initiative.min) {
            found = true;
          }
        } else if (res.keywords) {
          // console.log({ res: res.keywords, pilot: ship?.pilot?.keywords });
          res.keywords.forEach(keyword => {
            if (ship?.pilot?.keywords?.includes(keyword)) {
              found = true;
            } else {
              slotKeys.forEach(key => {
                // We need to check all the upgrades also...
                const ups = ship?.upgrades?.[key];
                if (!ups) {
                  return false;
                }
                if (ups.find(uu => uu.keywords?.includes(keyword))) {
                  found = true;
                }
              });
            }
          });
        }

        if (res.character) {
          const chars = res.character;
          ships.forEach(s => {
            // console.log({ pilot: s?.pilot?.name, chars });
            const p = s?.pilot?.name || '';
            if (chars?.includes(p)) {
              found = true;
            } else {
              chars.forEach(char => {
                slotKeys.forEach(key => {
                  // We need to check all the upgrades also...
                  const ups = s.upgrades?.[key];
                  if (!ups) {
                    return false;
                  }
                  if (ups.find(uu => uu.sides[0].title.includes(char))) {
                    found = true;
                  }
                });
              });
            }
          });
        }

        if (!found) {
          return false;
        }
      }
      return true;
    })
    .filter((u: Upgrade) => {
      if (!needle) {
        return true;
      }

      const lcNeedle = needle.toLowerCase();
      if (
        u.sides[0].title.toLowerCase().indexOf(lcNeedle) >= 0 ||
        (u.sides[0].ability || '').toLowerCase()?.indexOf(lcNeedle) >= 0
      ) {
        return true;
      }
      if (u.sides.length > 1 && (u.sides[1].ability || '').toLowerCase().indexOf(lcNeedle) >= 0) {
        return true;
      }

      return false;
    })
    .sort((a, b) => {
      if (a.finalCost < b.finalCost) {
        return -1;
      }
      if (a.finalCost > b.finalCost) {
        return 1;
      }
      return a.sides[0].title.localeCompare(b.sides[0].title);
    });

  return data;
};

export const useShipTypes = (xws?: XWS, showUnavailable?: boolean, needle?: string): ShipType[] => {
  const collection = useCollectionStore();

  if (!xws) {
    return [];
  }

  return Object.keys(assets[xws.ruleset].pilots[factionFromKey(xws.faction)])
    .map(key => assets[xws.ruleset].pilots[factionFromKey(xws.faction)][key])
    .filter((s: ShipType) => {
      switch (xws.format) {
        case 'Extended':
          return s.size !== 'Huge';
        case 'Standard':
          return s.pilots.filter(p => p.standard).length > 0;
        case 'Epic':
          return s.pilots.filter(p => p.epic).length > 0;
      }
    })
    .filter((p: ShipType) => {
      p.available = countForShip2(collection, p.xws, xws);
      if (p.available !== undefined && p.available <= 0 && !showUnavailable) {
        return false;
      }
      return true;
    })
    .filter((p: ShipType) => {
      if (!needle) {
        return true;
      }
      return p.name.toLowerCase().indexOf(needle.toLowerCase()) >= 0;
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(s => ({
      ...s,
      pilots: s.pilots.filter(p => {
        switch (xws.format) {
          case 'Extended':
            return true;
          case 'Standard':
            return p.standard;
          case 'Epic':
            return p.epic;
        }
      }),
    }));
};

export const usedShipXws2 = (ship?: TShip): string[] => {
  const list = [];
  if (ship) {
    if (ship?.pilot?.xws) {
      list.push(ship?.pilot?.xws.split('-')[0]);
    }

    slotKeys.forEach(key => {
      const upgrades = ship.upgrades && ship.upgrades[key];
      if (upgrades) {
        upgrades.filter(u => u).forEach(u => list.push(u.xws.split('-')[0]));
      }
    });
  }

  return list;
};
