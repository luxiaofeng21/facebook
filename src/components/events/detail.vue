<template>
    <div>
        <el-container>
            <!--左侧导航-->
            <el-aside class="el-padding" :style="{height:$store.state.clienHeight+'px'}">
                <div class="el-text">活动 > 创建活动 </div>
                  <div v-if="showset">
                        <div class="tou-title">活动设置</div>
                        <el-input v-model="set.name" placeholder="共同组织者"> </el-input>
                        <div class="el-padding">
                             <div class="book-title">待回复</div>
                            <ul class="set-ul">
                                <li v-for="(item,index) in set.firend" :key="index">
                                    <div class="lf">
                                        <el-avatar :src="item.me_img"></el-avatar>
                                        <span>{{item.user_name}}</span>
                                    </div>
                                    <div class="hover-icon"> <i class="el-icon-error"></i> </div>
                                </li>
                            </ul>
                        </div>
                        <div class="flex el-bottom">
                            <strong>显示客人名单</strong>
                            <el-switch v-model="set.keren"></el-switch>
                        </div>
                        <div class="flex el-bottom">
                            <strong>只有管理员能在活动中发帖</strong>
                            <el-switch v-model="set.admin"></el-switch>
                        </div>
                        <div class="flex">
                            <strong>显示客人名单</strong>
                            <el-switch v-model="set.shen" :disabled="set.admin"></el-switch>
                        </div>
                        <div class="aside-footer">
                            <div class="flex">
                                    <el-button type="info" @click="showset=false" plain>取消</el-button>
                                    <el-button type="primary" @click="showset=false" style="flex:1" >保存</el-button>
                            </div>
                        </div>
                </div>
                <div v-else>
                    <div v-if="setp==0">
                            <div class="tou-title">活动详情</div>
                            <div class="detail-user">
                                <el-avatar  :src="user.me_img"> </el-avatar>
                                <div class="content">
                                    <div class="title">{{user.user_name }}</div>
                                    <div class="text">组织者 — 你的个人主页</div>
                                </div>
                            </div>
                            <el-input v-model="accout.title" placeholder="活动名称"></el-input>
                            <el-date-picker
                                class="el-block el-margin"
                                v-model="accout.date"
                                type="datetimerange"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                placeholder="开始日期">
                            </el-date-picker>
                            <div class="link el-bottom"> <i class="el-icon-plus"></i> 结束时间</div>
                            <el-popover width="250" placement="bottom">
                                <div v-if="pactive<3">
                                    <p>选择谁可以看到和加入这个活动。你稍后可以邀请用户加入。</p>
                                    <cart-list :list="privacy" type="radio" :active="pactive" size="small" @getcart="getcart"></cart-list>
                                </div>
                                <div v-else>
                                    <div class="el-flex">
                                            <div class="hover-icon" @click="pactive=-1"> <i class="el-icon-back"></i> </div> 
                                            <div class="tou-title">选择小组</div>
                                    </div>
                                    <groups-list :list="groups" @getgroups="getgroups"></groups-list>
                                </div>
                                <book-input slot="reference" :book="publicp"></book-input>
                            </el-popover>
                    </div>
                    <div v-else-if="setp==1">
                            <div class="tou-title">地点或发起方式</div>
                            <p>选择用户加入线上活动的方式。</p>
                            <div class="el-margin"> <hr> </div>
                            <cart-list :list="way" type="radio" size="small" :active="wactive" @getcart="(i)=>wactive=i"></cart-list>
                    </div>
                    <div v-else-if="setp==2">
                            <div class="tou-title">描述</div>
                            <div class="detail-text">提供更多活动信息，让客人了解活动内容。</div>
                            <el-input v-model="accout.content" placeholder="描述" type="textarea" :rows="4"></el-input>
                    </div>
                    <div v-else-if="setp==3">
                            <div class="tou-title">补充信息</div>
                            <div class="flex el-bottom">
                                <span>封面照片</span>
                                <i class="el-icon-warning"></i>
                            </div>
                            <el-upload
                                class="el-bottom"
                                drag
                                action="/api/getupload"
                                multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            </el-upload>
                            <cart-list :list="[{icon:'el-icon-s-tools',title:'活动设置'}]" @getcart="showset=true"></cart-list>
                    </div>
                    <div class="aside-footer">
                        <ul class="step-ul">
                            <li v-for="i in 4" :key="i" :class="i-1<=setp?'sactive':''"></li>
                        </ul>
                        <div class="flex">
                                <el-button type="info" @click="setp>0?setp--:''" plain>返回</el-button>
                                <el-button type="primary"  style="flex:1" v-if="setp==3">创建活动</el-button>
                                <el-button type="primary" @click="setp++"  style="flex:1" v-else>继续</el-button>
                        </div>
                    </div>
                </div>
               
            </el-aside>
            <!--右侧主体内容-->
            <el-main :style="{height:$store.state.clienHeight+'px'}">
                <div  :class="pc?'pc':'iphone'">
                    <div class="flex head">
                        <span class="lf">桌面版预览</span>
                        <span class="rg el-flex">
                            <span class="hover-icon" :class="pc?'icon-primary2':''" @click="pc=true">
                                <i class="el-icon-data-line" ></i>
                            </span>
                            <span class="hover-icon" :class="!pc?'icon-primary2':''" @click="pc=false">
                                <i class="el-icon-mobile"></i>
                            </span>
                            
                        </span>
                    </div>
                    <div class="book-tou ">
                           <div class="tou-bg"> 
                                    <div class="katn9ffz el-flex">
                                        <div class="tou-day">{{accout.day}}</div>
                                        <img v-if="accout.img" :src="accout.img" alt="">
                                    </div>
                            </div>
                            <div class="katn9ffz">
                                    <div class="event-date">{{accout.date}}</div>
                                    <div class="flex el-bottom">
                                    <div class="lf">
                                            <div class="event-title" >{{accout.title}}</div>
                                            <span>线上活动</span>
                                    </div>
                                    <el-button type="primary" v-if="wactive==0" > <i class="el-icon-video-camera-solid"></i> 加入聊天室</el-button>
                                    <el-button type="primary" v-else-if="wactive==1" > Join Live</el-button>
                                    <el-button type="primary" v-else-if="wactive==2">参加活动</el-button>
                                    </div>
                                    <div class="el-margin"><hr></div>
                                    <div class="flex tou-nav">
                                        <div class="detail-user">
                                            <el-avatar :size="30" :src="user.me_img"> </el-avatar>
                                            <div class="content">
                                                <span class="title">{{user.user_name }}</span>
                                                <span class="text">邀请你</span>
                                            </div>
                                        </div>
                                        <div class="rg">
                                                <div class="book-icon2" v-show="pactive==1">
                                                    <i class="el-icon-star-off"></i>
                                                    <span>有兴趣</span>
                                                </div>
                                                <div class="book-icon2">
                                                    <i class="el-icon-circle-check"></i>
                                                    <span>参加</span>
                                                </div>
                                                <div class="flex" v-show="pactive!=1">
                                                    <div class="book-icon2">
                                                        <i class="el-icon-warning-outline"></i>
                                                        <span>可能参加</span>
                                                    </div>
                                                    <div class="book-icon2">
                                                        <i class="el-icon-circle-close"></i>
                                                        <span>无法参加</span>
                                                    </div>
                                                </div>
                                                <div class="book-icon2">
                                                    <i class="el-icon-message"></i>
                                                    <span>邀请</span>
                                                </div>
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
                                                <div class="me-label" v-if="pactive==1">1位用户回应了 </div>
                                                <div class="me-label" v-else>1位用户将参加，包括{{user.user_name}}
                                                    <div style="margin:5px"><el-avatar :size="30" :src="user.me_img"></el-avatar></div>
                                                </div>
                                            </li>
                                            <li>
                                                <i class="el-icon-time"> </i>
                                                <span class="me-label">2020年12月31日 15:00 UTC+08 – 2021年1月14日 15:00 UTC+08</span>
                                            </li>
                                            <li v-if="pactive==0">
                                                <img src="../../assets/diqiu.png" alt="">
                                                <span class="me-label">公开 · Facebook站内和站外的任何人</span>
                                            </li>
                                            <li v-else-if="pactive==1">
                                                <img src="../../assets/suo.png" alt="">
                                                <span class="me-label">私人 · 仅受邀的用户</span>
                                            </li>
                                             <li v-else-if="pactive==2">
                                                <img src="../../assets/friend2.png" alt="">
                                                <span class="me-label">好友 · {{user.user_name}}的Facebook好友</span>
                                            </li>
                                            <li v-else>
                                                <img src="../../assets/team.png" alt="">
                                                <span class="me-label">小组 · {{publicp.text}}的成员</span>
                                            </li>
                                            <li>
                                                <img src="../../assets/diqiu2.png" alt="">
                                                <span class="me-label">线上活动</span>
                                                <span class="me-title">http://baidu.com/</span>
                                            </li>
                                        </ul>
                                        <p>{{accout.content}}</p>
                                    </el-card>
                                </div>
                                <div class="lf">
                                        <el-card class="el-bottom">
                                            <div class="flex">
                                                <span class="book-title2">客人名单</span>
                                                <a href="" class="link">查看全部</a>
                                            </div>
                                            <ul class="into-ul el-margin">
                                                <li>
                                                    <div class="title">1</div>
                                                    <div class="text">参加</div>
                                                </li>
                                                <li>
                                                    <div class="title">0</div>
                                                    <div class="text">可能参加</div>
                                                </li>
                                                 <li>
                                                    <div class="title">0</div>
                                                    <div class="text">已邀请</div>
                                                </li>
                                            </ul>
                                            <div class="detail-user">
                                                <el-avatar  :src="user.me_img"> </el-avatar>
                                                <div class="content">
                                                    <div class="title">{{user.user_name }}</div>
                                                    <div class="text">组织者</div>
                                                </div>
                                            </div>
                                            <el-button type="primary" plain class="el-block">发消息给好友</el-button>
                                        </el-card>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import bookInput from '@/common/book-input'
import cartList from '@/common/cart-list'
import groupsList from '@/common/groups-list2'
export default {
    components: {
      groupsList,
      cartList,
      bookInput
    },
    data() {
        return {
            showset:false,
            //活动设置
            set:{
                shen:true,
                admin:true,
                keren:false,
                friend:[],
                name:""
            },
            wactive:0,
            setp:0,
            //发起方式
            way:[
                {
                    icon:"el-icon-video-camera-solid",
                    title:"Messenger 视频聊天室",
                    text:"通过视频聊天发起聚会。用户可以直接从活动页面加入视频聊天室。"
                },
                {
                    icon:"el-icon-camera-solid",
                    title:"Facebook Live",
                    text:"通过 Facebook Live 预定时间来直播活动，方便人们届时收看。"
                },
                {
                    icon:"el-icon-link",
                    title:"外部链接",
                    text:"添加链接，告诉大家应该到哪儿参与活动。"
                },
                {
                    icon:"el-icon-more",
                    title:"其他",
                    text:"在活动详情中明确说明参与方式。"
                },
            ],
            pc:true,
            accout:{
                date:[new Date(),new Date()],
                title:"活动名称",
                day:"7日"
            },
            groups:[],
            pactive:1,
            privacy:[
                {
                    img:require("@/assets/suo.png"),
                    title:"私人"
                },
                {
                    img:require("@/assets/diqiu.png"),
                    title:"公开"
                },
                {
                    img:require("@/assets/friend2.png"),
                    title:"好友"
                },
                {
                    img:require("@/assets/team.png"),
                    title:"小组",
                    arrow:true
                },
            ],
            publicp:{
                img:require("@/assets/suo.png"),
                title:"隐私设置",
                text:""
            },
            user:JSON.parse(localStorage.getItem("user_info"))
        };
    },
    created() {
        this.$axios.get("/api/getGroups").then(res=>{
            this.groups=res.data
        })
    },
    mounted() {

    },
    methods: {
        getcart(i,item){
           this.pactive=i
           if(i<3){
                item.text=item.title
                this.publicp=item
           }
        },
        getgroups(item){
            item.text=item.title
            this.publicp=Object.assign({},item)
            this.publicp.title="小组"
        }
    }
};
</script>

<style scoped >
@import '../../css/friend.css';
 .tou-day{
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
    box-shadow: 0 0 10px #ddd;
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
.into-ul{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ddd;
}
.into-ul>li{
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


.detail-user{
    display: flex;
    align-items: center;
    margin: 16px 0;
}
.detail-user>.content{
    margin-left: 10px;
}
.detail-user .title{
    font-size: 16px;
}
.detail-user .text{
    color: #666;
    font-size: 13px;
}


.pc,.iphone{
    background-color: #fff;
    width: 1000px;
    margin: 0 auto;
    padding:10px 20px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
}
.iphone{
    width: 600px;
}
.iphone .katn9ffz{
    width: 100%;
}
.iphone .book-container{
    flex-wrap: wrap;
    padding: 15px;
}
.iphone .book-container>*{
    width: 100%;
}
.head{
    font-weight: bold;
}
.head>.rg>*{
    margin-left:10px;
}
.head>.rg i{
    font-size: 24px;
}
.tou-nav{
    background-color: #F0F2F5;
    padding: 0 20px;
}
.el-aside{
    position: relative;
}
.aside-footer{
    position: absolute;
    bottom: 3%;
    left: 3%;
    width: 94%;
}
.detail-text{
    color: #666;
    margin: 10px 0;
    font-size: 18px;
}
.tou-bg{
    overflow: hidden;
    background-image: linear-gradient(pink,#fff);
}

.el-upload-dragger{
    width: 200px;
}

.step-ul{
    display: flex;
    margin: 10px -2px;
}
.step-ul>li{
    width: 25%;
    margin: 0 2px;
    height: 10px;
    border-radius: 100px;
    background-color: #ddd;
}
.step-ul>li.sactive{
    background-color: #1877F2;
}
</style>


<style>
.el-upload{
    width: 100%;
}
.el-upload-dragger{
    width: 100%;
    height: 120px;
}
.el-upload-dragger .el-icon-upload{
    margin:  15px 0;
}
.el-switch__core{
    height: 30px;
    width: 60px !important;
    border-radius: 100px;
}
 .el-switch__core::after{
    top: 6px;
}
</style>