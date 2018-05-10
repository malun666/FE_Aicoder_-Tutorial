function Stu(name) {
  this._name = name;
}

Stu.prototype = {
  constructor: Stu,
  // 这是一个属性。
  get Name() {
    return this._name;
  },
  set Name(val) {
    if (val) {
      this._name = val;
    }
  }
};

var s = new Stu('老马，aicoder.com');
console.log(s.Name);
// s._name;
// s._name = 'sss';
// s.Name = 90; // X
s.Name = "sss"; // √
console.log(s.Name);
// get set新功能呢
s.Name = "";
console.log(s.Name);