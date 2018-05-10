# connect 中间件模块

由于 nodejs 中的特殊的回调处理机制，处理非常复杂的流程的时候，很容易造成大量的回调堆积，形成回调地狱。`connect`模块就是用来解决这个问题的一个库。

## 安装 connect

`connect`的[官网](https://github.com/senchalabs/connect)

安装

```shell
# 安装 connect模块
$ npm i -P connect
```

## connect 的 API

`connect`模块代码非常少，本质上就是一个回调的数组，循环执行数组中的任务。所有应用此中间件模块的程序都可以做成类似流水线的中间件处理流程。

```js
// 引入模块
const connect = require('connect');

// 创建connect模块的app对象
var app = connect();

// 注册中间件
app.use(function(req, res, next) {
  // 中间件代码处理的逻辑
  // ....

  // 调用next代表指向下个中间件。
  next();
});

// 注册路由控制的中间件，配合箭头函数
app.use('/api', (req, res, next) => {
  // 中间件处理的逻辑
});

// 错误处理：如果带4个参数，表示处理异常的中间件。
app.use(function onerror(err, req, res, next) {
  // an error occurred!
});
```

官网的综合例子

```js
var connect = require('connect');
var http = require('http');

var app = connect();

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// store session state in browser cookie
var cookieSession = require('cookie-session');
app.use(
  cookieSession({
    keys: ['secret1', 'secret2']
  })
);

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// respond to all requests
app.use(function(req, res) {
  res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);
```
