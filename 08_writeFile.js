const fs = require('fs');
const path = require('path');

let aFilePath = path.join(__dirname, 'a.txt');

// 异步写入到文件中一个字符串。
// fs.writeFile(aFilePath, '你好， aicoder.com 线下全栈实习！！', function (err) {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log('正常写入！');
// });

fs.writeFileSync(aFilePath, '你好2', {
  flag: 'a'
});