// 创建express服务器
const express = require('express')
var session = require('express-session');
const app = express()
// 注册解析 表单数据的 body-parser
const bodyParser = require('body-parser')
// 将请求响应设置content-type设置为application/json
const router = require('./router.js')
app.use(
    session({
    secret:'keyboard cat',//服务端生成申明可随意写
    resave:true,//强制保存session即使他没有什么变化
    saveUninitialized:true,//强制将来初始化的session存储
    cookie:{//session是基于cookie的，所以可以在配置session的时候配置cookie|
        maxAge:1000*60,//设置过期时间
        secure:false//true的话表示只有https协议才能访问cookie
    }
}))
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
// post
app.use(bodyParser.urlencoded({extended:false}))
// 处理json格式的参数
app.use(bodyParser.json())
// 配置路由
app.use(router)
// 服务器已经启动
app.listen('8080',function(){
    console.log('running...')
})