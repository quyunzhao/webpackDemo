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
        {/* 需求： 点击按钮修改 msg 的值 */}
        <button onClick={() => this.show("👍", "哈✨✨✨👀👀👀")}>按钮</button>
        <h3>{this.state.msg}</h3>
      </div>
    );
  }

  // 这是一个实例方法
  show = (arg1, arg2) => {
    // 如果想改变 state 中的数据，重新赋值，不要使用  this.state.**="***"
    // 应该调用 React 提供的 this.setState({"**":"***"})
    // this.state.msg = arg2;

    // 在 React 中推荐使用 this.setState({ }) 修改状态值
    // 只会把对应的 state 更新，而不会 覆盖其他的 state 状态
    this.setState({ msg: arg2 }, function () {
      console.log(this.state.msg);
    });

    // 注意 this.setState 是异步的
    // 如果想拿到最新的 this.state 值，需要使用 this.setState({ },callback)
  };
}
