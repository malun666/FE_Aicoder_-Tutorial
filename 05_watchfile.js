const fs = require('fs');

// 启动监听文件夹
// let watcher = fs.watch(__dirname);

let watcher = fs.watch(__dirname, function (eventType, fileName) {
  console.log('callback: ', eventType, fileName);
});

// // 监听改变的事件
// watcher.on('change', function (eventType, fileName) {
//   console.log('change： ', eventType, fileName)
// });

// 关闭监听
setTimeout(function () {
  // 实际：关闭监听
  watcher.close();
}, 10000);