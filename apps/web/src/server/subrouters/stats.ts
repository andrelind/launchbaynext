import { format, subMonths } from 'date-fns';
import { and, gt, isNull, sql } from 'drizzle-orm';
import { db } from '../db';
import { GameDataVersions, Lists } from '../drizzle/schema';
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
      .where(
        and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' IS DISTINCT FROM 'legacy'`),
      );

    const legacy = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(Lists)
      .where(and(isNull(Lists.DeletedUtc), gt(Lists.UpdatedUtc, since), sql`"Xws"->>'ruleset' = 'legacy'`));

    const versions = await db
      .select({ ruleset: GameDataVersions.Ruleset, updatedAt: GameDataVersions.UpdatedAt })
      .from(GameDataVersions);

    // UpdatedAt is a UTC timestamp string, so the first 10 characters are yyyy-MM-dd.
    const lastUpdated = (ruleset: string) =>
      versions.find(v => v.ruleset === ruleset)?.updatedAt.slice(0, 10) ?? null;

    return {
      xwa: parseInt(xwa[0].count as unknown as string),
      legacy: parseInt(legacy[0].count as unknown as string),
      lastUpdated: {
        xwa: lastUpdated('xwa'),
        legacy: lastUpdated('legacy'),
      },
    };
  }),
});
