const fs = require('fs');
const path = require('path');

// 读取一个路径，返回路径下面的所有的文件和文件夹的名字。
fs.readdir(__dirname, function (err, files) {
  // console.log(files);
  files.forEach(function (item, index) {
    fs.stat(path.join(__dirname, item), function (err, stat) {
      // console.log(stat.isfi);
      stat.isFile() ? console.log('file:', item) : console.log('dir:', item);
    })
  });
});

// aicoder.com