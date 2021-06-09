<template>
    <div>
        <div class="flex">
             <span class="book-title2">Creative Hub</span>
             <span class="link">Switch back to previous version</span>
        </div>
        <el-card class="el-margin">
            <div class="flex el-bottom">
                <el-button type="info"> <i class="el-icon-user"></i> 添加合作伙伴</el-button>
                <el-popover width="300">
                    <el-input placeholder="搜索" size="small" v-model="filter.search"></el-input>
                    <p> <i class="el-icon-user-solid"></i> 你的个人账户 </p>
                    <cart-list :list="[user]"></cart-list>
                    <el-button type="info" slot="reference">
                            <span>{{user.user_name}}({{user.id}})</span>   <i class="el-icon-caret-bottom"></i>
                    </el-button>
                </el-popover>
            </div>
            <div class="el-flex">
                <el-input v-model="filter.search2" placeholder="搜索样图">
                        <i class="el-icon-search el-input__icon" slot="prefix"></i>
                </el-input>
                <el-button style="margin-left:10px" type="primary"><i class="el-icon-circle-plus"></i>Create Mockup</el-button>
            </div>
        </el-card>
        <el-alert class="el-margin" show-icon type="warning" title="欢迎使用新版创意馆！入门指南提供视频教程和使用窍门，帮助你快速熟悉各项功能的运作方式。">
                <a href="" class="link">213</a>
        </el-alert>
        <div class="book-title2 el-bottom">Recent Mockups</div>
        <ul class="gao-ul">
            <li v-for="(item,index) in list" :key="index">
                <div class="gao-head">
                    <div class="lf">
                            <div class="title">{{item.title}}</div>
                            <div class="text">{{showDate(item.date)}}</div>
                    </div>
                    <el-popover>
                        <ul class="popver-ul">
                            <li v-for="(v,i) in popver" :key="i" @click="gethandle(i,item)">
                                <i :class="v.icon"></i>
                                <span class="popver-title">{{v.title}}</span>
                            </li>
                        </ul>
                         <div slot="reference" class="hover-icon2"> <i class="el-icon-more"></i> </div>
                    </el-popover>
                </div>
                <div class="gao-content">
                        <div class="lf">
                                <div class="img"></div>
                        </div>
                        <div class="rg">
                                <div class="img"></div>
                                <div class="img"></div>
                                <div class="img"></div>
                        </div>
                </div>
                <el-switch v-model="item.state" active-text="Show in Ads Manager"> </el-switch>
            </li>
        </ul>
        <el-dialog  title="分享新广告的预览" :visible.sync="dialogVisible">
                    <el-switch active-text="链接分享功能已启用" v-model="info.state"></el-switch>
                    <div v-if="info.state">
                            <div class="flex el-margin">
                                <el-input v-model="info.url">
                                        <template slot="append"> <i class="el-icon-share"></i> </template>
                                </el-input>
                                <el-button> <i class="el-icon-copy-document"></i> Copy</el-button>
                                <el-button> <i class="el-icon-refresh-right"></i> 新建链接</el-button>
                            </div>
                            <el-alert type="info" show-icon title="这条链接将在30天后过期。"></el-alert>
                    </div>
                    <span slot="footer"> <el-button @click="dialogVisible=false">关闭</el-button> </span>
        </el-dialog>
    </div>
</template>

<script>
import cartList from '@/common/cart-list'
export default {
    components:{
        cartList
    },
    data() {
        return {  
            info:{},
            dialogVisible:false,
            popver:[
                {
                    icon:"el-icon-delete",
                    title:"删除"
                },
                {
                    icon:"el-icon-copy-document",
                    title:"复制"
                },
                {
                    icon:"el-icon-link",
                    title:"分享链接"
                },
            ], 
            list:[
                {
                    title:"世界经济",
                    date: new Date()
                },
                {
                    title:"小广告",
                    date: new Date()
                },
            ], 
            filter:{
                search:"",
                search2:""
            },
            user:this.$store.state.user_info
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        gethandle(state,item){
                console.log("🚀 ~ file: index.vue ~ line 115 ~ gethandle ~ item", item)
                if(state==0){
                    this.$confirm("确定要删除这个样图？此操作无法撤销。",'删除样图').then((res)=>{
                        alert("来了老弟")
                    })
                }else if(state==1){
                    this.list.unshift(Object.assign({},item))
                }else{
                    this.info=item;
                    this.dialogVisible=true
                }
        },
    }
};
</script>

<style scoped >
    .gao-ul{
        display: flex;
        margin: 0 -10px;
    }
    .gao-ul>li{
        background-color: #fff;
        padding: 15px;
        width: 220px;
        margin: 0 10px;
    }
    .gao-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .gao-head .title{
        font-size: 16px;
        font-weight: bold;
    }
    .gao-head .text{
        font-size: 12px;
        color: #666;
    }
    .gao-content{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    .gao-content>.lf>.img{
        height: 300px;
        background-color: #eee;
        width: 160px;
        border-radius: 5px;
    }
    .gao-content>.rg{
        margin-top: -4px;
    }
    .gao-content>.rg>.img{
        height: 97px;
        background-color: #eee;
        width: 60px;
        margin: 4px;
        border-radius: 5px;
    }
</style>
