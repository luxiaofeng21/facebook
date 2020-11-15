const db = require('./db.js')
exports.start = (req,res)=>{
}
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