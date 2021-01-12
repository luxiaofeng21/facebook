<template>
    <div class="book-w10">
        <el-card class="el-bottom">
            <div class="book-title2 el-bottom">往期活动</div>
            <div class="book-null" v-if="activity.length<=0">
                <img src="../../assets/null5.svg" alt="">
                <div>由你组织的往期活动会显示在这里。</div>
            </div>
            <activity-list :list="activity" ></activity-list>
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
                    type:"线上活动"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"嘿嘿嘿",
                    date:"12月31日周四 · 15:00",
                    type:"线上活动"
                },
                {
                    img:require("@/assets/groupBg.png"),
                    title:"嘿嘿嘿",
                    date:"12月31日周四 · 15:00",
                    type:"线上活动"
                },
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

</style>
