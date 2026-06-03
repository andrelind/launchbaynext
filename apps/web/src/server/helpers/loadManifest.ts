import { eq } from 'drizzle-orm';
import type { ManifestData } from 'lbn-core/src/types';
import { db } from '../db';
import { ManifestEntries } from '../drizzle/schema';

export async function loadManifest(ruleset: string): Promise<ManifestData> {
  const rows = await db.select().from(ManifestEntries).where(eq(ManifestEntries.Ruleset, ruleset));

  const manifest: ManifestData = {
    factions: {},
    ships: {},
    pilots: {},
    upgrades: {},
    slots: {},
  };

  for (const row of rows) {
    const key = `${row.NumericId}`;
    switch (row.EntityType) {
      case 'faction':
        manifest.factions[key] = row.XwsKey;
        break;
      case 'ship':
        manifest.ships[key] = row.XwsKey;
        break;
      case 'pilot':
        manifest.pilots[key] = row.XwsKey;
        break;
      case 'upgrade':
        manifest.upgrades[key] = row.XwsKey;
        break;
      case 'slot':
        manifest.slots[key] = row.XwsKey;
        break;
    }
  }

  return manifest;
}
