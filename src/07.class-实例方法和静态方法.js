// console.log("okkkkkk");
function Person(name, age) {
  this.age = age;
  this.name = name;
}

// info 属性，直接挂载给了构造函数，所以它是 【静态属性】
Person.info = "这是实例对象的描述";

const p1 = new Person("王五", 26);
console.log(p1);

// 通过 new 出来的实例，访问到的属性 称为 【实例属性】
console.log(p1.name); // 实例属性
console.log(p1.age); // 实例属性
// 【静态属性】 通过 构造函数 直接访问到的属性，叫【静态属性】
console.log(Person.info);

// ~~~~~~~~~~~~~~~~~~~~~分割线~~~~~~~~~~~
console.log("~~~~~~~~~~~~~~~~~~~~~~");
// ES6 中 class 关键字 是实现面向对象编程新形式
// 创建一个动物类
class Animal {
  // 这是类中的  构造器
  // 每一个类中都有一个构造器
  // 如果没有指定构造器， 内部有一个隐形的、看不见的 空构造器，类似于 constructor() {}
  // 构造器的作用  每当 new 这个类的时候 必然优先执行 构造器中的代码
  constructor(name, age, weight, leg) {
    // 实例属性
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.leg = leg;
  }
  // 在class 内部通过 static 修饰的属性就是【静态属性】
  static info = "动物的描述信息";
}

const a1 = new Animal("赤兔", 3, 174, 4);
console.log(a1);
console.log(a1.name); // 实例属性
console.log(a1.age); // 实例属性
console.log(a1.weight); // 实例属性

// info 是 Animal 的静态属性
console.log(Animal.info);
