//导入包
import React from "react"; //创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 把创建好的 组件 和 虚拟DOM  放到页面上

// 导入 class
import "@/06.class-基本使用";

//使用 ReactDOM  将虚拟DOM 渲染到页面上
ReactDOM.render(<div>123</div>, document.getElementById("app"));
