import fs from 'fs';
import fetch from 'node-fetch';
import ora from 'ora';
import prettier from 'prettier';

import { Faction, Restrictions, Size, SlotKey } from '../../src/types';
import { XWDPilot, XWDShip, XWDUpgrade } from './data2-types';
import { asyncForEach, getFaction, getName } from './utils';

export const runMerge = async (baseUrl: string, assets: any, path: string, theManifest: any, revManifest: any) => {
  const getLatestPilotNumber = () => {
    const pilots = Object.keys(theManifest.pilots)
      .map(p => parseInt(p, 10))
      .filter(n => !isNaN(n));
    return Math.max(...pilots, 0);
  };
  const get = async (url: string) => {
    const result = await fetch(baseUrl + url, {
      headers: { 'Content-Type': 'application/json' },
    }).then(r => r.json());
    return result;
  };

  let pilotNumber = getLatestPilotNumber();

  const processShip = async (faction: Faction, shipData: XWDShip, urlFileName: string, effectiveXws: string) => {
    let ship = assets.pilots[faction][effectiveXws];
    if (!ship) {
      // eslint-disable-next-line no-unused-vars
      const { pilots, ...rest } = shipData;
      console.log('\n**** Ship not found ****', shipData.name, effectiveXws, faction);

      ship = {
        ...rest,
        xws: effectiveXws,
        name: shipData.name,
        pilots: [],
      };
      assets.pilots[faction][effectiveXws] = ship;
    }

    const { pilots } = shipData;
    // const { pilots, dialCodes, ...rest } = shipData;
    // Object.keys(rest).forEach((key) => {
    //   if (key !== 'name') {
    //     // @ts-ignore
    //     ship[key] = rest[key];
    //   }
    // });
    ship.icon = shipData.icon;

    ship.pilots = pilots.map((pilot: XWDPilot) => {
      // @ts-expect-error
      let local = ship.pilots.find(p => p.xws === pilot.xws)!;
      if (!local) {
        local = {
          ...pilot,
          name: pilot.name,
          caption: undefined,
          ability: undefined,
          shipAbility: undefined,
          text: undefined,
          standard: true,
          extended: true,
          epic: true,
        };
      }

      if (pilot.caption) {
        local.caption = pilot.caption;
      }
      if (pilot.text) {
        local.text = pilot.text
          .replaceAll('[[', '([')
          .replaceAll(']]', '])')
          .replaceAll('[0', '(0')
          .replaceAll('[1', '(1')
          .replaceAll('[2', '(2')
          .replaceAll('[3', '(3')
          .replaceAll('[4', '(4')
          .replaceAll('[5', '(5')
          .replaceAll('[6', '(6')
          .replaceAll('[7', '(7')
          .replaceAll('[8', '(8')
          .replaceAll('[9', '(9');
      }
      if (pilot.ability) {
        local.ability = pilot.ability
          .replaceAll('[[', '([')
          .replaceAll(']]', '])')
          .replaceAll('[0', '(0')
          .replaceAll('[1', '(1')
          .replaceAll('[2', '(2')
          .replaceAll('[3', '(3')
          .replaceAll('[4', '(4')
          .replaceAll('[5', '(5')
          .replaceAll('[6', '(6')
          .replaceAll('[7', '(7')
          .replaceAll('[8', '(8')
          .replaceAll('[9', '(9');
      }

      local.initiative = pilot.initiative;
      local.limited = pilot.limited;
      local.cost = pilot.cost;
      local.loadout = pilot.loadout;
      local.keywords = pilot.keywords;
      // @ts-ignore
      local.slots = pilot.slots?.map(s => (s === 'Payload' ? 'Device' : s));
      local.image = pilot.image;
      local.artwork = pilot.artwork;
      local.restricted = pilot.restricted && pilot.restricted > 0 ? pilot.restricted : undefined;

      if (path === 'legacy') {
        local.standard = pilot.standard !== false;
        local.extended = pilot.wildspace !== undefined ? pilot.wildspace : pilot.extended !== false;
        local.epic = pilot.epic !== false;
        delete local['wildspace'];
      }

      if (!local.ffg) {
        // Check manifest first
        if (revManifest.pilots[local.xws]) {
          local.ffg = parseInt(revManifest.pilots[local.xws]);
        } else {
          // If not found, assign a new pilot number
          pilotNumber += 1;
          local.ffg = pilotNumber;
          // @ts-ignore
          theManifest.pilots[pilotNumber.toString()] = local.xws;
          // @ts-ignore
          revManifest.pilots[local.xws] = pilotNumber.toString();
        }
      }

      return local;
    });

    const header = 'import { ShipType } from "../../../../types";\n\nconst t: ShipType = ';
    const formatted = await prettier.format(`${header}${JSON.stringify(ship)};\n\nexport default t;`, {
      trailingComma: 'all',
      singleQuote: true,
      parser: 'typescript',
    });

    fs.writeFileSync(`./src/assets/${path}/pilots/${getName(faction)}/${urlFileName}.ts`, formatted, 'utf8');
  };

  const processUpgrade = (key: SlotKey, data: XWDUpgrade) => {
    // @ts-expect-error
    let upgrade = assets.upgrades[key].find(u => u.xws === data.xws);
    const { name, ...rest } = data;

    if (!upgrade) {
      upgrade = {
        ...rest,
        standard: true,
        sides: rest.sides.map(s => ({
          ...s,
          title: s.title,
          ability: s.ability
            .replaceAll('[[', '([')
            .replaceAll(']]', '])')
            .replaceAll('[0', '(0')
            .replaceAll('[1', '(1')
            .replaceAll('[2', '(2')
            .replaceAll('[3', '(3')
            .replaceAll('[4', '(4')
            .replaceAll('[5', '(5')
            .replaceAll('[6', '(6')
            .replaceAll('[7', '(7')
            .replaceAll('[8', '(8')
            .replaceAll('[9', '(9'),
          text: s.text,
          force: s.force ? { ...s.force, side: ['light', 'dark'] } : undefined,
          grants: s.grants
            ? s.grants.map(g => {
                if (g.type === 'action') {
                  return {
                    action: g.value,
                    value: 1,
                  };
                } else if (g.type === 'slot') {
                  return {
                    slot: g.value,
                    value: g.amount || 1,
                  };
                } else if (g.type === 'stat') {
                  if (g.arc) {
                    return {
                      stat: g.value,
                      value: g.amount || 1,
                      arc: g.arc,
                    };
                  }
                  return {
                    stat: g.value,
                    value: g.amount || 1,
                  };
                } else if (g.type === 'arc') {
                  return {
                    arc: g.value,
                    value: 1,
                  };
                } else if (g.type === 'force') {
                  return {
                    side: g.value[0],
                    value: g.amount || 1,
                  };
                }
                return g;
              })
            : undefined,
        })),
        epic: true,
        cost: rest.cost ?? undefined,
        restrictions: rest.restrictions
          ?.filter(r => Object.keys(r).length > 0)
          ?.map(r => {
            const { action, factions, equipped } = r;
            const res: Restrictions = { action, factions, equipped };

            if (r.sizes) {
              res.baseSizes = r.sizes as Size[];
            }
            if (r.ships) {
              res.chassis = r.ships;
            }
            return res;
          }),
        restricted: rest.restricted && rest.restricted > 0 ? rest.restricted : undefined,
      };
      assets.upgrades[key].push(upgrade);
    } else if (upgrade) {
      upgrade.sides = rest.sides.map((s, i) => ({
        ...upgrade!.sides[i],
        artwork: s.artwork,
        image: s.image,
        // ...s,
        // title: s.title,
        // ability: s.ability,
        // text: s.text,
        // force: s.force ? { ...upgrade!.sides[i]?.force, ...s.force } : undefined,
        // grants: s.grants
        //   ? s.grants.map((g) => {
        //       if (g.type === 'action') {
        //         return {
        //           action: g.value,
        //           value: 1,
        //         };
        //       } else if (g.type === 'slot') {
        //         return {
        //           slot: slotFromKey(g.value),
        //           value: g.amount || 1,
        //         };
        //       } else if (g.type === 'stat') {
        //         if (g.arc) {
        //           return {
        //             stat: g.value,
        //             value: g.amount || 1,
        //             arc: g.arc,
        //           };
        //         }
        //         return {
        //           stat: g.value,
        //           value: g.amount || 1,
        //         };
        //       } else if (g.type === 'arc') {
        //         return {
        //           arc: g.value,
        //           value: 1,
        //         };
        //       } else if (g.type === 'force') {
        //         return {
        //           side: g.value[0],
        //           value: g.amount || 1,
        //         };
        //       }
        //       return g;
        //     })
        //   : undefined,
      }));
      upgrade.cost = rest.cost ?? undefined;
      upgrade.restrictions = rest.restrictions
        ?.filter(r => (r.standardized !== undefined ? false : true))
        ?.map(r => {
          const { ships, sizes, force_side, names, shields, energy, initiative, agility, ...rest } = r;
          const res: Restrictions = { ...rest };

          if (sizes) {
            res.baseSizes = sizes as Size[];
          }
          if (ships) {
            res.chassis = ships;
          }
          if (force_side) {
            res.sides = force_side;
          }
          if (names) {
            res.character = names;
          }
          if (shields) {
            res.stat = { type: 'shields', value: parseInt(shields[0], 10) };
          }
          if (energy) {
            res.stat = { type: 'energy', value: parseInt(energy[0], 10) };
          }
          if (agility) {
            res.stat = { type: 'agility', value: agility[0] };
          }

          if (initiative) {
            if (initiative[0].includes('OR LOWER')) {
              res.initiative = { max: parseInt(initiative[0], 10) };
            }
          }

          return res;
        });
      upgrade.restricted = rest.restricted && rest.restricted > 0 ? rest.restricted : undefined;

      if (path === 'legacy') {
        upgrade.standard = rest.standard !== false;
        upgrade.extended = rest.wildspace !== undefined ? rest.wildspace : rest.extended !== false;
        upgrade.epic = rest.epic !== false;
        delete upgrade['wildspace'];
      }
    }
  };

  const progress = (i: number, increment: number) => `Updating from xwing-data2 ${((i / increment) * 100).toFixed(0)}%`;

  const spinner = ora('Updating from xwing-data2').start();
  const manifest: any = await get('/data/manifest.json');

  let increment = 0;
  manifest.pilots.forEach((p: any) => (increment += p.ships.length));
  increment += manifest.upgrades.length;

  const pilotStart = getLatestPilotNumber();

  let i = 0;
  await asyncForEach(manifest.pilots, async (data: any) => {
    // Pre-fetch all ships to detect XWS collisions within a faction
    const shipEntries: Array<{ url: string; data: XWDShip }> = [];
    await asyncForEach(data.ships, async (shipUrl: string) => {
      const ship = await get(`/${shipUrl}`);
      shipEntries.push({ url: shipUrl, data: ship as XWDShip });
    });

    // Count xws occurrences to detect collisions
    const xwsCounts: Record<string, number> = {};
    shipEntries.forEach(entry => {
      xwsCounts[entry.data.xws] = (xwsCounts[entry.data.xws] || 0) + 1;
    });

    const faction = getFaction(data.faction);
    const processedShips: Array<{ key: string; fileName: string }> = [];

    await asyncForEach(shipEntries, async (entry: { url: string; data: XWDShip }) => {
      const urlFileName = entry.url.split('/').pop()?.replace('.json', '') || '';
      const urlKey = urlFileName.replaceAll('-', '');
      const hasCollision = xwsCounts[entry.data.xws] > 1;
      // When multiple upstream files share the same xws, use URL-derived key to disambiguate
      const effectiveXws = hasCollision ? urlKey : entry.data.xws;

      await processShip(faction, entry.data, urlFileName, effectiveXws);
      processedShips.push({ key: effectiveXws, fileName: urlFileName });

      spinner.text = progress(i, increment);
      i++;
    });

    // Regenerate faction index.ts
    const factionDir = getName(faction);
    let imports = "import { ShipType } from '../../../../types';\n";
    const entries: string[] = [];
    processedShips.forEach(({ key, fileName }) => {
      imports += `import ${key} from './${fileName}';\n`;
      entries.push(`  ${key},`);
    });
    const indexCode = `${imports}\nconst ships: { [s: string]: ShipType } = {\n${entries.join('\n')}\n};\n\nexport default ships;\n`;
    const formattedIndex = await prettier.format(indexCode, {
      trailingComma: 'all',
      singleQuote: true,
      parser: 'typescript',
    });
    fs.writeFileSync(`./src/assets/${path}/pilots/${factionDir}/index.ts`, formattedIndex, 'utf8');
  });

  await asyncForEach(manifest.upgrades, async (url: string) => {
    const upgrades: any = await get(`/${url}`);
    const key = url.replaceAll('.json', '').split('/').pop();
    if (!key) {
      return;
    }

    upgrades.forEach((upgrade: any) => {
      processUpgrade(getName(key).replaceAll('-', '') as SlotKey, upgrade);
    });

    const header = 'import { UpgradeBase } from "../../../types";\n\nconst t: UpgradeBase[] = ';
    const formatted = await prettier.format(
      `${header}${JSON.stringify(assets.upgrades[getName(key).replaceAll('-', '') as SlotKey])};\n\nexport default t;`,
      {
        trailingComma: 'all',
        singleQuote: true,
        parser: 'typescript',
      },
    );
    fs.writeFileSync(`./src/assets/${path}/upgrades/${getName(key)}.ts`, formatted, 'utf8');

    spinner.text = progress(i, increment);
    i++;
  });

  console.log('\n\n**** Updating pilots and upgrades manifest ****\n', pilotStart);

  theManifest.pilots = {};
  // Loop all pilots and upgrades and update the manifest
  Object.keys(assets.pilots).forEach(faction => {
    Object.keys(assets.pilots[faction]).forEach(ship => {
      assets.pilots[faction][ship].pilots.forEach((pilot: any) => {
        if (pilot.ffg && !isNaN(pilot.ffg) && !theManifest.pilots[pilot.xws]) {
          theManifest.pilots[pilot.ffg] = pilot.xws;
        }
      });
    });
  });

  revManifest.pilots = {};
  // Create revManifest
  Object.keys(theManifest.pilots).forEach(ffg => {
    revManifest.pilots[theManifest.pilots[ffg]] = ffg;
  });

  // Write the manifest
  const formattedManifest = await prettier.format(
    `export const manifest = ${JSON.stringify(theManifest)};\n\nexport const revManifest = ${JSON.stringify(revManifest)}\n\n`,
    {
      trailingComma: 'all',
      singleQuote: true,
      parser: 'typescript',
    },
  );
  fs.writeFileSync(`./src/assets/${path}/manifest.ts`, formattedManifest, 'utf8');

  spinner.succeed('Update from xwing-data2 complete!');
};
