import { slotKeys } from 'lbn-core/src/helpers/enums';
import { Upgrade } from 'lbn-core/src/types';
import { TShip } from './loading';

export const getWatchData = (ships?: TShip[]) => {
  if (!ships || ships.length === 0) {
    return undefined;
  }

  return ships.map((ship) => {
    const upgrades: Upgrade[] = [];
    slotKeys.forEach((key) => {
      const list = ship.upgrades ? ship.upgrades[key] : undefined;
      if (list) {
        upgrades.push(...list);
      }
    });

    const shields = ship.stats.filter((s) => s.type === 'shields')[0]
      ? ship.stats.filter((s) => s.type === 'shields')[0].value
      : 0;

    const hull = ship.stats.filter((s) => s.type === 'hull')[0]
      ? ship.stats.filter((s) => s.type === 'hull')[0].value
      : 0;

    return {
      name: ship.pilot?.name,
      upgrades: upgrades.map((u) => u.sides[0].title).join(', '),
      points: `${ship.pointsWithUpgrades}`,
      threshold: `${Math.ceil((shields + hull) * 0.5)}`,
    };
  });
};
