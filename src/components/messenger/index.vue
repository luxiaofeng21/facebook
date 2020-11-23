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
                    <cart-list :list="menu" type="msg"></cart-list>
            </div>
            <div class="rg">
                    <div class="list-haed msg-flex">
                            <div class="lf user-msg">
                                    <img src="" alt="">
                                    <div class="msg-name">杨小萱</div>
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
                                <div class="user-msg">
                                        <img src="" alt="">
                                        <div class="msg-name2">杨小萱</div>
                                        <div class="msg-text">你们是facebook好友</div>
                                        <div class="msg-date">香港</div>
                                        <div class="msg-date">所在地：香港</div>
                                </div>
                            </div>
                            <div class="rg">
                                <div class="list-msg">
                                        <img src="../../assets/bg.jpg" alt="">
                                        <div class="list-name">杨小萱</div>
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
            menu:[
                {
                    img:require("@/assets/me.jpg"),
                    title:"杨小邪",
                    text:"你们现在已经是Message联系人了"
                }
            ]
        }
    },
    created(){

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
        }
        .list-haed{
            padding: 0 16px;
            border-bottom: 1px solid #eee;
        }
        .msg-list{
            padding: 0 16px;
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
        
</style>
