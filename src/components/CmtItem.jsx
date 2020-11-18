import React from "react";

// 使用 function 定义普通的无状态组件
// 子组件
function CmtItem(props) {
  return (
    <div>
      <h1>评论人：{props.user}</h1>
      <h2>评论内容：{props.content}</h2>
      {/* <hr /> */}
    </div>
  );
}
// 导出组件
export default CmtItem;

// 方式二
// 定义并导出
// export default function CmtItem(props) {
//   return (
//     <div>
//       <h1>评论人：{props.user}</h1>
//       <h2>评论内容：{props.content}</h2>
//       {/* <hr /> */}
//     </div>
//   );
// }
