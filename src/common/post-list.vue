<template>
    <div>
         <div v-for="(item,index) in list" :key="index" class="card-item" @click="eindex=index">
                <!--用户头部信息-->
                <div class="card-head">
                        <div class="lf">
                                <img :src="item.me_img" alt="">
                                <div class="card-name">{{item.name}}</div>
                                <div class="card-date">19小时 <i class="date-icon"></i></div>
                        </div>
                         <el-popover
                        placement="bottom"
                        width="300"
                        trigger="click">
                        <ul class="popver-ul">
                           <li v-for="(items,indexs) in popver" :key="indexs">
                                <i :class="items.icon"></i>
                                <div class="rg">
                                        <span class="popver-title">{{items.title}}</span>
                                        <div class="popver-text">{{items.text}}</div>
                                </div>
                            </li>
                        </ul>
                        <div slot="reference" class="hover-icon">
                                <i class="el-icon-more"></i>
                        </div>
                        </el-popover>
                        
                </div>
                <!--发布的内容-->
                <div class="card-what">
                        <div class="card-title">{{item.title}}</div>
                        <div class="card-img"> <img :src="item.img" alt=""></div>
                </div>
                <!--查看点赞人数-->
                <div class="card-count">
                        <div class="lf">
                                <i class="icon-count icon1"></i>
                                <i class="icon-count icon2"></i>
                                <i class="icon-count icon3"></i>
                                <i class="icon-count icon4"></i>
                                <i class="icon-count icon5"></i>
                                <i class="icon-count icon6"></i>
                                <i class="icon-count icon7"></i>
                                <span>{{item.goodsNum}}</span>
                        </div>
                        <div class="rg">
                                <span @click="item.showEmoji=!item.showEmoji">{{item.collection.length}}条评论</span>
                                <span>{{item.share}}条分享</span>
                        </div>
                </div>
                <!--操作-->
                <div class="card-handle">
                        <div class="handle-li" @click="gethandle(1,item)" :class="item.checked?'checked':''">
                                <i class="icon-handle icon1" ></i>
                                <span>点赞</span>
                        </div> 
                        <div class="handle-li" @click="gethandle(2,item,$event)">
                                <i class="icon-handle icon2"></i>
                                <span>评论</span>
                        </div> 
                        <div class="handle-li" @click="gethandle(3,item)">
                                <i class="icon-handle icon3"></i>
                                <span>转发</span>
                        </div> 
                </div>
                <div  v-if="item.showEmoji">
                        <!--评论列表-->
                        <ul class="collect-list" v-if="item.collection.length>0">
                                <li v-for="(items,indexs) in item.collection" :key="indexs" @click="eindex2=indexs">
                                        <div class="me-img">
                                                <img :src="item.img" alt="">
                                        </div>
                                        <div class="rg">
                                                <div class="collent-msg">
                                                        <div class="me-name">{{item.name}}</div>
                                                        <div class="collect-text" v-html="items.title"></div>
                                                        <div class="hover-icon">
                                                                <el-popover>
                                                                        <ul class="popver-ul">
                                                                                <li>编辑</li>
                                                                                <li>删除</li>
                                                                        </ul>
                                                                        <i slot="reference" class="el-icon-more"></i>
                                                                </el-popover>
                                                        </div>
                                                </div>
                                                <div class="collect-img" v-if="items.img">
                                                        <img :src="items.img" alt="">
                                                </div>
                                                <div  class="collect-handle">
                                                        <span>赞</span>·<span @click="items.showEmoji=!items.showEmoji">回复</span>
                                                        <span>{{items.date | showDate}}</span>
                                                </div>
                                        
                                                <li   v-for="(detail,i) in items.collection" :key="i">
                                                        <div class="me-img">
                                                                <img :src="detail.me_img" alt="">
                                                        </div>
                                                        <div class="rg">
                                                                <div class="collent-msg">
                                                                        <div class="me-name">{{detail.name}}</div>
                                                                        <div class="collect-text" v-html="detail.title"></div>
                                                                        <div class="hover-icon">
                                                                                <el-popover>
                                                                                        <ul class="popver-ul">
                                                                                                <li>编辑</li>
                                                                                                <li>删除</li>
                                                                                        </ul>
                                                                                        <i slot="reference" class="el-icon-more"></i>
                                                                                </el-popover>
                                                                        </div>
                                                                </div>
                                                                <div class="collect-img" v-if="detail.img">
                                                                        <img :src="detail.img" alt="">
                                                                </div>
                                                                <div  class="collect-handle">
                                                                        <span>赞</span>·<span @click="items.showEmoji=!items.showEmoji">回复</span>
                                                                        <span>{{detail.date | showDate}}</span>
                                                                </div>
                                                        </div>
                                                        
                                                </li>
                                                <post-button v-if="items.showEmoji" :item="items" @getemoji="getemoji2"></post-button>
                                        </div>
                                </li>
                        </ul>
                        <!--发布评论-->
                        <post-button :item="item" @getemoji="getemoji"></post-button>
                        <div class="cart-ti">按Enter键发布。</div>
                </div>
         </div>   
    </div>
</template>

<script>
function getTimeDistance(time) {
                if (typeof time == "number" || Number(time) == time) {
                        if (String(time).length == 10) {
                        time = Number(time) * 1000
                        } else if (String(time).length == 13) {
                        time = Number(time)
                        } else {
                        console.log("时间格式错误");
                        return time;
                        }
                } else {
                        if (typeof time == "string" && time.split(" ").length == 2 && time.split(/[- : \/]/).length == 6) {
                        time = new Date(time.replace(/\-/g, '/')).getTime();
                        } else {
                        console.log("时间格式错误");
                        return time;
                        }
                }
                
                // 处理之后的time为13位数字格式的毫秒数
                
                var date_now = new Date();
                var date_time = new Date(time);
                var distance = date_now.getTime() - time;
                
                var days = parseInt(distance / (1000 * 60 * 60 * 24));
                if (days == 1) {
                        return "昨天"
                } else if (days > 1 && days < 4) {
                        return days + "天前";
                } else if (days > 3) {
                        // 超过3天的，返回日期，如 2018-12-05
                        // 如果是今年的，就省去年份，返回 12-05
                        var year = date_time.getFullYear();
                        var month = date_time.getMonth() + 1;
                        if (month < 10) {
                        month = "0" + month;
                        }
                        var day = date_time.getDate();
                        if (day < 10) {
                        day = "0" + day;
                        }
                        if (date_now.getFullYear() == year) {
                        return month + "-" + day;
                        } else {
                        return year + "-" + month + "-" + day;
                        }
                }
                
                var hours = parseInt((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                if (hours > 0) {
                        return hours + "小时前";
                }
                
                var minutes = parseInt((distance % (1000 * 60 * 60)) / (1000 * 60));
                if (minutes > 0) {
                        return minutes + "分钟前";
                };
                
                return "刚刚";
};
import postButton from './post-button'
export default {
    components:{
            postButton
    },
    props:["list"],
    data() {
        return {
                eindex2:0,
                eindex:0,
                popver:[
                        {
                                icon:"el-icon-document-checked",
                                title:"收藏帖子",
                                text:"加入收藏",
                        },
                        {
                                icon:"el-icon-edit",
                                title:"编辑帖子",
                        },
                        {
                                icon:"el-icon-edit-outline",
                                title:"编辑分享帖子",
                        },
                        {
                                icon:"el-icon-delete",
                                title:"删除帖子",
                        },
                        {
                                icon:"el-icon-close-notification",
                                title:"关闭帖子通知"
                        },
                        {
                                icon:"el-icon-date",
                                title:"编辑日期"
                        }
                ]
        };
    },
    created() {

    },
    mounted() {

    },
    watch:{
         list(newValue,oldValue){
                console.log("list -> newValue", newValue)
                this.list=newValue
         }   
    },
    filters:{
            showDate(value){
                var date=getTimeDistance(value)
                return date
            }
    },
    methods: {
        getemoji2(item){
            this.list[this.eindex].collection[this.eindex2]=item;  
        },
        getemoji(item){
             this.list[this.eindex]=item;   
        },
        gethandle(state, item,e) {
            //点赞
            if (state == 1) {
                item.checked = !item.checked
                if(item.checked){
                        item.goodsNum+=1;
                }else{
                        item.goodsNum-=1;
                }
            //评论
            }else if(state==2){
                var dom=$(e.currentTarget).parents(".card-item").children().children(".card-collect");
                if(dom.length>0){
                        $("body,html").animate({"scrollTop":dom.offset().top - 800})
                        $(dom).find("input").focus()
                }
                item.showEmoji = true
                
            //转发
            }else{

            }
        },
        
    }
};
</script>

<style scoped >
    .date-icon{
        background-image: url(../assets/xVr-bSpqpnp.png);
        background-size: auto;
        background-repeat: no-repeat;
        display: inline-block;
        height: 12px;
        width: 12px;
        background-position: 0 -721px;
    }

    .icon-count{
        width: 25px;
        height: 25px;
        display: inline-block;
        background-image: url(../assets/08_2WsnTY6B.png);
        background-repeat: no-repeat;
        background-size: auto;
        margin-left:-8px;
        border: 1px solid #fff;
        border-radius: 50%;
    }
    .card-count>.lf{
            display: flex;
            align-items: center;
    }
    .card-count>div>*,.collect-handle>*{
            cursor: pointer;
    }
    .card-count>div>*:hover,.collect-handle>*:hover{
             text-decoration: underline;
    }
    .collect-handle{
            margin: 5px 0;
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
    .icon-handle{
        display: inline-block;
        width: 18px;
        height: 18px; 
        background-image: url(../assets/xVr-bSpqpnp.png);
    }

    .handle-li.checked{
            color: #1877F2;
    }
    .handle-li.checked .icon-handle.icon1{
            background-position: 0 -229px;
    }
    .icon-handle.icon1{
          background-position: 0 -267px;
    }
    .icon-handle.icon2{
          background-position: 0 -151px;
    }
    .icon-handle.icon3{
          background-position: 0 -342px;
    }
    .card-item{
            background: #fff;
            border-radius: 5px;
            margin-bottom: 20px;
    }
    .card-head{
            padding: 12px 16px 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;

    }
    .card-head>.lf{
            width: 90%;
    }
    .card-head img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            float: left;
            margin-right: 10px;
    }
    .card-handle{
            display: flex;
            padding: 2px 0;
            margin: 0 16px;
            border-top: 1px solid #eee;
    }
     .card-handle>div>i{
             margin-right: 5px;
     }
    .card-handle>div{
            width: 33%;
            padding: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
    }
    .card-handle>div:hover{
            background: #eee;
    }
    .card-title{
            padding:0 16px 16px;

    }
    .card-img{
            background: #000;
            text-align: center;
    }
    .card-img>img{
            max-width: 500px;
    }
    .card-count{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:10px 16px 16px;
    }

    /*评论 */
    .collect-list{
            padding:  16px;
            border-top: 1px solid #eee;
    }
    .collect-list li{
            display: flex;
            margin-bottom: 15px;
    }
   
    .collect-list>li>.rg{
            max-width: 85%;
            word-break: break-all;
    }
  
   
   .collent-msg{
            background-color: #F0F2F5;
            padding: 10px;
            border-radius: 5px;
            position: relative;
            display: inline-block;
    }
    .collent-msg>.hover-icon{
           display:none;
           position: absolute;
           right: -35px;
           top: 50%;
           margin-top: -15px;
           width: 30px;
           height: 30px;
           line-height: 30px;
           color: #999;
    }
     .collect-list>li:hover .hover-icon{
            display: block;
    }

   .me-img{
            width: 30px;
            height: 30px;
    }
    .me-img{
            margin-right: 10px;
    }
    .cart-ti{
            margin-top: -5px;
            padding: 0 16px 16px 70px;
    }
    
</style>
