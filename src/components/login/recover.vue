<template>
    <div class="app">
        <Head></Head>
        <div class="ConTent">
              <div class="identify">
                        <div class="identifyTitle">重置密码 </div>
                        <div class="identifyCon"> 
                                <div  class="lf">
                                        <div class="Contitle">请选择获取密码重置验证码的方式。</div>
                                        <div class="ConCell">
                                                <input type="radio">
                                                <div class="Cong">
                                                        <i class="Congi"></i>
                                                        <div class="Congtext">
                                                                短信验证<br>
                                                                <span>+8615218863107</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="rg">
                                        <img class="_s0 _rw img" src="@/assets/logo.png" alt="">
                                        <div class="identifytitle">Xiaofeng Lu</div>
                                        <div class="identifytext">Facebook 用户</div>
                                </div>
                        </div>
                        <div class="identifyFoor"> 
                               <div class="lf">
                                    <a href="/recover/extended?no_access=1">无法使用手机号/邮箱？</a>
                               </div>
                               <div class="rg">
                                     <div class="Sumbnt">继续</div>
                                     <div class="outbtn">（不是你？）</div>
                               </div>
                        </div>
              </div>
        </div>
        <Foor></Foor>
    </div>
</template>
<script>
import  '@/css/login.css'
import Head from '@/common/Lhead.vue'
import Foor from '@/common/Lfoor.vue'
export default {
	components:{
		Head,
		Foor
	},
}
</script>

<style  scoped>
 
</style>