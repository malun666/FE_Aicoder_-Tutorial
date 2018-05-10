const connect = require('connect');

// connect :本身是一个函数。返回一个 中间件的控制器。
let app = connect();

// 注册中间件
app.use(function (req, res, next) {
  console.log('1');
  next();
});

// 中间件可以注册多个
app.use((req, res, next) => {
  console.log(2);
  next();
});


app.use('/api', function (req, res, next) {
  console.log(4);
  next();
});

app.use((req, res) => {
  res.write('sss');
  console.log(3);
  res.end();
});

// 错误处理的中间件
app.use((err, req, res, next) => {});


app.listen(58899, () => {
  console.log("http://127.0.0.1:58899");
});