import { eq, ilike, or } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../../db';
import { Users } from '../../drizzle/schema';
import { adminProcedure, router } from '../../trpc';

export const adminUsersRouter = router({
  list: adminProcedure.input(z.object({ search: z.string().min(2) })).query(async ({ input }) => {
    const pattern = `%${input.search}%`;
    return db
      .select({
        id: Users.Id,
        name: Users.Name,
        email: Users.Email,
        isAdmin: Users.IsAdmin,
      })
      .from(Users)
      .where(or(ilike(Users.Name, pattern), ilike(Users.Email, pattern)))
      .orderBy(Users.Name)
      .limit(50);
  }),

  setAdmin: adminProcedure
    .input(
      z.object({
        userId: z.string().uuid(),
        isAdmin: z.boolean(),
      }),
    )
    .mutation(async ({ input }) => {
      await db.update(Users).set({ IsAdmin: input.isAdmin }).where(eq(Users.Id, input.userId));
      return { success: true };
    }),
});
