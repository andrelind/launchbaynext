'use client';

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from '@web/server';
import { useCookies } from 'next-client-cookies';
import SuperJSON from 'superjson';

export function useAdminTrpc() {
  const cookies = useCookies();
  const jwt = cookies.get('x-jwt');

  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
        headers: () => ({
          ...(jwt ? { 'x-jwt': jwt } : {}),
        }),
      }),
    ],
    transformer: SuperJSON,
  });
}
