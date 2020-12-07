<template>
<div>
        <div class="user">
            <div class="user_title">登录 Facebook</div>
            <el-input @keyup.13.native="getlogin" placeholder="邮箱或手机号" v-model="email"></el-input>
            <el-input @keyup.13.native="getlogin" type="password"  placeholder="密码" v-model="password"></el-input>
            <el-button type="primary" @click="getlogin" >登录</el-button>
            <div class="userLin">
                <a class="lin-url" href="#/login/identify">忘记密码？</a>
                <div class="lin-text"><span>或</span></div>
                <el-button type="success" @click="dialogVisible=true" >新建账户</el-button>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible" title="注册" width="600px">
            <register></register>
        </el-dialog>
</div>
</template>

<script>
import register from './register'
export default {
    components: {
        register
    },
    data() {
        return {
            email:"2584278167@qq.com",
            password:"123456",
            dialogVisible: false
        }
    },
    methods: {
         getlogin(){
            var that=this;
            var email=this.email;
            var password=this.password;
            if(email ==''){
                this.$message.error("请输入邮箱，邮箱不能为空")
                return false
            }
            var reg = new RegExp("^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
            if(!reg.test(email)){
                this.$message.error("邮箱格式不正确，请重新输入！！");
                return false
            }
            if(password == ''){
                  this.$message.error("请输入密码")
                return false
            }
            this.$axios.post(this.$url+"/login",{email,password}).then(res=>{
                if(res.data.code==1){
                    this.$message.success(res.data.msg)
                    setTimeout(res=>{
                        that.$router.push({name:"index"})
                    },1000)
                }else{
                    this.$message.error(res.data.msg)
                }
            })
        }
    },
}
</script>

<style scoped>

.user {
    background: #fff;
    width: 350px;
    margin: auto;
    padding: 22px;
    text-align: center;
    box-shadow: 0 0 10px #ddd;
    border-radius: 10px;
}
.user>*{
    width: 100%;
}
.user>input {
    border: 1px solid #dddfe2;
    color: #1d2129;
    height: 22px;
    line-height: 16px;
    padding: 5px 8px;
    width: 95%;
    font-size: 15px;
    margin-bottom: 10px;
}

.user_title {
    padding: 18px 0;
    color: #1c1e21;
    font-size: 18px;
}

.userBtn {
    background-color: #4267b2;
    border-color: #4267b2;
    padding: 10px 25px;
    color: #fff;
    display: inline-block;
}

.userLin {
    font-size: 14px;
    margin-top: 15px;
}

.lin-url {
    width: 100%;
    display: block;
}

.lin-text {
    overflow: hidden;
}

.lin-text>span {
    position: relative;
    display: inline-block;
    padding: 10px;
}

.lin-text>span:before {
    right: 100%;
}

.lin-text>span:after {
    left: 100%;
}

.lin-text>span:before,
.lin-text>span:after {
    background: #ccd0d5;
    content: "";
    height: 1px;
    position: absolute;
    top: 50%;
    width: 9999px;
}

.lin-new {
    background-color: #42b72a;
    border-color: #42b72a;
    color: #fff;
    padding: 10px 20px;
    display: inline-block;
    font-size: 15px;
    cursor: pointer;
}
.el-input{
    margin-bottom: 15px;
}
</style>
