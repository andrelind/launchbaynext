# lbn-core
Shared Launch Bay Next package for game assets, type definitions, and squadron helper logic.

Used by both:
- `apps/web` (web UI/API)
- `apps/app` (Expo mobile app)

> **The live database is the only source of truth for game data.** The local files in `packages/core/src/assets/{xwa,legacy}` are outdated and must not be used as a source for game data. Live values include deliberate admin edits that exist nowhere else.

## What it contains
- Ruleset assets: `src/assets/{xwa,legacy,amg}`
- Core types: `src/types.ts`
- Helpers (conversion, loading, import/export, serialization): `src/helpers`
- Data source bundles: `src/sources`

## Setup
From this directory:
```bash
bun install
```

## Maintenance scripts
Run from `packages/core`:
```bash
bun run update:xwa
bun run update:legacy
```

These scripts run the update/merge pipeline in `scripts/xwing-data` and regenerate data in `src/assets`.

## Notes
- Package name: `lbn-core`
- Entry module: `index.ts`
- ESM package (`"type": "module"`)
