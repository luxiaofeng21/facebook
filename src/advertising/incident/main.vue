<template>
    <div>
        <el-container>
            <book-aside title="事件管理工具" :menu="menu" :mactive="mactive" :getmenu="getmenu"></book-aside>
            <el-main>
                    <index v-if="state=='index'"></index>
                    <custom v-else-if="state=='custom'"></custom>
                    <Partner v-else-if="state=='Partner'"></Partner>
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
import  custom from './custom'
import  Partner from './Partner'
export default {
    components:{
        Partner,
        custom,
        index,
        bookAside
    },
    data() {
        return {
            state:"index",
            mactive:0,
            menu:[
                {
                    title:"数据源",
                    icon:"icon-custom icon1",
                    tab:"index"
                },
                {
                    title:"自定义转化事件",
                    icon:"icon-custom icon2",
                    tab:"custom"
                },
                {
                    title:"合作伙伴集成",
                    icon:"icon-custom icon3",
                    tab:"Partner"
                }
            ],
          
        };
    },
    created() {
         var state=this.$route.query.state; 
         if(state){
             if(state=='custom'){
                this.mactive=1
            }else if(state=='Partner'){
                this.mactive=2
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
            this.$router.push({name:"incident",query:{state:item.tab}})
            this.mactive=i;
        }
    }
};
</script>