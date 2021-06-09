<template>
    <div>
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
</template>

<script>
import followList from '@/common/follow-list'
import videoList from '@/common/video-list'
export default {
    components: {
        followList,
        videoList
    },
    data() {
        return {
            list: [
                {
                    showEmoji:false,
                    me_img: require("@/assets/me.jpg"),
                    collection:[],
                    collect_title:"",
                    goodsNum: 0,
                    date: "9月18日20:44",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                },
                {
                    showEmoji:false,
                    me_img: require("@/assets/me.jpg"),
                    collection:[],
                    collect_title:"",
                    goodsNum: 0,
                    date: "9月18日20:44",
                    title: "",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                },
                {
                    showEmoji:false,
                    me_img: require("@/assets/me.jpg"),
                    collection:[],
                    collect_title:"",
                    goodsNum: 0,
                    date: "9月18日20:44",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                },
                {
                    showEmoji:false,
                    me_img: require("@/assets/me.jpg"),
                    collection:[],
                    collect_title:"",
                    goodsNum: 0,
                    date: "9月18日20:44",
                    title: "",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                }
            ],
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
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
   
 .pc-banner {
    background: url(../../../assets/bg2.jpg)  no-repeat;
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
		background: url(../../../assets/bg2.jpg) 0 0 repeat;
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
    width: 500px;
    height: 200px;
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

</style>
