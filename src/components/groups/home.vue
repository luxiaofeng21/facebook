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
                   <book-friend :me_ul="me_ul"></book-friend>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import bookFriend from '@/common/book-firend'
import cartList from '@/common/cart-list'
import groupsList2 from '@/common/groups-list2'
export default {
    components:{
        bookFriend,
        groupsList2,
        cartList
    },
    data() {
        return {
            me_ul:{
                
            },
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
        this.$axios("/getGroups").then(res=>{
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

<style  >
    .el-popover{
        max-height: 400px !important;
        overflow-y:auto ;
    }
</style>
