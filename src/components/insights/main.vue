<template>
	<div>
		<el-container>
			<el-aside class="el-padding" :style="{height:$store.state.clienHeight+'px'}">
					<el-breadcrumb >
						<el-breadcrumb-item :to="{ path: '/' }">我的第一个公共主页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">公共主页成效分析</a></el-breadcrumb-item>
					</el-breadcrumb>
				<div class="el-margin tou-title">公共主页成效分析</div>
				<cart-list :list="menu" type="menu" size="medium" :active="mactive" @getcart="(index)=>mactive=index"></cart-list>
				<div class="aside-footer">
					<el-button type="primary" class="el-block"> <i class="el-icon-s-flag"></i> 推广</el-button>
				</div>
			</el-aside>
			<el-main :style="{height:$store.state.clienHeight+'px'}">	
                <index></index>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import  cartList from '@/common/cart-list'
import  index from './index'
export default {
	components: {
        index,
		cartList
	},
	data() {
		return {
			insights:[
				{title:"用户操作次数"},
				{title:"公共主页浏览量"},
				{title:"公共主页预览量"},
				{title:"公共主页获赞数"},
				{title:"帖子覆盖人数"},
				{title:"快拍覆盖人数"},
				{title:"推荐次数"},
				{title:"帖文互动次数"},
				{title:"视频"},
				{title:"公共主页粉丝人数"}
			],
			filter:{
				date:"7"
			}, 
			menu:[
				{
					icon:"el-icon-share",
					title:"概览"
				},
				{
					icon:"el-icon-s-marketing",
					title:"粉丝"
				},
				{
					icon:"el-icon-share",
					title:"广告"
				},
				{
					img:require("@/assets/good.png"),
					title:"赞"
				},
				{
					icon:"el-icon-share",
					title:"覆盖人数"
				},
				{
					img:require("@/assets/look.png"),
					title:"公共主页浏览量"
				},
				{
					icon:"el-icon-s-finance",
					title:"公共主页预览量"
				},
				{
					icon:"el-icon-s-finance",
					title:"公共主页操作"
				},
				{
					icon:"el-icon-s-finance",
					title:"帖子"
				},
				{
					icon:"el-icon-s-finance",
					title:"活动"
				},
				{
					icon:"el-icon-s-finance",
					title:"视频"
				},
				{
					icon:"el-icon-s-finance",
					title:"快拍"
				},
				{
					icon:"el-icon-s-finance",
					title:"消息"
				},
				{
					icon:"el-icon-s-finance",
					title:"订单"
				},
			],
			mactive:0
		};
	},
	created() {

	},
	computed: {
		showDate(){
			var newDate=new Date();
			var oldDate=new Date();
			oldDate.setDate(newDate.getDate() - this.filter.date)
			return newDate.toLocaleDateString() +" - "+ oldDate.toLocaleDateString()
		}	
	},
	mounted() {

	},
	methods: {

	}
};
</script>


