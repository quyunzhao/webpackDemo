const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    // SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，
    // 或者提取到一个新生成的 chunk。
    splitChunks: {
      chunks: "all",
    },
  },
};
