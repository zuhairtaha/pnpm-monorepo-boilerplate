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
