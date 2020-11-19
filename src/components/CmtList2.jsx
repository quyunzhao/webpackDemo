import React from "react";

// 导入样式表
// 直接导入的样式表，默认都是全局上的，整个项目都生效

// vue 组件中的样式表有没有 “冲突问题”
//  答：在 vue 中使用 <style scoped></style> 解决样式冲突
// 疑问： React 中有没有类似 scoped 这样的指令呢
//  答： 没有 ，因为在 React 中没有指令的概念
import cssobj from "@/css/CmtList.scss";
console.log(cssobj);

// 导入第三方样式表
// 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中
//  则： 可以省略 node_modules 这一层目录，直接以包名开始引入自己的 模块 或 样式表
// 自己规定： 第三方 的样式表都是以 .css 结尾 这样我们不要为普通的 .css 启用模块化
//    自己的样式表，都要以 .scss 或 .less 结尾，只为 .scss 和 .less 文件启用模块化
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
console.log(bootstrap);

// 导入子组件
import CmtItem from "@/components/CmtItem2";

// 定义父组件
class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [
        // 评论列表数据
        { id: 0, user: "张三", content: "哈哈，我是第一名" },
        { id: 1, user: "李四", content: "哈哈，我爱吃西瓜" },
        { id: 2, user: "王五", content: "哈哈，我是大帅哥" },
        { id: 3, user: "周六", content: "哈哈，这姑娘一点也不傻" },
        { id: 4, user: "田七", content: "哈哈，我#@#￥" },
        { id: 5, user: "方八", content: "哈哈，￥#%@#￥……" },
        { id: 6, user: "吴氏", content: "哈哈，不知道说什么嘛" },
      ],
    };
  }
  render() {
    return (
      <div>
        {/* <h1 className={cssobj.title + " test"}>这里是评论列表区</h1> */}
        <h1 className={[cssobj.title, " test"].join(" ")}>这里是评论列表区</h1>

        <button className="btn btn-primary">按钮</button>
        {/* <button className={[bootstrap.btn, bootstrap["btn-primary"]].join(" ")}>
          按钮
        </button> */}
        <div className="panel panel-primary"></div>
        {this.state.commentList.map((item) => (
          <CmtItem key={item.id} {...item}></CmtItem>
        ))}
      </div>
    );
  }
}

export default CmtList;
