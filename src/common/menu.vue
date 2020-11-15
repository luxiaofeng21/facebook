<template>
<div>
    <div v-for="(item,index) in menu" :key="index" :class="findex==index?'findex':''" v-on:click="geturl(index,item)">
        <div style="padding-left: 8px; padding-right: 8px;" v-if="item.title!=''">
            <a class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi" role="link" tabindex="0">
                <div class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr">
                    <div class="nqmvxvec j83agx80 cbu4d94t bi6gxh9e tvfksri0 aov4n071 l9j0dhe7">
                        <div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv bp9cbjyn rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv pq6dq46d taijpn5t l9j0dhe7 tdjehn4e tv7at329 thwo4zme"><i :class="item.icon"></i></div>
                    </div>
                    <div class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb bp9cbjyn btwxx1t3 l9j0dhe7">
                        <div class="gs1a9yip ow4ym5g4 auili1gw rq0escxv j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz rz4wbd8a a8nywdso l9j0dhe7 du4w35lb rj1gh0hx f10w8fjw pybr56ya">
                            <div class="">
                                <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                    <div class="qzhwtbm6 knvmm38d"><span class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m" dir="auto"><span class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql jq4qci2q a3bd9o3v lrazzd5p oo9gr5id">{{item.title}}</span></span></div>
                                    <div class="qzhwtbm6 knvmm38d"><span dir="auto" class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh pipptul6 hzawbc8m">{{item.text}}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3" data-visualcompletion="ignore"></div>
            </a>
        </div>
        <div v-else class="ge"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Array,
            default: function () {
                return []
            }
        },
        findex: 0
    },
    data() {
        return {
            // menu: [{
            //         title: "首页",
            //         icon: "el-icon-s-home"
            //     },
            //     {
            //         title: "支付记录",
            //         icon: "el-icon-s-order"
            //     },
            //     {
            //         title: "定期付款",
            //         icon: "el-icon-refresh"
            //     },
            //     {
            //         title: "设置",
            //         icon: "el-icon-s-tools"
            //     },
            //     {
            //         title: "帮助",
            //         icon: "el-icon-question"
            //     },
            //     {
            //         title: "条款和隐私",
            //         icon: "el-icon-s-custom"
            //     },
            // ],
        }
    },
    methods: {
        geturl(i, e) {
            this.$emit("getchild", i, e)
        }
    },
}
</script>

<style scoped>
.findex .pw54ja7n {
    background: #EAF3FF;
}

.findex [class^="el-icon-"] {
    color: #fff;
}

.findex .tdjehn4e {
    background: var(--base-blue);
}

[class*=" el-icon-"],
[class^="el-icon-"] {
    font-size: 22px;
    color: #000;
}

.ge {
    background: #ccc;
    border: none;
    display: list-item;
    height: 1px;
    margin: 10px 0;
}

.ge::marker {
    display: none;
    color: transparent;
}
</style>
