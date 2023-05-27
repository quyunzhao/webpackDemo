const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "webpack-numbers.js",
    path: path.resolve(__dirname, "dist"),
    library: "webpackNumbers",
    clean: true,
  },
};
