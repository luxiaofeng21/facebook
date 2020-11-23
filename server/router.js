const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 用户列表
router.get('/user',services.user)
router.get('/recommended',services.recommended)
router.get('/friends',services.friends)
router.post("/email",services.email)
router.post("/createUser",services.createUser)
router.post("/login",services.getlogin)
router.post("/createPage",services.createPage)
router.get("/publicPage",services.publicPage)
// 注册功能
module.exports = router