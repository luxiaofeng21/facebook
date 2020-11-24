<template>
    <div>
        <div class="message">
            <div class="lf">
                    <div class="msg-head msg-flex">
                            <div class="msg-title">聊天</div>
                            <div class="rg">
                                <div class="book-icon"> <i class="el-icon-s-tools"></i> </div>
                                <div class="book-icon"> <i class="el-icon-edit-outline"></i> </div>
                            </div>
                    </div>
                    <div class="book-search">
                        <el-input prefix-icon="el-icon-search" placeholder="搜索Messenger"></el-input>
                    </div>
                    <cart-list style="margin-top:10px" :list="menu" type="menu" :active="mactive" @getcart="getmenu"></cart-list>
            </div>
            <div class="rg">
                    <div class="list-haed msg-flex">
                            <div class="lf user-msg">
                                    <img :src="mobj.img" alt="">
                                    <div class="msg-name">{{mobj.name}}</div>
                                    <div class="msg-date">6小时在线</div>
                            </div>
                            <div class="rg">
                                    <i class="el-icon-phone"></i>
                                    <i class="el-icon-video-camera-solid"></i>
                                    <i class="el-icon-info"></i>
                            </div>
                    </div>
                    <div class="msg-list">
                            <div class="lf">
                                
                                <div class="what">
                                        
                                        <div class="what-list">
                                                <div class="user-msg">
                                                        <img :src="mobj.img" alt="">
                                                        <div class="msg-name2">{{mobj.name}}</div>
                                                        <div class="msg-text">你们是facebook好友</div>
                                                        <div class="msg-date">所在地：香港</div>
                                                </div>
                                                 <div class="what-user">
                                                    <div class="what-date">2017/10/09 19:19</div>
                                                    <div class="what-user-img">
                                                            <img :src="mobj.img" alt="">
                                                            <img src="../../assets/me.jpg" alt="">
                                                    </div>
                                                    <div class="what-user-text">你们现在是Message联系人了</div>
                                                </div>
                                                <div class="what-item" v-for="(item,index) in msgAll" :key="index">
                                                        <div class="what-date">{{item.date}}</div>
                                                        <div class="what-msg" v-if="item.role==1">
                                                                <div class="lf">
                                                                        <div class="hover-icon"> <i class="el-icon-s-promotion"></i> </div>
                                                                        <div class="hover-icon"> <i class="el-icon-more"></i> </div>
                                                                        <div class="hover-icon"><img src="../../assets/face.png" alt=""> </div>
                                                                </div>
                                                                <div class="what-title">{{item.title}}</div>
                                                                <i class="el-icon-success"> </i>
                                                        </div>
                                                        <div class="what-msg what-msg2" v-else>
                                                                 <img :src="mobj.img" alt="">
                                                                 <div class="what-title">{{item.title}}</div>
                                                                 <div class="lf">
                                                                        <div class="hover-icon"><img src="../../assets/face.png" alt=""> </div>
                                                                        <div class="hover-icon"> <i class="el-icon-more"></i> </div>
                                                                        <div class="hover-icon"> <i class="el-icon-s-promotion"></i> </div>
                                                                        
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="what-input">
                                                <div class="lf">
                                                    <i class="el-icon-circle-plus"></i>
                                                    <i class="el-icon-data-line"></i>
                                                    <i class="el-icon-picture"></i>
                                                    <i class="el-icon-camera-solid"></i>
                                                </div>
                                                <div class="rg">
                                                    <el-input v-model="what" class="book-search" @keyup.13.native="getsub">
                                                        <span slot="suffix">
                                                            <el-popover>
                                                                    <VEmojiPicker @select="selectEmoji"   />
                                                                    <img  slot="reference" src="../../assets/face.png" alt="">
                                                            </el-popover>
                                                        </span>
                                                    </el-input>
                                                    <img src="../../assets/good.png" alt="">
                                                </div>
                                        </div>
                                </div>
                            </div>
                            <div class="rg">
                                <div class="list-msg">
                                        <img :src="mobj.img" alt="">
                                        <div class="list-name">{{mobj.name}}</div>
                                        <div class="list-date">6小时在线</div>
                                </div>
                                <div class="list-set">
                                    <el-collapse v-model="activeNames">
                                    <el-collapse-item title="更多操作" name="1">
                                            <ul class="collapse-ul">
                                                    <li v-for="(item,index) in collapse" :key="index">
                                                        <span>{{item.title}}</span>
                                                        <div class="book-icon"><i :class="item.icon"></i></div>
                                                    </li>
                                            </ul>
                                    </el-collapse-item>
                                    <el-collapse-item title="隐私设置与支持" name="2">
                                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                    </el-collapse-item>
                                </el-collapse>
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
        return {
            mobj:{},
            mactive:0,
            msgAll:[
                {
                    title:"你好呀",
                    date:"2020-10-11",
                    role:2
                }
            ],
            collapse:[
                {
                    title:"在对话内搜索",
                    icon:"el-icon-search"
                },
                {
                    title:"编辑昵称",
                    icon:"el-icon-edit"
                },
                 {
                    title:"更换主题",
                    icon:"el-icon-picture-outline-round"
                },
                 {
                    title:"更换表情",
                    icon:"el-icon-set-up"
                },
            ],
            activeNames:["1"],
            menu:[],
            what:""
        }
    },
    created(){
        var that=this;
        this.$axios.get(this.$url+"/friends").then(res=>{
        console.log("created -> res", res)
            that.menu=res.data
            that.mobj=res.data[0]
        })
         
    },
    methods:{
        //表情
        selectEmoji(data){
            this.what+=data.data
        },
        //发送消息
        getsub(){
            if(this.what=='') return 
            var now=new Date();
            var date=now.toLocaleString();
            this.msgAll.push({title:this.what,date,role:1});
            this.what="";
        },
        //左侧
        getmenu(i){
            this.mactive=i
            this.mobj=this.menu[i]
        }
    }
}
</script>
<style>
        body{
            background-color: #fff;
        }
        .message{
            display: flex;
        }
        .message>.lf{
            width: 25%;
            border-right: 1px solid #ddd;
            padding: 0px 16px;
        }
        .message>.rg{
            width: 75%;
        }
        .msg-flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .msg-head{
            padding: 10px 0;
        }
        .msg-head>.rg{
            display: flex;
        }
        .msg-head>.rg>div:last-child{
            margin: 0;
        }
        .msg-title{
            color: rgb(0, 0, 0);
            font-size: 25px;
            font-weight: bold;
        }
        .user-msg{
            margin: 15px 0;
            position: relative;
            padding-left: 50px;
        }
        .msg-list{
            display: flex;
        }
        .msg-list>.lf{
            width: 65%;
            border-bottom: 1px solid #eee;
            border-right: 1px solid #eee;
        }
        .msg-list>.rg{
            width: 35%;
        }
        .user-msg img{
            position: absolute;
            left: 0;
            top: 0;
            border: 1px solid #eee;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .msg-list .user-msg{
            padding-left: 70px;
            margin:  16px;
            border-bottom: 1px solid #eee;
            text-align: left;
            padding-bottom: 20px;
        }
        .msg-list .user-msg>img{
            width: 60px;
            height: 60px;
            border-radius: 0;
        }
        .list-haed{
            padding: 0 16px;
            border-bottom: 1px solid #eee;
        }
        .list-haed>.rg{
            font-size: 28px;
        }
        .list-haed>.rg>i{
            margin: 0  5px;
            color: #52B9F3;
            cursor: pointer;
        }
        .msg-name{
                font-size: 16px;
                font-weight: bold;
        }
        .msg-name2{
                font-size: 17px;
                overflow: hidden;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
        }
        .msg-date{
            color: rgba(0, 0, 0, 0.4);
            font-size: 13px;
            font-weight: normal;
            margin-top: 2px;
            vertical-align: middle;
        }
        /*右侧 */
        .list-msg{
            padding: 16px;
            text-align: center;
            border-bottom: 1px solid #eee;
        }
        .list-msg>img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 5px;
        }
        .list-name{
            font-size: 21px;
            font-weight: bold;
            text-align: center;
            white-space: initial;
        }
        .list-date{
            color: rgba(0, 0, 0, .40);
            font-size: 14px;
            margin-top: 2px;
        }
        .list-set{
            padding:0 16px;
        }
        .collapse-ul>li{
            cursor: pointer;
            display: flex;
            font-size: 15px;
            justify-content: space-between;
            margin-bottom: 10px ;
        }
        

        /*聊天*/
        .what{
            text-align: center;
            position: relative;
            
          
        }
        .what-list{
            overflow: auto;
            height: 620px;
            border-top: 1px solid #eee;
            margin-bottom: 10px;
        }
        .what-user-img{
            margin-top: 20px;
        }
        .what-user-img img{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin:0 -5px;
            border: 1px solid #fff;
        }
        .what-user-text{
            color: rgba(0, 0, 0, .40);
            font-size: 13px;
            text-align: center;
        }
        .what-date{
            display: block;
            font-weight: 500;
            margin: 12px 0 12px 20px;
            text-transform: uppercase;
            color: rgba(0, 0, 0, .40);
            font-size: 13px;
        }

        .what-msg{
            display: flex;
            align-items: center;
            justify-content: end;
        }
        .what-msg2{
            justify-content: flex-start;
        }
        .what-msg2 .what-title{
           background-color: #f1f0f0;
           color: #000;
        }
        .what-msg2>img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin:0 5px 0 8px;
        }
        .what-msg>i{
            color: #1877F2;
            margin:0 5px;
        }
        .what-msg>.lf>*{
            width: 30px;
            height: 30px;
            line-height: 30px;
            font-size: 15px;
        }
        .what-msg:hover >.lf{
            display: flex;
        }
        .what-msg>.lf{
            display: none;
            padding-right: 10px;
        }
        .what-title{
            background-attachment: fixed;
            background-color: rgb(0, 153, 255);
            border-radius: 1.3rem;
            padding: 6px 12px 6px;
            max-width: 60%;
            font-size: 16px;
            word-break: break-all;
            color: #fff;
              text-align: left;
        }

        /*输入框 */
        .what-input{
            display: flex;
            align-items: center;
            background-color: #fff;
        }
        .what-input>.lf{
            width: 20%;
            font-size: 25px;
            color: #1877F2;
        }
        .what-input>.lf>i{
            margin: 0 5px;
            cursor: pointer;
        }
        .what-input>.rg{
            width: 80%;
            display: flex;
            align-items: center;
        }
        .book-search{
            width: 100%;
        }
        .book-search img{
            width: 20px;
            height: 20px;
            margin:10px 2px;
            cursor: pointer;
        }
        .what-input>.rg>img{
            width: 25px;
            height: 25px;
            margin: 0 5px;
        }
</style>
