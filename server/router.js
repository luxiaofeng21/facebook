const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 用户列表
router.get('/user',services.user)
//帖子
router.get('/recommended',services.recommended)
router.get('/getrecommended',services.getrecommended)
router.post("/createRecommended",services.createRecommended)
//好友
router.get('/friends',services.friends)
//注册登录
router.post("/email",services.email)
router.post("/createUser",services.createUser)
router.post("/login",services.getlogin)
router.get("/getuserInfo",services.getuserInfo)
router.post("/setUser",services.setUser)
router.post("/outlogin",services.outlogin)
router.get("/getoken",services.getoken)
router.get("/comments",services.comments)
router.post("/createComments",services.createComments)
//公共主页
router.post("/createPage",services.createPage)      //创建
router.get("/publicPage",services.publicPage)       //所有
router.get("/getpublicPage",services.getpublicPage) //指定
//小组
router.post("/createGroups",services.createGroups)
router.get("/getGroups",services.getGroups)
router.get("/groupsDetail",services.groupsDetail)
router.post("/groupcreateRecommended",services.groupcreateRecommended) //帖子集合
router.get("/groupRecommended",services.groupRecommended) //获取帖子
router.post("/groupcreateComments",services.groupcreateComments)      //创建评论
router.get("/groupComments",services.groupComments)  //评论集合

//上传图片
router.post("/uploadImg",services.uploadImg)
module.exports = router