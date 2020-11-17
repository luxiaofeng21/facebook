<template>
<div class="app">

    <Head></Head>
    <div class="ConTent">
        <div class="identify">
            <div class="identifyTitle">找回帐户 </div>
            <div class="identifyCon">
                <div class="lf">
                    <div class="identifyText">请输入邮箱或手机号来找回帐户。</div>
                    <input type="text" name="tell" placeholder="手机号">
                </div>
            </div>
            <div class="identifyFoor">
                <div class="lf"></div>
                <div class="rg">
                    <a href="#/login/recover" class="Sumbnt">搜索</a>
                    <a href="#/login/newuser" class="outbtn">取消</a>
                </div>
            </div>
        </div>
    </div>
    <Foor></Foor>
</div>
</template>

<script>
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
.identifyCon {
    padding: 1rem 5rem;
}

.identifyCon input {
    width: 255px;
    margin-top: 5px;
    border: 1px solid #ccd0d5;
    padding: 5px;
}
</style>
