const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require(`webpack`);

const debug = process.env.NODE_ENV !== "production";
const htmlWebPackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "dist", "index.html")
})

module.exports = {
    context: __dirname,
    // devtool: debug ? "inline-source-map" : null,
    entry: path.resolve(__dirname, "js", "scripts.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "scripts.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules/'),
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules/'),
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],optimization: {
        minimize: true,
      },
};