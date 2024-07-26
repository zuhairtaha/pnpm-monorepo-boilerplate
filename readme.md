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
