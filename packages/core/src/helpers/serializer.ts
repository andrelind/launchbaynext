import { v4 as uuid } from 'uuid';
import { manifest } from '../assets/manifest';
import { Faction, SlotKey, SquadronXWS } from '../types';
import { slotKeys } from './enums';

const rep = (c: string, t: string, d: string) => {
  while (d.indexOf(c) >= 0) {
    d = d.replace(c, t);
  }
  return d;
};

const getKeyByValue = (object: any, value: string) => {
  const o = Object.keys(object).find((key) => object[key] === value);
  return parseInt(o || '0') || value;
};

export const getFactionKey = (faction: Faction) => {
  switch (faction) {
    case 'Rebel Alliance':
      return 'rebelalliance';
    case 'Scum and Villainy':
      return 'scumandvillainy';
    case 'Galactic Empire':
      return 'galacticempire';
    case 'Resistance':
      return 'resistance';
    case 'First Order':
      return 'firstorder';
    case 'Galactic Republic':
      return 'galacticrepublic';
    case 'Separatist Alliance':
      return 'separatistalliance';
    default:
      return 'rebelalliance';
  }
};

export const serialize = (o: SquadronXWS) => {
  const lbx = [
    rep("'", '', encodeURIComponent(o.name)),
    o.cost,
    getKeyByValue(manifest.factions, o.faction),
    o.format === 'Extended' ? 0 : 1,
    ...o.pilots.map((p) => {
      const upgrades: (string | number)[][] = [];
      slotKeys.forEach((key) => {
        const up = p.upgrades && p.upgrades[key];
        if (up && up.length > 0) {
          upgrades.push([
            getKeyByValue(manifest.slots, key),
            ...((p.upgrades && p.upgrades[key]) || []).map((u) =>
              getKeyByValue(manifest.upgrades, u)
            ),
          ]);
        }
      });

      const data = [
        getKeyByValue(manifest.ships, p.ship),
        // @ts-expect-error
        getKeyByValue(manifest.pilots, p.name || p.id),
      ];

      if (upgrades.length > 0) {
        return [...data, ...upgrades];
      }
      return data;
    }),
  ];

  let d = JSON.stringify(lbx);
  d = rep(',', '.', d);
  d = rep('[', 'l', d);
  d = rep(']', 'r', d);
  d = rep('"', "'", d);
  d = d.substring(1, d.length - 1);

  return d;
};

export const deserialize = (o: string, uid?: string): SquadronXWS | void => {
  // New format, replace "l with (" and "r with )"
  o = o
    .split('.')
    .map((s, i) => {
      if (i > 2) {
        return rep('l', '(', rep('r', ')', s));
      }
      return s;
    })
    .join('.');
  o = rep('.', ',', o);

  o = rep('(', '[', o);
  o = rep(')', ']', o);
  o = rep("'", '"', o);
  o = rep('""', '"', o);

  if (o[0] !== '[') {
    o = `[${o}]`;
  }

  const d = JSON.parse(o);
  const [name, cost, faction, format, ...pilots] = d;

  const xws: SquadronXWS = {
    uid: uid || uuid(),
    name: decodeURIComponent(name),
    cost: parseInt(cost),
    // @ts-expect-error
    faction: manifest.factions[faction],
    favourite: false,
    format: parseInt(format) === 1 ? 'Standard' : 'Extended',
    pilots: pilots.map((p: any) => {
      const [ship, name, ...upgrades] = p;
      const parsedUpgrades: { [key in SlotKey]?: string[] } = {};
      (upgrades || []).forEach((u: any) => {
        const [key, ...list] = u;
        // @ts-expect-error
        parsedUpgrades[manifest.slots[key]] = list.map(
          // @ts-expect-error
          (l: string) => manifest.upgrades[l] || l
        );
      });

      return {
        uid: uuid(),
        // @ts-expect-error
        ship: manifest.ships[ship] || ship,
        // @ts-expect-error
        name: manifest.pilots[name] || name,
        upgrades: parsedUpgrades,
      };
    }),
    version: '2.0.0',
  };

  return xws;
};

export const serializeXWS = (o: SquadronXWS) => {
  const data = { ...o };
  data.name = encodeURIComponent(data.name);

  let d = JSON.stringify(data);
  d = rep('{', '(', d);
  d = rep('}', ')', d);
  d = rep('"', "'", d);

  return d;
};

export const transformToXWS = (o: string) => {
  o = rep('(', '{', o);
  o = rep(')', '}', o);
  o = rep("'", '"', o);

  const d = JSON.parse(o);
  d.name = decodeURIComponent(d.name);
  return d;
};

export const exportAsXws = (xws: any) => {
  const link = serialize(xws);

  xws.faction = getFactionKey(xws.faction);
  xws.points = xws.cost;
  delete xws.cost;
  delete xws.uid;
  delete xws.favourite;
  delete xws.format;
  xws.pilots.forEach((p: any) => {
    delete p.uid;
    p.id = p.name;
    delete p.name;
    p.points = p.cost;
    delete p.cost;
  });

  xws.vendor = {
    lbn: {
      builder: 'Launch Bay Next',
      builder_url: 'https://launchbaynext.app',
      link: `https://launchbaynext.app/print?lbx=${link}`,
    },
  };

  return JSON.stringify(xws);
};
