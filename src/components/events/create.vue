<template>
	<div>
		<el-container>
			<el-aside class="el-padding" :style="{height:$store.state.clienHeight-100+'px'}">
				<div class="el-flex">
					<div class="hover-icon" v-if="setp==1" @click="setp=0"> <i class="el-icon-back"></i> </div>
					<div class="rg">
						<div class="el-text">活动 › 创建活动</div>
						<div class="tou-title">创建活动</div>
					</div>
				</div>
				
				<el-popover width="250">
					<cart-list  size="small" :list="recommend" :active="active" @getcart="getmenu"> </cart-list>
					<cart-list slot="reference" size="small" :list="[info]"> <i slot="right" class="el-icon-caret-bottom"></i> </cart-list>
				</el-popover>
				<cart-list size="small"  type="menu" :list="[{icon:'el-icon-user-solid',title:'创建活动'}]" active="0"> </cart-list>
			</el-aside>
			<el-main>
					<div class="create-content" v-if="setp==0">
						<div class="book-title2 el-bottom">创建活动</div>
						<ul class="create-ul">
							<li v-for="(item,index) in list" :key="index" @click="setp=1">
								<div class="create-img "> <img :src="item.img" alt=""> </div>
								<div class="title">{{item.title}}</div>
								<div class="text">{{item.text}}</div>
							</li>
						</ul>
					</div>
					<div class="create-content" v-else>
						<div class="book-title2 el-bottom">活动类型</div>
						<ul class="create-ul">
							<li v-for="(item,index) in list2" :key="index">
								<router-link :to="{name:'activity-detail'}">
									<div class="create-img "> <i :class="item.icon"></i> </div>
									<div class="title">{{item.title}}</div>
									<div class="text">{{item.text}}</div>
								</router-link>
							</li>
						</ul>
					</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import cartList from '@/common/cart-list'
export default {
	components: {
		cartList	
	},
	data() {
		return {
			setp:0,
			active:0,
			recommend:[],
			list:[
				{
					img:require("@/assets/diqiu2.png"),
					title:"线上",
					text:"通过 Messenger 视频聊天室与人畅聊、使用 Facebook Live 发起直播，或添加外部链接。"
				},
				{
					img:require("@/assets/friend2.png"),
					title:"线下",
					text:"在具体的位置聚会"
				},
			],
			list2:[
				{
					icon:"el-icon-first-aid-kit",
					title:"普通活动",
					text:"添加活动详情、封面照片并选择分享对象。"
				},
				{
					icon:"el-icon-trophy",
					title:"比赛",
					text:"集中管理赛程、邀请和报名信息。"
				},
			],
			clientHeight:0,
			info:{}
		};
	},
	created() {
		var user_info=JSON.parse(localStorage.getItem("user_info"))
		this.info={
			img:user_info.me_img,
			title:user_info.user_name
		}
		this.$axios.get("/api/publicPage").then(res=>{
			this.recommend=res.data
			this.recommend.unshift(this.info)
		})
	},
	mounted() {

	},
	methods: {
		getmenu(index,item){
			this.active=index
			this.info=item
		},
	}
};
</script>

<style scoped >
.create-content{
	height: 100%;
	width: 500px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
}
.create-ul{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.create-ul>li{
	width:200px;
	background-color: #fff;
	padding:60px 20px;
	cursor: pointer;
	text-align: center;
}
.create-ul>li .book-icon{
	margin:  auto;
}
.create-ul>li .title{
	font-weight: bold;
	margin: 5px 0;
}

.create-ul>li:hover{
	background-color: #eee;
}
.create-ul>li>a{
	color: #000;
}
.create-img{
	width: 60px;
	height: 60px;
	line-height: 65px;
	display: inline-block;
	background-color: #eee;
	border-radius: 50%;
	font-size: 35px;
}
.create-img img{
	width: 30px;
	filter: brightness(0);
}
.hover-icon>i{
	font-size: 25px;
	font-weight: bold;
}
</style>
