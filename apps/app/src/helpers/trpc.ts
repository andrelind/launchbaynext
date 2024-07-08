import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { AppRouter } from '../../../web/src/server';
import { systemStore } from '../stores/system';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    // loggerLink({
    //   enabled: opts =>
    //     process.env.NODE_ENV === 'development' ||
    //     (opts.direction === 'down' && opts.result instanceof Error),
    // }),
    httpBatchLink({
      url: `${process.env.SERVER_URL}/api/trpc`,
      async headers() {
        const { token } = systemStore.getState();
        return token ? { 'x-jwt': token } : {};
      },
    }),
  ],
  transformer: superjson
});
