const fs = require('fs');
const path = require('path');

// 读取当前文件的内容，设置了编码为：utf8
// readFileSync是同步的方法，当node执行到此行代码的时候，
// 整个程序等待文件读取完毕后，再往下执行。
// let fileContent = fs.readFileSync(__filename, {
//   encoding: 'utf8'
// });

// console.log(fileContent);

// 异步读取文件的方法
let indexJSFileName = path.join(__dirname, 'index.js');

// 异步读取文件，主线程继续执行后续的代码，线程池的线程读取文件内容，文件内容
// 读取成功后，调用回调函数。
// 仅用于读取小文件。
fs.readFile(indexJSFileName, {
  encoding: 'utf8'
}, function (err, data) {
  console.log('文件读取完毕，执行回调函数....');
  if (err) {
    console.log('出现读取异常：', err);
    return;
  }
  console.log(data);
});
console.log('主线程继续执行.....');