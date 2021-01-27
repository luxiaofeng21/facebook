<template>
	<div>
		<el-container>
			<el-aside class="el-padding" :style="{height:$store.state.clienHeight + 'px'}"> 
					<div class="flex">
						<div class="lf">
							<el-breadcrumb separator="/">
								<el-breadcrumb-item :to="{ path: '/' }">第一个公共主页</el-breadcrumb-item>
								<el-breadcrumb-item>通知</el-breadcrumb-item>
							</el-breadcrumb>
							<div class="tou-title">通知</div>
						</div>
						<div class="hover-icon"> <i class="el-icon-more"></i> </div>
					</div>
					<cart-list :list="msg" type="msg"></cart-list>
			</el-aside>
			<el-main>
				<div class="book-null">
					<img src="../../assets/null4.svg" alt="">    
                    <div class="el-margin">请选择要打开的通知。</div>	
					<div class=" link"> <i class="el-icon-back"></i> 返回我的第一个公共户主页</div>
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
			msg:[
				{
                    imgicon: "sp_nkVxcm_S_R8 flat ",
                    img: require("@/assets/me.jpg"),
                    text: "你有新的推荐好友：",
                    name: "公共主页",
                    date: "5天前",
                    unread: true
				},
				{
                    imgicon: "sp_nkVxcm_S_R8 flat ",
                    img: require("@/assets/me.jpg"),
                    text: "你有新的推荐好友：",
                    name: "公共主页",
                    date: "5天前",
                    unread: true
                },
			]
		};
	},
	created() {

	},
	mounted() {

	},
	methods: {

	}
};
</script>

<style scoped >

</style>
