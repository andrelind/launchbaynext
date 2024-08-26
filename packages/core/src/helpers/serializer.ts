import { v4 as uuid } from 'uuid';
import { manifest } from '../assets/manifest';
import { Faction, PilotXWS, SlotKey, SquadronXWS, XWS } from '../types';
import { factionFromKey, keyFromFaction, keyFromObstacle, obstacleFromKey } from './convert';
import { slotKeys } from './enums';
import { loadShip2 } from './loading';

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

export const serialize = (o?: XWS) => {
  if (!o) {
    return;
  }

  const lbx = [
    rep("'", '', encodeURIComponent(o.name)),
    o.points,
    getKeyByValue(manifest.factions, factionFromKey(o.faction)),
    o.format === 'Extended' ? 0 : 1,
    o.pilots.map((p) => {
      const upgrades: (string | number)[][] = [];
      slotKeys.forEach((key) => {
        const up = p.upgrades && p.upgrades[key as SlotKey];
        if (up && up.length > 0) {
          upgrades.push([
            getKeyByValue(manifest.slots, key),
            ...((p.upgrades && p.upgrades[key as SlotKey]) || []).map((u) =>
              getKeyByValue(manifest.upgrades, u)
            ),
          ]);
        }
      });

      const data = [
        getKeyByValue(manifest.ships, p.ship),
        getKeyByValue(manifest.pilots, p.id),
      ];

      if (upgrades.length > 0) {
        return [...data, ...upgrades];
      }
      return data;
    }),
    o.obstacles?.map((p) => keyFromObstacle(p)) || [],
  ];

  let d = JSON.stringify(lbx);
  d = rep(',', '.', d);
  d = rep('[', 'l', d);
  d = rep(']', 'r', d);
  d = rep('"', "'", d);
  d = d.substring(1, d.length - 1);

  return d;
};

export const deserialize = (o: string, uid?: string): XWS => {
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
  const [squadName, cost, faction, format, pilots, obstacles, ...rest] = d;

  // @ts-expect-error
  const fa = keyFromFaction(manifest.factions[faction]);
  const fo = parseInt(format, 10) === 1 ? 'Standard' : 'Extended';

  const getPilots = () => {
    if (Array.isArray(pilots[0]) || pilots.length === 0) {
      return pilots;
    } else {
      return [pilots, obstacles, ...rest];
    }
  };

  const xws: XWS = {
    name: decodeURIComponent(squadName),
    description: '',
    points: parseInt(cost, 10),
    faction: fa,
    format: fo,
    ruleset: 'xwa',
    obstacles: Array.isArray(pilots[0])
      ? obstacles?.map((p: any) => obstacleFromKey(p))
      : undefined,
    pilots: getPilots().map((p: any): PilotXWS => {
      const [dShip, dId, ...upgrades] = p;
      const ship = rep(']', 'r', rep('[', 'l', dShip));
      const id = rep(']', 'r', rep('[', 'l', dId));

      const parsedUpgrades: { [key in SlotKey]?: string[] } = {};
      (upgrades || []).forEach((u: any) => {
        const [key, ...list] = u;
        // @ts-expect-error
        parsedUpgrades[manifest.slots[key]] = list.map((l: string) => {
          const xws = rep(']', 'r', rep('[', 'l', l));
          // @ts-expect-error
          return manifest.upgrades[xws] || xws;
        });
      });

      const pp = {
        // @ts-expect-error
        id: manifest.pilots[`${id}`] || id,
        // @ts-expect-error
        ship: manifest.ships[`${ship}`] || ship,
        points: 0,
        upgrades: parsedUpgrades,
      };

      const s = loadShip2(pp, { faction: fa, format: fo, ruleset: 'xwa' });
      return {
        ...pp,
        points: s.pilot?.cost || 0,
      };
    }),
    version: '3.0.0',
    vendor: {
      lbn: {
        uid: uid || uuid(),
        wins: 0,
        ties: 0,
        losses: 0,
        tags: [],
        created: new Date(),
      },
    },
  };

  // console.log({ xws: JSON.stringify(xws) });

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
