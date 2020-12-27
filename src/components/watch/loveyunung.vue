<template>
		<div class="app-watch">
				<div class="watch-head">
						<div class="list marjyy4e">
								<div class="lf">
									<div class="img"> <img :src="me.me_img" alt=""> </div>
									<div class="content">
											<div class="name">{{me.user_name}}</div>
											<div class="text">100万人关注</div>
									</div>
								</div>
								<div class="rg">
									 <span class="book-icon2 icon-primary" style="width:150px" @click="attention"> 
										 <span v-if="me.attention">
											 <i class="el-icon-check"></i>已关注
										 </span>
										 <span v-else>
											 <i class="el-icon-circle-plus"></i>未关注
										 </span>
									 </span>
									 <span class="book-icon2"> <i class="el-icon-message-solid"></i> </span>
									 <span class="book-icon2"> <i class=" el-icon-s-promotion"></i> </span>
								</div>
						</div>
						<div class="text marjyy4e">
							★ 張語噥官方臉書 ★ �工作聯絡Work Contact: Mollie 0983-752220 CC 0981-852520 �uptowntaiwan@gmail.com 「 張語噥Sammy官方聊天社群」！請點選以下連結加入社群！ https://reurl.cc/14zM9X
						</div>
				</div>
				<div class="watch-content marjyy4e">
						<post-list :list="list"></post-list>
						<el-card>
							<div class="tou-title">所有视频</div>
							<ul class="watch-ul">
								<li v-for="(item,index) in account" :key="index">
									<video :src="item.video" controls></video>
									<div class="title">{{item.title}}</div>
									<div class="text">{{getTimeDistance(item.date)}} {{item.num}}次播放</div>
									<div class="handle">
										<el-tooltip v-if="item.handle.good">
											<div slot="content">
												<div v-for="(v,i) in item.handle.good" :key="i">{{v}}</div>
											</div>
											<img src="../../assets/good.svg" alt="">
										</el-tooltip>
										<el-tooltip v-if="item.handle.love">
											<div slot="content">
												<div v-for="(v,i) in item.handle.love" :key="i">{{v}}</div>
											</div>
											<img src="../../assets/xin.svg" alt="">
										</el-tooltip>
										<el-tooltip v-if="item.handle.yi">
											<div slot="content">
												<div v-for="(v,i) in item.handle.yi" :key="i">{{v}}</div>
											</div>
											<img src="../../assets/yi.svg" alt="">
										</el-tooltip>
										<el-tooltip v-if="item.handle.xiao">
											<div slot="content">
												<div v-for="(v,i) in item.handle.xiao" :key="i">{{v}}</div>
											</div>
											<img src="../../assets/xiao.svg" alt="">
										</el-tooltip>
										<el-tooltip>
											<div slot="content">
												<div v-for="(v,i) in item.handle.list" :key="i">{{v}}</div>
											</div>
											<span>{{item.handle.num}}</span>
										</el-tooltip>
										
									</div>
								</li>
							</ul>
						</el-card>
				</div>
		</div>
</template>
<script>
import postList from '@/common/post-list'
export default {
	props:["me"],
	components:{
		postList
	},
	data(){
		return{
			account:[
				{
					handle:{
						num:10000,
						list:["张三","李四","王五","小黄人1","小黄人2"],
						good:["小黄人1","小黄人2"],
						love:["小黄人3","小黄人4"],
						xiao:["小黄人5","小黄人6"]
					},
					video: require("@/assets/video.mp4"),
					num:"10000",
					date:new Date(),
					title:"開直播跟大家聊聊～最近因為演唱會密集排練、練歌，年末有好多活動要跟大家見面",

				},
				{
					handle:{
						num:10000,
						list:["张三","李四","王五","小黄人1","小黄人2"],
						good:["小黄人1","小黄人2"],
						love:["小黄人3","小黄人4"],
						xiao:["小黄人5","小黄人6"]
					},
					video: require("@/assets/video.mp4"),
					num:"10000",
					date:new Date(),
					title:"開直播跟大家聊聊～最近因為演唱會密集排練、練歌，年末有好多活動要跟大家見面",

				},
				{
					handle:{
						num:10000,
						list:["张三","李四","王五","小黄人1","小黄人2"],
						good:["小黄人1","小黄人2"],
						love:["小黄人3","小黄人4"],
						xiao:["小黄人5","小黄人6"]
					},
					video: require("@/assets/video.mp4"),
					num:"10000",
					date:new Date(),
					title:"開直播跟大家聊聊～最近因為演唱會密集排練、練歌，年末有好多活動要跟大家見面",

				},
				
			],
			 list:[
                {
                    share:0,
                    goodsNum:0,
                    showEmoji:false,
                    collection:[],
                    me_img:require("@/assets/me.jpg"),
                    name:"枫果果",
                    title:"😘54..+ [ 128 - 131 ] 静默是老板Official ChanneL",
                    video: require("@/assets/video.mp4"),
                }
            ],
		}
	},
	methods:{
		attention(){
			this.me.attention=!this.me.attention
			this.$forceUpdate()
		}
	}
}
</script>
<style scoped>
	.watch-content{
		margin: 20px auto;
	}
	.watch-head{
		background: #fff;
	}
	.list{
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 20px 0;
		border-bottom: 1px solid #eee;
	}
	.watch-head>.text{
			text-align: left;
		    font-size: .9375rem;
			color: var(--secondary-text);
			margin: 0 auto;
			padding: 20px 0;
	}
	.list>.lf{
		display: flex;
		align-items: flex-end;
	}
	.list>.lf .name{
		font-size: 1.5rem;
		color: var(--primary-text);
		font-weight: 700;
		line-height: 1.1667;
	}
	.list>.lf .text{
		color: var(--secondary-text);
		font-size: 1.0625rem;
		margin: 5px 0;
	}
	.list>.lf img{
		width: 100px;
		height: 100px;
		border-radius: 10px;
		margin-right: 15px;
	}
	.list>.lf{
		width: 60%;
	}


	/*列表 */
	.watch-ul{
		display: flex;
		flex-wrap: wrap;
		margin: 0 -4px;
	}
	.watch-ul>li{
		width: 32%;
		padding: 0 4px;
	}
	.watch-ul>li>video{
		width: 100%;
	}
	.watch-ul>li>.title{
		margin: 5px 0;
		cursor: pointer;
	}
	.watch-ul>li>.title:hover{
		text-decoration: underline;
	}
	.watch-ul .handle>img{
		width: 20px;
		height: 20px;
		margin: 0 -2px;
		cursor: pointer;
	}
	.watch-ul .handle{
		margin-top: 10px;
		display: flex;
		align-items: center;
	}
	.watch-ul .handle>span,.watch-ul .text{
		color: var(--placeholder-text);
		font-size: .8125rem;
	}
	.watch-ul .handle>span{
			margin-left: 5px;
			cursor: pointer;
	}
	.icon-primary>span{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon-primary i{
		font-size: 20px;
		margin-right: 5px;
	}

	.book-icon2{
		display:inline-block;
	}
</style>
    