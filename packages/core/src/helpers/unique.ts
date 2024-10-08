// @flow
import type {
  Format,
  Pilot,
  Ship,
  Size,
  SlotKey,
  Squadron,
  Upgrade,
  XWS,
} from '../types';
import { slotKeys } from './enums';
import { loadShip2, TShip } from './loading';

export const limitedWarning = (
  xws: string,
  limited: number,
  squadronXWS: string[],
  willSelectNew: boolean
): boolean => {
  if (!limited) {
    return false;
  }
  const count = squadronXWS.filter((x) => x === xws.split('-')[0]).length;
  // console.log({ count, squadronXWS, xws });
  return willSelectNew ? count >= limited : count > limited;
};

export const upgradeFormatWarning = (upgrade: Upgrade, format: Format) => {
  switch (format) {
    case 'Standard':
      return !upgrade.standard;
    case 'Epic':
      return !upgrade.epic;
    case 'Extended': {
      const s = upgrade.sides[0].slots;
      return (
        s.includes('Cargo') ||
        s.includes('Command') ||
        s.includes('Hardpoint') ||
        s.includes('Team')
      );
    }
  }
};

export const shipFormatWarning = (
  ship: TShip,
  format: Format,
  validateUpgrades: boolean = true
) => {
  const checkUpgrades = () => {
    if (!validateUpgrades) {
      return false;
    }
    let warning = false;
    Object.keys(ship.upgrades || {}).forEach((key) => {
      const upgrades = ship.upgrades && ship.upgrades[key as SlotKey];
      if (upgrades) {
        upgrades.forEach((u) => {
          if (upgradeFormatWarning(u, format)) {
            warning = true;
          }
        });
      }
    });
    return warning;
  };

  switch (format) {
    case 'Standard': {
      if (!ship.pilot?.standard) {
        return true;
      }
      return checkUpgrades();
    }

    case 'Epic': {
      if (!ship.pilot?.epic) {
        return true;
      }
      return checkUpgrades();
    }

    case 'Extended': {
      if (ship.size === 'Huge') {
        return true;
      }

      return checkUpgrades();
    }
  }
};

export const pilotFormatWarning = (
  pilot?: Pilot,
  size?: Size,
  format?: Format
) => {
  switch (format) {
    case 'Standard': {
      if (!pilot?.standard) {
        return true;
      }
      break;
    }

    case 'Epic': {
      if (!pilot?.epic) {
        return true;
      }
      break;
    }

    case 'Extended': {
      if (size === 'Huge') {
        return true;
      }
    }
  }
  return false;
};

export const squadronFormatWarning = (xws: XWS) => {
  let warning = false;
  xws.pilots.forEach((p) => {
    const s = loadShip2(p, xws);
    if (shipFormatWarning(s, xws.format)) {
      warning = true;
    }
  });
  return warning;
};

export const usedSquadronXWS = (squadron?: Squadron) => {
  let list: string[] = [];
  squadron?.ships?.forEach((p) => {
    list = [...list, ...usedShipXWS(p)];
  });
  return list;
};

export const usedShipXWS = (ship?: Ship): string[] => {
  const list = [];
  if (ship) {
    list.push(ship.pilot.xws.split('-')[0]);

    slotKeys.forEach((key) => {
      const upgrades = ship.upgrades && ship.upgrades[key];
      if (upgrades) {
        upgrades
          .filter((u) => u)
          .forEach((u) => list.push(u.xws.split('-')[0]));
      }
    });
  }

  return list;
};
