//导入包
import React from "react"; //创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 把创建好的 组件 和 虚拟DOM  放到页面上

// 第一种创建组件的方式
// 构造函数 注意：首字母大写
function Hello(props) {
  // return null表示此组件为空，什么都不会渲染
  // return null;
  // props.name = "小红";  只读属性 props
  console.log(props);
  return (
    <div>
      这个是Hello组件~~~~{props.name}-----{props.age}
    </div>
  );
}
const user = {
  name: "小明",
  age: "22",
  area: "china",
  id: "1001",
};
// 第二种 创建组件的方式
// 使用 class 类

//使用 ReactDOM  将虚拟DOM 渲染到页面上
ReactDOM.render(
  <div>
    123
    <hr />
    {/* 直接把 组件 的 名称 ，以标签的形式丢到页面上 */}
    <Hello name={user.name} age={user.age} area={user.area}></Hello>
    <hr />
    {/* es6 展开运算符 ... */}
    <Hello {...user}></Hello>
  </div>,
  document.getElementById("app")
);

// var two = {
//   age: 14,
//   like: ["move", "danced", "sing"],
//   address: "杭州",
// };
// var one = {
//   name: "李四",
//   ...two,
// };
// console.log(one);
