// 开始了
// console.log("okK那匹马");

// 1. 导入这两个包必须这么写
import React from "react"; //创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 把创建好的 组件 和 虚拟DOM  放到页面上 

//2. 创建虚拟DOM
// 参数1：参数的类型、字符串、表示元素的名称
// 参数2：是一个 对象 或者 null ，表示当前DOM属性
// 参数3：子节点 （包括 其他 虚拟DOM 获取 文本子节点）
// 参数n: 其他子节点
// 这是一个<h1 id="myh1" title="this is my h1"> 这是一个大大的H1</h1>
// const myh1= React.createElement("h1",null,"这是一个大大的H1");
const myh1= React.createElement("h1",{id:"myid",title:"this is my h1"},"这是一个大大的H1");
// 创建一个div
const mydiv=React.createElement("div",null,"这是一个div元素",myh1);

// 渲染 页面上的 DOM 元素最好的方式就是写 HTML

// 
const mytest= <div>aaaaaassa</div>;


// 3.使用 ReactDOM  将虚拟DOM 渲染到页面上
// 参数1：要渲染的元素
// 参数2：指定页面上的容器
// ReactDOM.render(myh1,"#app")
// Target container is not a DOM element. 猜测第二个元素为 dom 元素 ，不应该为 选择器
ReactDOM.render(mydiv,document.getElementById("app"))


// vue中
// const vueM=new Vue({
//   data:{},
//   el:"#app",
//   method:{}
// })