const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "webpack-numbers.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
    clean: true,
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
