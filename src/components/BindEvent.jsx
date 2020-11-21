import React from "react";

export default class BindEvent extends React.Component {
  constructor() {
    super();
    // 私有数据
    this.state = {};
  }

  render() {
    return (
      <div>
        BindEvent 组件
        <hr />
        {/* 驼峰命名 */}
        {/* <button onClick={function(){console.log("ok")}}>按钮</button> */}
        <button onClick={this.myClickHandler}>按钮</button>
      </div>
    );
  }
  // 这是一个实例方法
  myClickHandler() {
    console.log("okkkkk");
  }
}
