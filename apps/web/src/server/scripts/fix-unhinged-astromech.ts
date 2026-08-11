/**
 * One-off fix: corrects the `unhingedastromech-legendsandrelics` upgrade in the DB.
 *
 * The row was seeded (and never re-updated, because seeding uses onConflictDoNothing) with:
 *   - Limited = 1   -> should be 0 (Unhinged Astromech is a generic, non-limited upgrade)
 *   - Sides[].image / Sides[].artwork pointing at r7t1-legendsandrelics.png (copy-paste error)
 *
 * This updates the row for all rulesets that have it, then recomputes the game data version
 * so clients refetch.
 *
 * Usage: npx tsx src/server/scripts/fix-unhinged-astromech.ts
 * Requires DATABASE_URL environment variable.
 */

import { eq } from 'drizzle-orm';
import { db } from '../db';
import { GameUpgrades } from '../drizzle/schema';
import { computeAndUpdateVersion } from '../helpers/versionHash';

const XWS = 'unhingedastromech-legendsandrelics';
const OK_IMAGE = 'https://infinitearenas.com/xw2/images/upgrades/unhingedastromech-legendsandrelics.png';
const OK_ARTWORK = 'https://infinitearenas.com/xw2/images/artwork/upgrades/unhingedastromech-legendsandrelics.png';

async function main() {
  const rows = await db.select().from(GameUpgrades).where(eq(GameUpgrades.Xws, XWS));

  if (rows.length === 0) {
    console.log(`No rows found for xws "${XWS}". Nothing to do.`);
    return;
  }

  const rulesets = new Set<string>();

  for (const row of rows) {
    const sides = (row.Sides as Array<Record<string, unknown>>).map(side => ({
      ...side,
      image: OK_IMAGE,
      artwork: OK_ARTWORK,
    }));

    await db
      .update(GameUpgrades)
      .set({ Limited: 0, Sides: sides, UpdatedAt: new Date().toISOString() })
      .where(eq(GameUpgrades.Id, row.Id));

    rulesets.add(row.Ruleset);
    console.log(`Fixed ${XWS} (ruleset=${row.Ruleset}, id=${row.Id})`);
  }

  for (const ruleset of rulesets) {
    const version = await computeAndUpdateVersion(ruleset);
    console.log(`Bumped ${ruleset} version -> ${version}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
