<template>
    <div class="ecyo15nh">
        <div class="calendar el-margin">
            <div class="lf">
                <el-card v-for="(item,index) in list" :key="index" class="el-bottom">
                    <div class="book-title2 el-bottom">{{item.month}}</div>
                    <div class="text">
                         <strong >{{item.week}}</strong>
                         <div class="book-title">{{item.day}}</div>    
                    </div>
                    
                    <div class="content">
                        <div class="lf">
                             <div class="el-red">{{item.time}}</div>{{item.time}}
                        </div>
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
                <el-card>
                    <div class="book-title">下载并加入你的日历</div>
                    <div class="book-text el-margin">你可以将 Facebook 活动下载到 Microsoft Outlook、Google 日历或 Apple 日历。或者，你可以复制下载链接并添加到你的设备，那么你对 Facebook 所做的任何更改将自动更新到设备的日历中。</div>
                    <el-button size="small" class="el-block" type="primary" plain>加入日历</el-button>
                </el-card>
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
                },
                {
                    month:"2020年12月",
                    day:"12月31日",
                    time:"15:00",
                    type:"线上活动",
                    img:require("@/assets/groupBg.png"),
                    week:"周四",
                    title:"嘿嘿嘿"
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
.calendar>.lf .text{
    padding: 0 10px;
}
.calendar>.lf .content{
    display: flex;
    padding: 10px;
    border-radius: 5px;
}

.calendar>.lf .content:hover{
    background-color: #eee;
    cursor: pointer;
}

.calendar>.lf .content img{
    width: 80px;
    height: 60px;
    border-radius: 5px;
    margin-right: 10px;
    object-fit: cover;
}
.calendar>.lf .content>.lf{
   width:20%;
   font-size: 12px;
}
.calendar>.lf .content>.rg{
    display: flex;
    flex: 1;
}
</style>
