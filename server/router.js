const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 用户列表
router.get('/user',services.user)
//帖子
router.get('/recommended',services.recommended)
router.post("/createRecommended",services.createRecommended)
//好友
router.get('/friends',services.friends)
//注册登录
router.post("/email",services.email)
router.post("/createUser",services.createUser)
router.post("/login",services.getlogin)
router.get("/getuserInfo",services.getuserInfo)
//公共主页
router.post("/createPage",services.createPage)
router.get("/publicPage",services.publicPage)
//小组
router.post("/createGroups",services.createGroups)
router.get("/getGroups",services.getGroups)
router.get("/getpublicPage",services.getpublicPage)
//上传图片
router.post("/uploadImg",services.uploadImg)
module.exports = router