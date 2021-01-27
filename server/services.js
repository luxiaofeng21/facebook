const db = require('./db.js');
const express = require('express')
const app = express()
const session=require("express-session");
let nodemailer=require("nodemailer");
let bcrypt=require("bcrypt");
let formidable = require('formidable');
let path=require("path");
let codes={};
let user_info={};
let imgUrl='http://127.0.0.1:75/images/';

app.use(session({
    secret:'Keyboard cat',
    resave:false,
    saveUninitialized: true,
    cookie: {secure:false,maxAge:1000 * 600}, /*第一个参数：只有在https才可以访问cookie；第二个参数：设置cookie的过期时间*/
    rolling:true/*只要页面在操作就不会过期，无操作5秒后过期*/
  }));

// 用户表
exports.user = (req,res)=>{
    // 查询语句
    let sql = 'select * from user'
    db.base(sql,'',(result)=>{
       res.send(result)
    })
}

//推荐帖子
exports.recommended = (req,res)=>{
    // 查询语句
    let sql = 'select * from recommended order by  date desc'
    db.base(sql,req,(result)=>{
        for(let item of result){
            db.base(`select * from user where id=?`,item.uid,(v)=>{
                   item.user_info=v[0]
            })
         }
         setTimeout(()=>{
           res.send(result) 
         },100)
    })
}
//获取指定帖子
exports.getrecommended = (req,res)=>{
    // 查询语句
    let sql = 'select * from recommended where ?'
    db.base(sql,[req.query],(result)=>{
        for(let item of result){
            db.base(`select * from user where id=?`,item.uid,(v)=>{
                   item.user_info=v[0]
            })
         }
         setTimeout(()=>{
           res.send(result) 
         },100)
    })
}
//创建帖子
exports.createRecommended = (req,res)=>{
    req.body.date=new Date();
    // 查询语句
    let sql = 'insert into recommended set ?'
    db.base(sql,[req.body],(result)=>{
        res.send({code:1,msg:"发布成功"})
    })
   
}

//发表评论
exports.createComments=(req,res)=>{
    req.body.date=new Date();
    var sql="insert into comments set?"
        db.base(sql,[req.body],(result)=>{
            db.base(`update recommended set remark=remark+1 where id=?`,req.body.aid)
            res.send({msg:"创建成功",code:1})
    })
}

//评论集合
exports.comments=(req,res)=>{
      var sql="select * from comments where ?"  
      db.base(sql,[req.query],async (result)=>{
          for(let item of result){
             db.base(`select * from user where id=?`,item.uid,(v)=>{
                    item.user_info=v[0]
             })
          }
          setTimeout(()=>{
            res.send(result) 
          },100)
      })
}

//朋友
exports.friends = (req,res)=>{
    // 查询语句
    let sql = 'select * from user'
    db.base(sql,"",(result)=>{
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
                    from:"facebook <2584278167@qq.com>", //发件人
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
            user_info.me_img=imgUrl+"tou.png"
            user_info.user_name=user_info.surname+user_info.name;
            user_info.date=new Date();
            const password=await bcrypt.hash(user_info.password,10)
            user_info.password=password
            for(let i in user_info){
                if(user_info[i]=='' || !user_info){
                    res.send({code:-1,msg:"请完善用户信息"})
                }
            }
            if(codes != req.body.code){
                   res.send({code:-1,msg:"验证码错误"})
            }else{
                   let sql=`insert into user set ?`
                   db.base(sql,[user_info],(result)=>{
                           res.send({code:1,msg:"注册成功"})
                   })
            }
       
        
       
}

//用户登录
exports.getlogin=function(req,res){
        var data=req.body;
        for(let i in data){
            if(data[i]==''){
                return  res.send({code:-1,msg:"请填写完整用户信息"})
            }
        }
        let sql=`select * from user where email=?`
        db.base(sql,data.email,async (result)=>{
            if(result.length<=0){
                return  res.send({code:-1,msg:"邮箱未注册，请先注册邮箱！！！"})
            }
            var result=result[0]
            if(await bcrypt.compare(data.password,result.password)){
                user_info=result
                var token=result.id+"."+result.user_name;
                req.session.user_info=result;
                req.session.token=token;
                res.send({code:1,msg:"登录成功",data:result,token:token})
            }else{
                res.send({code:-1,msg:"账户邮箱或者密码错误！！！"})
            }
        })
   
}

//用户退出 
exports.outlogin=function(req,res){
    user_info={};
    res.send({code:1,msg:"退出成功"})
}

//获取用户信息
exports.getuserInfo=function(req,res){
    var sql="select * from user where ?"
    db.base(sql,[req.query],(result)=>{
        if(result.length>0){
            res.send({code:1,data:result[0]})
        }else{
            res.send({code:-1,msg:"用户信息获取失败"})
        }
    })
    
    
}

//修改用户信息
exports.setUser=function(req,res){
    user_info=req.body
    let sql="update user set ? where id="+req.body.id
    db.base(sql,[req.body],(result)=>{
                res.send({code:1,msg:"修改成功",data:user_info})
    })
}

//验证token
exports.getoken=function(req,res){
    //获取token
    const token=req.headers.authorization
    const id=token.split(".")[0];
    const username=token.split(".")[1]
    //判断用户是否存在
    db.base(`select id from where id=${id} and username=${username}`,(result)=>{
            if(result.length<=0){
                res.status(422).send("用户错误")
            }else{
                res.send("Admin")
            }
    })
}

//创建主页
exports.createPage=function(req,res){
        req.body.img=imgUrl+"gao.png"
        req.body.date=new Date();
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

//获取指定公共主页
exports.getpublicPage=function(req,res){
       let id=req.query.id
       if(!id) return res.status(500)
        let sql="select * from publicpage where id=?";
        db.base(sql,id,(result)=>{
                res.send({code:1,data:result[0]})
        })
}

//创建小组
exports.createGroups=function(req,res){
    req.body.img=imgUrl+"groupBg.png"
    req.body.date=new Date();
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

//获取指定小组
exports.groupsDetail=function(req,res){
    let sql="select * from groups where ?"
    db.base(sql,[req.query],(result)=>{
        res.send({code:1,data:result[0]})
    })
}

//小组帖子
exports.groupRecommended=function(req,res){
    
    // 查询语句
    let sql = 'select * from grouprecommended where ?'
    db.base(sql,[req.query],(result)=>{
        for(let item of result){
            db.base(`select * from user where id=?`,item.uid,(v)=>{
                   item.user_info=v[0]
            })
         }
         setTimeout(()=>{
           res.send(result) 
         },100)
    })
}

//创建小组帖子
exports.groupcreateRecommended=function(req,res){
    req.body.date=new Date();
    // 查询语句
    let sql = 'insert into grouprecommended set ?'
    db.base(sql,[req.body],(result)=>{
        res.send({code:1,msg:"发布成功"})
    })
}

//小组发表评论
exports.groupcreateComments=(req,res)=>{
    var sql="insert into groupcomments set?"
    db.base(sql,[req.body],(result)=>{
            db.base(`update grouprecommended set remark=remark+1 where id=?`,req.body.aid)
            res.send({msg:"创建成功",code:1})
    })
}
//小组评论集合
exports.groupComments=(req,res)=>{
    var sql="select * from groupcomments where aid=?"  
    db.base(sql,req.query,async (result)=>{
        for(let item of result){
           db.base(`select * from user where id=?`,item.uid,(v)=>{
                  item.user_info=v[0]
           })
        }
        setTimeout(()=>{
          res.send(result) 
        },100)
    })
}

//上传图片
exports.uploadImg=function(req,res){
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; // 编码
    // 保留扩展名
    form.keepExtensions = true;
    //文件存储路径 最后要注意加 '/' 否则会被存在public下
    form.uploadDir = path.join(__dirname, './images/');
    // 解析 formData 数据
    form.parse(req, (err, fields ,files) => {
      if(err) return next(err)
      let imgPath = files.file.path;
      let imgName =imgUrl+ files.file.path.split("\\").pop();
      // 返回路径和文件名
      res.send({code: 1, data: { name: imgName, path: imgPath ,date:files.file.lastModifiedDate,size:files.file.size}});
    })
  
}



