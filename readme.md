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

Run `pnpm install` in *root* folder to install the dependencies.