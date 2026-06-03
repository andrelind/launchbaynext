import { sql } from 'drizzle-orm';
import { v4 } from 'uuid';
import { db } from '../db';

export async function ensureManifestEntry(ruleset: string, entityType: string, xwsKey: string): Promise<void> {
  // Retry loop handles the rare case where two concurrent inserts pick the same
  // NumericId — the unique index rejects the duplicate and we simply retry.
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await db.execute(
        sql`INSERT INTO "ManifestEntries" ("Id", "Ruleset", "NumericId", "XwsKey", "EntityType")
            SELECT ${v4()}, ${ruleset},
                   COALESCE(MAX("NumericId"), 0) + 1,
                   ${xwsKey}, ${entityType}
            FROM "ManifestEntries"
            WHERE "Ruleset" = ${ruleset}
            ON CONFLICT ON CONSTRAINT "manifest_ruleset_entity_xws" DO NOTHING`,
      );
      return;
    } catch (e: any) {
      // Retry only on NumericId uniqueness violation
      if (e?.constraint === 'manifest_ruleset_numeric_id' || e?.code === '23505') {
        continue;
      }
      throw e;
    }
  }
}
