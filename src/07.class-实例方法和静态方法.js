function Person(name, age) {
  this.age = age;
  this.name = name;
}

// info 属性，直接挂载给了构造函数，所以它是 【静态属性】
Person.info = "这是实例对象的描述";

// 【实例方法】
Person.prototype.say = function() {
  console.log("hello:这是 Person 的实例方法");
};

// 【静态方法】
Person.show = function() {
  console.log("这是 Person 的静态方法");
};

const p1 = new Person("王五", 26);
console.log(p1);

p1.say();
Person.show();

// ~~~~~~~~~~~~~~~~~~~~~分割线~~~~~~~~~~~
console.log("~~~~~~~~~~~~~~华丽的分割线~~~~~~~~~~~~~~~~~~~~~~~~~");
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
  static info = "动物的描述信息"; // 今后用的不多

  // 这是动物的实例方法  【今后会经常用到】
  sleep() {
    console.log("动物的实例方法");
  }
  // static  静态方法
  static show() {
    console.log("动物的静态方法");
  }
}

const a1 = new Animal("赤兔", 3, 174, 4);
console.log(a1);

a1.sleep(); // 实例方法
Animal.show(); // 静态方法
