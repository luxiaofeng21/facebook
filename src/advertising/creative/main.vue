<template>
    <div>
        <el-container>
            <book-aside title="创意馆" :menu="menu" :mactive="mactive" :getmenu="getmenu"></book-aside>
            <el-main :style="{height:$store.state.clienHeight + 62 + 'px'}">
                    <index v-if="state=='index'"></index>
                    <tour v-else-if="state=='tour'"></tour>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import  bookAside from '@/common/book-aside'
import  index from './index'
import  tour from './tour'
export default {
    components:{
        tour,
        index,
        bookAside
    },
    data() {
        return {
            state:"index",
            mactive:0,
            menu:[
                {
                    title:"样图",
                    icon:"icon-custom icon1",
                    tab:"index"
                },
                {
                    title:"开始导览",
                    icon:"icon-custom icon2",
                    tab:"tour"
                }
            ],
          
        };
    },
    created() {
         var state=this.$route.query.state; 
         if(state){
             if(state=='tour'){
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
            this.$router.push({name:"advertising_creative",query:{state:item.tab}})
            this.mactive=i;
        }
    }
};
</script>