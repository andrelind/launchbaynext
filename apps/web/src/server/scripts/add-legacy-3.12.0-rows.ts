/**
 * One-off: applies what sync-legacy.ts only reports for Legacy 3.12.0.
 *
 * - Adds the condition liberated-wat1, which tarfful-wat1 already references.
 * - Adds the pilot enricpryde-wat1 to the existing upsilonclassshuttle ship, with a new manifest ID.
 *   Upstream's image links for this pilot have no file extension and return 404, so tested ones are used.
 * - Updates whisper-pnp-ls to match upstream's whisper-pnp-lsl. The ID is kept because saved lists use it.
 *
 * Runs in one transaction and stops if any row isn't in the expected state.
 *
 * Usage: bun run src/server/scripts/add-legacy-3.12.0-rows.ts
 * Requires DATABASE_URL environment variable.
 */

import postgres from 'postgres';
import { v4 } from 'uuid';
import { computeAndUpdateVersion } from '../helpers/versionHash';
import { normalizeCondition, normalizePilot } from './sync/normalize';

const BASE = 'https://raw.githubusercontent.com/SogeMoge/xwing-data2-legacy/3.12.0/data';
const RULESET = 'legacy';
const PRYDE_IMAGE =
  'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/enricpryde-wat1.png';
const PRYDE_ARTWORK = 'https://infinitearenas.com/xw2/images/artwork/pilots/enricpryde-wat1.png';

const fetchJson = async (path: string) => {
  const response = await fetch(`${BASE}/${path}`);
  if (!response.ok) throw new Error(`${response.status} fetching ${path}`);
  return response.json() as Promise<any>;
};

const findXws = (items: any[], xws: string) => {
  const item = items.find(entry => entry.xws === xws);
  if (!item) throw new Error(`${xws} not found upstream`);
  return item;
};

const main = async () => {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');

  const conditions = await fetchJson('conditions/conditions.json');
  const shuttle = await fetchJson('pilots/first-order/upsilon-class-command-shuttle.json');
  const phantom = await fetchJson('pilots/galactic-empire/tie-ph-phantom.json');

  const condition = normalizeCondition(findXws(conditions, 'liberated-wat1'));
  const pryde = normalizePilot(findXws(shuttle.pilots, 'enricpryde-wat1'));
  const whisper = normalizePilot(findXws(phantom.pilots, 'whisper-pnp-lsl'));

  const sql = postgres(process.env.DATABASE_URL, { max: 1 });
  const now = new Date().toISOString();

  await sql.begin(async tx => {
    await tx`
      insert into "GameConditions" ("Id", "Ruleset", "Xws", "Name", "Ability", "Image")
      values (${v4()}, ${RULESET}, ${'liberated-wat1'}, ${condition.Name}, ${condition.Ability}, ${condition.Image})`;

    const [ship] = await tx`
      select "Id" from "Ships"
      where "Ruleset" = ${RULESET} and "Faction" = ${'First Order'} and "Xws" = ${'upsilonclassshuttle'}`;
    if (!ship) throw new Error('upsilonclassshuttle not found');

    // Above every ID in use, including the fallback manifest bundled with the apps. Those stop at 1161.
    const [{ highest }] = await tx`
      select greatest(
        (select max("NumericId") from "ManifestEntries" where "Ruleset" = ${RULESET}),
        (select max(p."Ffg") from "Pilots" p join "Ships" s on p."ShipId" = s."Id" where s."Ruleset" = ${RULESET})
      ) as highest`;
    const id = highest + 1;

    await tx`
      insert into "Pilots" ${tx({
        Id: v4(),
        ShipId: ship.Id,
        Xws: 'enricpryde-wat1',
        Name: pryde.Name,
        Caption: pryde.Caption,
        Cost: pryde.Cost,
        Initiative: pryde.Initiative,
        Limited: pryde.Limited,
        Ability: pryde.Ability,
        Slots: tx.json(pryde.Slots),
        ShipAbility: tx.json(pryde.ShipAbility),
        Standard: pryde.Standard,
        Extended: pryde.Extended,
        Epic: pryde.Epic,
        Image: PRYDE_IMAGE,
        Artwork: PRYDE_ARTWORK,
        Ffg: id,
        UpdatedAt: now,
      })}`;
    await tx`
      insert into "ManifestEntries" ("Id", "Ruleset", "NumericId", "XwsKey", "EntityType")
      values (${v4()}, ${RULESET}, ${id}, ${'enricpryde-wat1'}, ${'pilot'})`;
    console.log(`Added enricpryde-wat1 with ID ${id}`);

    const updated = await tx`
      update "Pilots" set "Cost" = ${whisper.Cost}, "ShipAbility" = ${tx.json(whisper.ShipAbility)}, "UpdatedAt" = ${now}
      where "Xws" = ${'whisper-pnp-ls'} and "Cost" = ${57} and "ShipAbility" is null
        and "ShipId" = (select "Id" from "Ships"
          where "Ruleset" = ${RULESET} and "Faction" = ${'Galactic Empire'} and "Xws" = ${'tiephphantom'})`;
    if (updated.count !== 1) throw new Error(`whisper-pnp-ls: updated ${updated.count} rows`);
  });

  console.log(`${RULESET} version hash: ${await computeAndUpdateVersion(RULESET)}`);
  await sql.end();
  process.exit(0);
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
