//导入包
import React from "react"; //创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 把创建好的 组件 和 虚拟DOM  放到页面上 


let a=100;
let str="你好，react"

//使用 ReactDOM  将虚拟DOM 渲染到页面上
ReactDOM.render(<div>
  {a+22}
  <hr/>
  {str}
  </div>,
  document.getElementById("app"))
