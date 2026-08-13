import { v4 as uuid } from 'uuid';
import { manifest as legacyManifest } from '../assets/legacy/manifest';
import { manifest as xwaManifest } from '../assets/xwa/manifest';
import { Faction, GameData, ManifestData, PilotXWS, SlotKey, SquadronXWS, XWS } from '../types';
import { factionFromKey, getFaction, keyFromFaction, keyFromObstacle, obstacleFromKey } from './convert';
import { slotKeys } from './enums';
import { loadShip2 } from './loading';

const getManifest = (ruleset?: string, manifestData?: ManifestData): ManifestData => {
  const bundled = (ruleset === 'legacy' ? legacyManifest : xwaManifest) as unknown as ManifestData;
  if (!manifestData) return bundled;

  // A provided (e.g. DB-sourced) manifest may only carry the dynamic
  // ship/pilot/upgrade IDs and omit the static faction/slot enums. Fall back to
  // the bundled manifest for any map the caller left empty so decoding always
  // resolves factions and slots.
  const pick = (a: Record<string, string> | undefined, b: Record<string, string>) =>
    a && Object.keys(a).length > 0 ? a : b;
  return {
    factions: pick(manifestData.factions, bundled.factions),
    ships: pick(manifestData.ships, bundled.ships),
    pilots: pick(manifestData.pilots, bundled.pilots),
    upgrades: pick(manifestData.upgrades, bundled.upgrades),
    slots: pick(manifestData.slots, bundled.slots),
  };
};

const rep = (c: string, t: string, d: string) => {
  while (d.indexOf(c) >= 0) {
    d = d.replace(c, t);
  }
  return d;
};

const getKeyByValue = (object: any, value: string) => {
  const o = Object.keys(object).find(key => object[key] === value);
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

export const serialize = (o?: XWS, manifestData?: ManifestData) => {
  // console.log('serialize', o);

  if (!o) {
    return;
  }

  const manifest = getManifest(o.ruleset, manifestData);

  const lbx = [
    rep("'", '', encodeURIComponent(o.name)),
    o.points,
    getKeyByValue(manifest.factions, factionFromKey(o.faction)),
    o.format === 'Extended' ? 0 : 1,
    o.ruleset === 'xwa' ? 1 : 2,
    o.pilots.map(p => {
      const upgrades: (string | number)[][] = [];
      slotKeys.forEach(key => {
        const up = p.upgrades && p.upgrades[key as SlotKey];
        if (up && up.length > 0) {
          upgrades.push([
            getKeyByValue(manifest.slots, key),
            ...((p.upgrades && p.upgrades[key as SlotKey]) || []).map(u => getKeyByValue(manifest.upgrades, u)),
          ]);
        }
      });

      const data = [getKeyByValue(manifest.ships, p.ship), getKeyByValue(manifest.pilots, p.id)];

      if (upgrades.length > 0) {
        return [...data, ...upgrades];
      }
      return data;
    }),
    o.obstacles?.map(p => keyFromObstacle(p)) || [],
  ];

  let d = JSON.stringify(lbx);
  d = rep(',', '.', d);
  d = rep('[', 'l', d);
  d = rep(']', 'r', d);
  d = rep('"', "'", d);
  d = d.substring(1, d.length - 1);

  return d;
};

export const deserialize = (o: string, uid?: string, manifestData?: ManifestData, gameData?: GameData): XWS => {
  // Structural array brackets are encoded as a leading run of "l" and a
  // trailing run of "r" within each dot-separated segment. Only those runs
  // may be converted back to "[" / "]" — any "l"/"r" in the middle of a
  // segment belongs to a quoted xws key (e.g. 'oddball-siegeofcoruscant') and
  // must be preserved.
  o = o
    .split('.')
    .map((s, i) => {
      if (i > 2) {
        const lead = /^l+/.exec(s)?.[0].length ?? 0;
        const trail = /r+$/.exec(s)?.[0].length ?? 0;
        return '['.repeat(lead) + s.slice(lead, s.length - trail) + ']'.repeat(trail);
      }
      return s;
    })
    .join('.');
  o = rep('.', ',', o);
  o = rep("'", '"', o);
  o = rep('""', '"', o);

  if (o[0] !== '[') {
    o = `[${o}]`;
  }

  const d = JSON.parse(o);

  // Older links omit the `ruleset` field, so the pilots array sits where the
  // ruleset value would otherwise be. Detect that shape and shift the fields.
  const hasRuleset = !Array.isArray(d[4]);
  const [squadName, cost, faction, format] = d;
  const ruleset = hasRuleset ? d[4] : undefined;
  const pilots = hasRuleset ? d[5] : d[4];
  const obstacles = hasRuleset ? d[6] : d[5];
  const rest = d.slice(hasRuleset ? 7 : 6);

  const rs = parseInt(ruleset) === 0 ? 'xwa' : parseInt(ruleset) === 1 ? 'xwa' : 'legacy';
  const manifest = getManifest(rs, manifestData);

  // The faction may be encoded either as a numeric manifest index (e.g. 6) or
  // as a literal faction name/key (e.g. 'Galactic Republic'). Resolve numeric
  // indices via the manifest, then normalize to a faction key.
  const factionName =
    typeof faction === 'number' || /^\d+$/.test(`${faction}`) ? manifest.factions[`${faction}`] : faction;
  const fa = keyFromFaction(getFaction(factionName));
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
    ruleset: rs,
    obstacles: Array.isArray(pilots[0]) ? obstacles?.map((p: any) => obstacleFromKey(p)) : undefined,
    pilots: getPilots().map((p: any): PilotXWS => {
      const [ship, id, ...upgrades] = p;
      // console.log({ dShip, dId, upgrades });
      // const ship = rep(']', 'r', rep('[', 'l', `${dShip}`));
      // const id = rep(']', 'r', rep('[', 'l', `${dId}`));

      const parsedUpgrades: { [key in SlotKey]?: string[] } = {};
      // Upgrades are encoded as a list of [slotKey, ...upgradeIds] entries.
      // Older/external links may flatten a single slot directly onto the pilot
      // as [slotKey, ...upgradeIds], so normalize to a list of entries first.
      const upgradeEntries: any[] = Array.isArray(upgrades[0]) ? upgrades : upgrades.length > 0 ? [upgrades] : [];
      upgradeEntries.forEach((u: any) => {
        if (!Array.isArray(u)) {
          return;
        }
        const [key, ...list] = u;
        const slotKey = manifest.slots[`${key}`] ?? `${key}`;
        // @ts-expect-error
        parsedUpgrades[slotKey] = list.map((l: string) => {
          return manifest.upgrades[`${l}`] ?? `${l}`;
        });
      });

      const pp = {
        id: manifest.pilots[`${id}`] || id,
        ship: manifest.ships[`${ship}`] || ship,
        points: 0,
        upgrades: parsedUpgrades,
      };

      const s = loadShip2(pp, { faction: fa, format: fo, ruleset: rs }, gameData);
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
