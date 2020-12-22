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
                           <groups-list2 slot="reference" :list="newlist"> <i class="el-icon-caret-bottom"></i></groups-list2>
                    </el-popover>
                    <hr>
                    <cart-list :list="menu" :active="mactive" @getcart="getmenu"> </cart-list>
                </div>
            </el-aside>
            <el-main >
                   <div class="book-firend">
                        <div class="book-tou katn9ffz">
                                <div class="tou-bg"> 
                                    <el-upload
                                        v-if="type=='me'"
                                        class="upload-img"
                                        :action="'api/uploadImg'"
                                        accept="image/*"
                                        :on-success="handlePreview2" >
                                        <div class="book-icon2" v-if="type=='me'"><i class="el-icon-camera-solid"></i> 添加封面照片</div>
                                    </el-upload>
                                
                                </div>
                                <div class="tou-title">哈哈哈</div>
                                <div class="tou-text">嘿嘿嘿</div>
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
                        <div class="about">
                        </div>
                    </div>
            </el-main>
        </el-container>
        <el-dialog :visible.sync="dialogVisible" width="500px">
                    <div class="dialog-title2" style="width:80%">
                        <el-input prefix-icon="el-icon-search" class="search" :placeholder="`搜索${user_info.user_name}的个人主页`" v-model="search"></el-input>
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
import cartList from '@/common/cart-list'
import groupsList2 from '@/common/groups-list2'
export default {
    components:{
        groupsList2,
        cartList
    },
    data() {
        return {
            user_info:{},
            search:"",
            dialogVisible:false,
            activeName:"1",
            me_ul:{},
            newlist:[],
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
                    title:"关键词提醒"
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
        this.$axios.get("/api/getGroups").then(res=>{
            res.data.data.map(x=>x.img=require("@/assets/group.jpg"))
           that.groups=res.data.data
        })
        var id=this.$route.query.id
        console.log("🚀 ~ file: home.vue ~ line 107 ~ created ~ id", id)
        this.$axios("/groupsDetail?id="+id).then(res=>{
            res.data.data.map(x=>x.img=require("@/assets/group.jpg"))
           that.newlist=res.data.data
        })
    },
    mounted() {
        this.user_info=this.$store.state.user_info
    },
    
    methods: {
        getgroups(item){
            this.$router.push({name:"grouopHome",query:{id:item.id}})
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
</style>
