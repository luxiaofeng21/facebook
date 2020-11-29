<template>
    <div>
        <el-container>
            <el-aside>
                <div class="menu-title ">    
                    <div class="tou-title">好友</div> 
                    <div class="book-title2">加好友请求</div> 
                    <div style="margin-top:5px" class="link">查看已发送请求</div>
                </div> 
                <ul class="friend-ul" >
                    <li v-for="(item,index) in reqFriend" :key="index">
                        <div class="friend-lf">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="friend-rg">
                            <div class="friend-title">{{item.title}}</div>
                            <div class="friend-text">
                                <span class="friend-text-img" v-for="(items,indexs) in item.common" :key="indexs"> <img :src="items.img" alt=""></span>
                                <span>{{item.common.length}}位共同好友</span>
                            </div>
                            <div class="friend-button" v-if="!item.req">
                                <el-button size="small" type="primary" >确认</el-button>
                                <el-button size="small" type="info" @click="reqFriend.splice(index,1)">删除</el-button>
                            </div>
                        </div>
                    </li>
                </ul>
                <p><hr/></p>
                <ul class="friend-ul">
                    <li v-for="(item,index) in friend" :key="index">
                        <div class="friend-lf">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="friend-rg">
                            <div class="friend-title">{{item.title}}</div>
                            <div class="friend-text">
                                <span class="friend-text-img" v-for="(items,indexs) in item.common" :key="indexs"> <img :src="items.img" alt=""></span>
                                <span>{{item.common.length}}位共同好友</span>
                            </div>
                            <div class="friend-button" v-if="!item.req">
                                <el-button size="small" type="primary" @click="gethabdle(1,item)">加为好友</el-button>
                                <el-button size="small" type="info" @click="gethabdle(2,item,index)">移除</el-button>
                            </div>
                            <div class="friend-button" v-else>
                                <span>请求已发送</span>
                                <el-button size="small" type="info" @click="gethabdle(3,item)">取消请求</el-button>
                            </div>
                        </div>
                    </li>
                </ul>
            </el-aside>
            <el-main>
                    <book-tou :user="me_ul"></book-tou>
                    <about :me_ul="me_ul"></about>
            </el-main>
        </el-container>
    </div>
</template>

 
<script>
import About from './about.vue'
import bookTou from '@/common/book-tou'
export default {
    components: {
        About,
        bookTou
    },
    data() {
        return {
            reqFriend:[{
                    title: "小黄人",
                    req:false,
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
                {
                    req:false,
                    title: "小黄人2",
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
            ],
            friend: [{
                    title: "小黄人",
                    req:false,
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
                {
                    req:false,
                    title: "小黄人2",
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
            ],
            dialogVisible: false,
            search: "",
            me_ul: {
                text:"",
                img:require("@/assets/me.jpg"),
                name:"枫果果",
                highlight: [],
                list:[],
                //简介
                user: [{
                        text:"添加工作地点",
                        now:false,
                        date:"",
                        now_title:"目前在职",
                        down:false,
                        offect:[
                            {
                                title:"公司",
                                text:""
                            },
                            {
                                title:"职位",
                                text:""
                            },{
                                title:"市/县",
                                text:""
                            },{
                                title:"说明",
                                text:""
                            }
                        ],
                        label: "目前就职：",
                        title: "Facebook App",
                        img: require("@/assets/friend/zhi.png")
                    },
                    {
                        date:"",
                         offect:[
                            {
                                title:"学校",
                                text:""
                            }
                        ],
                        now:false,
                        now_title:"已毕业",
                        text:"添加大学",
                        down:false,
                        label: "曾经就职：",
                        title: "Université de belgaid",
                        img: require("@/assets/friend/studied.png")
                    },
                    {
                        offect:[
                            {
                                title:"所在地",
                                text:""
                            }
                        ],
                        text:"添加所在地",
                        down:false,
                        label: "所在地：",
                        title: "瓦赫兰",
                        img: require("@/assets/friend/home.png")
                    },
                    {
                        offect:[
                            {
                                title:"家乡",
                                text:""
                            }
                        ],
                        text:"添加添加家乡",
                        down:false,
                        label: "来自：",
                        title: "瓦赫兰",
                        img: require("@/assets/friend/city.png")
                    },
                    {
                        offect:[
                            {
                                title:"感情情况",
                                text:""
                            }
                        ],
                        text:"添加感情情况",
                        down:false,
                        label: "感情状况：",
                        title: "",
                        img: require("@/assets/friend/date.png")
                    },
                ],
                //好友
                friend:[
                    {
                        img: require("@/assets/me.jpg"),
                        title:"小黄人1",
                        text:"1 位共同好友"
                    },
                    {
                        img: require("@/assets/me.jpg"),
                        title:"小黄人2",
                        text:"1 位共同好友"
                    },
                    {
                        img: require("@/assets/me.jpg"),
                        title:"小黄人3",
                        text:"1 位共同好友"
                    }
                ],
                //照片
                imgAll:[
                    {
                        img:require("@/assets/me.jpg")
                    },
                    {
                        img:require("@/assets/me.jpg")
                    },
                ],
                //音乐
                music:[
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                ],
                //电影
                movies:[
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },{
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },{
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },
                    
                ],
                //电视节目
                Tv:[

                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                ],
                //书籍
                books:[
                    {
                        img:require("@/assets/bg.jpg"),
                        title:"Livro Cerveja Artesanal: Processos e Produção",
                        text:"书籍"
                    },
                     {
                        img:require("@/assets/bg.jpg"),
                        title:"Livro Cerveja Artesanal: Processos e Produção",
                        text:"书籍"
                    },
                ],
                //运动
                sports:[
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                ],
                //视频
                video:[
                    {
                        img:require("@/assets/me.jpg")
                    }
                ],
                //签到
                lasts:[
                    {
                        img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                     {
                         img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                     {
                         img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                     {
                         img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                ]
            },
            activeName: "0",
            activeIndex2: '1'
        }
    },
    created(){
        var height=document.body.clientHeight;
        var that = this;
        //推荐
        this.$axios.get(this.$url+"/recommended").then(res => {
            that.me_ul.list = res.data
        })
    },
    methods: {
        //请求好友操作
        gethabdle(state,item,i){
            //发送请求
            if(state==1){
                item.req=true
            //移除
            }else if(state==2) {
                this.friend.splice(i,1)
            //取消请求
            }else{
                 item.req=false
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>



/*好友列表 */
.friend-ul {
    padding: 0 8px;
}

.friend-ul>li {
    display: flex;
    padding: 8px;
    border-radius: 5px;
}

.friend-ul>li:hover {
    background: #eee;
}

.friend-rg {
    width: 70%;
}

.friend-title {
    font-size: 1rem;
    color: var(--primary-text);
    font-weight: 500;
    line-height: 1.3333;
}

.friend-text {
    margin: 5px 0;
    color: #999;
    display: flex;
    align-items: center;
}
.friend-button{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.friend-button .el-button {
    width: 46%;
}

.friend-ul>li>.friend-lf>img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 12px;
}

.friend-text-img {
    margin-right: 2px;
    display: inline-block;
    width: 15px;
    height: 15px;
}

.friend-text-img>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.rq0escxv.rek2kq2y {
    z-index: 111;
}

.el-tabs__nav-wrap::after {
    height: 0;
}

.el-tabs__active-bar {
    height: 4px;
    border-radius: 10px;
    background-color: var(--accent);
}

.el-tabs__item {
    font-size: 16px;
}

.du4w35lb .el-tabs__item {
    height: 60px;
    line-height: 60px;
}

.el-tabs__header {
    margin: 0;
}

.bkfpd7mw>div {
    margin-right: 10px;
}



.book-icon2:hover {
    opacity: 0.9;
    cursor: pointer;
}



.search-li {
    display: flex;
    align-items: center;
}

.search-li:hover {
    background-color: #eee;
}

.search-li>span {
    width: 70%;
    word-break: break-all;
    text-align: left;
}
.j83agx80  {
    margin-right: 4px;
}


</style>
