# Launch Bay Next platform

This repo holds all of LBN, both server, website and app
It utilizes [Bun](https://bun.sh) for dependency management and builds

To install dependencies:

```bash
bun install
```

To run app:

```bash
cd apps/app
bun expo start
```

To run directly:

```bash
cd apps/app
bun expo run:ios / bun expo run:android
```

To run web/server:

```bash
bun run dev:web
```
