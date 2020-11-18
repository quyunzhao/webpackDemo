//导入包
import React from "react"; //创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 把创建好的 组件 和 虚拟DOM  放到页面上

// 导入 class
// import Movie from "@/07-3.class-关键字创建React组件";
// import CmtList from "@/07-4评论小练习";
import CmtList from "@/components/CmtList";

//使用 ReactDOM  将虚拟DOM 渲染到页面上
ReactDOM.render(
  <div>
    <CmtList></CmtList>
  </div>,
  document.getElementById("app")
);
