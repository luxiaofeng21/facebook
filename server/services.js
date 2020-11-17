const db = require('./db.js')
var nodemailer=require("nodemailer");
// 用户表
exports.user = (req,res)=>{
    // 查询语句
    let sql = 'select * from user'
    db.base(sql,req,(result)=>{
       res.send(result)
    })
}

//推荐
exports.recommended = (req,res)=>{
    // 查询语句
    let sql = 'select * from recommended'
    db.base(sql,req,(result)=>{
       res.send(result)
    })
}

//朋友
exports.friends = (req,res)=>{
    // 查询语句
    let sql = 'select * from friends'
    db.base(sql,req,(result)=>{
       res.send(result)
    })
}

//发送邮件
exports.email=function(req,res){ //调用指定的邮箱给用户发送邮件
    var data=req.body
    //过滤判断
    for(var i in data){
        if(data[i]==''){
            res.send(i+"不能为空");
            return false
        }
    }
    var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
    if(!reg.test(data.email)){
        res.send("邮箱格式不正确，请重新输入！！");
    }

    var code="";
    while(code.length<5){
        code+=Math.floor(Math.random()*10);
    }
    var transporter=nodemailer.createTransport({//邮件传输
        host:"smtp.qq.com", //qq smtp服务器地址
        secureConnection:false, //是否使用安全连接，对https协议的
        port:465, //qq邮件服务所占用的端口
        auth:{
            user:"2584278167@qq.com",//开启SMTP的邮箱，有用发送邮件
            pass:"ntakelairdcfecgi"//授权码
        }
    });
    var mailOption={
        from:"2584278167@qq.com",
        to:req.body.email,//收件人
        subject:"facebook注册校验码",//纯文本
        html:"<h1>欢迎注册facebook，您本次的注册验证码为："+code+"</h1>"
    };
    transporter.sendMail(mailOption,function(error,info){
        if(error){
            res.send(error);
            return console.info(error);
        }else{
            // req.session.user_info=data
            req.session.code=code;
            res.send(code);
        }
    })

}


//创建用户
exports.createUser=function (req,res) {
    console.log(req.session)
    res.send(req.session)
}
