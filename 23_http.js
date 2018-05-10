const http = require('http');

// 当发生request请求事件的时候，自动调用回调函数。
http.createServer(function (req, res) {
  // req: 监听数据
  // req.on('data', function(trunk) {
  // });

  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);

  res.write('123');
  res.end();
  // 伪代码：
  // fs.readFile(path, () =>{
  //   fs.readFile(path, ()=> {
  //     fs.readFile(path, () => {
  //       fs.readFile(path, () => {

  //       })
  //     })
  //   })
  // })

  // connect: express  

}).listen(58990, () => {
  console.log('服务器端监听端口58990成功，http://127.0.0.1:58990');
});