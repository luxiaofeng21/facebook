<template>
<div class="app">

    <Head></Head>
    <div class="ConTent">
        <div class="identify">
            <div class="identifyTitle">输入验证码 </div>
            <div class="identifyCon">
                <div class="lf">
                    <div v-if="state=='tell'" class="Contitle">请查看手机短信中的 6 位数验证码。</div>
                    <div v-else class="Contitle">请查看邮件中的 6 位数验证码。</div>
                    <el-input v-model="code" maxlength="6" placeholder="请输入验证码" class="Code"></el-input>
                </div>
                <div class="rg">
                    <div class="identifytitle">验证码已发送到：</div>
                    <div class="identifytest">{{title}}</div>
                </div>
            </div>
            <div class="identifyFoor">
                <div class="lf">
                    <a href="#/login/ineligible">无法使用手机号/邮箱？</a>
                </div>
                <div class="rg">
                    <div @click="getbtn" class="Sumbnt">继续</div>
                    <a href="#/login" class="outbtn">取消</a>
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
    data() {
        return {
            state:"",
            code: "",
            title:""
        }
    },
    methods:{
        getbtn(){
            if(this.code.length!=6){
                this.$message.error("请输入6位数验证码")
                return false
            }
            this.$axios.post("/createUser",{code:this.code}).then(res=>{
                
                if(res.code==1){
                    this.$message.success(res.msg);
                    setTimeout(()=>{
                        this.$router.push({name:"login"})
                    },1000)
                }else{
                    this.$message.error(res.msg);
                }
            })
            
        }
    },
    created(){
        this.title=this.$route.query.title;
        this.state=this.$route.query.state;
    },
}
</script>

<style scoped>
.Code {
    font-size: 27px;
    outline: none;
}
</style>
