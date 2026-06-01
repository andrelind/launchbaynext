import { eq } from 'drizzle-orm';
import { v4 } from 'uuid';
import { z } from 'zod';
import { db } from '../../db';
import { GameConditions } from '../../drizzle/schema';
import { computeAndUpdateVersion } from '../../helpers/versionHash';
import { adminProcedure, router } from '../../trpc';

export const adminConditionsRouter = router({
  list: adminProcedure.input(z.object({ ruleset: z.enum(['xwa', 'legacy']) })).query(async ({ input }) => {
    return db
      .select()
      .from(GameConditions)
      .where(eq(GameConditions.Ruleset, input.ruleset))
      .orderBy(GameConditions.Name);
  }),

  get: adminProcedure.input(z.object({ id: z.string().uuid() })).query(async ({ input }) => {
    return db
      .select()
      .from(GameConditions)
      .where(eq(GameConditions.Id, input.id))
      .then(rows => rows[0] ?? null);
  }),

  create: adminProcedure
    .input(
      z.object({
        ruleset: z.enum(['xwa', 'legacy']),
        xws: z.string(),
        name: z.string(),
        ability: z.string(),
        image: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = v4();
      await db.insert(GameConditions).values({
        Id: id,
        Ruleset: input.ruleset,
        Xws: input.xws,
        Name: input.name,
        Ability: input.ability,
        Image: input.image ?? null,
      });
      await computeAndUpdateVersion(input.ruleset);
      return { id };
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        xws: z.string().optional(),
        name: z.string().optional(),
        ability: z.string().optional(),
        image: z.string().nullable().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const updateData: Record<string, any> = {};
      if (data.xws !== undefined) updateData.Xws = data.xws;
      if (data.name !== undefined) updateData.Name = data.name;
      if (data.ability !== undefined) updateData.Ability = data.ability;
      if (data.image !== undefined) updateData.Image = data.image;

      await db.update(GameConditions).set(updateData).where(eq(GameConditions.Id, id));

      const condition = await db
        .select()
        .from(GameConditions)
        .where(eq(GameConditions.Id, id))
        .then(rows => rows[0]);
      if (condition) {
        await computeAndUpdateVersion(condition.Ruleset);
      }
      return { id };
    }),

  delete: adminProcedure.input(z.object({ id: z.string().uuid() })).mutation(async ({ input }) => {
    const condition = await db
      .select()
      .from(GameConditions)
      .where(eq(GameConditions.Id, input.id))
      .then(rows => rows[0]);
    if (!condition) return { success: false };

    await db.delete(GameConditions).where(eq(GameConditions.Id, input.id));
    await computeAndUpdateVersion(condition.Ruleset);
    return { success: true };
  }),
});
