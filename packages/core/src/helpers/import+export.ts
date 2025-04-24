import { v4 as uuid } from 'uuid';
import { RuleSet } from '..';
import { assets } from '../';
import { FactionKey, SlotKey, XWS } from '../types';
import { getFaction } from './convert';
import { slotKeys } from './enums';
import { loadShip2 } from './loading';
import { deserialize, getFactionKey, serialize } from './serializer';

const cleanText = (text?: string) => {
  return text?.replace(/ *\([^)]*\) */g, '');
};

const validatePilot = (pilot: any, ruleset: RuleSet): Object | void => {
  console.log('Validating pilot', pilot);

  if (!pilot.upgrades) {
    pilot.upgrades = {};
  }

  if (!pilot.name && pilot.id) {
    pilot.name = pilot.id;
  }

  const { name, ship, upgrades } = pilot;
  if (!name || !ship) {
    console.log('No XWS');
    return undefined;
  }

  if (upgrades.ept) {
    upgrades.talent = upgrades.ept;
    delete upgrades.ept;
  }
  if (upgrades.amd) {
    upgrades.astromech = upgrades.amd;
    delete upgrades.amd;
  }
  if (upgrades.mod) {
    upgrades.modification = upgrades.mod;
    delete upgrades.mod;
  }
  if (upgrades.hardpoint) {
    delete upgrades.hardpoint;
  }
  if (upgrades['force-power']) {
    upgrades.forcepower = upgrades['force-power'];
    delete upgrades['force-power'];
  }

  slotKeys.forEach(key => {
    // YASB...
    if (slotKeys.indexOf(key) < 0) {
      // No unknown keys please
      // console.log(`Unknown key ${key}`);
      return undefined;
    }
    console.log(`Validating ${key}`);

    if (assets[ruleset]?.upgrades[key] === undefined) {
      // console.log(`Unknown key ${key}`);
      return undefined;
    }
    if (!Array.isArray(upgrades[key])) {
      // console.log(`Not an array ${key}`);
      return undefined;
    }

    for (const item of upgrades[key]) {
      if (assets[ruleset].upgrades[key].filter(u => u.xws === item).length === 0) {
        console.log(`Invalid item ${item}`);
        return undefined;
      }
    }
  });

  if (!pilot.uid) {
    pilot.uid = uuid();
  }

  return pilot;
};

const validatePilots = (list: Array<any>, ruleset: RuleSet): Array<any> | void => {
  // console.log(list);
  if (!Array.isArray(list)) {
    // console.log(`Not an array - ${typeof list}`);
    return undefined;
  }

  for (let i = 0; i < list.length; i++) {
    let o = list[i];
    if (typeof o !== 'object') {
      console.log('Invalid unit');
      return undefined;
    }
    o = validatePilot(o, ruleset);
    if (!o) {
      return undefined;
    }
  }

  return list;
};

const validateJSON = (data: any): any | undefined => {
  if (!data) {
    return undefined;
  }

  if (!data.faction) {
    return undefined;
  }

  const pilots = validatePilots(data.pilots, data.ruleset || 'xwa');
  if (!pilots) {
    console.log('Invalid list of pilots');
    return undefined;
  }

  return data;
};

export const canImportXws = (data: string): XWS => {
  let json;
  try {
    json = JSON.parse(data);
  } catch (err) {
    console.log(err);
    throw new Error('Invalid JSON');
  }
  if (!json) {
    throw new Error('No JSON provided');
  }

  const validatedJson = validateJSON(json);
  if (validatedJson) {
    if (!validatedJson.uid) {
      validatedJson.uid = uuid();
    }
    validatedJson.cost = validatedJson.points;
    delete validatedJson.points;
    validatedJson.faction = getFactionKey(getFaction(json.faction));
    validatedJson.ships = validatedJson.ships || [];
    validatedJson.format = validatedJson.format || 'Extended';
    validatedJson.ruleset = validatedJson.ruleset ? validatedJson.ruleset.toLowerCase() : 'xwa';
    validatedJson.version = '2.5.0';
    validatedJson.vendor = {
      lbn: {
        uid: uuid(),
        wins: 0,
        ties: 0,
        losses: 0,
        tags: [],
        created: new Date(),
      },
    };
    console.log('validatedJson', validatedJson);

    return json;
  } else {
    throw new Error('Invalid XWS data');
  }
};

export type ExportXWS = {
  name: string;
  description: string;
  faction: FactionKey;
  points: number;
  version: string;
  pilots: {
    id: string;
    ship: string;
    points: number;
    upgrades: { [key in SlotKey]?: string[] };
  }[];
  vendor: {
    lbn: {
      builder: string;
      builder_url: string;
      link: string;
    };
  };
};

export const exportAsXws = (xws: XWS) => {
  const link = serialize(xws);

  const e = {
    name: xws.name,
    description: xws.description || '',
    faction: xws.faction,
    ruleset: xws.ruleset || 'xwa',
    points: xws.points,
    version: xws.version || '2.5.0',
    obstacles: xws.obstacles?.map(o => o.replace('obstacle-', '')),
    pilots: xws.pilots.map(p => {
      const upgrades: { [s: string]: string[] } = {};
      Object.keys(p.upgrades || {}).map(key => {
        const real = key === 'forcepower' ? 'force-power' : key;
        if (p.upgrades) {
          // @ts-ignore
          upgrades[real] = p.upgrades[key as SlotKey];
        }
      });

      return {
        id: p.id,
        ship: p.ship,
        points: p.points || 0,
        upgrades,
      };
    }),
    vendor: {
      lbn: {
        builder: 'Launch Bay Next',
        builder_url: 'https://launchbaynext.app',
        link: `https://launchbaynext.app/print?lbx=${link}`,
        ...xws.vendor.lbn,
      },
    },
  };

  return JSON.stringify(e);
};

export const exportAsText = (squadron: XWS) => {
  let text = `${squadron.name}\n`;

  squadron.pilots.map(p => {
    const ship = loadShip2(p, { faction: squadron.faction, format: squadron.format, ruleset: squadron.ruleset });
    if (!ship) return;

    text += `\n(${ship!.pilot!.cost}) ${ship!.pilot!.name} [${ship.name}]`;

    slotKeys.forEach(key => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach(u => {
          text += `\n(${u.finalCost}) ${cleanText(u.sides[0].title)}`;
        });
      }
    });
    text += `\nPoints: ${ship.pointsWithUpgrades}\n`;
  });

  text += `\nTotal points: ${squadron.points}`;
  return text;
};

export const exportAsTTS = (squadron: XWS) => {
  let text = '';

  squadron.pilots?.map(pilot => {
    const s = loadShip2(pilot, { faction: squadron.faction, format: squadron.format, ruleset: squadron.ruleset });

    text += s.pilot?.name?.replace("'", '');
    slotKeys.forEach(key => {
      const up = s.upgrades && s.upgrades[key];
      if (up) {
        up.forEach(u => {
          text += ` + ${cleanText(u.sides[0].title)}`;
        });
      }
    });
    text += ' / ';
  });

  return text;
};

// export const exportAsQR = (squadron: Squadron) => {
//   const xws = xwsFromSquadron(squadron);
//   return serialize(xws);
// };

export const importFromQR = (data: any, skipParse: boolean = false) => {
  try {
    const json = skipParse ? data : JSON.parse(data);
    const validatedJson = validateJSON(json);
    if (!validatedJson) {
      console.log('Could not validate json');
      return undefined;
    }
    if (!validatedJson.uid) {
      validatedJson.uid = uuid();
    }
    validatedJson.name = validatedJson.name || 'New Squadron';
    validatedJson.cost = validatedJson.points;
    delete validatedJson.points;
    validatedJson.faction = getFaction(json.faction);
    validatedJson.ships = validatedJson.ships || [];
    validatedJson.format = validatedJson.format || 'Standard';
    // console.log('validatedJson', validatedJson);
    return validatedJson;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const xwsFromString = async (text: string): Promise<XWS | void> => {
  try {
    if (text.indexOf('https://launchbaynext.app') === 0) {
      const { searchParams } = new URL(text);
      const lbx = searchParams.get('lbx');
      if (lbx) {
        return deserialize(lbx);
      }
    } else if (text.indexOf('https://raithos.github.io/') === 0) {
      const url = text.replace('https://raithos.github.io/', 'https://squad2xws.herokuapp.com/yasb/xws');
      const xws = await fetch(url)
        .then(r => r.json())
        .then(d => validateJSON(d));
      if (xws) {
        return xws;
      }
    } else if (text.indexOf('https://squadbuilder.fantasyflightgames.com/squad-preview/') === 0) {
      const id = text.substr(text.lastIndexOf('/') + 1);
      const xws = await fetch(`https://squad2xws.herokuapp.com/translate/${id}`)
        .then(r => r.json())
        .then(d => validateJSON(d));
      if (xws) {
        return xws;
      }
    } else {
      const xws = canImportXws(text);
      console.log('xws', xws);

      // const xws = validateJSON(JSON.parse(text));
      if (xws) {
        return xws;
      }
    }
  } catch (error) {
    console.error({ error });
  }
};
