<template>
    <div class="video-list" :class="type">
            <div class="video-item" :class="size" v-for="(item,index) in list" :key="index" @click="geturl">
                    <div class="video-img">
                            <img :src="item.img" alt="">
                            <div class="video-tips">
                                    <div class="lf" v-if="type!='list'" >
                                        <span class="video-button">直播</span>
                                        <span class="video-look"> <i class="el-icon-view"></i>765 </span>
                                    </div>
                                    <div class="rg"> 
                                        <el-popover width="300">
                                            <ul class="msg-ul">
                                                <li v-for="(v,index) in msgul" :key="index">
                                                    <i :class="v.icon"></i>
                                                    <span>
                                                          <div class="msg-ul-title">{{v.title}}</div>
                                                          <div v-if="v.text" class="msg-ul-text">{{v.text}}</div>
                                                    </span>
                                                </li>
                                            </ul>
                                             <i slot="reference" class="el-icon-more"></i> 
                                        </el-popover>
                                       
                                    </div>
                            </div>
                    </div>
                    <div class="video-content">
                        <div class="lf me-img">
                                <img :src="item.me_img" alt="">
                        </div>
                        <div class="rg">
                                <div class="video-title">{{item.title}}</div>
                                <div class="video-name">{{item.name}}</div>
                                <div v-if="type && type!='live'" class="video-name">{{item.date}} {{item.look}}次播放</div>
                                <div class="video-face"  v-if="type!='live'"> 
                                        <i class="icon-count icon1"></i>
                                        <i class="icon-count icon2"></i>
                                        <i class="icon-count icon3"></i>
                                        <i class="icon-count icon4"></i>
                                        <i class="icon-count icon5"></i>
                                        <i class="icon-count icon6"></i>
                                        <i class="icon-count icon7"></i>
                                        <span>{{item.goodsNum}}</span>
                                 </div>
                        </div>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
    props:["list","type","size"],
    data() {
        return {
            msgul: [{
                icon: "el-icon-star-off",
                title: "收藏视频",
                text:"加入视频收藏"
            }, {
                icon: "el-icon-paperclip",
                title: "复制链接"
            }, {
                icon: "el-icon-folder-add",
                title: "关注天天电影",
                text:"关注公共主页，即可在看单中观看主页视频相关帖子也会显示在你的动态消息中"
            }, {
                icon: "el-icon-folder-delete",
                title: "隐藏视频",
                text:"减少显示类似视频"
            }, {
                icon: "el-icon-warning-outline",
                title: "举报视频",
                text:"我认为这个视频有问题"
            }]
        }
    },
    methods:{
        geturl(){
            this.$router.push({name:"tie-item"})
        }
    }
}
</script>

<style scoped>
.video-list{
    display: flex;
    flex-wrap: wrap;
    margin: 10px  -5px;
}
.video-list>div.medium{
    width: 24%;
}
.video-list>div{
    width: 32%;
    margin: 0 5px 10px 5px;
    cursor: pointer;
}

.video-img{
    position: relative;
}

.video-img img{
    width: 100%;
    height: 160px;
    border-radius: 5px;
    object-fit: cover
}
.video-content{
    display: flex;
    margin-top: 10px;
}
.video-content>.rg{
    width: 80%;
    margin-left: 5px;
}
.video-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.video-name{
    color: var(--secondary-text);
    font-weight: 400;
    font-size: .8125rem;
    margin-top: 5px;
}
.video-list>div:hover .video-tips>.rg{display: block;}
.video-tips{
    position: absolute;
    top: 0;
    left:0;
    width: 95%;
    color: #fff;
    margin:10px 5px;
    display: flex;
    justify-content: space-between;
}
.video-tips>.rg{
    display: none;
}
.video-tips>.rg .el-icon-more{
    font-size: 20px;
    cursor: pointer;
}
.video-button{
   padding: 4px 8px;
   border-radius: 4px;
   animation:  cubic-bezier 1s infinite ;
   background: var(--negative);
}
@keyframes cubic-bezier{
    to{
        opacity: 0.7;
    }
    from{
        opacity: 1;
    }
}
.video-look{
    margin-left: 10px;
    
}
.icon-count:first-child{
    margin-left: 0;
}
.icon-count{
        width: 25px;
        height: 25px;
        display: inline-block;
        background-image: url(../assets/08_2WsnTY6B.png);
        background-repeat: no-repeat;
        background-size: auto;
        margin-left:-14px;
        border: 1px solid #fff;
        border-radius: 50%;
        transform: scale(0.7);
    }
.icon-count.icon1{
        background-position: 0px -1514px;
}
.icon-count.icon2{
        background-position:-25px -1514px;
}
.icon-count.icon3{
        background-position:0px -1539px;
}
.icon-count.icon4{
        background-position:-50px -1539px;
}
.icon-count.icon5{
        background-position:0px -1489px;
}
.icon-count.icon6{
        background-position:-50px -1516px;
}
.icon-count.icon7{
        background-position:-50px -1489px;
}
.video-face{
    display: flex;
    align-items: center;
}
.video-face>span{
    color: var(--secondary-text);
    margin-left: 5px;
}
.video-face>span:hover{
    text-decoration: underline;
}
/*直播 */
.video-list.live  .me-img{
    border:2px solid red;
    padding: 3px;
}
/*列表类型*/
.video-list.list>div{
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    position: relative;
}
.video-list.list>div>.video-img{
    width: 30%;
    margin-right: 16px;
    position: static;
}
.video-list.list>div .video-tips{
    justify-content: flex-end;
    color: #000;
}
.video-list.list>div>.video-content{
    width: 70%;
}

.video-list.list>div .video-title{
  font-size: 1.0625rem;
}

</style>