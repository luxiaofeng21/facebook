<template>
<div class="app">

    <Head></Head>
    <div class="ConTent">
        <div class="identify">
            <div class="identifyTitle">设置新密码 </div>
            <div class="identifyCon">
                <div class="lf">
                    <div class="Passwordtitle">请创建至少包含 6 个字符的新密码。强密码需由字母、数字和标点符号组合而成。</div>
                    <div class="PasswordCell">
                        <span>新密码</span>
                        <div class="PasswordInput"> <input type="text"> <span>隐藏</span> </div>
                        <div class="PasswordW">?</div>
                    </div>
                </div>
            </div>
            <div class="identifyFoor">
                <div class="lf"></div>
                <div class="rg">
                    <a href="#/index" class="Sumbnt">继续</a>
                    <a href="#/index" class="outbtn">跳过</a>
                </div>
            </div>
        </div>
    </div>
    <Foor></Foor>
</div>
</template>

<script>
import '@/css/login.css'
import Head from '@/common/Lhead.vue'
import Foor from '@/common/Lfoor.vue'
export default {
    components: {
        Head,
        Foor
    },
}
</script>

<style scoped>
.Passwordtitle {
    font-size: 13px;
    margin-bottom: 10px;
}

.PasswordCell {
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: #4b4f56;
}

.PasswordInput {
    margin: 0 10px;
    border: 1px solid #eee;
}

.PasswordInput>input {
    border: 0;
    outline: none;
}

.PasswordInput>span,
.PasswordW {
    border-color: #ccd0d5;
    background-color: #f5f6f7;
    height: 22px;
    line-height: 20px;
    display: inline-block;
    padding: 0 5px;
    min-width: 20px;
    text-align: center;
}
</style>
