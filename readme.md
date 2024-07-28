## Introduction

A monorepo is a single repository that holds multiple projects, which can be related or unrelated. PNPM (Performant NPM) is a fast, disk space-efficient package manager. It has built-in support for managing monorepos.

## Setting Up a PNPM Monorepo

Create a `pnpm-workspace.yaml` file in your project root to define the workspace.

```yaml
packages:
  - "packages/"
```

## Adding a dependency for a specific workspace:

```bash
pnpm add <package-name> -F <workspace-name>
```

# Updating all dependencies in the monorepo:

```bash
pnpm up -r
```

# Adding a global dependency that applies to all packages:

```bash
pnpm add -w <package-name>
```

# Run a script in all packages that have it:

```bash
pnpm -r run <script-name>
```

## Run a command only in affected packages:

```bash
pnpm -F <workspace-name> run <script-name>
```

## Run a command in all packages except specified:

```bash
pnpm -F !<excluded-workspace> run <script-name>
```

### Linking Between Packages

To leverage the power of monorepos, linking packages is straightforward:

```bash
pnpm add <local-package-name> -F <consumer-package>
```

⚠️ If you had issues, you can add it to package.json dependencies. For example:

```json
  "dependencies": {
    "@my-scope/shared": "workspace:*",
  }
```

then run `pnpm i` in root.

```json
  "dependencies": {
    "@my-scope/shared": "workspace:*",
  }
```

then run `pnpm i` in root.

## Publish all changed packages:

```bash
pnpm publish -r -F "@my-scope/*"
```
