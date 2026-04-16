# Launch Bay Next web
Next.js app for Launch Bay Next web UI and backend API.

This package contains:
- App Router pages/UI (`src/app`)
- Route handlers under `/api` (`src/app/api`)
- tRPC router, auth context, and DB access (`src/server`)

## Prerequisites
- Bun 1.x
- PostgreSQL database

## Setup
Install dependencies from repository root:
```bash
bun install
```

Create/update `apps/web/.env.local` with required variables:
```bash
DATABASE_URL=postgresql://...
JWT_SECRET=...
POSTMARK_API_TOKEN=...
NEXT_PUBLIC_HOSTING_URL=http://localhost:3000
```

Additional optional/provider variables referenced by config:
- `FACEBOOK_ID`, `FACEBOOK_SECRET`
- `GOOGLE_ID`, `GOOGLE_SECRET`
- `POSTGRES_URL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_PRISMA_URL`

## Scripts
Run inside `apps/web`:
```bash
bun run dev
bun run build
bun run start
bun run lint
```

From repository root:
```bash
bun run dev:web
bun run web:build
```

## Backend structure
- tRPC endpoint: `src/app/api/trpc/[trpc]/route.ts`
- tRPC router: `src/server/index.ts`
- Auth context: `src/server/context.ts`
- Drizzle schema + migrations: `src/server/drizzle`

Notable API routes:
- `POST /api/link` -> converts inbound squad JSON to Launch Bay link format
- `POST /api/standard` -> validates standard legality
- `GET /api/xws?lbx=...` -> converts serialized squad link back to XWS JSON

## Notes
- The web app consumes `lbn-core` directly via `transpilePackages`.
- `DATABASE_URL` is used both by Drizzle config and runtime DB connection.
