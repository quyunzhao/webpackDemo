import React from "react";

// 使用 function 定义普通的无状态组件
// 子组件
function CmtItem(props) {
  return (
    <div>
      <h1 className="title">评论人：{props.user}</h1>
      <h2>评论内容：{props.content}</h2>
    </div>
  );
}

// 导出组件
export default CmtItem;
