// 父类
class Person {
  //
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 实例方法
  seyHello() {
    console.log("Hello people");
  }
}

// 子类 美国人
// 在 class 中可以使用 extends 关键字，实现子类继承父类
// 语法 class 子类 extends 父类 { }
class American extends Person {
  // 传入 name age
  constructor(name, age) {
    // 问题1： 为什么一定要在 constructor 中调用 super
    //  答：因为，如果一个子类 通过 extends 继承了父类 ，那么在子类的 constructor 中必须 优先调用 super()
    // 问题2： super 是什么
    //  答： super是一个函数，而且 它是 父类的 构造器 子类中的 super，其实就是父类中 constructor 构造器的引用
    // 问题3： 为什么只调用了 super()之后，a1 的实例 name 和 age 都变为 undefined ?
    //  答：没有传值
    super(name, age);
  }
}

const a1 = new American("Lucy", 22);
console.log(a1);
a1.seyHello();

// 子类 中国人
class Chinese extends Person {}

const a2 = new Chinese("小红", 21);
console.log(a2);
a2.seyHello();
