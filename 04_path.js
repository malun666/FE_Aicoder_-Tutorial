// 引入path模块
const path = require("path");
// const: 声明变量，变量的值不能改变。
// 第一种情况：简单类型：string、number、boolean等这些简单类型值不能改的。
const t = 123; // t 永远只能是123，不能改值。
// 第二种请情况：复杂类型。const定义的复杂类型，地址引用不能改。

var strPath1 = "/home/aicoder/com/index.html";
var strPath2 = "c:\\aicoder\\com\\index2.html";
console.log(path.basename(strPath1));
console.log(path.basename(strPath2));

console.log(path.basename(strPath1, ".html"));

console.log(path.delimiter);
console.log(path.posix.delimiter);
console.log(path.win32.delimiter);

console.log(path.dirname(strPath2));

console.log(path.dirname(__filename)); // ==> __dirname

console.log(path.extname('a.html'));
console.log(path.extname(strPath2));

console.log(path.join("/", "home/aicoder", "index.html"));
console.dir(path.parse(strPath1));