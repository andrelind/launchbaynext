import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { db } from './db';

interface CreateContextOptions {
  reqHeaders: Headers;
  resHeaders: Headers;
  token?: string;
  user?: { id: string; name: string; email: string | null };
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    user: opts.user,
    token: opts.token,
    reqHeaders: opts.reqHeaders,
    resHeaders: opts.resHeaders,
  };
};

export const createContext = async (opts: FetchCreateContextFnOptions) => {
  const { resHeaders, req } = opts;

  // Get jwt from req
  const token = (() => {
    const header = req.headers.get('x-jwt');
    if (header) {
      return header;
    }
    return cookies().get('x-jwt')?.value;
  })();

  if (!token) {
    return createInnerTRPCContext({ reqHeaders: req.headers, resHeaders });
  }

  // Validate token
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;

  if (!decoded) {
    return createInnerTRPCContext({ reqHeaders: req.headers, resHeaders });
  }

  // Verify token and get user
  const user = await db.query.Users.findFirst({
    where: (u, { eq }) => eq(u.Id, decoded.sub || ''),
  });
  //   return createInnerTRPCContext({ user });
  return createInnerTRPCContext({
    user: user
      ? { id: user.Id, name: user.Name, email: user.Email }
      : undefined,
    reqHeaders: req.headers,
    resHeaders,
    token,
  });
};
