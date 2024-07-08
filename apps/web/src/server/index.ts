// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { Md5 } from 'ts-md5';
import { v4 } from 'uuid';
import { z } from 'zod';

import { collectionRouter } from './subrouters/collection';
import { listRouter } from './subrouters/lists';
import { tournamentsRouter } from './subrouters/tournaments';
import { publicProcedure, router } from './trpc';

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DBt()

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    return 'Hello World';
  }),

  register: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { name, email, password } = input;

      // Create salt
      const salt = v4();

      // Hash password
      const hash = Md5.hashStr(salt + password)
        .replace(/(.{2})/g, '$1-')
        .slice(0, -1)
        .toUpperCase();

      const user = await prisma.users.create({
        data: {
          Id: v4(),
          Name: name,
          Email: email,
          PasswordHash: hash,
          Salt: salt,
        },
      });
      return user;
    }),

  login: publicProcedure
    .input(
      z.object({
        username: z.string().optional(),
        email: z.string().optional(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log(ctx);

      const { username, email, password } = input;
      if (!username && !email) {
        throw new Error('Username or email is required');
      }

      const user = await prisma.users.findFirst({
        where: { OR: [{ Email: email }, { Username: username }] },
      });
      if (!user) {
        throw new Error('User not found');
      }

      // Check password hash
      const hash = Md5.hashStr(user.Salt + password)
        .replace(/(.{2})/g, '$1-')
        .slice(0, -1)
        .toUpperCase();
      if (hash !== user.PasswordHash) {
        throw new Error('Invalid password');
      }

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

  auth: publicProcedure
    .input(
      z.object({
        provider: z.string(),
        providerId: z.string(),
        name: z.string(),
        email: z.string(),
        access_token: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { provider, providerId } = input;
      let name = input.name;
      let email = input.email;

      // Check if user exists
      const user = await prisma.users.findFirst({
        where: { Provider: provider, ProviderId: providerId },
      });

      if (user) {
        const payload = {
          sub: user.Id,
          name: user.Name,
          email: user.Email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET as string);
        ctx.resHeaders.append('Set-Cookie', `x-jwt=${token}`);
        ctx.resHeaders.getSetCookie();
        return token;
      }

      if (provider === 'Facebook' && input.access_token) {
        const response = await fetch(
          `https://graph.facebook.com/v11.0/me?fields=id,name,email&access_token=${input.access_token}`
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        if (data.id !== providerId) {
          throw new Error('Invalid Facebook user');
        }
        name = data.name;
        email = data.email;
      }

      // Create a new user
      const newUser = await prisma.users.create({
        data: {
          Id: v4(),
          Provider: provider,
          ProviderId: providerId,
          Name: name,
          Email: email,
        },
      });

      const payload = {
        sub: newUser.Id,
        name: newUser.Name,
        email: newUser.Email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET as string);
      ctx.resHeaders.append('Set-Cookie', `x-jwt=${token}`);
      ctx.resHeaders.getSetCookie();
      return token;
    }),

  // convert: protectedProcedure
  //   .input(
  //     z.object({
  //       email: z.string(),
  //       username: z.string(),
  //       password: z.string(),
  //     })
  //   )
  //   .mutation(async ({ input, ctx }) => {
  //     // Create a new user from this one and move all connections to it
  //     const { username, password, email } = input;
  //     // Create salt
  //     const salt = v4();

  //     // Hash password
  //     const hash = Md5.hashStr(salt + password)
  //       .replace(/(.{2})/g, '$1-')
  //       .slice(0, -1)
  //       .toUpperCase();

  //     // List of users with this email
  //     const users = await prisma.users.findMany({
  //       where: { Email: ctx.user?.email },
  //     });

  //     // Create a new account
  //     const user = await prisma.users.create({
  //       data: {
  //         Id: v4(),
  //         Name: ctx.user?.name || username,
  //         Username: username,
  //         Email: email || ctx.user?.email,
  //         PasswordHash: hash,
  //         Salt: salt,
  //       },
  //     });

  //     // Move all lists to this user
  //     await prisma.lists.updateMany({
  //       where: { OR: users.map((user) => ({ UserId: user.Id })) },
  //       data: { UserId: user.Id },
  //     });

  //     // Move all tournaments to this user
  //     await prisma.tournaments.updateMany({
  //       where: { OR: users.map((user) => ({ CreatorId: user.Id })) },
  //       data: { CreatorId: user.Id },
  //     });

  //     // Move all participants to this user
  //     await prisma.participants.updateMany({
  //       where: { OR: users.map((user) => ({ UserId: user.Id })) },
  //       data: { UserId: user.Id },
  //     });

  //     // Now delete all the old accounts
  //     await prisma.users.deleteMany({
  //       where: { OR: users.map((user) => ({ Id: user.Id })) },
  //     });

  //     const payload = {
  //       sub: user.Id,
  //       name: user.Name,
  //       email: user.Email,
  //     };
  //     const token = jwt.sign(payload, process.env.JWT_SECRET as string);
  //     ctx.resHeaders.append('Set-Cookie', `x-jwt=${token}`);
  //     ctx.resHeaders.getSetCookie();
  //     return token;
  //   }),

  collection: collectionRouter,
  lists: listRouter,
  tournaments: tournamentsRouter,
});

export type AppRouter = typeof appRouter;
