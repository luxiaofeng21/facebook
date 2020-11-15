<template>
    <div class="app">
        <Head></Head>
        <div class="ConTent">
              <div class="identify">
                        <div class="identifyTitle">输入验证码 </div>
                        <div class="identifyCon"> 
                                <div  class="lf">
                                        <div class="Contitle">请查看手机短信中的 6 位数验证码。</div>
                                       <input type="text" placeholder="请输入验证码" class="Code">
                                </div>
                                <div class="rg">
                                        <div class="identifytitle">验证码已发送到：</div>
                                        <div class="identifytest">+8615218863107</div>
                                </div>
                        </div>
                        <div class="identifyFoor"> 
                               <div class="lf">
                                    <a href="/recover/extended?no_access=1">无法使用手机号/邮箱？</a>
                               </div>
                               <div class="rg">
                                     <div class="Sumbnt">继续</div>
                                     <div class="outbtn">取消</div>
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
        .Code{
            font-size: 27px;
            outline: none;
        }
</style>