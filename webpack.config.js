const path = require("path");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      extensionAlias: {
        ".ts": [".js", ".ts"],
        ".cts": [".cjs", ".cts"],
        ".mts": [".mjs", ".mts"],
      },
    },
    module: {
      rules: [
        {
          test: /.([cm]?ts|tsx)$/,
          loader: "ts-loader",
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new ForkTsCheckerNotifierWebpackPlugin({
        title: "TypeScript",
        excludeWarnings: false,
      }),
      new HtmlWebpackPlugin(),
    ],
  };
};
