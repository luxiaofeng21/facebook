<template>
    <div>
        <el-container>
            <el-aside>
                <div class="menu-lf">
                    <div class="flex menu-head">
                        <span class="tou-title">管理小组</span>
                        <span class="book-icon"> <i class="el-icon-menu"></i> </span>
                    </div>
                    <el-popover height="200">
                           <groups-list2 :list="groups" @getgroups="getgroups"> </groups-list2>
                           <groups-list2 slot="reference" :list="[accout]"> <i class="el-icon-caret-bottom"></i></groups-list2>
                    </el-popover>
                    <hr>
                    <cart-list :list="menu" :active="mactive" @getcart="getmenu"> </cart-list>
                </div>
            </el-aside>
            <el-main v-if="mactive==0" :style="{'height':$store.state.clienHeight}">
                   <div class="book-firend" >
                        <div class="book-tou katn9ffz">
                                <div class="tou-bg" :style="{backgroundImage:`url(${accout.img})`}"> 
                                    <el-upload
                                        class="upload-img"
                                        :action="'/api/uploadImg'"
                                        accept="image/*"
                                        :on-success="handlePreview2" >
                                        <div class="book-icon2" ><i class="el-icon-camera-solid"></i> 编辑</div>
                                    </el-upload>
                                
                                </div>
                                <div class="tou-title" v-if="accout">{{accout.title}}</div>
                                <div class="tou-text" v-if="accout.friends"> 
                                    <img src="../../assets/diqiu.png" alt="">  {{accout.type==1?"公开小组":"非公开小组"}} · {{accout.friends.length}} 位成员
                                </div>
                                <div class="el-margin"><hr></div>
                                <div class="flex tou-nav">
                                    <div class="lf">
                                        <el-tabs v-model="activeName">
                                            <el-tab-pane label="简介" name="1"></el-tab-pane>
                                            <el-tab-pane label="讨论" name="2"></el-tab-pane>
                                            <el-tab-pane label="成员" name="3"> </el-tab-pane>
                                            <el-tab-pane label="活动" name="4"> </el-tab-pane>
                                        </el-tabs>
                                    </div>
                                    <div class="rg">
                                            <div class="book-icon2" @click="dialogVisible=true">
                                                <i class="friend-icon search-icon"></i>
                                            </div>
                                            <el-popover placement="bottom" width="250" trigger="click">
                                                <ul class="popver-ul">
                                                    <li>
                                                        <i class="el-icon-position"></i>
                                                        <span>分享</span>
                                                    </li>
                                                    <li>
                                                        <i class="el-icon-bell"></i>
                                                        <span>管理通知</span>
                                                    </li>
                                                    <li>
                                                        <i class="el-icon-discount"></i>
                                                        <span>置顶小组</span>
                                                    </li>
                                                    <li>
                                                        <i class="el-icon-folder-delete"></i>
                                                        <span>停止关注</span>
                                                    </li>
                                                    <li>
                                                        <i class="el-icon-time"></i>
                                                        <span>把小组归档</span>
                                                    </li>
                                                    <li>
                                                        <i class="el-icon-folder-opened"></i>
                                                        <span>退出小组</span>
                                                    </li>

                                                </ul>
                                                <div class="book-icon2" slot="reference">
                                                    <i class="friend-icon arrow-icon"></i>
                                                </div>
                                            </el-popover>
                                    </div>
                                </div>
                        </div>
                        <div class="about ">
                            <div class="katn9ffz">
                                <div class="book-container">
                                    <div class="rg">
                                        <tie-list @getie="getie"></tie-list>
                                        <post-list :list="list" url="/api/groupcreateComments" url2="/api/groupComments"></post-list>
                                    </div>
                                    <div class="lf">
                                            <el-card>
                                                <div class="el-title">简介</div>
                                                <ul class="me-ul">
                                                    <li v-for="(item,index) in about" :key="index">
                                                        <img :src="item.img" alt="">
                                                        <div class="rg">
                                                            <div class="me-label">{{item.label}}</div>
                                                            <div class="me-title">{{item.title}}</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </el-card>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
            </el-main>
            <div class="book-main" v-else>
                     <Requests v-if="mactive==1"></Requests>
                     <auto-approve v-else-if="mactive==2"></auto-approve>
                     <membership-questions v-else-if="mactive==3"></membership-questions>
                     <pending-posts v-else-if="mactive==4"></pending-posts>
                     <post-tags v-else-if="mactive==5"></post-tags>
                     <dynamic-recording v-else-if="mactive==7"></dynamic-recording>
                     <manage-rules v-else-if="mactive==8"></manage-rules>
                     <jubao v-else-if="mactive==9"></jubao>
                     <alerted v-else-if="mactive==10"></alerted>
                     <group-quality v-else-if="mactive==11"></group-quality>
            </div>
           
        </el-container>
        <el-dialog :visible.sync="dialogVisible" width="500px">
                    <div class="dialog-title2" style="width:80%">
                        <el-input prefix-icon="el-icon-search"  class="search" :placeholder="`搜索${user_info.user_name}的个人主页`" v-model="search"></el-input>
                    </div>
                    <div class="search_con" v-if="search==''">
                        <img :src="me_ul.me_img" alt="">
                        <div class="search_title">想找啥？搜搜吧！</div>
                        <div class="search_text">搜索{{user_info.user_name}}派对成员的帖子</div>
                    </div>
                    <div v-else>
                        <div class="search-li">
                            <div class="book-icon"> <i class="el-icon-search"></i> </div>
                            <span>{{search}}</span>
                        </div>
                    </div>
                    <span v-if="search!=''" slot="footer">
                        <div class="search-li">
                            <div class="book-icon icon-checked"> <i class="el-icon-search"></i> </div>
                            <span>在这个个人主页里搜索{{search}}</span>
                        </div>
                    </span>
        </el-dialog>
        
    </div>
</template>

<script>
import tieList from '@/common/tie-list'
import cartList from '@/common/cart-list'
import groupsList2 from '@/common/groups-list2'
import postList from "@/common/post-list"
import Requests from './requests'
import autoApprove from './auto_approve'
import membershipQuestions from './membership_questions'
import pendingPosts from './pending_posts'
import postTags from './post_tags'
import dynamicRecording from './dynamic_recording'
import manageRules from './manage_rules'
import jubao from './jubao'
import alerted from './alerted'
import groupQuality from './group_quality'
export default {
    components:{
        tieList,
        groupQuality,
        alerted,
        jubao,
        manageRules,
        dynamicRecording,
        postTags,
        pendingPosts,
        membershipQuestions,
        autoApprove,
        Requests,
        groupsList2,
        cartList,
        postList
    },
    data() {
        return {
            list:[],
            about:[
                {
                    img:require("@/assets/diqiu.png"),
                    label:"公开",
                    title:"任何人都能查看成员名单和小组帖。"
                },
                {
                    img:require("@/assets/look.png"),
                    label:"可发现",
                    title:"任何人都能找到这个小组。"
                },
                {
                    img:require("@/assets/team.png"),
                    label:"通用小组",
                    title:""
                },
            ],
            user_info:{},
            search:"",
            dialogVisible:false,
            activeName:"1",
            me_ul:{},
            accout:[],
            groups:[
                {
                    img:require("@/assets/group.jpg"),
                    title:"彭于晏小组"
                }
            ],
            mactive:0,
            menu:[
                {
                    icon:"el-icon-s-home",
                    title:"首页"
                },
                {
                    icon:"el-icon-success",
                    title:"加入请求"
                },
                {
                    icon:"el-icon-user-solid",
                    title:"自动批准成员加入"
                },
                {
                    icon:"el-icon-user-solid",
                    title:"成员加入问题"
                },
                {
                    icon:"el-icon-info",
                    title:"待审核的帖子"
                },
                {
                    icon:"el-icon-s-finance",
                    title:"帖子话题"
                },
                {
                    icon:"el-icon-date",
                    title:"定时贴"
                },
                {
                    icon:"el-icon-time",
                    title:"动态记录"
                },
                {
                    icon:"el-icon-s-management",
                    title:"小组规则"
                },{
                    icon:"el-icon-warning",
                    title:"成员举报内容"
                },
                {
                    icon:"el-icon-s-comment",
                    title:"审核提醒"
                },{
                    icon:"el-icon-s-open",
                    title:"小组内容品质"
                },
                {
                    icon:"el-icon-s-tools",
                    title:"设置"
                }
                
            ],
        };
    },
    created() {
        var that=this;
        //小组列表
        this.$axios.get("/api/getGroups").then(res=>{
            that.groups=res.data
        })
        var id=this.$route.query.id;
        //小组详情
        this.$axios("/api/groupsDetail?id="+id).then(res=>{
            res.data.friends=JSON.parse(res.data.friends)
            that.accout=res.data
        })
        //帖子列表
        this.getrecommend();
        
    },
    mounted() {
        this.user_info=this.$store.state.user_info
    },
    
    methods: {
        //帖子
        getrecommend(){
            this.$axios.get("/api/groupRecommended?aid="+this.$route.query.id).then(res=>{
                this.list=res
            })
        },
        //发帖
        getie(item){
             var user_info=this.$store.state.user_info
             var info={
                 aid:this.$route.query.id,
                 uid:user_info.id,
                 content:item.content,
                 type:item.type
             }
            this.$axios({
                method:"post",
                url:"/api/groupcreateRecommended",
                data:info
            }).then(res=>{
                if(res.code==1){
                    this.getrecommend()
                    this.$message.success(res.msg)
                    this.show=false
                }else{
                    this.$message.error(res.msg)
                }
            })
        },
        handlePreview2(file){
            // console.log("🚀 ~ file: home.vue ~ line 208 ~ handlePreview2 ~ file", file)
        },
        getgroups(item){
             this.$router.push({name:"grouopHome",query:{id:item.id}})
             this.getrecommend()
        },
        getmenu(i){
            this.mactive=i
        }
    }
};
</script>

<style  scoped>
    @import '../../css/friend.css';
    .el-popover{
        max-height: 400px !important;
        overflow-y:auto ;
    }
    .tou-bg{
        background-image: url("../../assets/groupBg.png");
        background-size: 100% 100%;
    }
    .book-tou{
        text-align: left;
    }
    .tou-title{
        margin-top: 15px;
    }
    .el-popover .me-group{
        max-height: 500px;
        overflow: auto;
    }
    /* .about{
        margin: -20px;
        margin-top: 0;
    } */
</style>
