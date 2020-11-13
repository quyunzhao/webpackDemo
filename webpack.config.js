const path=require("path");
const HtmlWebPackPlugin=require("html-webpack-plugin"); // 导入内存中生产的HTML插件

// 创建一个插件的实例
const htmlPlugin=new HtmlWebPackPlugin({
  template:path.join(__dirname,"./src/index.html"),// 源文件
  filename: "index.html"// 生成在内存中目标文件的名称
})

// 向外暴露一个对象
module.exports={
  mode:"development", //  development  production  模式
  // 在webpack4.x中约定大于配置，默认路径为src->index.js
  plugins:[
    htmlPlugin
  ]
}
// webpack-dev-server 打包好的main.js在内存中
// 不行   这是ES6的导出API  与之对应的是 import ** from “标识符”
// export default{}

// 那些Node支持
// chrome浏览器 支持就都支持 