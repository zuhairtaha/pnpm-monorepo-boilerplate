# Running Scripts Across Packages

```bash
pnpm --filter my-library start
# or
pnpm -C packages/my-library start
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
