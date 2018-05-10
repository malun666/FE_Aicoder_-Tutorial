const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname, 'a.mp4');
let distFile = path.join(__dirname, 'b.mp4');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile);

rs.on('open', function (fd) {
  console.log('开始读取文件内容...');
});

rs.on('close', function () {
  console.log('读取结束');
})

rs.on('data', function (trunk) {
  if (ws.write(trunk) === false) {
    // 缓冲区满了不能写入了。
    // 让可读流暂停读取数据。
    rs.pause();
  }
});

ws.on('drain', function () {
  // 可写流数据可以继续写入的时候，让可读流继续读取数据。
  rs.resume();
})