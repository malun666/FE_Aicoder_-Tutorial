const net = require('net');

// client : 客户端连接服务器端的对象。
let client = net.connect(58888, '127.0.0.1', () => {
  console.log('连接上了服务器端！')
});

client.on('data', chunk => {
  console.log(chunk.toString('utf8'));
});

client.write('我是老马2222222222222222，aicoder.com from 客户端！');

client.end();