import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import superjson from 'superjson';
import { type AppRouter } from '../../../web/src/server/index';
import { systemStore } from '../stores/system';

// export const TRPC_URL = `${process.env.EXPO_PUBLIC_SERVER_URL || 'https://launchbaynext.app'}/api/trpc`;
export const TRPC_URL = 'https://launchbaynext.app/api/trpc';
console.log(TRPC_URL);

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink({
      enabled: opts =>
        process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: TRPC_URL,
      async headers() {
        const { token } = systemStore.getState();
        // if (token) {
        //   const decoded = jwtDecode(token);
        //   if (!decoded || (decoded.exp || 0) * 1000 < Date.now()) {
        //     console.log('Token expired, logging out');
        //     systemStore.getState().setToken(undefined);
        //     return {};
        //   }
        // }

        return token ? { 'x-jwt': token } : {};
      },
    }),
  ],
  transformer: superjson,
});
