const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: "imports-loader?wrapper=window",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
    }),
    new webpack.ProvidePlugin({
      join: ["lodash", "join"],
    }),
  ],
};
