const express = require('express')
const router = express.Router()
const services = require('./services.js')
// router.get('/',services.start)
// 用户列表
router.get('/user',services.user)
router.get('/recommended',services.recommended)
// 注册功能
module.exports = router