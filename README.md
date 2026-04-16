# Launch Bay Next platform
Monorepo for Launch Bay Next, containing:
- A Next.js web app with tRPC API and PostgreSQL persistence
- An Expo React Native mobile app
- A shared `lbn-core` package with game data, types, and helper logic

## Repository layout
```
platform/
├── apps/
│   ├── web/      # Next.js frontend + API routes + tRPC server
│   └── app/      # Expo mobile app (iOS/Android)
├── packages/
│   └── core/     # Shared X-Wing data, types, converters, serializers
└── package.json  # Root scripts + Bun workspaces (web + packages/*)
```

## Tech stack
- Runtime/package manager: [Bun](https://bun.sh)
- Web: Next.js 14, React, Tailwind, tRPC, Drizzle ORM
- Mobile: Expo Router, React Native, Zustand, SWR
- Shared domain logic: TypeScript package (`lbn-core`)

## Prerequisites
- Bun 1.x
- Node-compatible tooling required by Expo/Next.js
- PostgreSQL (for `apps/web`)
- Xcode/Android Studio if building native mobile binaries locally

## Setup
Install root workspace dependencies:
```bash
bun install
```

> `apps/app` is currently not listed in root workspaces and has its own lockfile. Install its dependencies separately:
```bash
cd apps/app
bun install
```

## Running the projects
### Web app + API
From repo root:
```bash
bun run dev:web
```

Or directly:
```bash
cd apps/web
bun run dev
```

Build production web bundle:
```bash
bun run web:build
```

### Mobile app
```bash
cd apps/app
bun run start
```

Run on simulators/devices:
```bash
cd apps/app
bun run ios
bun run android
```

## Environment variables
### `apps/web/.env.local`
Common variables used by the web/API layer:
- `DATABASE_URL` (required): PostgreSQL connection string
- `JWT_SECRET` (required): token signing/verification secret
- `POSTMARK_API_TOKEN` (required for email login flow)
- `NEXT_PUBLIC_HOSTING_URL` (optional, defaults to `http://localhost:3000`)

Additional provider/deployment variables referenced in config:
- `FACEBOOK_ID`, `FACEBOOK_SECRET`
- `GOOGLE_ID`, `GOOGLE_SECRET`
- `POSTGRES_URL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_PRISMA_URL`

### `apps/app`
- `APP_VARIANT` controls app identity (`development` vs production metadata in `app.config.js`)
- `EXPO_PUBLIC_SERVER_URL` is configured in EAS profiles, though the current mobile tRPC URL is hardcoded in `apps/app/src/helpers/trpc.ts`

## Architecture overview
### `apps/web`
- UI routes and API route handlers live in `apps/web/src/app`
- tRPC entrypoint: `apps/web/src/app/api/trpc/[trpc]/route.ts`
- tRPC router and subrouters: `apps/web/src/server`
- Database schema and SQL migrations: `apps/web/src/server/drizzle`

Notable API route handlers:
- `POST /api/link` converts inbound squad data to a Launch Bay Next URL
- `POST /api/standard` validates standard legality
- `GET /api/xws?lbx=...` expands serialized link data back to XWS JSON

### `apps/app`
- Expo Router screens are organized in `apps/app/src/app`
- Main tab routes are in `apps/app/src/app/(tabs)`:
  - collection
  - database
  - overview/account/login
  - squadrons flow
- Shared client-side state and helpers live in `apps/app/src/stores` and `apps/app/src/helpers`

### `packages/core`
- Canonical game assets by ruleset in `packages/core/src/assets/{xwa,legacy,amg}`
- Types in `packages/core/src/types.ts`
- Domain helpers (loaders, serializers, import/export, conversion) in `packages/core/src/helpers`
- Source data bundles in `packages/core/src/sources`

## Common development commands
### Web
```bash
cd apps/web
bun run dev
bun run build
bun run start
bun run lint
```

### Mobile
```bash
cd apps/app
bun run start
bun run ios
bun run android
bun run web
bun run lint
bun run test
```

### Shared data package
```bash
cd packages/core
bun run update:xwa
bun run update:legacy
```

## Data update workflow (`lbn-core`)
`packages/core/scripts/xwing-data` contains merge/update scripts that pull upstream data and rewrite local assets.

Use:
- `update:xwa` to sync XWA data
- `update:legacy` to sync Legacy data

After updating, verify generated changes in `packages/core/src/assets` before committing.
