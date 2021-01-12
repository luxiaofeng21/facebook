<template>
<div>
    <el-container >
        <el-aside class="el-padding">
            <div class="tou-title">活动</div>
            <cart-list :list="menu" type="menu"  :active="mactive"  @getcart="getmenu"></cart-list>
            <router-link :to="{path:'/events/create'}"> <el-button  class="el-block el-margin" type="primary" plain> <i class="el-icon-plus"></i>新建活动</el-button></router-link>
            <hr>
            <div class="flex el-margin">
                <span class="book-title2">你的近期活动</span>
                <span class="link">全部</span>
            </div>
            <activity-list :list="activity"></activity-list>
        </el-aside>
        <el-main :style="{height:$store.state.clienHeight-100+'px'}">
            <div v-if="mactive==0" >
               <div class="el-bottom">
                   <div class="book-title2">进行中的线上活动</div>
                   <event-list :list="list"></event-list>
               </div>
               <div class="el-bottom">
                   <div class="book-title2">发现线上活动</div>
                   <event-list :list="list"></event-list>
               </div>
                <div class="el-bottom">
                   <div class="book-title2">按以下条件浏览活动：</div>
                     <ul class="type-ul" >
                            <li :key="index" v-for="(item,index) in event">
                                <div class="type-title">{{item.title}}</div>
                                <i class="type-icon" :class="item.icon"></i>
                            </li>
                    </ul>
               </div>
                <div class="el-bottom">
                   <div class="book-title2">每日推荐</div>
                   <event-list :list="list"></event-list>
               </div>
                <div class="el-bottom">
                   <div class="book-title2">寻找更多活动</div>
                   <ul class="more-ul">
                       <li v-for="(item,index) in more" :key="index">{{item}}</li>
                   </ul>
               </div>
                 <div class="el-bottom">
                   <div class="book-title2">本周活动</div>
                   <event-list :list="list"></event-list>
               </div>
            </div>
            <calendar  v-else-if="mactive==1"></calendar>
            <inviter   v-else-if="mactive==10"></inviter>
            <tickets   v-else-if="mactive==11"></tickets>
            <hosting   v-else-if="mactive==12"></hosting>
            <past   v-else-if="mactive==13"></past>
            <birthdays v-else-if="mactive==2"></birthdays>
            <discovery v-else-if="mactive==3"></discovery>
        </el-main>
    </el-container>
</div>
</template>
<script>
import activityList from '@/common/activity-list'
import cartList from '@/common/cart-list'
import eventList from '@/common/event-list'
import calendar from './calendar'
import eventItem from './event-item'
import birthdays from './birthdays'
import inviter from './invites'
import tickets from './tickets'
import hosting from './hosting'
import past from './past'
import discovery from './discovery'
export default {
    components: {
        discovery,
        past,
        hosting,
        tickets,
        inviter,
        activityList,
        birthdays,
        eventItem,
        calendar,
        eventList,
        cartList,
    },
    methods: {
        getmenu(i,item,indexs){
            if(item.active>-1){
                this.mactive=i + item.active.toString()
            }else{
                this.mactive=i
            }
            console.log(this.mactive)
        }
    },
    data(){
        return{
            gactive:0,
            activity:[
                {
                    img:require("@/assets/activity.jpg"),
                    title:"东王活动",
                    date:"1月5日周二 · 14:00 UTC+08"
                },
                {
                    img:require("@/assets/activity.jpg"),
                    title:"懂的都懂",
                    date:"1月5日周二 · 14:00 UTC+08"
                },
            ],
            more:["今天","明天","本周","这个周末","下周"],
            event:[
                {
                    title:"艺术",
                    icon:"icon1"
                },
                {
                    title:"公益事业",
                    icon:"icon2"
                },
                {
                    title:"电影",
                    icon:"icon3"
                },
                {
                    title:"建身",
                    icon:"icon4"
                },
                {
                    title:"美食",
                    icon:"icon5"
                },
                {
                    title:"健康",
                    icon:"icon6"
                },
                {
                    title:"少儿",
                    icon:"icon7"
                },
                {
                    title:"音乐",
                    icon:"icon8"
                },
                {
                    title:"社交",
                    icon:"icon9"
                }
            ],
            list:[
                {
                    img:require("@/assets/me.jpg"),
                    collect:false,
                    title:"Language Mix Guanghou",
                    text:"The Paddy Field, Irish Bar & Restaurant"
                },
                {
                    img:require("@/assets/me.jpg"),
                    collect:false,
                    title:"Language Mix Guanghou",
                    text:"The Paddy Field, Irish Bar & Restaurant"
                },
                {
                    img:require("@/assets/me.jpg"),
                    collect:false,
                    title:"Language Mix Guanghou",
                    text:"The Paddy Field, Irish Bar & Restaurant"
                },
                {
                    img:require("@/assets/me.jpg"),
                    collect:false,
                    title:"Language Mix Guanghou",
                    text:"The Paddy Field, Irish Bar & Restaurant"
                },
            ],
            mactive:0,
            menu:[
                {icon:"el-icon-c-scale-to-original",title:"活动"},
                {icon:"el-icon-date",title:"日历",active: -1,down: true,children:[
                    {icon:"el-icon-s-marketing",title:"邀请"},
                    {icon:"el-icon-s-marketing",title:"你的门票"},
                    {icon:"el-icon-s-marketing",title:"由你组织"},
                    {icon:"el-icon-s-marketing",title:"往期活动"},
                ]},
                {icon:"el-icon-food",title:"生日"},
                {icon:"find",title:"发现活动"},
            ]
        }
    }
}
</script>
<style scoped>

.el-main{
    padding: 20px 50px;
    display: flex;
    justify-content: center;
}
.more-ul>li{
    background-color: #fff;
    display: inline-block;
    border-radius: 100px;
    padding: 5px 10px;
    margin-right: 10px;
}
.el-main .book-title2{
    margin-bottom: 15px;
}
.be9z9djy {
    top: auto;
}
.type-ul{
    display: flex;
    margin: 0 -5px;
}
.type-ul>li{
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
    width:10%;
    margin: 0 5px;
}
.type-title{
    margin-bottom: 10px;
}
.type-icon{
    background-image:url("../../assets/e2yN3mhfPTv.png");
    background-repeat: no-repeat;
    background-position:0;
    width: 16px;
    height: 16px;
    display: inline-block;
}
.type-icon.icon1{
    background-size: 100%;
    
}
</style>
