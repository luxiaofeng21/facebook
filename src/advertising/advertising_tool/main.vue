<template>
    <div>
        <el-container>
            <book-aside title="广告帐户设置" :menu="menu" :mactive="mactive" :getmenu="getmenu"></book-aside>
            <el-main>
                    <index v-if="state=='index'"></index>
                    <accounts v-else-if="state=='account'"></accounts>
            </el-main>
            <div class="aside-rg">
                    <i></i>
            </div>
        </el-container>
    </div>
</template>

<script>
import  bookAside from '@/common/book-aside'
import  index from './index'
import  accounts from './accounts'
export default {
    components:{
        accounts,
        index,
        bookAside
    },
    data() {
        return {
            state:"index",
            mactive:1,
            menu:[
                {
                    title:"账户概览",
                    icon:"el-icon-s-shop",
                    tab:"account"
                },
                {
                    title:"广告系列",
                    icon:"el-icon-s-help",
                    tab:"index"
                }
            ],
          
        };
    },
    created() {
         var state=this.$route.query.state; 
         if(state){
             if(state=='index'){
                this.mactive=1
            }else{
                this.mactive=0
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
            this.$router.push({name:"advertising",query:{state:item.tab}})
            this.mactive=i;
        }
    }
};
</script>