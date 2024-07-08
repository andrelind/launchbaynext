// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { compareVersions } from 'lbn-core/src/helpers/versioning';
import type { XWS } from 'lbn-core/src/types';
import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DBt()

export const xwsZod = z.object({
  name: z.string(),
  description: z.string().optional(),
  format: z.string(),
  faction: z.string(),
  points: z.number(),
  version: z.string(),
  obstacles: z.array(z.string()).optional(),
  pilots: z.array(
    z.object({
      id: z.string(),
      ship: z.string(),
      upgrades: z.record(z.string(), z.array(z.string())).optional(),
      points: z.number().optional(),
      //   version: z.string(),
    })
  ),
  vendor: z.object({
    lbn: z.object({
      builder: z.string().optional(),
      builder_url: z.string().optional(),
      link: z.string().optional(),
      uid: z.string(),
      wins: z.number(),
      ties: z.number().optional(),
      losses: z.number(),
      tags: z.array(z.string()),
      created: z.string(),
    }),
  }),
});

const getUserLists = async (user: string) => {
  return await prisma.lists.findMany({
    where: {
      UserId: user,
    },
  });
};

export const listRouter = router({
  sync: protectedProcedure
    .input(z.array(z.object({ id: z.string(), version: z.string() })))
    .query(async ({ input, ctx }) => {
      const lists = input;

      const send: string[] = [];
      const get: string[] = [];
      const remove: string[] = [];

      for (const list of lists) {
        const saved = await prisma.lists.findFirst({ where: { Id: list.id } });
        if (!saved) {
          // Not saved on server, send it
          send.push(list.id);
        } else if (saved.DeletedUtc) {
          // Deleted on server, delete it
          remove.push(list.id);
        } else {
          const res = compareVersions(
            list.version,
            (saved.Xws as unknown as XWS).version || '1.0.0'
          );
          if (res === -1) {
            // Newer version on device, send it
            send.push(list.id);
          } else if (res === 1) {
            // Newer version on server, get it
            get.push(list.id);
          }
        }
      }

      const savedLists = await getUserLists(ctx.user.id);
      for (const saved of savedLists) {
        if (saved.DeletedUtc || lists.find((l) => l.id === saved.Id)) {
          continue;
        }
        // Not on users device, get it
        get.push(saved.Id);
      }

      // console.log({ send, get, remove });

      return { send, get, remove };
    }),

  all: protectedProcedure.query(async ({ ctx }) => {
    return prisma.lists
      .findMany({
        where: { UserId: ctx.user.id, DeletedUtc: null },
      })
      .then((lists: any) => lists.map((list: any) => list.Xws as unknown as XWS));
  }),

  get: protectedProcedure
    .input(z.array(z.string()))
    .query(async ({ input, ctx }) => {
      return prisma.lists
        .findMany({
          where: { UserId: ctx.user.id, Id: { in: input } },
        })
        .then((lists: any) => lists.map((list: any) => list.Xws as unknown as XWS));
    }),

  update: protectedProcedure
    .input(z.array(xwsZod))
    .mutation(async ({ input, ctx }) => {
      for (const xws of input) {
        const list = await prisma.lists.findFirst({
          where: { Id: xws.vendor.lbn.uid, UserId: ctx.user.id },
        });
        if (list) {
          await prisma.lists.update({
            where: { Id: list.Id },
            data: {
              Xws: xws,
              UpdatedUtc: new Date(),
            },
          });
        } else {
          await prisma.lists.create({
            data: {
              Id: xws.vendor.lbn.uid,
              UserId: ctx.user.id,
              Xws: xws,
              CreatedUtc: new Date(),
              UpdatedUtc: new Date(),
            },
          });
        }
      }
    }),

  remove: protectedProcedure
    .input(z.array(z.string()))
    .mutation(async ({ input, ctx }) => {
      for (const id of input) {
        await prisma.lists.update({
          where: { Id: id },
          data: {
            DeletedUtc: new Date(),
          },
        });
      }
    }),
});
