<template>
    <div>
        <div class="book-w10">
                <div class="tou-title">广告中心</div>
                <div class="el-card">
                        <img src="../../assets/ad_center.png" alt="">
                        <div class="ad_content">
                            <div class="flex">
                                <div class="lf">
                                    <div class="book-title2">获取建议，开始投放你的首条广告</div>
                                    <div>回答几个有关业务和目标的问题，我们将为你提供建议，帮助你选择合适的广告、受众和预算。</div>
                                </div>
                                <el-button type="primary">开始</el-button>
                            </div>
                        </div>
                </div>
                <div class="book-container el-margin">
                        <div class="rg">
                                <el-card class="el-bottom">
                                    <div class="flex">
                                         <span class="book-title2">摘要</span>
                                         <el-select v-model="filter.date" size="small">
                                             <el-option label="过去7天" value="1"></el-option>
                                             <el-option label="过去30天" value="2"></el-option>
                                             <el-option label="过去60天" value="3"></el-option>
                                             <el-option label="过去90天" value="4"></el-option>
                                         </el-select>
                                    </div>
                                    <div class="el-margin">过去60天内，钟曦为0条广告花费了¥0.00。</div>
                                    <ul class="zhai-ul">
                                        <li>
                                            <div class="content">
                                                    <div class="lf">
                                                            <img src="../../assets/friend2.png" alt="">
                                                            <div>覆盖人数</div>
                                                    </div>
                                                    <div class="hover-icon"><i class="el-icon-warning"></i> </div>
                                            </div>
                                            <div class="title">11</div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                    <div class="lf">
                                                            <img src="../../assets/good.png" alt="">
                                                            <div>帖文互动</div>
                                                    </div>
                                                    <div class="hover-icon"><i class="el-icon-warning"></i> </div>
                                            </div>
                                            <div class="title">11</div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                    <div class="lf">
                                                            <img src="../../assets/find.png" alt="">
                                                            <div>链接点击</div>
                                                    </div>
                                                    <div class="hover-icon"><i class="el-icon-warning"></i> </div>
                                            </div>
                                            <div class="title">11</div>
                                        </li>
                                    </ul>
                                </el-card>
                                <el-card>
                                    <div class="book-title2">广告</div>
                                    <div class="book-text">广告动态账户所设时区报告</div>
                                </el-card>
                        </div>
                        <div class="lf">
                            <el-card class="el-bottom">
                                <router-link :to="{name:'goal'}">
                                    <el-button class="el-block" type="primary" plain>创建广告</el-button>
                                </router-link>
                            </el-card>
                            <el-card>
                                <div class="flex">
                                    <span clsas="book-title2">工具</span>
                                    <span class="hover-icon"> <i class="el-icon-more"></i> </span>
                                </div>
                                <ul class="popver-ul">
                                    <li v-for="(item,index) in popver" :key="index">
                                        <i :class="item.icon"></i>
                                        <div class="rg">
                                            <div class="popver-title">{{item.title}}</div>
                                            <div class="popver-text">{{item.text}}</div>
                                        </div>
                                    </li>
                                </ul>
                            </el-card>
                        </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popver:[
                {
                    icon:"el-icon-s-order",
                    title:"你的偏好设置",
                    text:"只需回答几个问题，即可获得帮助来创建理想广告"
                },
                {
                    icon:"el-icon-user-solid",
                    title:"受众",
                    text:"创建保存的受众，以便向特定人群推广。"
                },
                {
                    icon:"el-icon-s-finance",
                    title:"支付设置",
                    text:"管理你的支付方式和查看收据。"
                },
            ],
            filter:{
                date:""
            }
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
.el-card>img{
    width: 100%;
}
.ad_content{
    padding: 15px;
}

.zhai-ul {
    display: flex;
    justify-content: space-between;
    color:#8C939D
}
.zhai-ul >li{
    background-color: #F0F2F5;
    width: 25%;
    padding: 20px;
}
.zhai-ul .title{
    font-size: 25px;
    color: #000;
}
.zhai-ul .content{
    display: flex;
    margin-bottom: 20px;
}
.zhai-ul .content>.lf{
    flex: 1;
}
.zhai-ul img{
    width: 20px;
}
</style>
