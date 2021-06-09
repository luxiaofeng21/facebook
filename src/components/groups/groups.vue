<template>
<div class="app">
    <el-container>
        <el-aside class="el-padding">
                <div class="tou-title">小组</div>
                <el-input class="radius el-bottom" placeholder="搜索小组">  <i slot="prefix" class="el-input__icon el-icon-search"></i> </el-input>
                <Menu class="el-bottom" :list="menu" :type="'menu'" :active="mactive" @getcart="getmenu"> </Menu>
                <router-link :to="{path:'/groups/create'}">
                        <div class="button-primary" type="text">  <i class="el-icon el-icon-plus"></i> 新建小组 </div>
                </router-link>
                <div class="hr"></div>
                <div class="el-title el-margin">你管理的小组</div>
                <groups-list2 :list="groups" @getgroups="getgroups"></groups-list2>
                <div class="book-null" v-if="groups.length<=0"> 暂无小组 </div>
                
        </el-aside>
        <el-main>
                <router-view></router-view>
        </el-main>
    </el-container>
</div>
</template>

<script>
import Menu from '@/common/menu'
import groupsList2 from '@/common/groups-list2'
export default {
    components: {
        groupsList2,
        Menu
    },
    data() {
        return {
            mactive: 0,
            menu: [{
                    icon: "video-icon dynamic",
                    title: "你的动态",
                    path:"/groups/index"
                },
                {
                    icon: "find",
                    title: "发现",
                    path:"/groups/discover"
                },
            ],
            state: "feed",
            groups:[]
        }
    },
    created(){
        var that=this;
        this.$axios.get("/api/getGroups").then(res=>{
           res.data.map(x=>x.img=require("@/assets/group.jpg"))
           that.groups=res.data
        })
    },
    methods: {
        getgroups(item){
            this.$router.push({name:"grouopHome",query:{id:item.id}})
        },
        getmenu(i) {
            this.mactive = i
        }
    }
}
</script>
