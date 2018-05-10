// 模块内的变量。
// console.log(module);
// console.log(__filename);
// console.log(__dirname);

// console.log(require);

// 引入 02_math文件对应的模块。
let t = require('./02_math.js');

// 调用02_math模块的add方法。
console.log(t.add(9, 10));
