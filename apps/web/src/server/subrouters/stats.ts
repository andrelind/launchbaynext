import { subMonths } from 'date-fns';
import { and, gt, isNull, sql } from 'drizzle-orm';
import { db } from '../db';
import { Lists } from '../drizzle/schema';
import { publicProcedure, router } from '../trpc';

export const statsRouter = router({
  overview: publicProcedure.query(async ({ ctx }) => {
    const since = subMonths(new Date(), 1);

    const xwa = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(Lists)
      .where(and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' = 'xwa'`));

    const legacy = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(Lists)
      .where(and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' = 'legacy'`));

    const amg = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(Lists)
      .where(and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' = 'amg'`));

    return {
      xwa: parseInt(xwa[0].count as unknown as string),
      legacy: parseInt(legacy[0].count as unknown as string),
      amg: parseInt(amg[0].count as unknown as string),
    };
  }),
});
