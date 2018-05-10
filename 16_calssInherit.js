class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log("name: %s, age: %d", this.name, this.age);
  }
}

class Student extends Human {
  constructor(name, age, classNum) {
    // 子类对象的构建需要通过父类执行构造函数的构建过程。
    super(name, age); // 调用父类的构造函数
    // 子类自己设置自己的属性。
    this.classNum = classNum;
  }

  stuShow() {
    console.log('name: %s, age: %d, classNum: %s', this.name, this.age, this.classNum);
  }
}

let s = new Student('malun', 222, 'aicoder.com 一期');
s.stuShow();
s.show();