<template>
    <div class="app">
        <Head></Head>
        <div class="ConTent">
              <div class="identify">
                        <div class="identifyTitle">无法使用手机 </div>
                        <div class="identifyCon"> 
                                <div  class="lf">
                                        <div class="ineligbleTitle">请尝试通过你的常用设备或常用位置登录。若你从已识别的设备或位置登录，我们可能验证出你是帐户所有者，并帮助你获取访问权限。</div>
                                       <a href="/help/login">详细了解如何访问你的 Facebook 帐户</a>
                                </div>
                        </div>
                        <div class="identifyFoor"> 
                               <div class="lf">
                               </div>
                               <div class="rg">
                                     <div class="Sumbnt">完成</div>
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
 .ineligbleTitle{
     margin-bottom: 10px;
 }
</style>