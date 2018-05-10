const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'a.mp4');
// 创建一个可读取的流。
let stream = fs.createReadStream(fileName, {
  encoding: 'utf8'
});

// 当流的管道建立后，并打开的时候，触发open事件。
stream.on('open', function (fd) {
  console.log('管道建立，并打开:fd:', fd);
});
let i = 0;

// 当数据流过来，直接触发data事件。
stream.on('data', function (trunk) {
  console.log('编号%d', i, trunk);
  i++;
});

stream.on('end', function () {
  console.log('数据读取完毕！');
});