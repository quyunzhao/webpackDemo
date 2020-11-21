const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin"); // 导入内存中生产的HTML插件

// 创建一个插件的实例
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "./src/index.html"), // 源文件
  filename: "index.html", // 生成在内存中目标文件的名称
});

// 向外暴露一个对象
// webpack只能处理 .js 后缀的文件 。 .png .vue 无法主动处理，所以要配置第三方的loader;
module.exports = {
  mode: "development", //  development  production  模式
  // 在webpack4.x中约定大于配置，默认路径为src->index.js
  plugins: [htmlPlugin],
  module: {
    // 匹配第三方的规则
    rules: [
      {
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/, // 排除项, 千万不能忘记添加 exclude
      },
      // 在 css-loader 之后通过 ? 追加参数
      // 其中有个固定的参数叫做 modules ，表示为普通的样式表，启用模块化
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      }, // 打包处理 CSS 样式表的第三方loader
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          // "css-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]-[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      }, // 打包处理scss文件的 loader
      { test: /\.ttf|woff|woff2|eot|svg$/, use: "url-loader" }, // 打包处理字体文件的 loader
      // { test: /\.jpg|png|gif|bmp$/, use: "url-loader" },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], // 表示这几个文件的后缀名 顺序很重要
    alias: {
      "@": path.join(__dirname, "./src"), //这样 @ 符合就表示 项目根目录下的 src 的这一层路径
    },
  },
};
// webpack-dev-server 打包好的main.js在内存中
// 不行   这是ES6的导出API  与之对应的是 import ** from “标识符”
// export default{}

// 那些Node支持
// chrome浏览器 支持就都支持
