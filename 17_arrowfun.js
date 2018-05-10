let add = function (a, b) {
  return a + b;
}

console.log(add(4, 5));

let addArrowFun = (a, b) => a + b;

console.log(addArrowFun(5, 6));

var arr = [1, 9, 3, 2, 7, 6];
// arr.sort(function (a, b) {
//   return a - b;
// });

arr.sort((a, b) => a - b);
console.log(arr);

var t = () => {
  console.log(this); // this 就是定义箭头函数的作用域里面的this
}