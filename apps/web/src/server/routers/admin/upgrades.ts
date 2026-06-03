import { and, eq, ilike, sql } from 'drizzle-orm';
import { v4 } from 'uuid';
import { z } from 'zod';
import { db } from '../../db';
import { GameUpgrades, ManifestEntries } from '../../drizzle/schema';
import { computeAndUpdateVersion } from '../../helpers/versionHash';
import { adminProcedure, router } from '../../trpc';

export const adminUpgradesRouter = router({
  list: adminProcedure
    .input(
      z.object({
        ruleset: z.enum(['xwa', 'legacy']),
        slot: z.string().optional(),
        search: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const conditions = [eq(GameUpgrades.Ruleset, input.ruleset)];
      if (input.slot) {
        conditions.push(eq(GameUpgrades.Slot, input.slot));
      }
      if (input.search) {
        // Search in the JSONB sides array for title
        conditions.push(ilike(GameUpgrades.Xws, `%${input.search}%`));
      }

      return db
        .select()
        .from(GameUpgrades)
        .where(and(...conditions))
        .orderBy(GameUpgrades.Slot, GameUpgrades.Xws);
    }),

  get: adminProcedure.input(z.object({ id: z.string().uuid() })).query(async ({ input }) => {
    return db
      .select()
      .from(GameUpgrades)
      .where(eq(GameUpgrades.Id, input.id))
      .then(rows => rows[0] ?? null);
  }),

  create: adminProcedure
    .input(
      z.object({
        ruleset: z.enum(['xwa', 'legacy']),
        slot: z.string(),
        xws: z.string(),
        limited: z.number(),
        cost: z.any().optional(),
        sides: z.any(),
        restrictions: z.any().optional(),
        standard: z.boolean(),
        extended: z.boolean().default(true),
        epic: z.boolean(),
        wildspace: z.boolean().default(false),
        standarized: z.boolean().default(false),
        keywords: z.any().optional(),
        standardLoadoutOnly: z.boolean().default(false),
        restricted: z.number().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = v4();
      const now = new Date().toISOString();
      await db.insert(GameUpgrades).values({
        Id: id,
        Ruleset: input.ruleset,
        Slot: input.slot,
        Xws: input.xws,
        Limited: input.limited,
        Cost: input.cost ?? null,
        Sides: input.sides,
        Restrictions: input.restrictions ?? null,
        Standard: input.standard,
        Extended: input.extended,
        Epic: input.epic,
        Wildspace: input.wildspace,
        Standarized: input.standarized,
        Keywords: input.keywords ?? null,
        StandardLoadoutOnly: input.standardLoadoutOnly,
        Restricted: input.restricted ?? null,
        UpdatedAt: now,
      });

      // Auto-create manifest entry for the new upgrade
      const existing = await db.select().from(ManifestEntries).where(
        and(
          eq(ManifestEntries.Ruleset, input.ruleset),
          eq(ManifestEntries.EntityType, 'upgrade'),
          eq(ManifestEntries.XwsKey, input.xws),
        ),
      );
      if (existing.length === 0) {
        // Find the next available numeric ID for this ruleset
        const maxResult = await db.execute(
          sql`SELECT COALESCE(MAX("NumericId"), 0) + 1 as next_id FROM "ManifestEntries" WHERE "Ruleset" = ${input.ruleset}`,
        );
        const nextId = (maxResult.rows[0] as { next_id: number }).next_id;
        await db.insert(ManifestEntries).values({
          Id: v4(),
          Ruleset: input.ruleset,
          NumericId: nextId,
          XwsKey: input.xws,
          EntityType: 'upgrade',
        });
      }

      await computeAndUpdateVersion(input.ruleset);
      return { id };
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        slot: z.string().optional(),
        xws: z.string().optional(),
        limited: z.number().optional(),
        cost: z.any().optional(),
        sides: z.any().optional(),
        restrictions: z.any().optional(),
        standard: z.boolean().optional(),
        extended: z.boolean().optional(),
        epic: z.boolean().optional(),
        wildspace: z.boolean().optional(),
        standarized: z.boolean().optional(),
        keywords: z.any().optional(),
        standardLoadoutOnly: z.boolean().optional(),
        restricted: z.number().nullable().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const now = new Date().toISOString();

      const updateData: Record<string, any> = { UpdatedAt: now };
      if (data.slot !== undefined) updateData.Slot = data.slot;
      if (data.xws !== undefined) updateData.Xws = data.xws;
      if (data.limited !== undefined) updateData.Limited = data.limited;
      if (data.cost !== undefined) updateData.Cost = data.cost;
      if (data.sides !== undefined) updateData.Sides = data.sides;
      if (data.restrictions !== undefined) updateData.Restrictions = data.restrictions;
      if (data.standard !== undefined) updateData.Standard = data.standard;
      if (data.extended !== undefined) updateData.Extended = data.extended;
      if (data.epic !== undefined) updateData.Epic = data.epic;
      if (data.wildspace !== undefined) updateData.Wildspace = data.wildspace;
      if (data.standarized !== undefined) updateData.Standarized = data.standarized;
      if (data.keywords !== undefined) updateData.Keywords = data.keywords;
      if (data.standardLoadoutOnly !== undefined) updateData.StandardLoadoutOnly = data.standardLoadoutOnly;
      if (data.restricted !== undefined) updateData.Restricted = data.restricted;

      await db.update(GameUpgrades).set(updateData).where(eq(GameUpgrades.Id, id));

      const upgrade = await db
        .select()
        .from(GameUpgrades)
        .where(eq(GameUpgrades.Id, id))
        .then(rows => rows[0]);
      if (upgrade) {
        await computeAndUpdateVersion(upgrade.Ruleset);
      }
      return { id };
    }),

  delete: adminProcedure.input(z.object({ id: z.string().uuid() })).mutation(async ({ input }) => {
    const upgrade = await db
      .select()
      .from(GameUpgrades)
      .where(eq(GameUpgrades.Id, input.id))
      .then(rows => rows[0]);
    if (!upgrade) return { success: false };

    await db.delete(GameUpgrades).where(eq(GameUpgrades.Id, input.id));
    await computeAndUpdateVersion(upgrade.Ruleset);
    return { success: true };
  }),
});
