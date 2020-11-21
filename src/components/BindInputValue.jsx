import React from "react";

export default class BindEvent extends React.Component {
  constructor() {
    super();
    // 私有数据
    this.state = {
      msg: "哈哈哈哈",
      name: "zs",
      age: 22,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.show("👍", "👀👀👀")}>按钮</button>

        <h3>{this.state.msg}</h3>
        {/* 当为 文本框绑定 value 值以后，要么同时提供一个 readOnly ，要么提供一个 onChange 处理函数 */}
        {/* <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.msg}
          readOnly
        /> */}

        <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.msg}
          onChange={(e) => this.textChanged(e)}
        />
      </div>
    );
  }

  textChanged = (e) => {
    // console.log("文本变化了");
    const textValue = e.target.value;
    // 在 onChange 事件中
    // 获取文本框的值有两种方法
    // 方案1：通过 事件参数 e 来获取
    // console.log(textValue);

    this.setState({ msg: textValue }, function () {
      console.log(this.state.msg);
    });
  };
  // 这是一个实例方法
  show = (arg1, arg2) => {
    this.setState({ msg: arg2 }, function () {
      console.log(this.state.msg);
    });
  };
}
