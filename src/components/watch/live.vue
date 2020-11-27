<template>
<div class="j83agx80 taijpn5t">
	<div class="bglkmn5o">
		<div class="book-card ">
				<div class="book-title2">热门直播视频</div>
				<video-list :list="list"></video-list>
		</div>
	</div>
</div>

</template>
<script>
import videoList from '@/common/video-list'
export default {
	components:{
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