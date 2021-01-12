<template>
    <div >
         <el-card class="el-bottom">
             <div class="recent">
                 <img src="../../assets/tell.png" alt="">
                 <div class="rg" style="flex:1">
                    <div class="book-title">近期广告状态</div>    
                    <div class="book-text">查看你近期互动过的广告，轻松跟进你关注的广告</div>  
                </div>    
             </div>
         </el-card>
         <el-card class="el-bottom">
             <el-tabs v-model="tabs">
                 <el-tab-pane label="近期" name="1"></el-tab-pane>
                 <el-tab-pane label="收藏时间" name="2"></el-tab-pane>
             </el-tabs>
         </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs:"1"
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
    .recent{
        display: flex;
    }
    .recent>img{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
</style>
