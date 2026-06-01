# Launch Bay Next — Copilot Instructions

## Project overview

Launch Bay Next is a monorepo for an X-Wing miniatures game squad builder. It consists of:

- **`apps/web`** — Next.js 14 web app with tRPC API, Drizzle ORM, PostgreSQL
- **`apps/app`** — Expo React Native mobile app (iOS/Android) with Expo Router, Zustand, SWR
- **`packages/core`** (`lbn-core`) — Shared TypeScript package with game data assets, types, helpers, serializers

## Tech stack

- **Runtime/package manager:** Bun (not npm/yarn)
- **Web:** Next.js 14 App Router, React, Tailwind CSS v4, tRPC, Drizzle ORM, shadcn/ui
- **Mobile:** Expo Router, React Native, Zustand, SWR, NativeWind (Tailwind for RN)
- **Database:** PostgreSQL with Drizzle ORM (schema in `apps/web/src/server/drizzle/schema.ts`)
- **Auth:** JWT-based (cookie or Authorization header), context resolved in `apps/web/src/server/context.ts`

## Workspace structure

- Root `package.json` defines workspaces: `apps/web` and `packages/*`
- `apps/app` is **not** in root workspaces — it has its own lockfile; install deps separately with `cd apps/app && bun install`
- Shared types/data flow from `packages/core` → consumed by both `apps/web` and `apps/app`

## Key conventions

- Use `bun` for all package operations (install, run, test)
- Web dev server: `bun run dev` from `apps/web` or `bun run dev:web` from root
- Mobile dev: `bun run start` from `apps/app`
- Database migrations: `bunx drizzle-kit generate` then `bunx drizzle-kit migrate` from `apps/web`
- Seed game data: `bun run src/server/scripts/seed.ts` from `apps/web`

## tRPC architecture

- Router entrypoint: `apps/web/src/server/index.ts`
- Sub-routers:
  - `admin` — CRUD for game data entities (ships, pilots, upgrades, conditions, sources, users). Uses `adminProcedure` requiring `Users.IsAdmin = true`
  - `gameData` — Public API for serving game data with version-based cache invalidation
  - Squad/collection/user routers for user-facing features
- Context: `apps/web/src/server/context.ts` — resolves JWT, loads user
- Middleware tiers: `publicProcedure`, `protectedProcedure`, `adminProcedure` in `apps/web/src/server/trpc.ts`

## Database

- Schema: `apps/web/src/server/drizzle/schema.ts`
- Relations: `apps/web/src/server/drizzle/relations.ts`
- Migrations: `apps/web/src/server/drizzle/` (SQL files + snapshots)
- Drizzle config: `apps/web/drizzle.config.ts`
- Key tables: Users, Ships, Pilots, GameUpgrades, GameConditions, Sources, ManifestEntries, GameDataVersions, Collections, Squadrons

## Game data system

- Three rulesets: `xwa`, `legacy`, `amg` — assets stored in `packages/core/src/assets/{ruleset}/`
- Each ruleset has pilots (organized by faction), upgrades, conditions, and a manifest
- Admin CRUD mutations auto-recompute version hashes via `computeAndUpdateVersion()` in `apps/web/src/server/helpers/versionHash.ts`
- Mobile app uses version-based polling to know when to refetch (`apps/app/src/stores/gameData.ts`)
- Web app fetches game data once on mount via `GameDataProvider` (`apps/web/src/app/game-data-provider.tsx`)

## Data update workflow (lbn-core)

- `packages/core/scripts/xwing-data/` contains merge scripts that pull from upstream GitHub repos
- `bun run update:xwa` — sync XWA data from `gregkash16/xwing-data2`
- `bun run update:legacy` — sync Legacy data from `SogeMoge/xwing-data2-legacy`
- Merge script writes to `packages/core/src/assets/` — verify diffs before committing

## Admin UI patterns

- Admin pages under `apps/web/src/app/admin/`
- List pages use tables with filtering by ruleset/faction
- Detail pages use forms with inline editing
- `new/page.tsx` files re-export the `[id]/page.tsx` component (unified create/edit pattern)
- Admin tRPC client: `apps/web/src/app/admin/_trpc.ts`
- UI components: shadcn/ui wrappers in `apps/web/src/components/ui/`

## Important patterns

- Pilot ↔ Ship relationship: Pilots have a `ShipId` FK with cascade delete
- Manifest entries map numeric IDs ↔ xws string keys for compact URL serialization (`packages/core/src/helpers/serializer.ts`)
- The serializer selects manifest based on ruleset (amg → xwa, xwa → xwa, legacy → legacy)
- XWA has a Y-Wing collision case: two ships share upstream xws `btanr2ywing` but are disambiguated to `btanr2ywing` (standard) and `btanr2wywing` (wartime) during merge

## Environment variables

### `apps/web/.env.local`

- `DATABASE_URL` (required) — PostgreSQL connection string
- `JWT_SECRET` (required) — JWT signing secret
- `POSTMARK_API_TOKEN` (required for email login)
- `NEXT_PUBLIC_HOSTING_URL` (optional, defaults to `http://localhost:3000`)

### `apps/app`

- `APP_VARIANT` — controls app identity (development vs production)
- Mobile tRPC URL is currently hardcoded in `apps/app/src/helpers/trpc.ts`
