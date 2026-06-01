import { eq, ilike, or } from 'drizzle-orm';
import { v4 } from 'uuid';
import { z } from 'zod';
import { db } from '../../db';
import { GameUpgrades, Pilots, Ships, Sources } from '../../drizzle/schema';
import { adminProcedure, router } from '../../trpc';

export const adminSourcesRouter = router({
  searchXws: adminProcedure
    .input(z.object({ type: z.enum(['ships', 'pilots', 'upgrades']), search: z.string().min(2) }))
    .query(async ({ input }) => {
      const { type, search } = input;
      const pattern = `%${search}%`;
      if (type === 'ships') {
        const rows = await db
          .select({ Xws: Ships.Xws, Name: Ships.Name })
          .from(Ships)
          .where(or(ilike(Ships.Xws, pattern), ilike(Ships.Name, pattern)))
          .orderBy(Ships.Name)
          .limit(20);
        return rows.map(r => ({ xws: r.Xws, name: r.Name }));
      } else if (type === 'pilots') {
        const rows = await db
          .select({ Xws: Pilots.Xws, Name: Pilots.Name })
          .from(Pilots)
          .where(or(ilike(Pilots.Xws, pattern), ilike(Pilots.Name, pattern)))
          .orderBy(Pilots.Name)
          .limit(20);
        return rows.map(r => ({ xws: r.Xws, name: r.Name }));
      } else {
        const rows = await db
          .select({ Xws: GameUpgrades.Xws })
          .from(GameUpgrades)
          .where(ilike(GameUpgrades.Xws, pattern))
          .orderBy(GameUpgrades.Xws)
          .limit(20);
        return rows.map(r => ({ xws: r.Xws, name: r.Xws }));
      }
    }),

  list: adminProcedure.input(z.object({ category: z.string().optional() })).query(async ({ input }) => {
    if (input.category) {
      return db.select().from(Sources).where(eq(Sources.Category, input.category)).orderBy(Sources.Wave, Sources.Name);
    }
    return db.select().from(Sources).orderBy(Sources.Category, Sources.Wave, Sources.Name);
  }),

  get: adminProcedure.input(z.object({ id: z.string().uuid() })).query(async ({ input }) => {
    return db
      .select()
      .from(Sources)
      .where(eq(Sources.Id, input.id))
      .then(rows => rows[0] ?? null);
  }),

  create: adminProcedure
    .input(
      z.object({
        category: z.string(),
        ffg: z.number(),
        xws: z.string(),
        name: z.string(),
        wave: z.number(),
        released: z.boolean(),
        contents: z.any(),
        sku: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = v4();
      await db.insert(Sources).values({
        Id: id,
        Category: input.category,
        Ffg: input.ffg,
        Xws: input.xws,
        Name: input.name,
        Wave: input.wave,
        Released: input.released,
        Contents: input.contents,
        Sku: input.sku ?? null,
      });
      return { id };
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        category: z.string().optional(),
        ffg: z.number().optional(),
        xws: z.string().optional(),
        name: z.string().optional(),
        wave: z.number().optional(),
        released: z.boolean().optional(),
        contents: z.any().optional(),
        sku: z.string().nullable().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const updateData: Record<string, any> = {};
      if (data.category !== undefined) updateData.Category = data.category;
      if (data.ffg !== undefined) updateData.Ffg = data.ffg;
      if (data.xws !== undefined) updateData.Xws = data.xws;
      if (data.name !== undefined) updateData.Name = data.name;
      if (data.wave !== undefined) updateData.Wave = data.wave;
      if (data.released !== undefined) updateData.Released = data.released;
      if (data.contents !== undefined) updateData.Contents = data.contents;
      if (data.sku !== undefined) updateData.Sku = data.sku;

      await db.update(Sources).set(updateData).where(eq(Sources.Id, id));
      return { id };
    }),

  delete: adminProcedure.input(z.object({ id: z.string().uuid() })).mutation(async ({ input }) => {
    await db.delete(Sources).where(eq(Sources.Id, input.id));
    return { success: true };
  }),
});
