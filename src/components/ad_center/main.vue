<template>
<div>
	<el-container>
		<el-aside class="el-padding" :style="{height:$store.state.clienHeight+'px'}">
			    <div class="tou-title">管理公共主页</div>
				<div class="tou-text">推广主页</div>
				<div class="el-margin"> <hr> </div>
				<cart-list :list="menu" type="menu" :active="mactive" @getcart="getmenu"></cart-list>
		</el-aside>
		<el-main :style="{height:$store.state.clienHeight+'px'}">
			    <news-feed v-if="state=='news-feed'"></news-feed>
                <business-app-store v-else-if="state=='business-app-store'"></business-app-store>
				<quality v-else-if="state=='quality'"></quality>
				<ad-center v-else-if="state=='ad-center'"></ad-center>
                <edit-list v-else-if="state=='edit-list'"></edit-list>
                <Inbox v-else-if="state=='inbox'"></Inbox>
                <manageHome v-else></manageHome>
		</el-main>
	</el-container>
</div>
</template>

<script>
import cartList from '@/common/cart-list'
import newsFeed from './news_feed'
import editList from './edit'
import businessAppStore from './business_app_store'
import adCenter from './ad_center'
import quality from './quality'
import Inbox from './inbox'
import manageHome from './manageHome'
export default {
    components:{
        Inbox,
        cartList,
        quality,
        adCenter,
        businessAppStore,
        manageHome,
		editList,
        newsFeed
    },
    data(){
        return{
            state:"index",
            mactive:0,
            menu:[
                {
                    icon:"el-icon-s-home",
                    title:"首页",
                    state:"index"
                },
                {
                    icon:"el-icon-s-finance",
                    title:"动态消息",
                    state:"news-feed"
                },
                {
                    icon:"el-icon-s-order",
                    title:"收件箱",
                    state:"inbox"
                },
                
                {
                    icon:"el-icon-message-solid",
                    title:"通知",
                    name:"settings"
                },
                {
                    icon:"el-icon-s-marketing",
                    title:"成效分析",
                    name:"insights"
                   
                },
                {
                    icon:"el-icon-message-solid",
                    title:"业务应用商城",
                    state:"business-app-store"
                },
                {
                    icon:"el-icon-video-camera-solid",
                    title:"发布工具"
                },
                // {
                //     icon:"el-icon-camera-solid",
                //     title:"管理中心"
                // },
                {
                    icon:"el-icon-s-shop",
                    title:"主页内容品质",
                    state:"quality"
                },
                {
                    icon:"el-icon-s-shop",
                    title:"广告中心",
                    state:"ad-center"
                },
                {
                    icon:"el-icon-s-tools",
                    title:"设置"
                }

            ]
        }
    },
	created(){
		var that=this;
        var id=this.$route.query.id;
        var state=this.$route.query.tab;
        if(state){
            this.state=state
            if(state=='news-feed'){
                this.mactive=1
            }else if(state=='inbox'){
                this.mactive=2
            }else if(state=='business-app-store'){
                this.mactive=5
            }else if(state=='quality'){
                this.mactive=7
            }else if(state=='ad-center'){
                this.mactive=8
            }
        }
    },
    watch:{
        $route(to){
            if(to.query.tab){
                 this.state=to.query.tab
            }
           
        }
    },
    methods:{
        getmenu(i,item){
                this.mactive=i
                if(item.name){
                    this.$router.push({name:item.name})
                }else{
                    var id=this.$route.query.id;
                    this.$router.push({path:"/manageHome",query:{id,tab:item.state}})
                }
                
            
            
        }
    }
}
</script>
<style scoped>
 
</style>