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
        exclude: /node_modules/, // 排除项, 千万不能忘记
      },
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
