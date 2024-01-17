# Running Scripts Across Packages

```bash
pnpm --filter my-library start
pnpm --filter my-library run start

pnpm start --filter my-library
pnpm run start --filter my-library

pnpm -C packages/my-library start
pnpm -C packages/my-library run start
```

# Add Dependencies

```bash
pnpm add lodash --filter package-a
```

# Linking Between Packages:

If `package-b` depends on `package-a`:

```bash
pnpm add package-a --filter package-b
```
