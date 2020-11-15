import React, { Component } from "react";

// class 关键字创建组件
// class Movie extends Component {
//   // render函数的作用 是渲染当前组件所对的 虚拟DOM元素
//   render() {
//     return <div> 这里是Movie组件的内容</div>;
//     // return null;
//   }
// }

class Movie extends React.Component {
  // render函数的作用 是渲染当前组件所对的 虚拟DOM元素
  render() {
    // 注意： 不管是 class 还是function 创建的组件，他们的 props 都是只读的
    // this.props.age = 22;

    // 在 class关键字创建的组件中，如果想使用外界传递过来的 props 参数，不需要接受，直接通过 this.props.***访问即可
    return (
      <div>
        {/* 注意： 在class 组件内部，this 表示当前组件的实例对象 */}
        这里是Movie组件的内容
        <br />
        {this.props.name}-----{this.props.age}-----{this.props.gender}
        <hr />
      </div>
    );

    // return null;
  }
}

export default Movie;
