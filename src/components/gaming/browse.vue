<template>
<div aria-label="游戏" role="main" class="rq0escxv pfnyh3mw l9j0dhe7 j83agx80 dp1hu0rb" style="max-width: 100%; min-width: calc(100% - 360px); width: calc(-999900% + 8999100px);">
    <div class="j83agx80 cbu4d94t buofh1pr dp1hu0rb hpfvmrgz l9j0dhe7 du4w35lb">
        <div class="d2edcug0 a8c37x1j">
            <div class="j83agx80 cbu4d94t">
                <div class="k4urcfbm w0hvl6rk">
                    <div class="">
                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip owycx6da btwxx1t3 ihqw7lf3 cddn0xzi">
                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u marjyy4e hpfvmrgz rj1gh0hx buofh1pr hv4rvrfc dati1w0a">
                                <div class="k4urcfbm">
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd aovydwv3 lhclo0ds btwxx1t3 discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 p01isnhg rj1gh0hx dtpq6qua p8fzw8mz pcp91wgn ihqw7lf3 ipjc6fyt">
                                            <div class="tr9rh885">
                                                <div class="j83agx80 cbu4d94t q9se6cdp p984guvr">
                                                    <div class="px9k8yfb hk9dxy2p">
                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 qg6bub1s fe6kdd0r mau55g9w c8b282yb iv3no6db o0t2es00 f530mmz5 hnhda86s oo9gr5id hzawbc8m" dir="auto">
                                                            浏览
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 p01isnhg p8fzw8mz pcp91wgn ihqw7lf3 ipjc6fyt mg4g778l buofh1pr bkfpd7mw">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" cddn0xzi dsne8k7f">
                            <div class="marjyy4e" style="margin:auto">
                                  <el-tabs v-model="tabs">
                                    <el-tab-pane label="游戏" name="1"></el-tab-pane>
                                    <el-tab-pane label="直播" name="2"></el-tab-pane>
                                    <el-tab-pane label="主播" name="3"></el-tab-pane>
                                </el-tabs>
                            </div>
                    </div>
                </div>
                <div class="dp1hu0rb d2edcug0 taijpn5t j83agx80 gs1a9yip">
                    <div class="k4urcfbm dp1hu0rb d2edcug0 cbu4d94t j83agx80 bp9cbjyn" role="main">
                        <div class="rq0escxv marjyy4e discj3wi k4urcfbm">
                              <video-list type="live" v-if="tabs==2" :list="list"></video-list>
                              <follow-list :list="gaming" v-else size="medium"></follow-list>
                              
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
    components:{
        videoList,
        followList
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
            tabs:"1",
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

</style>
