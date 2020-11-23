const db = require('./db.js')
let nodemailer=require("nodemailer");
let bcrypt=require("bcrypt");
let codes={};
let user_info={};
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
    let data=req.body
    //过滤判断
    for(let i in data){
        if(data[i]==''){
            res.send(i+"不能为空");
            return false
        }
    }
    //验证邮箱
    let reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
    if(!reg.test(data.email)){
        res.send("邮箱格式不正确，请重新输入！！");
    }
    //判断是否存在用户
    let  sql=`select email from user where email='${data.email}'`
    db.base(sql,"",(result)=>{
                //已经存在邮箱
           if(result.length>0){
                res.send({code:-1,msg:"邮箱已存在，请重新注册！！！"})
                return false
           }else{
                //发送邮箱
                let code="";
                while(code.length<6){
                    code+=Math.floor(Math.random()*10);
                }
                let transporter=nodemailer.createTransport({//邮件传输
                    host:"smtp.qq.com", //qq smtp服务器地址
                    secureConnection:false, //是否使用安全连接，对https协议的
                    port:465, //qq邮件服务所占用的端口
                    auth:{
                        user:"2584278167@qq.com",//开启SMTP的邮箱，有用发送邮件
                        pass:"ntakelairdcfecgi"//授权码
                    }
                });
                let mailOption={
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
                        // req.session.code=code;
                        user_info=data;
                        codes=code;
                        res.send(code);
                    }
                })
           }
    })
    
}


//注册用户
exports.createUser=async function (req,res) {
        //  const salt=await bcrypt.genSalt(10)
        try{
            const password=bcrypt.hash(user_info.password,10)
            console.log("🚀 ~ file: services.js ~ line 98 ~ password", password)
            for(let i in user_info){
                if(user_info[i]=='' || !user_info){
                    res.send({code:-1,msg:"请完善用户信息"})
                }
            }
            if(codes != req.body.code){
                   res.send({code:-1,msg:"验证码错误"})
            }else{
                   let sql=`insert into user values('${user_info.xing}','${user_info.ming}','${user_info.email}','${password}','${user_info.year}','${user_info.month}','${user_info.day}','${user_info.sex}')`
                   db.base(sql,"",(result)=>{
                           res.send({code:1,msg:"注册成功"})
                   })
            }
        }
        catch{
            res.redirect(500,'/createUser')
        }
        
       
}


//用户登录
exports.getlogin= async function(req,res){
    var data=req.body;
    for(let i in data){
        if(data[i]==''){
            return  res.send({code:-1,msg:"请填写完整用户信息"})
        }
    }
    let sql=`select * from user where email='${data.email}'`
    db.base(sql, (result)=>{
        if( bcrypt.compare(data.password,result.password)){
            res.send({code:1,msg:"登录成功"})
        }else{
            res.send({code:-1,msg:"账户邮箱或者密码错误！！！"})
        }
    })
}


//创建主页
exports.createPage=function(req,res){
        var data=req.body;
        let sql="insert into publicPage set ?";
        db.base(sql,[data],(err,result)=>{
                res.send({code:1,msg:"创建成功"})
        })

}

//获取公共主页
exports.publicPage=function(req,res){
    let sql="select * from publicpage";
    db.base(sql,(err,result)=>{
            res.send({code:1,data:result})
    })
    
}


//创建小组
exports.createGroups=function(req,res){
    let sql="insert into groups set ?"
    db.base(sql,[req.body],(err,result)=>{
        res.send({code:1,msg:"创建成功"})
    })
}

//获取小组列表
exports.getGroups=function(req,res){
    let sql="select * from groups"
    db.base(sql,(err,result)=>{
        res.send({code:1,data:result})
    })
}