<template>
    <div>
        <el-container>
            <el-aside>
                <div class="menu-lf">
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
                    <div class="book-null" v-if="friend.length<=0">暂无好友推荐</div>
                    <ul class="friend-ul">
                        <li v-for="(item,index) in friend" :class="active==index?'mactive':''" :key="index" @click="getmenu(item,index)">
                            <div class="friend-lf">
                                <img :src="item.me_img" alt="">
                            </div>
                            <div class="friend-rg">
                                <div class="friend-title">{{item.user_name}}</div>
                                <div class="friend-text" v-if="item.common">
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
                </div>
            </el-aside>
            <el-main v-if="active>=0">
                    <book-friend :me_ul="me_ul"></book-friend>
            </el-main>
             <div class="book-null" v-else>
                    <img src="../../assets/null.svg" alt="">
                    <div>选择用户姓名来预览 TA 的个人主页。</div>
            </div>
        </el-container>
    </div>
</template>

 
<script>
import bookFriend from '@/common/book-firend'
export default {
    components: {
        
       bookFriend
    },
    data() {
        return {
            active:-1,
            me_ul:{},
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
            friend: [],
            dialogVisible: false,
            search: "",
            activeName: "0",
            activeIndex2: '1'
        }
    },
    created(){
        var height=document.body.clientHeight;
        var that = this;
         //推荐好友
        this.$axios.get("/api/friends").then(res => {
             console.log(res)
            if(res.length>0){
                res.map(x=>{
                    x.me_img=x.me_img
                    x.bg_img?x.bg_img=x.bg_img:''
                })
                that.friend=res
                that.me_ul=res[0]
               
            }
            
        })
        //推荐
        this.$axios.get("/api/recommended").then(res => {
                   that.me_ul.list = res
        })
       
    },
    methods: {
        //切换
        getmenu(item,index){
            this.active=index
            this.me_ul=item
        },
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
    cursor: pointer;
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
    margin-bottom: 5px;
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


.mactive{
    background-color: #EAF3FF;
}

.__fb-dark-mode .friend-ul>li:hover{
	background-color: #252F3C !important;
}
</style>
