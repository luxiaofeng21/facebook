<template>
    <div class="el-w10">
        <div class="tou-title"> 热门商品推荐 </div>
        <post-list :list="list"  ></post-list>
    </div>
</template>

<script>

import postList from '@/common/post-list.vue'
export default {
     components: {
        postList
    },
    data() {
        return {
            list:[
                {
                    share:0,
                    goodsNum:0,
                    showEmoji:false,
                    collection:[],
                    me_img:require("@/assets/me.jpg"),
                    name:"枫果果",
                    title:"😘54..+ [ 128 - 131 ] 静默是老板Official ChanneL",
                    video: require("@/assets/video.mp4"),
                }
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
