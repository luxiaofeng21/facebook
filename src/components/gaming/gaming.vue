<template>
<div class="app">
    <div class="rq0escxv l9j0dhe7 du4w35lb">
        <div class="du4w35lb l9j0dhe7 cbu4d94t j83agx80">
            <div class="j83agx80 cbu4d94t jgljxmt5 l9j0dhe7 be9z9djy">
                <!--$-->
                <!--/$-->
                <div class="j83agx80 cbu4d94t d6urw2fd dp1hu0rb l9j0dhe7 du4w35lb" data-pagelet="page">
                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 jifvfom9 gs1a9yip owycx6da btwxx1t3 dp1hu0rb ka73uehy">
                        <div aria-label="游戏" role="navigation" class="hybvsw6c rq0escxv l9j0dhe7 tkr6xdv7 j83agx80 cbu4d94t d2edcug0 pfnyh3mw dp1hu0rb rek2kq2y o36gj0jk">
                            <div class="flex menu-head">
                                <div class="tou-title">游戏</div>
                                <div class="book-icon"> <i class="el-icon-s-tools"></i> </div>
                            </div>
                            <cart-list :list="menu" :active="mactive" @getcart="getmenu"></cart-list>
                            <div class="menu-button">
                                    <div class="book-icon2">
                                        <i class="el-icon-video-camera-solid"></i>开始直播
                                    </div>
                                    <div class="book-icon2">
                                        <i class="el-icon-trophy-1"></i>创建排位赛
                                    </div>
                            </div>
                            <div class="menu-button">
                                    <div class="book-title">近期观看</div>
                                    <cart-list :list="last"></cart-list>
                            </div>
                            <div class="menu-button">
                                    <div class="flex">
                                        <div class="book-title">推荐</div>
                                        <span class="link">查看全部 </span>
                                    </div>
                                    <cart-list :list="recommended">
                                        <div slot="right" class="look"> <i class="el-icon-view"></i> <span>12</span> </div>
                                    </cart-list>
                            </div>
                        </div>
                        <div v-if="state=='0'" aria-label="游戏" role="main" class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz dp1hu0rb">
                            <div class="j83agx80 cbu4d94t buofh1pr dp1hu0rb hpfvmrgz l9j0dhe7 du4w35lb">
                                <div class="d2edcug0 a8c37x1j">
                                    <div class="ni8dbmo4 cbu4d94t j83agx80 bp9cbjyn">
                                        <div class="k4urcfbm">
                                            <div class="tqsryivl datstx6m ni8dbmo4 stjgntxs l9j0dhe7 k4urcfbm">
                                                
                                                <swiper class="swiper" :options="swiperOption">
                                                    <swiper-slide v-for="(item,index) in gaming" :key="index"> 
                                                            <img :src="item.img" alt="">
                                                    </swiper-slide>
                                                    <div class="swiper-pagination" slot="pagination"></div>
                                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                                    <div class="swiper-button-next" slot="button-next"></div>
                                                </swiper>
                                            </div>
                                        </div>
                                        <div class="dp1hu0rb d2edcug0 taijpn5t j83agx80 gs1a9yip">
                                            <div class="k4urcfbm dp1hu0rb d2edcug0 cbu4d94t j83agx80 bp9cbjyn" role="main">
                                                <div class="tfmdmf7r hswkjpue dryvtkm5 j8075uax k4urcfbm fjf4s8hc tu1s4ah4 f7vcsfb0 cxgpxx05 np71obb7 rq0escxv">
                                                    <div class="k4urcfbm">
                                                        <div class="live-item">
                                                            <div class="flex">
                                                                <span class="tou-title">推荐直播</span>
                                                                <span class="link">查看全部</span>
                                                            </div>
                                                            <video-list type="live" size="medium" :list="list"></video-list>
                                                        </div>
                                                        <div class="live-item">
                                                            <div class="flex">
                                                                <span class="tou-title"> 推荐热门游戏</span>
                                                                <span class="link">查看全部</span>
                                                            </div>
                                                            <follow-list :list="gaming"></follow-list>
                                                        </div>
                                                         <div class="live-item">
                                                            <div class="flex">
                                                                <span class="tou-title">热门片段</span>
                                                                <span class="link">查看全部</span>
                                                            </div>
                                                            <video-list type="live" size="medium" :list="list"></video-list>
                                                        </div>
                                                        <div class="live-item">
                                                            <div class="flex">
                                                                <span class="tou-title"> 人气大涨的新游戏</span>
                                                                <span class="link">查看全部</span>
                                                            </div>
                                                            <follow-list :list="gaming"></follow-list>
                                                        </div>
                                                        <div class="live-item">
                                                            <div class="flex">
                                                                <span class="tou-title"> 推荐主播</span>
                                                                <span class="link">查看全部</span>
                                                            </div>
                                                            <follow-list :list="gaming"></follow-list>
                                                        </div>
                                                        <div class="live-item">
                                                            <div class="flex">
                                                                <span class="tou-title"> 推荐游戏</span>
                                                                <span class="link">查看全部</span>
                                                            </div>
                                                            <follow-list :list="gaming"></follow-list>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <following v-else-if="state=='00'"></following>
                        <browse v-else-if="state=='01'"></browse>
                        <recent v-else-if="state=='02'"></recent>
                        <youxi v-else-if="state=='1'"></youxi>
                        <youxiweb v-else-if="state=='10'"></youxiweb>
                        <paiwei v-else-if="state=='2'"></paiwei>
                    </div>
                    <div>
                        <div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import cartList from '@/common/cart-list'
import following from './following'
import recent from './recent'
import browse from './browse'
import youxi from './youxi'
import youxiweb from './youxiweb'
import paiwei from './paiwei'
import Youxiweb from './youxiweb.vue'
import videoList from '@/common/video-list'
import followList from '@/common/follow-list'
export default {
    components: {
        followList,
        videoList,
        youxi,
        paiwei,
        youxiweb,
        browse,
        recent,
        following,
        cartList
    },
    mounted(){
       
    },
    methods: {
        getmenu(i, item) {
            if (item.active > -1) {
                this.state = i + item.active.toString();
            } else {
                this.state = i.toString()
            }
            this.mactive = i
        }
    },
    data() {
        return {
            swiperOption: {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            recommended:[ //推荐
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                }
            ],
            last:[//最近
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                }
            ],
            list:[
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0
				},
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0
				},
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0
				},
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0	
				},
            ],
            gaming:[
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },

                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },

                {
                    img:require("@/assets/groupBg.png"),
                    title:"PUBG Mobile",
                    look:"123"
                },
            ],
            state: "0",
            mactive: 0,
            menu: [{
                    icon: "video-icon",
                    title: "视频",
                    active: -1,
                    down: true,
                    children: [{
                            icon: "gaming-icon gz-icon",
                            title: "已关注"
                        },
                        {
                            icon: "gaming-icon ll-icon",
                            title: "浏览"
                        },
                        {
                            icon: "gaming-icon gk-icon",
                            title: "近期观看"
                        },
                    ]
                },
                {
                    down: false,
                    active: -1,
                    icon: "gaming-icon icon1",
                    title: "玩游戏",
                    children: [{
                        icon: "el-icon-data-line",
                        title: "网页游戏"
                    }, ]
                },
                {
                    icon: "gaming-icon icon2",
                    title: "排位赛"
                }
            ]
        }
    },
}
</script>
<style scoped>
    
    .pc-banner {
    background: url(../../assets/bg2.jpg)  no-repeat;
    background-size: 100% 100%;
	width: 100%;
	float: left;
}

@media screen and (max-width: 668px) {
	.pc-banner {
		background-size: auto 100%;
	}
}

.swiper-container {
	width: 100%;
	margin: 35px 0;
}

@media screen and (max-width: 668px) {
	.swiper-container {
		margin: 20px 0 15px;
	}
}

.swiper-slide {
	-webkit-transition: transform 1.0s;
	-moz-transition: transform 1.0s;
	-ms-transition: transform 1.0s;
	-o-transition: transform 1.0s;
	-webkit-transform: scale(0.7);
	transform: scale(0.7);
}

@media screen and (max-width: 668px) {
	.swiper-slide {
		-webkit-transform: scale(0.97);
		transform: scale(0.97);
	}
}

.swiper-slide-active,.swiper-slide-duplicate-active {
	-webkit-transform: scale(1);
	transform: scale(1);
}

@media screen and (max-width: 668px) {
	.swiper-slide-active,.swiper-slide-duplicate-active {
		-webkit-transform: scale(0.97);
		transform: scale(0.97);
	}
}

.none-effect {
	-webkit-transition: none;
	-moz-transition: none;
	-ms-transition: none;
	-o-transition: none;
}

.swiper-slide a {
	background: #fff;
	padding:10px;
	display: block;
	border-radius: 14px;
}

@media screen and (min-width: 668px) {
	.swiper-slide a:after {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		box-sizing: border-box;
		border: 10px solid #fff;
		content: "";
		width: 100%;
		height: 100%;
		background: url(../../assets/bg2.jpg) 0 0 repeat;
		border-radius: 20px;
	}
}

.swiper-slide-active a:after {
	background: none;
}

@media screen and (max-width: 668px) {
	.swiper-slide a {
		padding: 5px;
		border-radius: 7px;
	}
}

.swiper-slide img {
    width: 100%;
    height: 250px;
    object-fit: cover;
	border-radius: 14px;
	display: block;
}

@media screen and (max-width: 668px) {
	.swiper-slide img {
		border-radius: 7px;
	}
}

.swiper-pagination {
	position: relative;
	margin-bottom: 30px;
}

.swiper-pagination-bullet {
	background: #00a0e9;
	margin-left: 4px;
	margin-right: 4px;
	width: 17px;
	height: 17px;
	opacity: 1;
	margin-bottom: 4px;
}

.swiper-pagination-bullet-active {
	width: 13px;
	height: 13px;
	background: #FFF;
	border: 6px solid #00a0e9;
	margin-bottom: 0;
}

@media screen and (max-width: 668px) {
	
	.swiper-pagination {
		position: relative;
		margin-bottom: 20px;
	}

	.swiper-pagination-bullet {
		background: #00a0e9;
		margin-left: 2px;
		margin-right: 2px;
		width: 8px;
		height: 8px;
		margin-bottom: 2px;
	}

	.swiper-pagination-bullet-active {
		width: 6px;
		height: 6px;
		background: #FFF;
		border: 3px solid #00a0e9;
		margin-bottom: 0;
	}
}

.button {
	width: 1000px;
	margin: 0 auto;
	bottom: 43px;
	position: relative;
}

@media screen and (max-width: 668px) {
	.button {
		width: 70%;
		bottom: 22px;
	}
}

.button div:hover {
	background-color: #2f4798;
}

@media screen and (max-width: 668px) {
	.button div {
		width: 28px;
		height: 28px;
	}
}	
.live-item{
    margin-top: 20px;
}
.menu-button{
    margin-top: 10px;
    padding: 15px;
    border-top: 1px solid #ddd;
}
.menu-button>*{
    margin-bottom: 10px;
}
.menu-button>*:last-child{
    margin: 0;
}
.look{
    display: flex;
    align-items: center;
    color: #000;
    font-size: 15px;
}
.look>i{
    font-size: 18px;
    font-weight: bold;
}
.look>span{
    font-weight: normal;
    margin-left: 5px;
}
</style>