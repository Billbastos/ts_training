# WEBPACK packages

```bash
npm install --save-dev webpack webpack-cli typescript ts-loader
```

# Configuration

1. Create a file called webpack.config.js
2. Configure it to use 'ts-loader'
3. Create a 'build' script on package.json
4. Update tsconfig to build just webpack proj folder

```json
  "include": [
    // "exercises",
    // "types",
    "projects/**/*"
  ] /* Specify an array of 'glob' patterns that match files to include. */,
```

5. Enable sourcemap on tsconfig
6. Enable source map on webpack config `devtool: 'inline-source-map',`
7. For dev server we should install `npm install --save-dev webpack-dev-server`
8. Create a script on package json to serve app `"serve": "webpack-dev-server",`
   This won't generates the bundle.js but it runs dev mode in memory
9. To clean bundled files on /disp we need to add a plugin to webpack.
10. `npm install --save-dev clean-webpack-plugin`
11. Add plugin to webpack: `plugins: [new CleanWebpackPlugin()]`
