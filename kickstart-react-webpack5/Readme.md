# React Kick Start project (Webpack)

## Create `package.json`
```properties
npm init -y
```
## Install `webpack`
```properties
npm install webpack webpack-cli --save-dev
```
`--save-dev` will save webpack as dev dependency instead of default dependency in `package.json`

```json
  ...
  "devDependencies": {
    "webpack": "^5.53.0",
    "webpack-cli": "^4.8.0"
  },
  "dependencies": {}
}
```
## Install `react`
```properties
npm install react react-dom
```
Adds dependencies to `package.json`
```json
...
"devDependencies": {
    "webpack": "^5.53.0",
    "webpack-cli": "^4.8.0"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```
## Edits
### Create `webpack.config.js`
Basic Webpack for small application. You can improve the customisations and plugins as you need them.
```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require(`webpack`);

const debug = process.env.NODE_ENV !== "production";
const htmlWebPackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "dist", "index.html")
})

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-source-map" : null,
    entry: path.resolve(__dirname, "js", "scripts.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "scripts.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: debug ? [htmlWebPackPlugin] : [
        htmlWebPackPlugin,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
```

### Add new files and folders
```
kickstart-react-app
├── dist
│   ├── index.html
│   └── scripts.min.js
├── js
│   └── scripts.js
├── package.json
├── package-lock.json
├── babel.config.json
├── webpack.config.js
└── Readme.md
```

## References:
[WebPack](https://webpack.js.org/guides/getting-started/)
[Babel](https://babeljs.io/docs/en/#jsx-and-react)
