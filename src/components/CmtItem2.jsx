import React from "react";

import cssobj from "@/css/CmtItem.scss";
console.log(cssobj);
// 使用 function 定义普通的无状态组件
// 子组件
function CmtItem(props) {
  return (
    <div className={cssobj.cmtBox}>
      {/* <h1 id={cssobj.cmtTitle}>评论人：{props.user}</h1> */}
      <h1 className={cssobj.title}>评论人：{props.user}</h1>

      <h2 className={cssobj.content}>评论内容：{props.content}</h2>
    </div>
  );
}

// 导出组件
export default CmtItem;
