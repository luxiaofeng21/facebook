<template>
<div class="book-w6">
        <div class="book-card">
        <div class="book-title"> Facebook中国区交友群组的更多类似小组 </div>
        <groups-list :list="groups" size="big" num="2"></groups-list>
        <div class="book-icon2">查看更多小组</div>
    </div>
    <post-list :list="list"></post-list>
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
            groups: []
        }
    },
    created(){
        this.$axios.get("/api/getGroups").then(res=>{
            this.groups=res.data
        })
    }
}
</script>
