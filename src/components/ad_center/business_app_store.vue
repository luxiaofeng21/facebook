<template>
    <div>
        <div class="book-firend" >
            <div class="book-tou katn9ffz">
                    <div class="tou-bg" :style="{backgroundImage:`url(${accout.img})`}"> 
                        <div class="content">
                                <div class="book-icon"> <i class="el-icon-s-shop"></i> </div>
                                <div class="friend-title" v-if="accout">{{accout.title}}</div>
                                <div class="tou-text">{{accout.text}}</div>
                        </div>
                    </div>
            </div>
            <div class="about ">
                <div class="katn9ffz">
                        <div class="el-margin">
                            <div class="flex">
                                <span class="book-title2">预约</span> 
                                <span class="link">查看全部</span>
                            </div>
                            <div class="book-text">方便用户预约。</div>
                            <swiper class="swiper" :options="swiperOption">
                                <swiper-slide v-for="(item,index) in list" :key="index">
                                    <div class="tui-item" >
                                            <div class="tui-img">
                                                <img :src="item.img" alt="">
                                            </div>
                                            <div class="content">
                                                    <div class="title">{{item.title}}</div>
                                                    <el-button class="el-block" size="medium" type="info"  @click="getban(item)">绑定</el-button>
                                            </div>
                                    </div>
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                        <div class="el-margin">
                                <div class="flex">
                                    <span class="book-title2">预订</span> 
                                    <span class="link">查看全部</span>
                                </div>
                                <div class="book-text">让用户能够轻松预订。</div>
                                <swiper class="swiper" :options="swiperOption">
                                    <swiper-slide v-for="(item,index) in list2" :key="index">
                                        <div class="tui-item" >
                                                <div class="tui-img">
                                                    <img :src="item.img" alt="">
                                                </div>
                                                <div class="content">
                                                        <div class="title">{{item.title}}</div>
                                                        <el-button class="el-block" size="medium" type="info" @click="getban(item)">绑定</el-button>
                                                </div>
                                        </div>
                                    </swiper-slide>
                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                    <div class="swiper-button-next" slot="button-next"></div>
                                </swiper>
                        </div>
                         <div class="el-margin">
                                <div class="flex">
                                    <span class="book-title2">电子商务</span> 
                                    <span class="link">查看全部</span>
                                </div>
                                <div class="book-text">通过公共主页、个人主页和广告在 Facebook 和 Instagram 销售商品。</div>
                                <swiper class="swiper" :options="swiperOption">
                                    <swiper-slide v-for="(item,index) in list3" :key="index">
                                        <div class="tui-item" >
                                                <div class="tui-img">
                                                    <img :src="item.img" alt="">
                                                </div>
                                                <div class="content">
                                                        <div class="title">{{item.title}}</div>
                                                        <el-button class="el-block" size="medium" type="info" @click="getban(item)">绑定</el-button>
                                                </div>
                                        </div>
                                    </swiper-slide>
                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                    <div class="swiper-button-next" slot="button-next"></div>
                                </swiper>
                        </div>
                </div>
            </div>
        </div>
        <el-dialog :title="'Connect to'+info.title" :visible.sync="dialogVisible" width="600px">
            <div class="connect">
                    <img :src="info.img" alt="">
                    <div class="title">把{{info.title}}绑定到 Facebook</div>
                    <div class="text">我将授予哪些权限？ <i class="el-icon-info"></i> </div>
            </div>
            <ul class="popver-ul">
                <li v-for="(item,index) in popver" :key="index">
                     <i :class="item.icon"></i>
                     <div class="rg">
                         <div class="poover-title">{{item.title}}</div>
                         <div class="poover-text">{{item.text}}</div>
                     </div>
                </li>
            </ul>
            <span slot="footer" >
                <el-button>取消</el-button>
                <el-button type="primary">继续</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:{},
            dialogVisible:false,
            popver:[
                {
                    icon:"el-icon-goods",
                    title:"在 Facebook 展示你的品牌业务",
                    text:"更新你的公共主页和个人主页行动号召按钮，鼓励更多用户访问你的网站。"
                },
                {
                    icon:"el-icon-user",
                    title:"寻找新客户",
                    text:"通过创建广告，激励更多用户进行预约或预订。"
                },
                {
                    icon:"el-icon-data-line",
                    title:"获取有价值的成效分析",
                    text:"通过用 Facebook Pixel 像素代码和转化 API 获取的数据，了解用户在你网站上采取的操作并衡量你的广告成效。"
                },
            ],
            list3:[
                {
                    img:require("@/assets/page/21.png"),
                    title:"Facebook For Magento"
                },
                {
                    img:require("@/assets/page/22.png"),
                    title:"OpenCart"
                },
                {
                    img:require("@/assets/page/23.png"),
                    title:"TokoTalk"
                },
                {
                    img:require("@/assets/page/24.png"),
                    title:"WooCommerce Integration"
                },
            ],
            list2:[
                {
                    img:require("@/assets/page/13.png"),
                    title:"Chope - Instant Reservations!"
                },
                 {
                    img:require("@/assets/page/14.png"),
                    title:"Gurunavi"
                },
                 {
                    img:require("@/assets/page/15.png"),
                    title:"Quandoo"
                },
                 {
                    img:require("@/assets/page/16.png"),
                    title:"Resy"
                },
                 {
                    img:require("@/assets/page/17.png"),
                    title:"SEVENROOMS"
                },
                 {
                    img:require("@/assets/page/18.png"),
                    title:"TableRequest"
                },
                 {
                    img:require("@/assets/page/19.gif"),
                    title:"TheFork"
                },
                 {
                    img:require("@/assets/page/20.png"),
                    title:"Tock"
                }

            ],
            list:[
                {
                    img:require("@/assets/page/01.png"),
                    title:"Appointments for Square"
                },
                 {
                    img:require("@/assets/page/02.png"),
                    title:"Appointy"
                },
                 {
                     img:require("@/assets/page/03.png"),
                    title:"Fresha"
                },
                 {
                    img:require("@/assets/page/04.png"),
                    title:"Genbook BookNow! Application"
                },
                 {
                    img:require("@/assets/page/05.png"),
                    title:"MyTime"
                },
                {
                    img:require("@/assets/page/06.png"),
                    title:"Salon Iris"
                },
                {
                    img:require("@/assets/page/07.png"),
                    title:"Shore Booking"
                },
                {
                    img:require("@/assets/page/08.png"),
                    title:"SimplyBook.me"
                },
                {
                    img:require("@/assets/page/09.png"),
                    title:"Squire"
                },
                {
                    img:require("@/assets/page/10.png"),
                    title:"StyleSeat"
                },
                {
                    img:require("@/assets/page/11.png"),
                    title:"Timely"
                },
                {
                    img:require("@/assets/page/12.png"),
                    title:"Treatwell Connect"
                },
            ],
            swiperOption: {
                slidesPerGroup: 4,
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            accout:{
                title:"业务应用商店",
                img:require("@/assets/page/bg.png"),
                text:"绑定任一款应用，让业务提供的服务更完善。",
            }
        }
    },
    methods:{
        getban(item){
            this.info=item;
            this.dialogVisible=true;
        }
    }
}
</script>

<style scoped>
@import '../../css/friend.css';
.tou-bg{
    background-size: 100% 100%;
}
.book-text{
    line-height: 25px;
}
.tui-item {
    display: inline-block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
     position: relative;
    text-align: center;
    background-color: #fff;
    margin-top: 15px;
   
}
.tui-item .content{
    padding: 10px;
}
.tui-item .title{
    font-weight: bold;
    font-size: 16px;
    margin: 10px 0;
    word-break:break-all;
    min-height: 40px;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.tui-item .text{
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
    line-height: 20px;
}
 .tui-img{
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    margin-top: 20px;
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

.connect{
    text-align: center;
    margin: 20px 0;
}
.connect>.title{
    font-size: 20px;
    font-weight: bold;
    color: #000;
}
</style>