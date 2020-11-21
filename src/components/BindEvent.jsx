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
        {/* 函数抽离1.0 */}
        {/* <button onClick={this.myClickHandler}>按钮</button> */}
        {/* 注意： onClick 只接受 function 作为处理函数 */}
        {/* 箭头函数本身就是一个匿名的 function 函数 */}
        <button
          onClick={() => {
            this.myClickHandler();
          }}
        >
          按钮
        </button>
      </div>
    );
  }

  // 这是一个实例方法
  myClickHandler = () => {
    console.log("okkkkk");
  };
}
