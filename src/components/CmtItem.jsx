import React from "react";

// 第一次封装
const itemStyle = {
  border: "1px dashed #ccc",
  margin: "10px",
  padding: "10px",
  boxShadow: "0 0 10px #ccc",
};

const userStyle = {
  fontSize: "14px",
};

const contentStyle = {
  fontSize: "12px",
};

// 第二层封装样式
const style = {
  item: {
    border: "1px dashed #ccc",
    margin: "10px",
    padding: "10px",
    boxShadow: "0 0 10px #ccc",
  },
  user: { fontSize: "14px" },
  content: { fontSize: "12px" },
};

// 使用 function 定义普通的无状态组件
// 子组件
function CmtItem(props) {
  return (
    <div style={style.item}>
      <h1 style={style.user}>评论人：{props.user}</h1>
      <h2 style={style.content}>评论内容：{props.content}</h2>
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
