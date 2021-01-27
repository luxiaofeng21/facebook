<template>
    <div>
        <el-container>
            <book-aside title="广告帐户设置" :menu="menu" :mactive="mactive" :getmenu="getmenu"></book-aside>
            <el-main :style="{height:$store.state.clienHeight + 62 +'px'}">
                    <index v-if="state=='index'"></index>
                    <pages v-else-if="state=='pages'"></pages>
                    <pays v-else-if="state=='pays'"></pays>
                    <notifications v-else-if="state=='notifications'"></notifications>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import  index from './index'
import  pages from './pages'
import  pays from './pays'
import  notifications from './notifications'
import  bookAside from '@/common/book-aside'
export default {
    components:{
        notifications,
        pages,
        pays,
        index,
        bookAside
    },
    data() {
        return {
            state:"index",
            mactive:0,
            menu:[
                {
                    title:"广告账户",
                    icon:"el-icon-s-help",
                    tab:"index"
                },
                {
                    title:"公共主页",
                    img:require("@/assets/life11.png"),
                    tab:"pages"
                },
                {
                    title:"支付设置 ",
                    icon:"el-icon-bank-card",
                    tab:"pays"
                },
                {
                    title:"通知",
                    img:require("@/assets/diqiu.png"),
                    tab:"notifications"
                },
            ],
          
        };
    },
    created() {
         var state=this.$route.query.state; 
         if(state){
             if(state=='index'){
                this.mactive=0
            }else if(state=='pages'){
                this.mactive=1
            }else if(state=='pays'){
                this.mactive=2
            }else if(state=='notifications'){
                this.mactive=3
            }
            this.state=state
         }
        
    },
    watch:{
        $route(to,form){   
            var state=to.query.state; 
            this.state=state
        }
    },
    methods: {
        getmenu(i,item){
            this.$router.push({name:"advertising_account",query:{state:item.tab}})
            this.mactive=i;
        }
    }
};
</script>