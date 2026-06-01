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

#### Admin area (`/admin`)

A server-side game data management interface behind admin authentication. Provides CRUD operations for all game entities and is accessible only to users with `IsAdmin = true`.

**Pages:**

- `/admin` — Dashboard showing per-ruleset version hashes
- `/admin/ships` — List, create, edit, delete ships
- `/admin/pilots` — List, create, edit, delete pilots (linked to ships)
- `/admin/upgrades` — List, create, edit, delete upgrades
- `/admin/conditions` — List, create, edit, delete conditions
- `/admin/sources` — List, create, edit, delete product sources
- `/admin/users` — Search users, toggle admin status

**Backend:**

- Admin tRPC sub-routers live in `apps/web/src/server/routers/admin/`
- All admin mutations use `adminProcedure` (requires `IsAdmin` on the user)
- Mutations auto-recompute the per-ruleset game data version hash via `computeAndUpdateVersion()` (`src/server/helpers/versionHash.ts`)
- UI components are built with shadcn/ui (`src/components/ui/`)

#### Game data API (`gameData` router)

A public tRPC router for serving game data to clients:

- `gameData.version(ruleset)` — returns the current version hash for a ruleset
- `gameData.all(ruleset)` — returns the full `GameData` payload (ships, pilots, upgrades, conditions)
- `gameData.sources()` — returns all product sources
- `gameData.manifest(ruleset)` — returns the manifest ID mapping

#### Game data versioning

Each ruleset (xwa, legacy) has a version hash stored in the `GameDataVersions` table. The hash is an MD5 of all ships, pilots, upgrades, and conditions for that ruleset. It is recomputed whenever admin CRUD mutations modify game data.

The mobile app polls the version endpoint and refetches data only when the hash changes (see `apps/app/src/stores/gameData.ts`).

#### Database schema

The database uses Drizzle ORM with PostgreSQL. Key tables:

- **Users** — user accounts with `IsAdmin` flag
- **Ships** — ship definitions per ruleset/faction (unique on Ruleset + Faction + Xws)
- **Pilots** — pilot cards linked to Ships via FK with cascade delete (unique on ShipId + Xws)
- **GameUpgrades** — upgrade cards per ruleset (unique on Ruleset + Slot + Xws)
- **GameConditions** — condition cards per ruleset (unique on Ruleset + Xws)
- **Sources** — product/expansion metadata with contents references
- **ManifestEntries** — numeric ID ↔ xws key mappings for compact serialization
- **GameDataVersions** — per-ruleset version hashes
- **Collections**, **Squadrons**, **UserLoginCodes** — existing user data tables

Migrations are in `src/server/drizzle/`. Run `bunx drizzle-kit generate` to create new migrations and `bunx drizzle-kit migrate` to apply them.

#### Seed script

`apps/web/src/server/scripts/seed.ts` populates game data tables from `lbn-core` assets:

```bash
cd apps/web
bun run src/server/scripts/seed.ts
```

This truncates existing game data, seeds ships/pilots/upgrades/conditions/sources/manifest entries for all rulesets, and computes version hashes.

### `apps/app`

- Expo Router screens are organized in `apps/app/src/app`
- Main tab routes are in `apps/app/src/app/(tabs)`:
  - collection
  - database
  - overview/account/login
  - squadrons flow
- Shared client-side state and helpers live in `apps/app/src/stores` and `apps/app/src/helpers`
- Game data from the server is managed by `apps/app/src/stores/gameData.ts` (Zustand + AsyncStorage, with version-based cache invalidation)

### `packages/core`

- Canonical game assets by ruleset in `packages/core/src/assets/{xwa,legacy,amg}`
- Types in `packages/core/src/types.ts` (includes `GameData` and `ManifestData` types for server API contracts)
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
