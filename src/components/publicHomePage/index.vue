<template>
<div>
    <el-container :style="{height:clienHeight+'px'}">
        <el-aside>
            <div class="flex menu-head">
                <div class="tou-title">公共主页</div>
                <div class="book-icon"> <i class="el-icon-s-tools"></i> </div>
            </div>
            <div class="el-padding">
                 <cart-list :list="menu" :active="mactive" @getcart="getmenu" type="menu"></cart-list>
                <div class="el-margin">
                    <cart-list :list="menu2" :active="mactive2" @getcart="getmenu2" type="menu"></cart-list>
                </div>
                <router-link :to="{path:'create/creation'}">
                    <el-button type="primary" class="el-block"> <i class="el-icon-plus"></i> 新建公共主页</el-button>
                </router-link>
                <div class="el-margin"> <hr> </div>
            </div>
        </el-aside>
        <el-main>
            <div class="book-main" v-if="mactive==0">
                    <div class="book-title2 el-bottom">你管理的公共主页</div>
                    <el-card v-for="(item,index) in list" :key="index">
                        <div class=" public-item">
                            <div class="lf">
                                <router-link :to="{path:'manageHome',query:{id:item.id}}">
                                <img :src="item.img" alt="">
                                </router-link>
                                <div class="content">
                                    <router-link :to="{path:'manageHome',query:{id:item.id}}">
                                        <div class="title">{{item.title}}</div>
                                    </router-link>
                                    <div class="text">{{item.type}}</div>
                                </div>
                            </div>
                            <div class="rg">
                                <div class="icon">
                                    <el-badge value="5">
                                            <img src="../../assets/diqiu.png" alt="">
                                    </el-badge>
                                    <span>通知</span>
                                </div>
                                <div class="icon">
                                    <el-badge value="0">
                                            <i class="el-icon-s-comment"></i>
                                    </el-badge>
                                    <span>消息</span>
                                </div>
                            </div>
                        </div>
                    </el-card>
            </div>
            <div v-else>
                <Category v-if="mactive2==0"></Category>
                <Liked v-if="mactive2==1"></Liked>
            </div>
             
            
        </el-main>
    </el-container>
</div>
</template>

<script>
import cartList from '@/common/cart-list'
import Category from './category'
import Liked from './liked'
export default {
    components: {
        Liked,
        Category,
        cartList
    },
    data() {
        return {
            list:[],
            clienHeight:0,
            mactive2:-1,
            mactive: "",
            menu:[],
            menu2: [{
                    icon: "find",
                    title: "发现"
                },
                {
                    icon: "good",
                    title: "点赞"
                },
                {
                    icon: "yao",
                    title: "邀请"
                },
            ]
        };
    },
    created() {
        this.$axios.get("api/publicPage").then(res=>{
           var info=[{
                img:require("@/assets/gao.png"),
                title:`你的${res.data.length}个公共主页`,
                children:res.data,
                active:-1,
                down:false
           }]
           this.list=res.data
           this.menu=info
        })
    },
    mounted() {
        this.clienHeight=window.screen.availHeight - 65 -document.body.scrollHeight
    },
    methods: {
        getmenu(i,item) {
            this.mactive = i
            this.mactive2=-1
            this.$router.push({name:"manageHome",query:{id:item.children[item.active].id}})
        },
        getmenu2(i) {
            this.mactive=-1
            this.mactive2 = i
        }
    }
};
</script>

<style scoped >
.el-card{
    margin-top: 5px;
}
.public-item{
    display: flex;
}
.public-item>.lf{
    display: flex;
    align-items: center;
    flex: 1;
}
.public-item>.lf .title{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
}
.public-item>.lf img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
}
.public-item>.rg>.icon{
    display: inline-block;
}
.public-item>.rg>.icon:first-child{
    margin-right: 10px;
}
.public-item>.rg img{
    width: 25px;
    height: 25px;
}
.public-item>.rg i{
    font-size: 28px;
}
</style>
