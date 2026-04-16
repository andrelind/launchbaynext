# lbn-core
Shared Launch Bay Next package for game assets, type definitions, and squadron helper logic.

Used by both:
- `apps/web` (web UI/API)
- `apps/app` (Expo mobile app)

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
