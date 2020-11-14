//导入包
import React from "react"; //创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 把创建好的 组件 和 虚拟DOM  放到页面上

let a = 100;
let str = "你好，react";
let title = "2222";

const arr = [1, 22, 55, 98, <h2>这是H2</h2>, <h3>这是H3</h3>];

const arrStr = ["小米", "华为", "苹果", "三星"];

// 方案一
const phoneArr = [];
arrStr.forEach((item) => {
  const temp = <h5>{item}</h5>;
  phoneArr.push(temp);
});

// 方案二
// 数组的map方法  map中必须写 return
const result = arrStr.map((item) => {
  return item + "~~~";
});
console.log(result);

//使用 ReactDOM  将虚拟DOM 渲染到页面上
ReactDOM.render(
  <div>
    {a + 22}
    <hr />
    {str}
    <hr />
    {arr}
    <hr />
    <div title={title}>这个是div</div>
    <hr />
    {phoneArr}
    <hr />
    {arrStr.map((item) => (
      <h3>{item}</h3>
    ))}
    <hr />
  </div>,
  document.getElementById("app")
);
