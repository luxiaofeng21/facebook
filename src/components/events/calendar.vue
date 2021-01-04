<template>
    <div>
        <div class="calendar">
            <div class="lf">
                <el-card v-for="(item,index) in list" :key="index" class="el-bottom">
                    <div class="book-title2 el-bottom">{{item.month}}</div>
                    <div class="book-title">{{item.week}}</div>
                    <div  class="el-bottom">
                        <strong>{{item.day}}</strong>
                    </div>
                    
                    <div class="content">
                        <div class="lf">{{item.time}}</div>
                        <div class="rg">
                            <img :src="item.img" alt="">
                            <div class="test">
                                <div class="book-title2">{{item.title}}</div>
                                <div class="book-text">{{item.type}}</div>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="rg">
                <div class="book-title">下载并加入你的日历</div>
                <div class="book-text">你可以将 Facebook 活动下载到 Microsoft Outlook、Google 日历或 Apple 日历。或者，你可以复制下载链接并添加到你的设备，那么你对 Facebook 所做的任何更改将自动更新到设备的日历中。</div>
                <el-button type="primary" plain>加入日历</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    month:"2020年12月",
                    day:"12月31日",
                    time:"15:00",
                    type:"线上活动",
                    img:require("@/assets/groupBg.png"),
                    week:"周四",
                    title:"嘿嘿嘿"
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
.calendar{
    display: flex;
}
.calendar>.lf{
    width: 60%;
    margin-right: 10px;
}
.calendar>.rg{
    width: 40%;
}

.calendar>.lf .content{
    display: flex;
}
.calendar>.lf .content img{
    width: 100px;
    height: 50px;
}
.calendar>.lf .content>.rg{
    display: flex;
}
</style>
