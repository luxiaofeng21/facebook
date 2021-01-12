<template>
   <div>
    <div class="book-firend" >
        <!--头部-->
        <div class="book-tou" >
                <div class="tou-bg"> 
                    <div class="katn9ffz el-flex">
                          <div class="tou-day">{{accout.day}}</div>
                          <img :src="accout.img" alt="">
                    </div>
                </div>
                <div class="katn9ffz">
                    <div class="event-date">{{accout.date}}</div>
                    <div class="event-title" >{{accout.title}}</div>
                    <div class="flex el-bottom">
                        <span>线上活动</span>
                        <el-button type="primary" size="small">打开链接</el-button>
                    </div>
                     <el-alert
                        title="快来发起活动吧"
                        type="info"
                        description="访问你提供的链接即可开始活动。"
                        show-icon>
                    </el-alert>
                    <div class="el-margin"><hr></div>
                    <div class="flex tou-nav">
                        <div class="lf">
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="简介" name="1"></el-tab-pane>
                                <el-tab-pane label="讨论" name="2"></el-tab-pane>
                            </el-tabs>
                        </div>
                        <div class="rg">
                             <div class="book-icon2">
                                    <i class="el-icon-message"></i>
                                    <span>邀请</span>
                                </div>
                                 <div class="book-icon2">
                                    <i class="el-icon-edit"></i>
                                    <span>编辑</span>
                                </div>
                                <div class="book-icon2" @click="dialogVisible=true">
                                    <i class="el-icon-share"></i>
                                </div>
                                <el-popover placement="bottom" width="250" trigger="click">
                                    <ul class="popver-ul">
                                        <li v-for="(item,index) in accout.handle" :key="index">
                                            <i :class="item.icon"></i>
                                            <span>{{item.title}}</span>
                                        </li>

                                    </ul>
                                    <div class="book-icon2" slot="reference">
                                        <i class="friend-icon arrow-icon"></i>
                                    </div>
                                </el-popover>
                        </div>
                    </div>
                </div>
        </div>
        <!--内容-->
        <div class="about ">
            <div class="katn9ffz">
                <div class="book-container">
                    <div class="rg">
                        <el-card class="el-bottom">
                            <div class="book-title2">详细信息</div>
                            <ul class="me-ul">
                                <li>
                                    <img src="../../assets/friend2.png" alt="">
                                    <span class="me-label">1位用户回应了</span>
                                </li>
                                <li>
                                    <i class="el-icon-time"> </i>
                                    <span class="me-label">2020年12月31日 15:00 UTC+08 – 2021年1月14日 15:00 UTC+08</span>
                                </li>
                                <li>
                                    <img src="../../assets/diqiu.png" alt="">
                                    <span class="me-label">公开 · 组织者：<a href="">Lu Xiaofeng </a> 和 <a href="">枫果果派对</a></span>
                                </li>
                                <li>
                                    <img src="../../assets/diqiu2.png" alt="">
                                    <span class="me-label">线上活动</span>
                                    <span class="me-title">http://baidu.com/</span>
                                </li>
                            </ul>
                             <div class="el-margin">这是一个很好的线上活动</div>
                             <el-button type="info" size="small"  plain><a href="">线上</a></el-button>
                        </el-card>
                        <el-card>
                            <div class="book-title2 el-bottom">组织者</div>
                            <cart-list :list="tissue" size="small"></cart-list>
                        </el-card>
                    </div>
                    <div class="lf">
                            <el-card class="el-bottom">
                                <div class="book-title2 el-bottom">最后添加几项信息</div>
                                <div class="event-step">已完成 <span>0/2</span>步 </div>
                                <div>填写这些信息能帮助活动吸引更多客人。</div>
                                <div class="el-margin"> <hr> </div>
                                <cart-list :list="handle" size="small"></cart-list>
                            </el-card>
                            <el-card class="el-bottom">
                                <div class="flex">
                                    <span class="book-title2">和好友一起参加</span>
                                    <a href="" class="link">查看全部</a>
                                </div>
                                <ul class="into-ul el-margin">
                                    <li>
                                        <div class="title">1</div>
                                        <div class="text">参加</div>
                                    </li>
                                    <li>
                                        <div class="title">0</div>
                                        <div class="text">有兴趣</div>
                                    </li>
                                </ul>
                                <el-button type="primary" plain class="el-block">发消息给好友</el-button>
                            </el-card>
                            <ul class="friend-footer">
                                <li>隐私权政策 · </li>
                                <li>服务条款 · </li>
                                <li>广告 · </li>
                                <li>Ad Choices · </li>
                                <li>Cookie · </li>
                                <li>更多 · </li>
                                <li>Facebook @ 2021 </li>
                            </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   </div>
</template>
<script>
import cartList from '@/common/cart-list'
export default {
    components:{
        cartList
    },
    data(){
        return{
            tissue:[
                {
                    img:require("@/assets/me.jpg"),
                    title:"枫果果"
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"枫果果"
                },
            ],
            activeName:"1",
            accout:{
                date:"2020年12月31日 15:00 UTC+08 – 2021年1月14日 15:00 UTC+08",
                title:"哈哈哈哈",
                day:"31日",
                handle:[
                    {
                        icon:"el-icon-setting",
                        title:"通知设置"
                    },
                    {
                        icon:"el-icon-document-copy",
                        title:"复制活动"
                    },
                    {
                        icon:"el-icon-close",
                        title:"取消活动"
                    },
                    {
                        icon:"el-icon-suitcase-1",
                        title:"加入公共主页"
                    },
                    {
                        icon:"el-icon-files",
                        title:"导出活动"
                    },
                    {
                        icon:"el-icon-user",
                        title:"导出客人名单"
                    },
                ],
                img:require("@/assets/activity.jpg")
            },
            handle:[
                {
                    title:"分享活动",
                    icon:"el-icon-share"
                },
                {
                    title:"发起讨论",
                    icon:"el-icon-s-flag"
                },
            ]
        }
    }
}
</script>

<style scoped>
@import '../../css/friend.css';
.tou-bg .tou-day{
    width: 80px;
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    border-top: 20px solid #F0284A;
    background-color: #fff;
    font-size: 35px;
    font-weight: bold;
    color: #333;
    text-align: center;
}
.tou-bg img{
    object-fit: cover;
    width: 88%;
    height: 100%;
}
.tou-bg>div{
    align-items: flex-end;
    height: 95%;
    justify-content: space-between;
}
.tou-bg{
    overflow: hidden;
    background-image: linear-gradient(pink,#fff);
}

.book-tou{
     text-align: left;
}

.event-title{
    font-size: 25px;
}

.event-date{
    font-weight:bold;
    color: #F0284A;
}

.event-step{
    font-size: 17px;
    font-weight: bold;
}
.event-step>span{
    color: lightgreen;
}

.into-ul>li{
    width: 35%;
    display: inline-block;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    border-radius: 5px;
}
.into-ul>li>.title{
    font-size: 18px;
    font-weight: bold;
}
.into-ul>li:hover{
    background-color: #eee;
}
</style>