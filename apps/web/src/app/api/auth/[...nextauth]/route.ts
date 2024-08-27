import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import { NextRequest } from 'next/server';

import { cookies } from 'next/headers';
import { trpc } from '../../../_trpc/client';
// const getAppleToken = async () => {
//   const appleToken = await new SignJWT({})
//     .setAudience('https://appleid.apple.com')
//     .setIssuer(process.env.APPLE_TEAM_ID!)
//     .setIssuedAt(new Date().getTime() / 1000)
//     .setExpirationTime(new Date().getTime() / 1000 + 3600 * 2)
//     .setSubject(process.env.APPLE_CLIENT_ID!)
//     .setProtectedHeader({
//       alg: 'ES256',
//       kid: process.env.APPLE_KEY_ID,
//     })
//     .sign(createPrivateKey(process.env.APPLE_SECRET!));
//   return appleToken;
// };

interface RouteHandlerContext {
  params: { nextauth: string[] };
}

const handler = async (req: NextRequest, context: RouteHandlerContext) =>
  NextAuth(req, context, {
    secret: process.env.JWT_SECRET,
    cookies: {
      pkceCodeVerifier: {
        name: 'next-auth.pkce.code_verifier',
        options: {
          httpOnly: true,
          sameSite: 'none',
          path: '/',
          secure: true,
        },
      },
    },
    providers: [
      AppleProvider({
        clientId: process.env.APPLE_CLIENT_ID || '',
        // clientSecret: await getAppleToken(), //
        clientSecret: process.env.APPLE_CLIENT_SECRET || '',
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID || '',
        clientSecret: process.env.FACEBOOK_SECRET || '',
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || '',
        checks: 'none',
      }),
    ],
    callbacks: {
      session: async ({ session, token }) => {
        // console.log('Session', { session, token });
        session.user = token;
        return Promise.resolve(session);
      },
      jwt: async ({ token, user, account }) => {
        // console.log('JWT', { token, user, account });
        if (token.jwt) {
          return Promise.resolve(token);
        }

        if (!account?.provider) {
          return Promise.reject('No provider');
        }

        const userState: {
          id: string;
          name: string;
          provider: string;
          email: string;
          jwt?: string;
        } = {
          id: account?.providerAccountId,
          name: user?.name || 'No name',
          provider:
            account.provider.charAt(0).toUpperCase() +
            account.provider.slice(1),
          email: user?.email || '',
        };

        // @ts-ignore
        const jwt = await trpc.auth.mutate({
          provider: userState.provider,
          providerId: userState.id,
          name: userState.name,
          email: userState.email,
        });

        userState.jwt = jwt;

        cookies().set({
          name: 'x-jwt',
          value: jwt,
        });

        // res.cookies.set('x-jwt', jwt);

        // res.headers.append('Set-Cookie', `x-jwt=${jwt}`);
        // res.headers.getSetCookie();

        // const { data } = await registerUser(userState);
        if (userState.jwt) {
          return Promise.resolve(userState as any);
        }
        return Promise.reject('No provider');
      },
    },
  });

export { handler as GET, handler as POST };
