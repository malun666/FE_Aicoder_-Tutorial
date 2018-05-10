/*
 * @Author: malun
 * @Date: 2018-05-08 17:57:04
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-10 12:40:01
 */

// 用http模块创建一个web服务器端
const http = require('http');
const path = require('path');
const fs = require('fs');

// 创建一个http的服务器端对象。
let server = http.createServer();

// 监听客户端的请求数据和发送响应报文。
server.on('request', (req, res) => {
  // req: 请求报文的封装。 console.log(req.headers); console.log(req.url);
  // console.log(req.method); // 打印请求的方法get post

  let conType = 'plain/text';

  // url: 全路径
  let fileName = path.join(__dirname, 'dist/', req.url);

  switch (path.extname(fileName)) {
    case '.png':
      conType = 'iamge/png';
      break;
    case '.jpeg':
    case '.jpg':
      conType = 'image/jpeg';
      break;
    case '.gif':
      conType = 'image/gif';
      break
    case '.html':
      conType = 'text/html';
      break;
    case '.css':
      conType = 'text/css';
      break;
    default:
      conType = 'text/plain';
  }

  // 设置响应文件的类型和状态码
  res.writeHeader(200, {
    'Content-Type': conType
  });
  // c:\temp\index.html
  let reader = fs.createReadStream(fileName);
  reader.pipe(res);

  // res: 响应的封装。 res.write('hi, from aicoder.com '); res.end();
});

// 让服务器端对象开始监听
server.listen(58889, () => {
  console.log('服务器端开始监听端口：58889， 可以用浏览器打开：http://127.0.0.1:58889');
});