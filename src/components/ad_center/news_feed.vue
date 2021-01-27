<template>
<div >
     <div class="book-w6">
         <tie-list></tie-list>
         <post-list :list="list"></post-list>
         <el-card>
             <div class="book-title2 el-bottom">为你推荐</div>
             
             <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in tui" :key="index">
                    <div class="tui-item" >
                            <div class="tui-img">
                                <img :src="item.img" alt="">
                                <div class="book-icon small"> <i class="el-icon-close"></i> </div>
                            </div>
                            <div class="content">
                                    <a href=""><div class="title">{{item.title}}</div></a>
                                    <div class="text">{{item.text}}</div>
                                    <el-button class="el-block" size="medium" type="primary">关注</el-button>
                            </div>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
         </el-card>
         
     </div>
     <el-dialog :visible.sync="dialogVisible" append-to-body :show-close="false" width="500px">
        <div class="dialog-item" v-if="step==0">
                <div class="dialog-img">
                    <img src="../../assets/page.png" alt="">
                </div>
                <div class="visible-title">新功能：第一个公共主页的专属动态消息</div>
                <div class="visible-text">在专属空间中以公共主页身份互动，就像在用个人主页一样。</div>
        </div>
        <div class="dialog-item" v-else-if="step==1">
                <div class="dialog-img">
                        <img src="../../assets/page2.png" alt="">
                </div>
                <div class="visible-title">选择你想关注的对象</div>
                <div class="visible-text">关注你感兴趣的公共主页和公众人物即可查看更有用的内容。</div>
        </div>
        <div class="dialog-item" v-else-if="step==2">
                <div class="dialog-img">
                        <img src="../../assets/page3.png" alt="">
                </div>
                <div class="visible-title">从其他公共主页和公众人物获取灵感</div>
                <div class="visible-text">我们会向你展示相关公共主页和公众人物的帖子和动态更新，为你的公共主页提供灵感。</div>
        </div>
        <span slot="footer" class="book-flex"> 
            <el-button type="info" v-if="step>0" @click="step-=1">返回</el-button>
            <el-button type="primary" @click="next">继续</el-button>
        </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" title="推荐关注的主页和公众人物" append-to-body width="500px">
        <div class="el-bottom">我的第一个公共户主页所关注公共主页和公众人物的更新将显示在其动态消息中。</div>
        <ul class="collect-ul">
            <li v-for="(item,index) in pulic" :key="index">
                <div class="lf">
                    <el-avatar :src="item.me_img"></el-avatar>
                    <div class="content">
                        <div class="title">{{item.user_name}} <i class="el-icon-success"></i> </div>
                        <div class="text">歌手/乐队</div>
                    </div>
                </div>
                <el-button type="primary" size="medium">关注</el-button>
            </li>
        </ul>
    </el-dialog>
</div>
</template>


<script>
import tieList from '@/common/tie-list'
import postList from '@/common/post-list'
export default {
    components: {
      postList,
      tieList  
    },
    data(){
        return{
            swiperOption: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 5,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            tui:[
                {
                    img:require("@/assets/groupBg.png"),
                    title:"滇西小哥 Dianxi Xiaoge",
                    text:"厨房/烹饪"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"滇西小哥 Dianxi Xiaoge",
                    text:"厨房/烹饪"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"滇西小哥 Dianxi Xiaoge",
                    text:"厨房/烹饪"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"滇西小哥 Dianxi Xiaoge",
                    text:"厨房/烹饪"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"滇西小哥 Dianxi Xiaoge",
                    text:"厨房/烹饪"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"滇西小哥 Dianxi Xiaoge",
                    text:"厨房/烹饪"
                }
            ],
            list:[
                {
                    user_info:this.$store.state.user_info,
                    content:"2112332"
                }
            ],
            pulic:[],
            step:0,
            dialogVisible2:false,
            dialogVisible:false,
        }
    },
    created(){
        if(this.$store.state.tui){
                this.dialogVisible=true
        }
        this.$axios.get("/api/friends").then(res=>{
            this.pulic=res
        })
    },
    methods:{
        next(){
            if(this.step<2){
                this.step++
            }else{
                this.$store.commit("settui",false)
                this.step=0;
                this.dialogVisible=false
                this.dialogVisible2=true
            }
        }
    }
}
</script>

<style scoped>
.collect-ul>li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
}
.collect-ul>li>.lf{
    display: flex;
    align-items: center;
    flex: 1;
}
.collect-ul>li .content{
    margin-left: 10px;
}
.collect-ul>li .title{
    font-size: 16px;
    color: #000;
    line-height: 20px;
}
.collect-ul>li .title i{
    color: #1877F2;
}

.tui-item {
    display: inline-block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px #ccc;
    border: 1px solid #eee;
     position: relative;
}
.tui-item .title{
    font-weight: bold;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #000;
}
.tui-item .text{
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
    line-height: 20px;
}
.tui-item .content{
    padding: 10px;
}
 .tui-img{
    height: 150px;
   
}
.tui-img>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.tui-img>.book-icon{
    position: absolute;
    top: 5%;
    right: -5%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
}


</style>