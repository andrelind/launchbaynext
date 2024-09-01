import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import superjson from 'superjson';
import { type AppRouter } from '../../../web/src/server/index';
import { systemStore } from '../stores/system';

console.log(process.env.EXPO_PUBLIC_SERVER_URL);


export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink({
      enabled: opts =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `${process.env.EXPO_PUBLIC_SERVER_URL || 'https://launchbaynext.app'}/api/trpc`,
      async headers() {
        const { token } = systemStore.getState();
        return token ? { 'x-jwt': token } : {};
      },
    }),
  ],
  transformer: superjson
});
