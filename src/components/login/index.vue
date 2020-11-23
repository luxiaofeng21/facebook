<template>
<div class="app">

    <Head></Head>
    <div class="ConTent">
        <div class="list">
            <div class="lf">
                <div class="lately" v-if="lately">
                    <div class="register_title">近期登录</div>
                    <div class="register_text">请点击头像或添加帐户。</div>
                    <div class="userCon">
                        <ul class="userUl">
                            <a href="#/login/newuser">
                                <li class="adduser">
                                    <div class="Addimg"> <i class="el-icon-circle-plus-outline"></i></div>
                                    <div class="Addtitle">添加账户</div>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <div class="Content_title">联系你我，分享生活，尽在 Facebook</div>
                    <img class="img" src="/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="" width="537" height="195">
                </div>
            </div>
            <!--登录-->
            <login></login>
        </div>
    </div>
    <Foor></Foor>
</div>
</template>

<script>
import login from './login'
import Head from '@/common/Lhead.vue'
import Foor from '@/common/Lfoor.vue'
export default {
    components: {
        Head,
        Foor,
        login
    },
    data() {
        return {

            lately: true
        }
    },
}
</script>

<style scoped>
/*主体内容 */
.Content_title {
    color: #0e385f;
    font-size: 21px;
    font-weight: 600;
}

.ConTent {
    background: linear-gradient(white, #D3D8E8);
    padding: 4rem 0;
}

.list {
    display: flex;
    margin: 0 auto;
    width: 62rem;
    justify-content: space-between;
}

.register_title {
    margin-bottom: 5px;
    font-size: 37px;
    font-weight: 600;
}

.register_text {
    color: #1d2129;
    font-size: 20px;
}

.registerCon input {
    border: 1px solid #bdc7d8;
    font-size: 19px;
    border-radius: 5px;
    padding: 8px 10px;
    width: 100%;
}

.registerCon>div {
    margin-top: 10px;
}

.regCell input {
    width: 95%;
}

.registerDate {
    margin-top: 15px;
    margin-bottom: 5px;
}

.registerDate select {
    font-size: 14px;
    height: 30px;
    padding: 5px;
}

.resText {
    font-size: 0.8rem;
    color: #777;
    width: 300px;
    line-height: 18px;
}

.resTitle {
    color: #90949c;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
}

.registerSex {
    font-size: 18px;
}

.resBtn {
    display: inline-block;
    min-width: 194px;
    padding: 7px 20px;
    text-align: center;
    background: linear-gradient(#67ae55, #578843);
    background-color: #69a74e;
    box-shadow: inset 0 1px 1px #a4e388;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid;
    border-color: #3b6e22 #3b6e22 #2c5115;
}

.resMsg {
    border-top: 1px solid #dddfe2;
    color: #666;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    padding-top: 15px;
}

.regName {
    display: flex;
}

.regName>*:first-child {
    margin-right: 10px;
}

.userUl {
    margin-top: 15px;
}

.userUl li {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    margin: 0 5px;
    overflow: hidden;
    border-radius: 0.5rem;
}

.userUl li>i {
    position: absolute;
    top: 1%;
    left: 1%;
    color: #fff;
    font-size: 20px;
}

.Addimg {
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    cursor: pointer;
}

.Addimg i {
    background-image: url(/rsrc.php/v3/yQ/r/kSx_I-KB15T.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    width: 42px;
    height: 42px;
    background-position: 0 -132px;
}

.Addtitle {
    background: #eee;
    padding: 0.5rem 0;
    color: #385898;
}

.userTitle {
    padding: 0.5rem 0;
    background: #fff;
}

.el-icon-circle-plus-outline {
    color: #fff;
    background: #385898;
    font-size: 44px;
    border-radius: 100%;
    padding: 2px;
    padding-left: 0.5px;
    text-align: center;
}
</style>
