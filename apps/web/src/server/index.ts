import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import { ServerClient } from 'postmark';
import { v4 } from 'uuid';
import { z } from 'zod';
import { db } from './db';
import { Lists, UserLoginCodes, Users } from './drizzle/schema';
import { collectionRouter } from './subrouters/collection';
import { listRouter } from './subrouters/lists';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    return 'Hello World';
  }),

  registerOrLogin: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ input }) => {
      const { email } = input;

      // Create if not exists (without provider)
      let user = await db.query.Users.findFirst({
        where: (u, { eq, and, isNull }) =>
          and(eq(u.Email, email), isNull(u.Provider)),
      });
      if (!user) {
        const u = await db
          .insert(Users)
          .values({
            Id: v4(),
            Email: email,
            Name: email,
          })
          .returning();
        user = u[0];
      }

      if (!user) {
        throw new Error('User not found');
      }

      // Invalidate all previous codes
      await db
        .update(UserLoginCodes)
        .set({ Active: false })
        .where(eq(UserLoginCodes.UserId, user.Id));

      // Create 6 digit code
      const code = Math.floor(100000 + Math.random() * 900000);
      await db.insert(UserLoginCodes).values({
        Id: v4(),
        UserId: user.Id,
        Code: `${code}`,
        CreatedAt: new Date().toISOString(),
        Active: true,
      });

      // Send code to email
      const sender = new ServerClient(process.env.POSTMARK_API_TOKEN as string);
      await sender.sendEmail({
        From: 'noreply@launchbaynext.app',
        To: email,
        Subject: 'LaunchBayNext Login Code',
        TextBody: `Your login code is ${code}`,
      });
    }),

  validateLogin: publicProcedure
    .input(
      z.object({
        email: z.string().optional(),
        code: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log(ctx);

      const { email } = input;
      if (!email) {
        throw new Error('Email is required');
      }

      const user = await db.query.Users.findFirst({
        where: (u, { eq, and, isNull }) =>
          and(eq(u.Email, email), isNull(u.Provider)),
      });
      if (!user) {
        throw new Error('User not found');
      }

      // Find active code
      const code = await db.query.UserLoginCodes.findFirst({
        where: (c, { eq, and }) =>
          and(eq(c.UserId, user.Id), eq(c.Active, true)),
      });

      if (!code) {
        throw new Error('Code not found');
      }

      if (code.Code !== input.code) {
        throw new Error('Code is invalid');
      }

      // Invalidate all previous codes
      await db
        .update(UserLoginCodes)
        .set({
          Active: false,
        })
        .where(eq(UserLoginCodes.UserId, user.Id));

      // Find users with this email and provider not null
      const users = await db.query.Users.findMany({
        where: (u, { eq, and, isNotNull }) =>
          and(eq(u.Email, email), isNotNull(u.Provider)),
      });

      // Move all lists to this user
      await Promise.all(
        users.map(async (u) => {
          await db
            .update(Lists)
            .set({
              UserId: user.Id,
            })
            .where(eq(Lists.UserId, u.Id));
        })
      );

      const payload = {
        sub: user.Id,
        name: user.Name,
        email: user.Email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET as string);
      ctx.resHeaders.append('Set-Cookie', `x-jwt=${token}`);
      ctx.resHeaders.getSetCookie();
      return token;
    }),

  collection: collectionRouter,
  lists: listRouter,
});

export type AppRouter = typeof appRouter;
