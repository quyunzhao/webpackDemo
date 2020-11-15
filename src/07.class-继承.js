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
class American extends Person {}

const a1 = new American("Lucy", 22);
console.log(a1);
a1.seyHello();

// 子类 中国人
class Chinese extends Person {}

const a2 = new Chinese("小红", 21);
console.log(a2);
a2.seyHello();
