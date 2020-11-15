import React, { Component } from "react";

// class 关键字创建组件
class Movie extends Component {
  // render函数的作用 是渲染当前组件所对的 虚拟DOM元素
  render() {
    return <div> 这里是Movie组件的内容</div>;
    // return null;
  }
}

export default Movie;
