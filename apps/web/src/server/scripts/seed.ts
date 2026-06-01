/**
 * Seed script: reads static TypeScript assets from packages/core and populates the database.
 *
 * Usage: npx tsx src/server/scripts/seed.ts
 *
 * Requires DATABASE_URL environment variable.
 */

import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { v4 } from 'uuid';
import * as schema from '../drizzle/schema';

// Import static data from core
import { assets } from 'lbn-core/src';
import { manifest as legacyManifest } from 'lbn-core/src/assets/legacy/manifest';
import { manifest as xwaManifest } from 'lbn-core/src/assets/xwa/manifest';
import { slotKeys } from 'lbn-core/src/helpers/enums';
import sourcesData from 'lbn-core/src/sources';
import type { Condition, Faction, ShipType, SlotKey, UpgradeBase } from 'lbn-core/src/types';

const queryClient = postgres(process.env.DATABASE_URL || 'postgres://postgres:adminadmin@0.0.0.0:5432/db');
const db = drizzle(queryClient, { schema });

const RULESETS = ['xwa', 'legacy'] as const;

/** Convert NaN/undefined to null for integer columns */
const safeInt = (v: number | undefined | null): number | null => (v == null || Number.isNaN(v) ? null : v);

async function seedShipsAndPilots(ruleset: 'xwa' | 'legacy') {
  const data = assets[ruleset];
  const pilotsData = data.pilots as unknown as { [faction in Faction]?: { [shipXws: string]: ShipType } };
  const now = new Date().toISOString();

  let shipCount = 0;
  let pilotCount = 0;

  for (const [factionName, factionShips] of Object.entries(pilotsData)) {
    if (!factionShips) continue;

    for (const [shipXws, shipType] of Object.entries(factionShips)) {
      const shipId = v4();

      await db
        .insert(schema.Ships)
        .values({
          Id: shipId,
          Ruleset: ruleset,
          Faction: factionName,
          Xws: shipXws,
          Name: shipType.name,
          Size: shipType.size,
          Dial: shipType.dial,
          DialCodes: shipType.dialCodes ?? null,
          Stats: shipType.stats,
          Actions: shipType.actions,
          Ability: shipType.ability ?? null,
          Ffg: safeInt(shipType.ffg),
          Icon: shipType.icon ?? null,
          UpdatedAt: now,
        })
        .onConflictDoNothing();
      shipCount++;

      for (const pilot of shipType.pilots || []) {
        await db
          .insert(schema.Pilots)
          .values({
            Id: v4(),
            ShipId: shipId,
            Xws: pilot.xws,
            Name: pilot.name,
            Caption: pilot.caption ?? null,
            Cost: safeInt(pilot.cost) ?? 0,
            Loadout: safeInt(pilot.loadout),
            Initiative: safeInt(pilot.initiative) ?? 0,
            Limited: safeInt(pilot.limited) ?? 0,
            Ability: pilot.ability ?? null,
            Text: pilot.text ?? null,
            Slots: pilot.slots ?? null,
            Conditions: pilot.conditions ?? null,
            ShipActions: pilot.shipActions ?? null,
            ShipAbility: pilot.shipAbility ?? null,
            Force: pilot.force ?? null,
            Charges: pilot.charges ?? null,
            Standard: pilot.standard,
            Extended: pilot.extended ?? true,
            Epic: pilot.epic,
            Wildspace: pilot.wildspace ?? false,
            Keywords: pilot.keywords ?? null,
            Image: pilot.image ?? null,
            Artwork: pilot.artwork ?? null,
            StandardLoadout: pilot.standardLoadout ?? null,
            PilotStats: pilot.stats ?? null,
            Ffg: safeInt(pilot.ffg),
            Engagement: safeInt(pilot.engagement),
            Restricted: safeInt(pilot.restricted),
            UpdatedAt: now,
          })
          .onConflictDoNothing();
        pilotCount++;
      }
    }
  }

  console.log(`  [${ruleset}] Seeded ${shipCount} ships, ${pilotCount} pilots`);
}

async function seedUpgrades(ruleset: 'xwa' | 'legacy') {
  const data = assets[ruleset];
  const upgradesData = data.upgrades as unknown as { [key in SlotKey]?: UpgradeBase[] };
  const now = new Date().toISOString();
  let count = 0;

  for (const slotKey of slotKeys) {
    const upgrades = upgradesData[slotKey];
    if (!upgrades) continue;

    for (const upgrade of upgrades) {
      await db
        .insert(schema.GameUpgrades)
        .values({
          Id: v4(),
          Ruleset: ruleset,
          Slot: slotKey,
          Xws: upgrade.xws,
          Limited: safeInt(upgrade.limited) ?? 0,
          Cost: upgrade.cost ?? null,
          Sides: upgrade.sides,
          Restrictions: upgrade.restrictions ?? null,
          Standard: upgrade.standard,
          Extended: upgrade.extended ?? true,
          Epic: upgrade.epic,
          Wildspace: upgrade.wildspace ?? false,
          Standarized: upgrade.standarized ?? false,
          Keywords: upgrade.keywords ?? null,
          StandardLoadoutOnly: upgrade.standardLoadoutOnly ?? false,
          Restricted: safeInt(upgrade.restricted),
          UpdatedAt: now,
        })
        .onConflictDoNothing();
      count++;
    }
  }

  console.log(`  [${ruleset}] Seeded ${count} upgrades`);
}

async function seedConditions(ruleset: 'xwa' | 'legacy') {
  const data = assets[ruleset];
  const conditions = data.conditions as unknown as Condition[];
  let count = 0;

  for (const condition of conditions) {
    await db
      .insert(schema.GameConditions)
      .values({
        Id: v4(),
        Ruleset: ruleset,
        Xws: condition.xws,
        Name: condition.name,
        Ability: condition.ability,
        Image: condition.image ?? null,
      })
      .onConflictDoNothing();
    count++;
  }

  console.log(`  [${ruleset}] Seeded ${count} conditions`);
}

async function seedManifest(ruleset: 'xwa' | 'legacy') {
  const manifestData = ruleset === 'xwa' ? xwaManifest : legacyManifest;
  let count = 0;

  const entries: Array<{
    Id: string;
    Ruleset: string;
    NumericId: number;
    XwsKey: string;
    EntityType: string;
  }> = [];

  for (const [numId, xwsKey] of Object.entries(manifestData.ships)) {
    const n = parseInt(numId);
    if (isNaN(n)) continue;
    entries.push({
      Id: v4(),
      Ruleset: ruleset,
      NumericId: n,
      XwsKey: xwsKey,
      EntityType: 'ship',
    });
  }

  for (const [numId, xwsKey] of Object.entries(manifestData.pilots)) {
    const n = parseInt(numId);
    if (isNaN(n)) continue;
    entries.push({
      Id: v4(),
      Ruleset: ruleset,
      NumericId: n,
      XwsKey: xwsKey,
      EntityType: 'pilot',
    });
  }

  for (const [numId, xwsKey] of Object.entries(manifestData.upgrades)) {
    const n = parseInt(numId);
    if (isNaN(n)) continue;
    entries.push({
      Id: v4(),
      Ruleset: ruleset,
      NumericId: n,
      XwsKey: xwsKey,
      EntityType: 'upgrade',
    });
  }

  for (const [numId, xwsKey] of Object.entries(manifestData.factions)) {
    const n = parseInt(numId);
    if (isNaN(n)) continue;
    entries.push({
      Id: v4(),
      Ruleset: ruleset,
      NumericId: n,
      XwsKey: xwsKey,
      EntityType: 'faction',
    });
  }

  for (const [numId, xwsKey] of Object.entries(manifestData.slots)) {
    const n = parseInt(numId);
    if (isNaN(n)) continue;
    entries.push({
      Id: v4(),
      Ruleset: ruleset,
      NumericId: n,
      XwsKey: xwsKey,
      EntityType: 'slot',
    });
  }

  // Insert in batches of 100
  for (let i = 0; i < entries.length; i += 100) {
    const batch = entries.slice(i, i + 100);
    await db.insert(schema.ManifestEntries).values(batch).onConflictDoNothing();
  }

  count = entries.length;
  console.log(`  [${ruleset}] Seeded ${count} manifest entries`);
}

async function seedSources() {
  let count = 0;

  for (const [category, sources] of Object.entries(sourcesData)) {
    if (!Array.isArray(sources)) continue;

    for (const source of sources) {
      await db
        .insert(schema.Sources)
        .values({
          Id: v4(),
          Category: category,
          Ffg: source.ffg,
          Xws: source.xws,
          Name: source.name,
          Wave: source.wave,
          Released: source.released,
          Contents: source.contents,
          Sku: source.sku ?? null,
        })
        .onConflictDoNothing();
      count++;
    }
  }

  console.log(`  Seeded ${count} sources`);
}

async function computeAndStoreVersion(ruleset: string) {
  const { Md5 } = await import('ts-md5');
  const { eq } = await import('drizzle-orm');

  const [ships, pilots, upgrades, conditions] = await Promise.all([
    db.select().from(schema.Ships).where(eq(schema.Ships.Ruleset, ruleset)),
    db
      .select()
      .from(schema.Pilots)
      .innerJoin(schema.Ships, eq(schema.Pilots.ShipId, schema.Ships.Id))
      .where(eq(schema.Ships.Ruleset, ruleset)),
    db.select().from(schema.GameUpgrades).where(eq(schema.GameUpgrades.Ruleset, ruleset)),
    db.select().from(schema.GameConditions).where(eq(schema.GameConditions.Ruleset, ruleset)),
  ]);

  const hash = Md5.hashStr(JSON.stringify({ ships, pilots, upgrades, conditions }));

  await db
    .insert(schema.GameDataVersions)
    .values({
      Ruleset: ruleset,
      Version: hash,
      UpdatedAt: new Date().toISOString(),
    })
    .onConflictDoUpdate({
      target: schema.GameDataVersions.Ruleset,
      set: {
        Version: hash,
        UpdatedAt: new Date().toISOString(),
      },
    });

  console.log(`  [${ruleset}] Version hash: ${hash}`);
}

async function main() {
  console.log('Starting seed...\n');

  // Truncate game data tables (Pilots has FK to Ships, so order matters)
  console.log('Clearing existing game data...');
  await db.execute(
    sql`TRUNCATE "Pilots", "Ships", "GameUpgrades", "GameConditions", "ManifestEntries", "Sources", "GameDataVersions" CASCADE`,
  );

  for (const ruleset of RULESETS) {
    console.log(`Seeding ${ruleset}...`);
    await seedShipsAndPilots(ruleset);
    await seedUpgrades(ruleset);
    await seedConditions(ruleset);
    await seedManifest(ruleset);
    await computeAndStoreVersion(ruleset);
    console.log();
  }

  console.log('Seeding sources...');
  await seedSources();

  console.log('\nSeed complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
