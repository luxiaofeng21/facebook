<template>
	<div>
		<el-container>
			<el-aside class="el-padding" :style="{height:$store.state.clienHeight+'px'}">
					<el-breadcrumb >
						<el-breadcrumb-item :to="{ path: '/' }">我的第一个公共主页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">公共主页成效分析</a></el-breadcrumb-item>
					</el-breadcrumb>
				<div class="el-margin tou-title">公共主页成效分析</div>
				<cart-list :list="menu" type="menu" size="small" :active="mactive" @getcart="(index)=>mactive=index"></cart-list>
				<div class="aside-footer">
					<el-button type="primary" class="el-block"> <i class="el-icon-s-flag"></i> 推广</el-button>
				</div>
			</el-aside>
			<el-main>	
				<div class="book-w10">
					<div class="book-alter"> 
							<i class="el-icon-school"></i>
							<div class="content">
									<div>由于欧洲出台了新的隐私规定，目前我们不会报告消息相关的成效分析数据。</div>
									<p>商家查看消息和订单数据的报告时，会受到相应影响。受影响的指标将显示“-”，不再显示欧洲的受影响数据。</p>
									<a href="" class="link">leam More</a>
							</div>
					</div>
					<el-card class="el-margin">
						<div class="flex">
							<div class="lf">
								<span>公共主页摘要  </span>
								<el-select v-model="filter.date" size="small">
									<el-option label="今天" value="0"></el-option>
									<el-option label="昨天" value="1"></el-option>
									<el-option label="过去7天" value="7"></el-option>
									<el-option label="过去28天" value="28"></el-option>
								</el-select>
							</div>
							<span class="link">导出数据 <i class="el-icon-upload"></i> </span>
						</div>
						<div class="flex el-margin">
							 <div class="lf">
								 	<div>2021年1月3日 - 2021年1月9日的成效</div>
									<div>请注意：这不包含今天的数据。成效分析动态报告使用太平洋时区，而广告动态报告使用的是广告帐户所用时区。</div>
							 </div>
						</div>
						<ul class="insights-ul">
							<li v-for="(item,index) in insights" :key="index">
								<div class="title">{{item.title}}</div>
								<div class="text">{{showDate}}</div>
								<div class="content">
									<i class="el-icon-date"></i>
									<div class="text">所选时间范围内没有足够数据可显示。</div>
								</div>
							</li>
						</ul>
					</el-card>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import  cartList from '@/common/cart-list'
export default {
	components: {
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

<style scoped >
.book-alter{
	display: flex;
	border: 1px solid #eee;
	padding: 10px;
	background-color: #fff;
	border-left: 5px solid #000;
	border-radius: 5px;
}
.book-alter>i{
	font-size: 25px;
	margin-right: 10px;
}

.insights-ul{
	display: flex;
	flex-wrap: wrap;
}
.insights-ul>li{
	border: 1px solid #ddd;
	width: 28%;
	padding: 20px;
	margin-left: -1px;
	margin-top: -1px;
}
.insights-ul>li>.title{
	font-size: 15px;
	color: #000;
}
.insights-ul>li>.text{
	font-size: 12px;
	color: #666;
	margin: 5px 0;
}
.insights-ul>li>.content{
	padding: 16px 0;
	color: #C4C8CE;
	text-align: center;
	margin-top: 20px;
}
.insights-ul>li>.content>i{
	font-size: 40px;
	margin-bottom: 5px;
}
</style>
