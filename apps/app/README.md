# Launch Bay Next app
Expo React Native app for Launch Bay Next.

The app is built with Expo Router and organized around tab-based flows for:
- Squadron building and management
- Collection tracking
- Database browsing/search
- User overview/authentication

## Setup
From this directory:
```bash
bun install
```

Start development server:
```bash
bun run start
```

Run on native targets:
```bash
bun run ios
bun run android
```

Run as web:
```bash
bun run web
```

## Scripts
```bash
bun run start
bun run ios
bun run android
bun run web
bun run lint
bun run test
```

## Project structure
- Routes/screens: `src/app`
- Tab routes: `src/app/(tabs)`
- Shared UI components: `src/components`
- Helpers and business logic: `src/helpers`
- Global stores: `src/stores`

## Configuration notes
- App identity changes by `APP_VARIANT` in `app.config.js`.
- EAS build profiles are defined in `eas.json`.
- Current tRPC API URL is hardcoded in `src/helpers/trpc.ts` (production endpoint), with an environment-based alternative commented out.
