import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import SuperJSON from 'superjson';
import { type AppRouter } from '../../server';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_HOSTING_URL || 'http://localhost:3000'
        }/api/trpc`,
    }),
  ],
  transformer: SuperJSON,
});
