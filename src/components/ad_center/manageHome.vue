<template>
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
            <div class="friend-user">
                <div class="lf">
                        <div class="avatar-img"> 
                            <el-avatar :size="130" :src="accout.img"></el-avatar>    
                            <div class="book-icon"><i class="el-icon-camera-solid"></i></div>
                        </div>
                        <div class="content">
                            <div class="friend-title" >{{accout.title}}</div>
                            <div class="tou-text" >  <span class="link">创建账号 </span>  · {{accout.type}}</div>
                        </div>
                </div>
                <el-button type="primary" size="small" style="width:200px"> <i class="el-icon-plus"></i> 添加按钮 </el-button>
            </div>
            <div class="el-margin"><hr></div>
            <div class="flex tou-nav">
                <div class="lf">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="首页" name="1"></el-tab-pane>
                        <el-tab-pane label="活动" name="2"></el-tab-pane>
                        <el-tab-pane label="点评" name="3"> </el-tab-pane>
                        <el-tab-pane label="视频" name="4"> </el-tab-pane>
                    </el-tabs>
                    <el-button> 展开 <i class="el-icon-caret-bottom"></i></el-button>
                </div>
                <div class="rg">
                        <div class="book-icon2">
                            <i class="friend-icon search-icon"></i>
                        </div>
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
                    <div class="lf">
                            <el-card>
                                <div class="book-title2">邀请好友为你的公共主页点赞</div>
                                <p>如果好友为你的公共主页点赞并分享你的帖子，可能会有更多用户在动态消息中看到你的帖子。</p>
                                <el-input v-model="searchFriend" placeholder="搜索并邀请好友">
                                    <i slot="prefix" class="el-icon-search el-input__icon"></i>
                                </el-input>
                                <ul class="search-ul">
                                    <li v-for="(item,index) in friends" :key="index">
                                        <div class="lf">
                                            <el-avatar :src="item.me_img"></el-avatar>
                                            <span>{{item.user_name}}</span>
                                        </div>
                                        <el-button size="medium" type="primary">邀请</el-button>
                                    </li>
                                </ul>
                            </el-card>
                            <el-card class="el-margin">
                                <div class="el-flex">
                                    <el-avatar :src="accout.img"></el-avatar>
                                    <div class="content" style="flex:1;margin-left:10px">
                                        <div class="book-title2">完整填写主页信息</div>
                                        <p>
                                            Completing your page information can lead to better discovery, interaction and consideration for your page. Take action now.
                                        </p>
                                        <el-button type="info">完成主页设置</el-button>
                                    </div>
                                </div>
                            </el-card>
                            <el-card class="el-margin">
                                    <div class="el-bottom book-title2">免费的 Facebook 业务工具</div>
                                    <cart-list :list="alat" size="small" type="arrow"></cart-list>
                            </el-card>
                    </div>
                        <div class="rg">
                        <tie-list @getie="getie"></tie-list>
                        <el-card class="el-margin manage-handle">
                                <span>创建</span>
                                <el-button type="info" > <i class="el-icon-video-camera-solid"></i>直播 </el-button>
                                <el-button type="info" > <i class="el-icon-video-camera-solid"></i>活动 </el-button>
                                <el-button type="info" > <i class="el-icon-video-camera-solid"></i>优惠 </el-button>
                                <el-button type="info" > <i class="el-icon-video-camera-solid"></i>工作机会 </el-button>
                                <el-button type="info" > <i class="el-icon-more"></i> </el-button>
                        </el-card>
                            <post-list :list="list" url="/api/groupcreateComments" url2="/api/groupComments"></post-list>
                        <div class="el-null" v-if="list.length<=0">还没有帖子</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import cartList from '@/common/cart-list'
import postList from '@/common/post-list'
import tieList from '@/common/tie-list'
export default {
    components:{
		tieList,
		postList,
        cartList,
    },
    data(){
        return{
           
            alat:[
                {
                    icon:"alat icon1",
                    title:"添加预约功能",
                    text:"展示你的服务和可预约时段，方便顾客预约。"
                },
                {
                    icon:"alat icon2",
                    title:"展示你的菜单",
                    text:"让用户在 Facebook 上轻松浏览你的菜单并点餐。"
                }
            ],
            searchFriend:"",
            dialogVisible:false,
			friends:[],
			search:"",
			list:[],
			activeName:"1",
			accout:{},
        }
    },
	created(){
		var that=this;
        var id=this.$route.query.id;
		this.$axios.get("/api/getpublicPage?id="+id).then(res=>{
			that.accout=res.data
		})
		this.$axios.get("/api/friends").then(res=>{
			this.friends=res
		})
    },
    methods:{
		//发帖
		getie(){
            
		},
		 handlePreview2(file){
            // console.log("🚀 ~ file: home.vue ~ line 208 ~ handlePreview2 ~ file", file)
        },
    }
}
</script>
<style scoped>
 @import '../../css/friend.css';
 .search-ul>li{
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 margin: 15px 0;
 }
  .search-ul>li .el-avatar{
	  margin-right: 10px;
  }
  .search-ul>li>.lf{
	  display: flex;
	  align-items: center;
	  flex: 1;
  }
  .manage-handle .el-button{
      border-radius: 100px;
      padding: 5px 8px;
  }
  .book-tou{
      text-align: left;
  }
</style>