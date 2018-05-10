// 1. 安装 express
// npm i -P express

// 2. 引入express模块

const express = require('express');
const path = require('path');

// express 完全兼容connect用法。

let app = express();

// 注册唯一内置的中间件： static
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res, next) {
  console.log(req.param('id'));
  console.log(req.param('name'));
  next();
});
app.get('/api', function (req, res) {
  console.log('/api');
  res.send('124');
  res.end();
});

// 兼容 connect的写法。
// app.use(function (req, res, next) {
//   console.log(1);
//   next();
// });
// app.use(function (req, res, next) {
//   console.log(2);
//   next();
// });
// app.use(function (req, res) {
//   console.log(3);
//   res.write('234');
//   res.end();
// });

app.listen(59977);