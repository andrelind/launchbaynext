import { and, eq, ilike } from 'drizzle-orm';
import { v4 } from 'uuid';
import { z } from 'zod';
import { db } from '../../db';
import { Pilots, Ships } from '../../drizzle/schema';
import { ensureManifestEntry } from '../../helpers/manifestEntry';
import { computeAndUpdateVersion } from '../../helpers/versionHash';
import { adminProcedure, router } from '../../trpc';

export const adminShipsRouter = router({
  list: adminProcedure
    .input(
      z.object({
        ruleset: z.enum(['xwa', 'legacy']),
        faction: z.string().optional(),
        search: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const conditions = [eq(Ships.Ruleset, input.ruleset)];
      if (input.faction) {
        conditions.push(eq(Ships.Faction, input.faction));
      }
      if (input.search) {
        conditions.push(ilike(Ships.Name, `%${input.search}%`));
      }

      return db.query.Ships.findMany({
        where: and(...conditions),
        with: { Pilots: true },
        orderBy: (s, { asc }) => [asc(s.Faction), asc(s.Name)],
      });
    }),

  get: adminProcedure.input(z.object({ id: z.string().uuid() })).query(async ({ input }) => {
    return db.query.Ships.findFirst({
      where: (s, { eq }) => eq(s.Id, input.id),
      with: { Pilots: true },
    });
  }),

  create: adminProcedure
    .input(
      z.object({
        ruleset: z.enum(['xwa', 'legacy']),
        faction: z.string(),
        xws: z.string(),
        name: z.string(),
        size: z.string(),
        dial: z.array(z.string()),
        dialCodes: z.array(z.string()).optional(),
        stats: z.any(),
        actions: z.any(),
        ability: z.any().optional(),
        ffg: z.number().optional(),
        icon: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = v4();
      const now = new Date().toISOString();
      await db.insert(Ships).values({
        Id: id,
        Ruleset: input.ruleset,
        Faction: input.faction,
        Xws: input.xws,
        Name: input.name,
        Size: input.size,
        Dial: input.dial,
        DialCodes: input.dialCodes ?? null,
        Stats: input.stats,
        Actions: input.actions,
        Ability: input.ability ?? null,
        Ffg: input.ffg ?? null,
        Icon: input.icon ?? null,
        UpdatedAt: now,
      });
      await ensureManifestEntry(input.ruleset, 'ship', input.xws);
      await computeAndUpdateVersion(input.ruleset);
      return { id };
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        faction: z.string().optional(),
        xws: z.string().optional(),
        name: z.string().optional(),
        size: z.string().optional(),
        dial: z.array(z.string()).optional(),
        dialCodes: z.array(z.string()).nullable().optional(),
        stats: z.any().optional(),
        actions: z.any().optional(),
        ability: z.any().nullable().optional(),
        ffg: z.number().nullable().optional(),
        icon: z.string().nullable().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const now = new Date().toISOString();

      const updateData: Record<string, any> = { UpdatedAt: now };
      if (data.faction !== undefined) updateData.Faction = data.faction;
      if (data.xws !== undefined) updateData.Xws = data.xws;
      if (data.name !== undefined) updateData.Name = data.name;
      if (data.size !== undefined) updateData.Size = data.size;
      if (data.dial !== undefined) updateData.Dial = data.dial;
      if (data.dialCodes !== undefined) updateData.DialCodes = data.dialCodes;
      if (data.stats !== undefined) updateData.Stats = data.stats;
      if (data.actions !== undefined) updateData.Actions = data.actions;
      if (data.ability !== undefined) updateData.Ability = data.ability;
      if (data.ffg !== undefined) updateData.Ffg = data.ffg;
      if (data.icon !== undefined) updateData.Icon = data.icon;

      await db.update(Ships).set(updateData).where(eq(Ships.Id, id));

      // Get the ship's ruleset to bump version
      const ship = await db.query.Ships.findFirst({ where: (s, { eq }) => eq(s.Id, id) });
      if (ship) {
        await computeAndUpdateVersion(ship.Ruleset);
      }
      return { id };
    }),

  delete: adminProcedure.input(z.object({ id: z.string().uuid() })).mutation(async ({ input }) => {
    const ship = await db.query.Ships.findFirst({ where: (s, { eq }) => eq(s.Id, input.id) });
    if (!ship) return { success: false };

    // Cascade: delete pilots first
    await db.delete(Pilots).where(eq(Pilots.ShipId, input.id));
    await db.delete(Ships).where(eq(Ships.Id, input.id));
    await computeAndUpdateVersion(ship.Ruleset);
    return { success: true };
  }),
});
