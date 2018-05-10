const net = require('net');

// 创建服务器端对象
let server = net.createServer();

server.on('connection', client => {
  // client就是指向客户端的一个对象。可以通过它给客户端发送数据。可写流，可以写入数据，也是一个可读流
  // 所以可以进行读取数据。

  // 读取数据
  client.on('data', chunk => {
    console.log(chunk.toString('utf8'));
  });

  // 网客户端写入数据
  // es6语法中，增加了用反引号做多行字符定义的语法。
  client.write(`HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>这是来自服务器端的内容</h1>
</body>
</html>
`);
  client.end();

});

// 开始监听端口
server.listen(58888, () => {
  console.log('服务器开始监听58888端口.....');
});