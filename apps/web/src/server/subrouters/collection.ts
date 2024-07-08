// import { PrismaClient } from '@prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';
import { z } from 'zod';

import { v4 } from 'uuid';
import { protectedProcedure, router } from '../trpc';

const prisma = new PrismaClient();

const asResponse = (
  c?: {
    Id: string;
    UserId: string;
    Expansions: Prisma.JsonValue;
    Ships: Prisma.JsonValue;
    Pilots: Prisma.JsonValue;
    Upgrades: Prisma.JsonValue;
    UpdatedUtc: Date;
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
    const list = await prisma.collections.findFirst({
      where: { UserId: ctx.user.id },
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
      const c = await prisma.collections.findFirst({
        where: { UserId: ctx.user.id },
      });
      if (!c) {
        const list = await prisma.collections.create({
          data: {
            Id: v4(),
            UserId: ctx.user.id,
            Expansions: input.expansions,
            Ships: input.ships,
            Pilots: input.pilots,
            Upgrades: input.upgrades,
            UpdatedUtc: new Date(),
          },
        });
        return asResponse(list);
      } else {
        const list = await prisma.collections.update({
          where: { Id: c?.Id },
          data: {
            Expansions: input.expansions,
            Ships: input.ships,
            Pilots: input.pilots,
            Upgrades: input.upgrades,
            UpdatedUtc: new Date(),
          },
        });

        return asResponse(list);
      }
    }),
});
