<template>
<div class="app">

    <Head></Head>
    <div class="ConTent">
        <div class="user">
            <div class="user_title">登录 Facebook</div>
            <input type="text" placeholder="邮箱或手机号" name="tell">
            <input type="text" placeholder="密码" name="password">
            <a href="#/index" class="userBtn">登录</a>
            <div class="userLin">
                <a class="lin-url" href="#/login/identify">忘记帐户？</a>
                <div class="lin-text"><span>或</span></div>
                <div @click="dialogVisible=true" class="lin-new">新建账户</div>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible" title="注册" width="600px">
            <register :me="me"></register>
        </el-dialog>
    </div>
    <Foor></Foor>

</div>
</template>

<script>
import Head from '@/common/Lhead.vue'
import Foor from '@/common/Lfoor.vue'
import register from './register'
export default {
    components: {
        register,
        Head,
        Foor
    },
    data() {
        return {
            me: {
                xing: "",
                ming: "",
                email: "",
                parssword: "",
                year: "",
                month: "",
                day: "",
                sex: "女"
            },
            dialogVisible: false
        }
    }
}
</script>

<style scoped>
.ConTent {
    background: #e9ebee;
    padding: 4rem 0;
}

.user {
    background: #fff;
    width: 300px;
    margin: auto;
    padding: 22px;
    text-align: center;
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
</style>
