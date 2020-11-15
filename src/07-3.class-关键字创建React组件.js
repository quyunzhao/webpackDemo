import React, { Component, useLayoutEffect } from "react";

// class 关键字创建组件
// class Movie extends Component {
//   // render函数的作用 是渲染当前组件所对的 虚拟DOM元素
//   render() {
//     return <div> 这里是Movie组件的内容</div>;
//     // return null;
//   }
// }

class Movie extends React.Component {
  // 构造器
  // 由于 Movie组件继承了 React.Component 夫类，所以自定义构造器中必须调用 super()
  constructor() {
    // 必须 先调用 super 函数
    super();

    // 这个 this.state 相当于 Vue 中的 data(){ return { }}
    // this.state 私有数据
    this.state = {
      msg: "这 Movie 的一条短消息",
    };
  }
  // render函数的作用 是渲染当前组件所对的 虚拟DOM元素
  render() {
    // 注意： 不管是 class 还是function 创建的组件，他们的 props 都是只读的
    // this.props.age = 22;

    // 在 class 创建的组件中 this.state 的数据是可读可写的
    this.state.msg = "这里是修改后的 Movie 消息";

    // 在 class关键字创建的组件中，如果想使用外界传递过来的 props 参数，不需要接受，直接通过 this.props.***访问即可
    return (
      <div>
        {/* 注意： 在class 组件内部，this 表示当前组件的实例对象 */}
        这里是Movie组件的内容
        <br />
        {this.props.name}-----{this.props.age}-----{this.props.gender}
        <h3>{this.state.msg}</h3>
        <hr />
      </div>
    );

    // return null;
  }
}

export default Movie;
