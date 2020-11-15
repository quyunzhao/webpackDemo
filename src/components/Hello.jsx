//导入包
import React from "react";
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

// 把组件暴露出去   ES6
export default Hello;

// 也可以这样 导出组件   创建并导出
// export default function Hello(props) {
//   // return null表示此组件为空，什么都不会渲染
//   // return null;
//   // props.name = "小红";  只读属性 props
//   console.log(props);
//   return (
//     <div>
//       这个是Hello组件~~~~{props.name}-----{props.age}
//     </div>
//   );
// }
