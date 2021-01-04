<template>
    <div >
        <el-card class="el-bottom">
            <div class="flex">
                <el-input size="medium" v-model="filter.name" class="book-inline" placeholder="按姓名搜索">
                   <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <el-select size="medium" v-model="filter.user" placeholder="推荐用户">
                    <el-option v-for="(item,index) in recommend" :label="item.label" :value="item.value" :key="index"></el-option>
                </el-select>
            </div>
        </el-card>
        <el-card>
            <div class="menu-head">
                <span class="book-title2">符合条件的请求·{{list.length}}</span>
            </div>
            <ul class="request-ul">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="el-flex">
                            <el-avatar :src="item.user_info.me_img" :size="60"></el-avatar>
                            <div class="content">
                                    <div class="flex">
                                            <div class="lf">
                                                <div class="title">{{item.user_info.user_name}}</div>
                                                <div class="date">请求时间：{{showDate(item.date)}}</div>
                                            </div>
                                            <div class="rg">
                                                <el-button type="primary">批准</el-button>
                                                <el-button type="info">拒绝</el-button>
                                                <el-popover>
                                                    <ul class="popver-ul">
                                                        <li>发消息给{{item.user_info.user_name}}</li>
                                                        <li>查看个人主页</li>
                                                        <hr>
                                                        <li>拒绝并拉黑{{item.user_info.user_name}}</li>
                                                    </ul>
                                                    <el-button slot="reference" type="info"> <i class="el-icon-more"></i> </el-button>
                                                </el-popover>
                                                
                                            </div>
                                    </div>
                                    <ul class="me-ul">
                                        <li v-for="(v,i) in item.user_info.user" :key="i">
                                            <i :class="v.icon"></i>
                                            <span>{{v.label}}</span>
                                        </li>
                                    </ul>
                                    <ul class="issue-ul">
                                        <li v-for="(v,i) in item.list" :key="i">
                                                <div class="title">{{v.title}}</div>
                                                <div class="text" v-if="v.issue">{{v.issue.join(",")}}</div>
                                        </li>
                                    </ul>
                            </div>
                            
                        </div>
                    </li>
                </ul>
        </el-card>
        <div class="book-null" v-if="list.length<=0">
                <img src="../../assets/null.svg" alt="">
                <div>没有待定成员</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter:{
                name:"",
                user:1
            },
            list:[
               {
                    user_info:this.$store.state.user_info,
                    date:new Date(),
                    list:[
                        {
                            title:"你是谁",
                            issue:["小姐姐","小哥哥"]
                        },
                        {
                            title:"你来自哪儿",
                            issue:["知乎","百度"]
                        },
                    ]
               }
            ],
            recommend:[
                {
                    label:"推荐用户",
                    value:1
                },
                {
                    label:"从新到旧",
                    value:2
                },
                {
                    label:"按名排序",
                    value:3
                },
                {
                    label:"按姓排序",
                    value:4
                },
                {
                    label:"加入facebook的日期",
                    value:5
                },
                {
                    label:"加入小组数量",
                    value:6
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
.request-ul>li{
    margin: 15px 0;
}
.request-ul>li .content{
    flex: 1;
    margin-left: 10px;
}
.request-ul>li .content .flex .title{
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}
.request-ul>li .content .flex .date{
    font-size: 15px;
    color: #666;
    line-height: 20px;
    margin-bottom: 10px;
}
.request-ul>li .content .el-button:not(:last-child){
    margin-right: 5px;
    padding: 12px 30px;
}

/*问题*/
.issue-ul>li{
    margin-top: 15px;
}
.issue-ul>li>.title{
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
    font-weight: bold;
}
</style>
