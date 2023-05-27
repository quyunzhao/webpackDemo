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

      {
        test: require.resolve("./src/globals.js"),
        use: "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse",
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
