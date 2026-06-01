import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../db';
import { GameConditions, GameUpgrades, ManifestEntries, Sources } from '../drizzle/schema';
import { publicProcedure, router } from '../trpc';

import type { Condition, Faction, GameData, ManifestData, ShipType, SlotKey, UpgradeBase } from 'lbn-core/src/types';

const rulesetInput = z.object({ ruleset: z.enum(['xwa', 'legacy']) });

export const gameDataRouter = router({
  version: publicProcedure.input(rulesetInput).query(async ({ input }) => {
    const row = await db.query.GameDataVersions.findFirst({
      where: (v, { eq }) => eq(v.Ruleset, input.ruleset),
    });
    return { version: row?.Version ?? null };
  }),

  all: publicProcedure.input(rulesetInput).query(async ({ input }) => {
    const { ruleset } = input;

    // Fetch ships with their pilots
    const shipsRows = await db.query.Ships.findMany({
      where: (s, { eq }) => eq(s.Ruleset, ruleset),
      with: { Pilots: true },
    });

    // Build pilots map: { [faction]: { [shipXws]: ShipType } }
    const pilots: GameData['pilots'] = {};
    for (const ship of shipsRows) {
      const faction = ship.Faction as Faction;
      if (!pilots[faction]) {
        pilots[faction] = {};
      }
      const shipType: ShipType = {
        name: ship.Name,
        xws: ship.Xws,
        size: ship.Size as any,
        dial: ship.Dial as string[],
        dialCodes: ship.DialCodes as string[] | undefined,
        faction,
        stats: ship.Stats as any[],
        actions: ship.Actions as any[],
        ability: ship.Ability as any,
        ffg: ship.Ffg ?? undefined,
        icon: ship.Icon ?? undefined,
        pilots: ship.Pilots.map(p => ({
          name: p.Name,
          xws: p.Xws,
          caption: p.Caption ?? undefined,
          cost: p.Cost,
          loadout: p.Loadout ?? undefined,
          initiative: p.Initiative,
          limited: p.Limited,
          ability: p.Ability ?? undefined,
          text: p.Text ?? undefined,
          slots: (p.Slots as any[]) ?? undefined,
          conditions: (p.Conditions as string[]) ?? undefined,
          shipActions: (p.ShipActions as any[]) ?? undefined,
          shipAbility: (p.ShipAbility as any) ?? undefined,
          force: (p.Force as any) ?? undefined,
          charges: (p.Charges as any) ?? undefined,
          standard: p.Standard,
          extended: p.Extended,
          epic: p.Epic,
          wildspace: p.Wildspace,
          keywords: (p.Keywords as string[]) ?? undefined,
          image: p.Image ?? undefined,
          artwork: p.Artwork ?? undefined,
          standardLoadout: (p.StandardLoadout as string[]) ?? undefined,
          stats: (p.PilotStats as any[]) ?? undefined,
          ffg: p.Ffg ?? undefined,
          engagement: p.Engagement ?? undefined,
          restricted: p.Restricted ?? undefined,
        })),
      };
      pilots[faction]![ship.Xws] = shipType;
    }

    // Fetch upgrades
    const upgradeRows = await db.select().from(GameUpgrades).where(eq(GameUpgrades.Ruleset, ruleset));

    const upgrades: GameData['upgrades'] = {};
    for (const u of upgradeRows) {
      const slot = u.Slot as SlotKey;
      if (!upgrades[slot]) {
        upgrades[slot] = [];
      }
      const upgrade: UpgradeBase = {
        xws: u.Xws,
        limited: u.Limited,
        cost: (u.Cost as any) ?? undefined,
        sides: u.Sides as any[],
        restrictions: (u.Restrictions as any[]) ?? undefined,
        standard: u.Standard,
        extended: u.Extended,
        epic: u.Epic,
        wildspace: u.Wildspace,
        standarized: u.Standarized,
        keywords: (u.Keywords as string[]) ?? undefined,
        standardLoadoutOnly: u.StandardLoadoutOnly,
        restricted: u.Restricted ?? undefined,
      };
      (upgrades[slot] as UpgradeBase[]).push(upgrade);
    }

    // Fetch conditions
    const conditionRows = await db.select().from(GameConditions).where(eq(GameConditions.Ruleset, ruleset));

    const conditions: Condition[] = conditionRows.map(c => ({
      name: c.Name,
      xws: c.Xws,
      ability: c.Ability,
      image: c.Image ?? undefined,
    }));

    const result: GameData = { pilots, upgrades, conditions };
    return result;
  }),

  sources: publicProcedure.query(async () => {
    const rows = await db.select().from(Sources);
    const grouped: Record<string, any[]> = {};
    for (const row of rows) {
      if (!grouped[row.Category]) {
        grouped[row.Category] = [];
      }
      grouped[row.Category].push({
        ffg: row.Ffg,
        xws: row.Xws,
        name: row.Name,
        wave: row.Wave,
        released: row.Released,
        contents: row.Contents,
        sku: row.Sku ?? undefined,
      });
    }
    return grouped;
  }),

  manifest: publicProcedure.input(rulesetInput).query(async ({ input }) => {
    const rows = await db.select().from(ManifestEntries).where(eq(ManifestEntries.Ruleset, input.ruleset));

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
  }),
});
