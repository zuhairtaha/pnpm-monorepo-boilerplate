- init pnpm project
- create packages folder
- create packages/main folder
- run pnpm init in packages/main
- in packages/main/package.json set "name" to "@tahasoft/main"

# 5. Multiple Package And Recursive Commands

-r flag is used to run a command in all packages. (recursive)

```bash
"start": "pnpm -r run start"
```

# Sharing code between packages

in `packages\main\package.json` add

```json
  "dependencies": {
    "@tahasoft/second": "workspace:*"
  }
```

Now in `packages\main\index.js` you can

```ts
import { second } from "@tahasoft/second";
console.log(second);
```

Run `pnpm install` in _root_ folder to install the dependencies.

# engines

Add in root package.json

```json
  "engines": {
    "node": ">=20.12.2",
    "pnpm": ">=9.6.0"
  }
```

That will make sure that all packages are using the same node version.

# Add dependency to `@tahasoft/second`

```bash
pnpm -F @tahasoft/second add just-snake-case
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

# Install a package in all packages

in root run:

```bash
pnpm add just-kebab-case -w
```

Now in `@tahasoft/main` and `@tahasoft/second` you can use `just-kebab-case` package.

```ts
import kebabCase from "just-kebab-case";
console.log(kebabCase("Hello World"));
```

# Remove all node_modules

add to root package.json

```json
"clean": "find . -name 'node_modules' -type d -exec rm -rf {} +"
```

You can run `pnpm run clean` to remove all node_modules.
then run `pnpm i` to install all dependencies.
_Note_: It doesn't work on `nu` terminal.
