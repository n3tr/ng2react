# NG2REACT

## TypeScript and Webpack configurtion for React

> Make a Commit, before doing anything here!

Make an Eject

```sh
ng eject
```

- Modify `tsconfig.json` to support `jsx` and `js`
- Modify `webpack.config.js` loaders.

`tsconfig.json`

```diff
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "baseUrl": "src",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
+   "jsx": "react",
+   "allowJs": true,
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2016",
      "dom"
    ]
  }
}
```

`webpack.config.js`

```diff

    {
        "enforce": "pre",
        "test": /\.js$/,
-       "loader": "source-map-loader",
+       "loaders": ["@ngtools/webpack", "source-map-loader"],
        "exclude": [
          /\/node_modules\//
        ]
    }

    ...

    {
-       "test": /\.ts$/,
+       "test": /\.tsx?$/,
        "loader": "@ngtools/webpack"
    }

    ...

    "resolve": {
        "extensions": [
            ".ts",
-           ".js"
+           ".js",
+           ".tsx" 
        ],

        
```
