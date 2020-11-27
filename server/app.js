// 创建express服务器
const express = require('express')
const path=require("path")
const app = express()
const session=require("express-session")
// 注册解析 表单数据的 body-parser
const bodyParser = require('body-parser')
// 将请求响应设置content-type设置为application/json
const router = require('./router.js')
app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
      maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
  }));
app.use('/*', function (req, res, next) {
	// 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
});
app.use("/",express.static(path.resolve(__dirname,"../dist")))
// post
app.use(bodyParser.urlencoded({extended:false}))
// 处理json格式的参数
app.use(bodyParser.json())
// 配置路由
app.use(router)
// 服务器已经启动
app.listen('1212',function(){
    console.log('running...')
})