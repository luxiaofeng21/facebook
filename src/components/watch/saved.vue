<template>
<div  class="el-w10">
		<div class="book-card ">
				<div class="book-title2"> 视频收藏 </div>
				
				<video-list :list="list"  type="list"></video-list>
				
		</div>
</div>

</template>
<script>
import videoList from '@/common/video-list'
import postList from '@/common/post-list'
export default {
	components:{
		postList,
		videoList
	},
	data(){
		return {
			list:[
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0
				},
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0
				},
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0
				},
				{
					img:require("@/assets/bg.jpg"),
					me_img:require("@/assets/me.jpg"),
					title:"TASTY MONEY Live 2020-11-27 | 港股財經直播 | 即市分析",
					name:"陳亮元",
					goodsNum:0	
				},
			]
		}
	}
}
</script>