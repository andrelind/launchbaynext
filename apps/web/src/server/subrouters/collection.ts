import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../db';

import { v4 } from 'uuid';
import { Collections } from '../drizzle/schema';
import { protectedProcedure, router } from '../trpc';

const asResponse = (
  c?: {
    Expansions: any;
    Ships: any;
    Pilots: any;
    Upgrades: any;
  } | null
) => {
  if (!c)
    return {
      expansions: {},
      ships: {},
      pilots: {},
      upgrades: {},
    };

  return {
    expansions: c.Expansions as { [key: string]: number },
    ships: c.Ships as { [key: string]: number },
    pilots: c.Pilots as { [key: string]: number },
    upgrades: c.Upgrades as { [key: string]: number },
  };
};

export const collectionRouter = router({
  get: protectedProcedure.query(async ({ input, ctx }) => {
    const list = await db.query.Collections.findFirst({
      where: (l, { eq }) => eq(l.UserId, ctx.user.id),
    });
    return asResponse(list);
  }),

  update: protectedProcedure
    .input(
      z.object({
        expansions: z.record(z.string(), z.number()),
        ships: z.record(z.string(), z.number()),
        pilots: z.record(z.string(), z.number()),
        upgrades: z.record(z.string(), z.number()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const c = await db.query.Collections.findFirst({
        where: (c, { eq }) => eq(c.UserId, ctx.user.id),
      });
      if (!c) {
        const [list] = await db
          .insert(Collections)
          .values({
            Id: v4(),
            UserId: ctx.user.id,
            Expansions: input.expansions,
            Ships: input.ships,
            Pilots: input.pilots,
            Upgrades: input.upgrades,
            UpdatedUtc: new Date().toISOString(),
          })
          .returning();
        return asResponse(list);
      } else {
        const [list] = await db
          .update(Collections)
          .set({
            Expansions: input.expansions,
            Ships: input.ships,
            Pilots: input.pilots,
            Upgrades: input.upgrades,
            UpdatedUtc: new Date().toISOString(),
          })
          .where(eq(Collections.Id, c.Id))
          .returning();
        return asResponse(list);
      }
    }),
});
