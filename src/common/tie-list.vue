<template>
    <div>
         <el-card class="el-bottom">
            <div class="flex">
                <el-avatar :src="user_info.me_img"></el-avatar>
                <el-input style="margin-left:10px;flex:1" placeholder="发布公开贴..." @focus="show=true"></el-input>
            </div>
            <ul class="tie-ul">
                <li><i class="sp_5kM2vwYmVrv sx_99956b"></i> <strong>照片/视频</strong></li>
                <li><i class="sp_5kM2vwYmVrv sx_4fb45f"></i> <strong>标记用户</strong></li>
                <li @click="dialogVisible=true"><i class="sp_5kM2vwYmVrv sx_649950"></i> <strong>感受活动</strong></li>
            </ul>
        </el-card>
        <tie-post :show.sync="show" @getbtn="getie" :feel="text" @getfeel="dialogVisible=true"></tie-post>
        <el-dialog :visible.sync="dialogVisible" title="你有什么感受？" width="600px">
            <el-tabs v-model="feel.tabs">
                    <el-tab-pane label="感受" name="1">
                       <div class="el-margin">
                            <el-input v-model="feel.search" placeholder="搜索">
                                <i class="el-input__icon  el-icon-search" slot="prefix"></i>
                            </el-input>
                       </div>
                        <cart-list class="cart-list" :list="feel.list" @getcart="getsave"></cart-list>
                    </el-tab-pane>
                    <el-tab-pane label="活动" name="2">
                        <p class="flex">
                            <span class="book-icon2 icon-primary2" v-if="factive>=0">{{feel.list2[factive].title}} <i class="el-icon-close" @click="factive=-1"></i> </span>
                            <el-input style="flex:1" v-model="feel.search2" placeholder="搜索">
                                <i class="el-input__icon  el-icon-search" slot="prefix"></i>
                            </el-input>
                        </p>
                        <cart-list v-if="factive<0" :list="feel.list2" type="arrow" size="medium" @getcart="getfeel" :active="factive"></cart-list>
                        <cart-list v-else class="cart-list" :list="feel.activity"   size="medium"  @getcart="getsave"></cart-list>
                    </el-tab-pane>
            </el-tabs>
    </el-dialog>
    </div>
</template>

<script>
import tiePost from './tie-post'
import cartList from './cart-list'
export default {
    components:{
        cartList,
        tiePost
    },
    data() {
        return {
            text:"",//感受
            factive:-1,
            feel:{
                tabs:"1",
                search:"",
                list: [
                    {
                        emoji: " 😄 ",
                        title: "快乐"
                    },
                    {
                        emoji:" 😊 ",
                        title: "幸福"
                    },
                    {
                        emoji:" 💑 ",
                        title: "被关爱"
                    },
                    {
                        emoji:"😭",
                        title: "伤心"
                    },
                    {
                        emoji:"💑",
                        title: "卡哇伊"
                    }, {
                        emoji:"🙂",
                        title: "感恩"
                    }, {
                        emoji:"😆",
                        title: "兴奋"
                    }, {
                        emoji:"💑",
                        title: "在热恋"
                    }, {
                        emoji:"🤪",
                        title: "很疯狂"
                    }, {
                        emoji:" 😏 ",
                        title: "很感激"
                    }, {
                        emoji:" 😊 ",
                        title: "有福"
                    }, {
                        emoji:"😝",
                        title: "棒极了"
                    }, {
                        emoji:"🤪",
                        title: "好傻"
                    }, {
                        emoji:" 🌏 ",
                        title: "节日模式全开"
                    },
                    {
                        emoji:"😉",
                        title: "很美妙"
                    },
                    {
                        emoji:"😎",
                        title: "很酷"
                    },
                    {
                        emoji:"🤣",
                        title: "很搞笑"
                    },
                    {
                        emoji:"😊",
                        title: "很放松"
                    },
                    {
                        emoji:"🤤",
                        title: "positive"
                    },
                    {
                        emoji:"🤤",
                        title: "很悠闲"
                    },
                    {
                        emoji:"🌹",
                        title: "充满希望"
                    },
                    {
                        emoji:"😚",
                        title: "很快乐"
                    },
                    {
                        emoji:"😴",
                        title: "很累"
                    },
                    {
                        emoji:"🤗",
                        title: "很有动力"
                    },
                    {
                        emoji:"🤗",
                        title: "proud"
                    },
                    {
                        emoji:"😔",
                        title: "孤单"
                    },
                    {
                        emoji:"😏",
                        title: "很周到"
                    },
                    {
                        emoji:"😉",
                        title: "还不错"
                    },
                    {
                        emoji:"🧐",
                        title: "怀旧"
                    },
                    {
                        emoji:"😤",
                        title: "愤怒"
                    },
                    {
                        emoji:"😷",
                        title: "生病了"
                    },
                    {
                        emoji:" 😄 ",
                        title: "开心"
                    },
                ],
                search2:"",
                list2:[
                    {
                        emoji:"😀",
                        title:"庆祝..."
                    },
                    {
                        emoji:" 🧐 ",
                        title:"在看..."
                    },
                    {
                        emoji:" 😋 ",
                        title:"在吃..."
                    },
                    {
                        emoji:" 🍺 ",
                        title:"在喝..."
                    },
                    {
                        emoji:" 🤵 ",
                        title:"参加..."
                    },
                    {
                        emoji:"✈️ ",
                        title:"前往..."
                    },
                    {
                        emoji:" 💽 ",
                        title:"在听..."
                    },
                    {
                        emoji:" 👁‍🗨 ",
                        title:"在找..."
                    },
                    {
                        emoji:" 💭 ",
                        title:"想..."
                    },
                    {
                        emoji:" 👨‍🏫 ",
                        title:"在读..."
                    },
                    {
                        emoji:" 👨‍💻 ",
                        title:"在玩..."
                    },
                    {
                        emoji:"🙌",
                        title:"支持..."
                    },
                    
                ],
                activity:[]
            },
            dialogVisible:false,
            show:false,
            user_info:{},
        };
    },
    created() {
        this.user_info=JSON.parse(localStorage.getItem("user_info"))
    },
    mounted() {

    },
    methods: {
        getie(item){
            this.show=false
            this.$emit("getie",item)
        },
         //点击感受
         getsave(index,item){
             if(this.feel.tabs==1){
                 this.text=item.emoji +' 觉得 ' + item.title
             }else{
                 var title=this.feel.list2[this.factive].title;
                 this.text=item.emoji+title.substr(0,title.length-3)+'/'+item.title
             }
             this.dialogVisible=false
             this.show=true
         },
         //感受
        getfeel(i){
            let ul=[];
            if(i==0){
                ul=[
                    {emoji:"🙌",title:"友谊"},
                    {emoji:"🙌",title:"生日"},
                    {emoji:"🙌",title:"你的好日子"},
                    {emoji:"🙌",title:"圣诞节"},
                    {emoji:"🙌",title:"跨年夜"},
                    {emoji:"🙌",title:"这特殊的一天"},
                    {emoji:"🙌",title:"我母亲的生日"},
                    {emoji:"🙌",title:"我姐妹的生日"},
                    {emoji:"🙌",title:"我的生日"},
                    {emoji:"🙌",title:"成功"},
                    {emoji:"🙌",title:"节日"},
                    {emoji:"🙌",title:"新的一年"},
                    {emoji:"🙌",title:"我们的结婚纪念日"},
                    {emoji:"🙌",title:"周年纪念日"},
                    {emoji:"🙌",title:"爱情"},
                    {emoji:"🙌",title:"我妈妈的生日"},
                    {emoji:"🙌",title:"生命"},
                    {emoji:"🙌",title:"胜利"},
                    {emoji:"🙌",title:"我爸爸的生日"},
                    {emoji:"🙌",title:"这一天"},
                    {emoji:"🙌",title:"我们的周年纪念日"},
                    {emoji:"🙌",title:"我们的好日子"},
                    {emoji:"🙌",title:"毕业"},
                    {emoji:"🙌",title:"订婚"},
                    {emoji:"🙌",title:"节日季"},
                    {emoji:"🙌",title:"周日"},
                    {emoji:"🙌",title:"每一天"},
                    {emoji:"🙌",title:"自由"},
                    {emoji:"🙌",title:"迎婴派对"},
                    {emoji:"🙌",title:"周五"},
                    {emoji:"🙌",title:"某些东西"},
                    {emoji:"🙌",title:"社群"},
                    {emoji:"🙌",title:"周末"},
                    {emoji:"🙌",title:"我们的婚礼"},
                    {emoji:"🙌",title:"重聚"},
                    {emoji:"🙌",title:"冬季"},
                ]
            }else if(i==1){
                ul=[
                    {emoji:"🙌",title:"猫和老鼠"},
                    {emoji:"🙌",title:"熊出没"},
                    {emoji:"🙌",title:"喜羊羊与灰太狼"},
                ]
            }else if(i==2){
                ul=[
                    {emoji:"🙌",title:"午餐"},
                    {emoji:"🙌",title:"晚餐"},
                    {emoji:"🙌",title:"早餐"},
                ]
            }else if(i==3){
                ul=[
                    {emoji:"🙌",title:"咖啡"},
                    {emoji:"🙌",title:"饮料"},
                    {emoji:"🙌",title:"牛奶"},
                ]
            }else if(i==4){
                ul=[
                    {emoji:"🙌",title:"一场婚礼"},
                    {emoji:"🙌",title:"活动"},
                    {emoji:"🙌",title:"生日晚宴"},
                    {emoji:"🙌",title:"圣诞晚宴"},
                    {emoji:"🙌",title:"工作"},
                    {emoji:"🙌",title:"婚礼"},
                    {emoji:"🙌",title:"培训"},
                    {emoji:"🙌",title:"一场篮球赛"},
                    {emoji:"🙌",title:"婚礼酒席"},
                    {emoji:"🙌",title:"一个派对"},
                    {emoji:"🙌",title:"会议"},
                ]
            }else if(i==5){
                ul=[
                    {emoji:"🙌",title:"香港"},
                    {emoji:"🙌",title:"澳门"},
                    {emoji:"🙌",title:"河内市"},
                    {emoji:"🙌",title:"菲律宾"},
                    {emoji:"🙌",title:"迪拜"},
                    {emoji:"🙌",title:"韩国"},
                    {emoji:"🙌",title:"日本"},
                ]
            }else if(i==6){
                ul=[
                    {emoji:"🙌",title:"稻香"},
                    {emoji:"🙌",title:"听妈妈的话"},
                    {emoji:"🙌",title:"晴天"},
                    {emoji:"🙌",title:"青花瓷"},
                ]
            }else if(i==7){
                ul=[
                    {emoji:"🙌",title:"建议"},
                    {emoji:"🙌",title:"帮助"},
                    {emoji:"🙌",title:"一个奇迹"},
                    {emoji:"🙌",title:"答案"},
                    {emoji:"🙌",title:"点子"},
                    {emoji:"🙌",title:"祷告者"},
                    {emoji:"🙌",title:"完美"},
                    {emoji:"🙌",title:"生日礼物建议"},
                    {emoji:"🙌",title:"尼斯湖水怪"},
                    {emoji:"🙌",title:"平衡"},
                    {emoji:"🙌",title:"旅游建议"},
                    {emoji:"🙌",title:"旅程"},
                ]
            }else if(i==8){
                ul=[
                    {emoji:" 🕸 ",title:"旧日回忆"},
                    {emoji:" ☁️ ",title:"生命的意义"},
                    {emoji:" ☁️ ",title:"很多事情"},
                    {emoji:" ☁️ ",title:"做出改变"},
                    {emoji:" ☁️ ",title:"去度假"},
                    {emoji:" ☁️ ",title:"玩点疯狂"},
                    {emoji:" ☁️ ",title:"明天"},
                    {emoji:" ☁️ ",title:"回学校学习"},
                ]
            }else if(i==9){
                ul=[
                    {emoji:"  👨‍🎤  ",title:"活出生命的意义"},
                    {emoji:"  👨‍🎤  ",title:"蛤蟆先生去看心理医生"},
                    {emoji:"  👨‍🎤  ",title:"红楼梦"},
                ]
            }else if(i==10){
                ul=[
                    {emoji:"  👨‍🎤  ",title:"足球"},
                    {emoji:"  👨‍🎤  ",title:"篮球"},
                    {emoji:"  👨‍🎤  ",title:"木球"},
                    {emoji:"  👨‍🎤  ",title:"游戏"},
                ]
            }else if(i==11){
                ul=[
                    {emoji:"  👨‍🎤  ",title:"特朗普"},
                    {emoji:"  👨‍🎤  ",title:"拜登"},
                ]
            }
            this.feel.activity=ul
            this.factive=i
        },
    }
};
</script>

<style scoped >
  .tie-ul{
    display: flex;
    margin-top: 15px;
}
.tie-ul>li{
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: 10px;
}
.tie-ul>li:hover{
    cursor: pointer;
    background-color: #eee;
}
.tie-ul>li>i{
    margin-right: 5px;
}
</style>
