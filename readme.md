- init pnpm project
- create packages folder
- create packages/main folder
- run pnpm init in packages/main
- in packages/main/package.json set "name" to "@tahasoft/app"

`pnpm-workspace.yaml`:

```yaml
packages:
  - "packages/*"
  - "!**/test/**"
```

# Multiple Package And Recursive Commands

-r flag is used to run a command in all packages. (recursive)

```bash
"start": "pnpm -r run start"
```

# Sharing code between packages

in `packages\main\package.json` add

```json
  "dependencies": {
    "@tahasoft/ui": "workspace:*"
  }
```

Now in `packages\main\index.js` you can

```ts
import { second } from "@tahasoft/ui";
console.log(second);
```

Run `pnpm install` in _root_ folder to install the dependencies.

# Engines

Add in root package.json

```json
  "engines": {
    "node": ">=20.12.2",
    "pnpm": ">=9.6.0"
  }
```

That will make sure that all packages are using the same node version.

# Add dependency to `@tahasoft/ui`

```bash
pnpm -F @tahasoft/ui add just-snake-case
pnpm i
```

Then in `packages\second\index.js`

```ts
import snakeCase from "just-snake-case";
console.log(snakeCase("Hello World"));
```

# Update all packages

in root package.json

```json
  "scripts": {
    "update:all": "pnpm -r update -i -L" // i=interactive, L=latest (or --latest)
  }
```

# Running Scripts Across Packages

```bash
pnpm -F @tahasoft/ui start
pnpm -C packages/@tahasoft/ui start
```

Running `start` script in all packages:

```bash
pnpm run start -F .
pnpm run start -F @tahasoft/*
```

You can use `--filter` instead of `-F`.

# Add Dependencies

```bash
pnpm add lodash -F @tahasoft/ui
```

# Linking Between Packages:

If `@tahasoft/server` depends on `@tahasoft/ui`:

```bash
pnpm add @tahasoft/ui -F @tahasoft/server
```

I had an issue after created `@tahasoft/shared` and the way worked for me is
by adding `@tahasoft/shared` to package.json in `@tahasoft/app`
then run `pnpm i` in root folder.

# Install a package in root and use it in a package

in root run:

```bash
pnpm add just-kebab-case -w
```

Now in `@tahasoft/app` and `@tahasoft/ui` you can use `just-kebab-case` package.

```ts
import kebabCase from "just-kebab-case";
console.log(kebabCase("Hello World"));
```

# Add a package to all packages

```bash
pnpm recursive add <package-name>
# or
pnpm add -D typescript -F .
```

# Update a package

```bash
pnpm up typescript
```

# Remove all node_modules

add to root package.json

```json
"clean": "find . -name 'node_modules' -type d -exec rm -rf {} +"
```

You can run `pnpm run clean` to remove all node*modules.
then run `pnpm i` to install all dependencies.
\_Note*: It doesn't work on `nu` terminal.
