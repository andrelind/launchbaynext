import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { createContext } from './context';

const t = initTRPC.context<typeof createContext>().create({ transformer: superjson });

export const router = t.router;
export const publicProcedure = t.procedure;

const isAuthed = t.middleware(opts => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next({
    ctx: { user: ctx.user },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);
