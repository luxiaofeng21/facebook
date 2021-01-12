<template>
    <div class="event-list">
            <div class="event-item" v-for="(item,index) in list" :key="index" >
                    <img :src="item.img" alt="" @click="geturl">
                    <div class="event-content">
                            <div class="event-date">{{item.date}}</div>
                            <a class="event-title" @click="geturl">{{item.title}}</a>
                            <div class="event-text">{{item.text}}</div>
                            <div class="event-footer">
                                <div class="book-icon2" @click.stop="getcollect(item)"> <i :class="!item.collect?'el-icon-star-off':'el-icon-star-on'"></i>有兴趣 </div>
                                <el-popover>
                                    <ul class="popver-ul">
                                        <li v-for="(v,i) in popover" :key="i"> 
                                            <i :class="v.icon"></i>
                                            <div class="rg">
                                                <span class="popver-title">{{ v.title }}</span>
                                                <div class="popver-text">{{ v.text }}</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div slot="reference" class="book-icon2"> <i class="el-icon-s-promotion"></i> </div>
                                </el-popover>
                            </div>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
    props:["list"],
    data(){
        return{
            popover:[
                {
                    icon:"el-icon-paperclip",
                    title:"https://127.0.0.1",
                    text:"分享此链接来邀请其他人"
                },
                {
                    icon:"el-icon-edit-outline",
                    title:"分享到动态消息"
                },
                {
                    icon:"el-icon-discover",
                    title:"用Message发送"
                },{
                    icon:"el-icon-wind-power",
                    title:"分享到公共主页"
                },{
                    icon:"el-icon-user",
                    title:"分享到小组"
                },{
                    icon:"el-icon-user",
                    title:"分享到好友的个人主页"
                },
            ]
        }
    },
    methods: {
        getcollect(item){
            item.collect=!item.collect;
        },
        geturl(){
            this.$router.push({name:"event-item"})
        }
    },
}
</script>

<style>
.event-list{
    display: flex;
    margin: 0 -5px;
}
.event-list>.event-item{
    width:25%;
    margin: 0 5px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
}
.event-list>.event-item>img{
    width:100%;
    height: 200px;
    object-fit: cover;
}
.event-title{
    font-weight: 600;
    line-height: 1.1765;
    color: #000;
    margin-bottom: 5px;
    display: block;
    font-size: 1.0625rem;
}
.event-footer{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 5px;
}
.event-footer>div:first-child{
    width: 70%;
}
.event-footer>div:first-child i{
    margin-right: 5px;
}
.event-content{
    padding: 10px;
}
</style>