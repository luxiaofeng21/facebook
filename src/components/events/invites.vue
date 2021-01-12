<template>
    <div class="book-w10">
        <el-card class="el-bottom">
            <div class="book-title2">待回复的邀请</div>
            <div class="book-null">
                <img src="../../assets/null5.svg" alt="">
                <div class="book-title">活动邀请显示在这里</div>
            </div>
        </el-card>
        <el-card>
                <div class="book-title2 el-bottom">待回复的邀请</div>
                <div class="book-null" v-if="activity.length<=0">
                    <img src="../../assets/null5.svg" alt="">
                    <div class="book-title">待回复的邀请会显示在这里</div>
                </div>
                
                <activity-list :list="activity" type="collect"></activity-list>
        </el-card>
    </div>
</template>

<script>
import  activityList from '@/common/activity-list'
export default {
    components:{activityList},
    data() {
        return {
            activity:[
                {
                    img:require("@/assets/activity.jpg"),
                    title:"嘿嘿嘿",
                    date:"12月31日周四 · 15:00",
                    type:"线上活动",
                    user_info:this.$store.state.user_info
                }
            ]
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
.invites{
    width: 900px;
    margin: 10px auto;
}
</style>
