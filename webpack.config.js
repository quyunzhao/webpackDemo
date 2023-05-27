const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // css 样式文件
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // 图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // csv | tsv 文件
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      // xml 文件
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
};
