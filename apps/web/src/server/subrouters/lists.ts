import { eq } from 'drizzle-orm';
import { compareVersions } from 'lbn-core/src/helpers/versioning';
import type { XWS } from 'lbn-core/src/types';
import { z } from 'zod';
import { db } from '../db';
import { Lists } from '../drizzle/schema';
import { protectedProcedure, router } from '../trpc';

export const xwsZod = z.object({
  name: z.string(),
  description: z.string().optional(),
  format: z.string(),
  ruleset: z.string().optional(),
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
      created: z.date(),
    }),
  }),
});

const getUserLists = async (user: string) => {
  return db.query.Lists.findMany({ where: (l, { eq }) => eq(l.UserId, user) });
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
        const saved = await db.query.Lists.findFirst({
          where: (l, { eq }) => eq(l.Id, list.id),
        });
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
    return db.query.Lists.findMany({
      where: (l, { eq, and, isNull }) =>
        and(eq(l.UserId, ctx.user.id), isNull(l.DeletedUtc)),
    }).then((lists) => lists.map((list) => list.Xws as unknown as XWS));
  }),

  single: protectedProcedure
    .input(z.array(z.string()))
    .query(async ({ input, ctx }) => {
      return db.query.Lists.findFirst({
        where: (l, { eq, and }) =>
          and(eq(l.UserId, ctx.user.id), eq(l.Id, input[0])),
      }).then((list) => list?.Xws as unknown as XWS);
    }),

  multiple: protectedProcedure
    .input(z.array(z.string()))
    .query(async ({ input, ctx }) => {
      if (input.length === 0) return []
      return db.query.Lists.findMany({
        where: (l, { eq, and, inArray }) =>
          and(eq(l.UserId, ctx.user.id), inArray(l.Id, input)),
      }).then((lists) => lists?.map(list => list?.Xws as unknown as XWS));
    }),

  update: protectedProcedure
    .input(z.array(xwsZod))
    .mutation(async ({ input, ctx }) => {
      for (const xws of input) {
        const list = await db.query.Lists.findFirst({
          where: (l, { eq, and }) =>
            and(eq(l.Id, xws.vendor.lbn.uid), eq(l.UserId, ctx.user.id)),
        });
        if (list) {
          await db
            .update(Lists)
            .set({
              Xws: xws,
              UpdatedUtc: new Date().toISOString(),
            })
            .where(eq(Lists.Id, list.Id));
        } else {
          await db.insert(Lists).values({
            Id: xws.vendor.lbn.uid,
            UserId: ctx.user.id,
            Xws: xws,
            CreatedUtc: new Date().toISOString(),
            UpdatedUtc: new Date().toISOString(),
          });
        }
      }
    }),

  remove: protectedProcedure
    .input(z.array(z.string()))
    .mutation(async ({ input, ctx }) => {
      for (const id of input) {
        await db
          .update(Lists)
          .set({
            DeletedUtc: new Date().toISOString(),
          })
          .where(eq(Lists.Id, id));
      }
    }),
});
