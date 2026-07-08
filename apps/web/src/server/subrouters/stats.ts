import { format, subMonths } from 'date-fns';
import { and, gt, isNull, sql } from 'drizzle-orm';
import { db } from '../db';
import { Lists } from '../drizzle/schema';
import { publicProcedure, router } from '../trpc';

export const statsRouter = router({
  overview: publicProcedure.query(async ({ ctx }) => {
    const since = format(subMonths(new Date(), 1), 'yyyy-MM-dd');

    // AMG is no longer supported. Everything that isn't 'legacy' (including the
    // deprecated 'amg' ruleset and lists with no ruleset) is treated as 'xwa',
    // mirroring the serializer's manifest selection.
    const xwa = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(Lists)
      .where(and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' IS DISTINCT FROM 'legacy'`));

    const legacy = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(Lists)
      .where(and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' = 'legacy'`));

    return {
      xwa: parseInt(xwa[0].count as unknown as string),
      legacy: parseInt(legacy[0].count as unknown as string),
    };
  }),
});
