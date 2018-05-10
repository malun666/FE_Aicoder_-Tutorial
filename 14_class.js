// 定义一个Human类型
function Human(name, age) {
  // 控制创建实例的属性
  this.name = name;
  this.age = age;
}

// 定义原型上的方法
Human.prototype.show = function () {
  console.log(this.name, this.age);
}

// 创建Human类型的实例
var h = new Human('aicoder.com', 19);
h.show();

// es3-5继承：通过原型进行继承。

// ES6中定义类型和继承的方式

// ES6中定义类型和构造函数。类名要符合标识符规范。
class Student {
  // 定义构造函数，如果构造函数未定义，那么会自动添加一个默认空构造函数。 constructor(){}
  constructor(name, age) {
    // 给实例添加属性
    this.name = name;
    this.age = age;
  }

  // 在类的定义的方法都是在原型上。不可遍历。
  showStu() {
    console.log(this.age, this.name);
  }

  get Name() {
    return this.name;
  }
  set Name(val) {
    this.name = val || '空';
  }

  static Add(a, b) {
    return a + b;
  }
}

// 创建类型的实例。通过class定义的类型，必须通过new来构造实例。
let s = new Student('aicoder.com', '20');
s.showStu();
s.Name = '你好啊！';
s.showStu();

s.Name = null;
s.showStu();

console.log(Student.Add(100, 1));