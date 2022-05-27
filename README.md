# NX testing `nx test`

Steps to reproduce:

```bash
npm i
nx test b
```

Error:

```bash
Cannot find module '#lib/a'
Require stack:
- /path/to/repo/tools/plugins/ts/executors/test/executor.ts
- /path/to/repo/node_modules/nx/src/config/workspaces.js
- /path/to/repo/node_modules/nx/src/command-line/run.js
- /path/to/repo/node_modules/nx/bin/run-executor.js

 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Ran target test for project b (255ms)

    ✖    1/1 failed
    ✔    0/1 succeeded [0 read from cache]
```
