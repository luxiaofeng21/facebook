<template>
<div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz dp1hu0rb">
    <div class="j83agx80 cbu4d94t buofh1pr dp1hu0rb hpfvmrgz l9j0dhe7 du4w35lb">
        <div class="dp1hu0rb d2edcug0 taijpn5t j83agx80 gs1a9yip">
            <div class="k4urcfbm dp1hu0rb d2edcug0 cbu4d94t j83agx80 bp9cbjyn" role="main">
                <div class="d2edcug0 h3gjbzrl oh7imozk abvwweq7 ejjq64ki">
                    <div role="feed">
                        <div class="f10w8fjw ocgrx2df tmqn73lw">
                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t e5nlhep0 aodizinl">
                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 hv4rvrfc dati1w0a">
                                        <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                            <div class="qzhwtbm6 knvmm38d">
                                                <h2 class="m9osqain jq4qci2q lrazzd5p lzcic4wl oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b a3bd9o3v hzawbc8m" dir="auto" tabindex="-1">
                                                    <div class="l9j0dhe7 stjgntxs ni8dbmo4" style="-moz-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;">
                                                        近期动态
                                                    </div>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="book-card">
                            <div class="book-title"> Facebook中国区交友群组的更多类似小组 </div>
                            <groups-list :list="groups" :size="'big'"></groups-list>
                            <div class="book-icon2">查看更多小组</div>
                        </div>
                        <post-list :list="list"></post-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import postList from '@/common/post-list'
import groupsList from '@/common/groups-list'
export default {
    components:{
        groupsList,
        postList
    },
    data() {
        return {
            list: [{
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
                    title: "",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                }
            ],
            groups: [{
                    img: require("@/assets/bg.jpg"),
                    title: "免费vpn翻墙技术交流 ",
                    num: "31万",
                    pian: 70
                },
                {
                    img: require("@/assets/bg.jpg"),
                    title: "免费vpn翻墙技术交流 ",
                    num: "31万",
                    pian: 70
                },
            ]
        }
    },
}
</script>
