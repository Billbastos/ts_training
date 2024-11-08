# TS Playground

This is a personal typescript course I took to study TS. 🌊

## Config

[TS Config reference](https://www.typescriptlang.org/tsconfig/)

```bash
npx tsc --init
```

Running watch mode

```bash
npx tsc -w
```

To add lib declarations on tsconfig, we need to change the `"lib": []` prop.
The default values/declarations for it are Math library, or browser environments (like document), and features matching the target (like Map on ES6)

For instance, if we want to remove DOM lib that is added by default, all we need is uncomment the `"lib": []` line on tsconfig.
