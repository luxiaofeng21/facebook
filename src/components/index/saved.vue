<template>
<div class="rq0escxv l9j0dhe7 du4w35lb">
    <el-container>
        <el-aside class="el-padding" :style="{height:$store.state.clienHeight +'px'}">
            <div class=" flex">
                <div class="tou-title">已收藏</div>
                <span  class="link">设置</span>
            </div>
            <cart-list :list='[{title:"收藏内容",icon:"el-icon-s-goods"}]' size="small" :active="active"></cart-list>
            <div class="el-margin"> <hr> </div>
            <div class="book-title el-margin">我的收藏夹</div>
             <cart-list :list='menu' size="small" :active="mactive" @getcart="getmenu" class="el-bottom"></cart-list>
             <el-button @click="dialogVisible=true" type="primary" class="el-block" plain> <i class="el-icon-plus"></i> 新建收藏夹 </el-button>
        </el-aside>
        <el-main>
            <div class="pzpujowe">
                 <div class="flex">
                    <span class="book-title">全部</span>
                    <el-dropdown :hide-on-click="false">
                        <span class="book-icon2"> <i class="el-icon-s-operation"></i> </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,index) in filter" :key="index" :command="index">{{item}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>   
                </div>
                <el-card class="el-margin" v-if="list.length<=0">
                    <div class="book-null">这个收藏夹是空的</div> 
                </el-card>
                <el-card class="el-margin" v-for="(item,index) in list" :key=index>
                        <div class="collect">
                                <div class="lf">
                                     <video :src="item.url" controls></video>
                                </div>
                                <div class="rg">
                                    <div class="title">{{item.title}}</div>
                                    <div class="text">视频 • 已收藏到{{item.user_info.user_name}}</div>
                                    <div class="source">
                                            <el-avatar :src="item.user_info.me_img" size="small"></el-avatar>
                                            收藏来源：<span>{{item.user_info.user_name}}的帖子</span> 
                                    </div>
                                    <div class="button">
                                            <el-button @click="dialogVisible2=true" type="info" plain>加入收藏夹</el-button>
                                            <el-button @click="showsTie=true" type="info" plain><i class="el-icon-s-promotion"></i></el-button>
                                            <el-popover>
                                                <ul class="popver-ul">
                                                    <li> <i class="el-icon-s-release"></i> 取消收藏</li>
                                                </ul>
                                                <el-button slot="reference" type="info" plain><i class="el-icon-more"></i></el-button>
                                            </el-popover>
                                    </div>
                                    
                                </div>
                        </div>
                </el-card>
            </div>
           
        </el-main>
    </el-container>
    <el-dialog :visible.sync="dialogVisible" title="创建收藏夹" width="550px"  :append-to-body="true">
            <div class="me-name">名称</div>
            <el-input v-model="name" placeholder="给收藏夹命名..."></el-input>
            <span slot="footer" class="el-footer"> 
                <el-button @click="dialogVisible=false">取消</el-button>    
                <el-button @click="getsave" type="primary">创建</el-button>    
            </span>
    </el-dialog>
    <el-dialog title="加入收藏夹" :visible.sync="dialogVisible2" width="550px" :append-to-body="true">
        <cart-list :list="menu"></cart-list>
    </el-dialog>
    <tie-post :show.sync="showsTie"></tie-post>
</div>
</template>

<script>
import cartList from '@/common/cart-list'
import tiePost from '@/common/tie-post'
export default {
    components:{
        tiePost,
        cartList  
    },
    data(){
        return {
            showsTie:false,
            dialogVisible2:false,
            list:[
                {
                    title:"以前的香港回不去了，異鄉人黃秋生：就算死也要是體面的、站著的",
                    url:require("@/assets/video.mp4"),
                    user_info:this.$store.state.user_info
                },
                {
                    title:"以前的香港回不去了，異鄉人黃秋生：就算死也要是體面的、站著的",
                    url:require("@/assets/video.mp4"),
                    user_info:this.$store.state.user_info
                },
                {
                    title:"以前的香港回不去了，異鄉人黃秋生：就算死也要是體面的、站著的",
                    url:require("@/assets/video.mp4"),
                    user_info:this.$store.state.user_info
                }
            ],
            filter:["全部","链接","视频","照片","地点","商品","活动","优惠","未分类"],
            mactive:-1,
            active:0,
            menu:[],
            name:"",
            dialogVisible:false
        }
    },
    methods:{
        getmenu(i,item){
            this.mactive=i
        },
        getsave(){
            this.menu.push({emoji:this.name.substr(0,1),title:this.name})
            this.$notify({
                type: "success",
                position: "bottom-left",
                title:"成功",
                message:"创建成功"
            })
            this.dialogVisible=false
            this.name=""
        }
    }
}
</script>
<style  scoped>
.button .el-button{
    margin-left: 0;
    margin-right: 10px;
}
.pzpujowe{
    margin: 0 auto;
}
.collect{
    display: flex;
    
}
.collect>.rg{
      flex: 1;
}
.collect>.lf>video{
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin-right: 15px;
}
.collect>.rg>.title{
    font-size: 20px;
    font-weight: bold;
}
.collect>.rg>.source{
    display: flex;
    align-items: center;
    margin: 16px 0;
}
.collect>.rg>.source span{
    font-weight: bold;
}
.collect>.rg>.source  .el-avatar{
    margin-right: 5px;
}
</style>
