<template>
    <div>
        <el-container>
            <el-aside class="el-padding" :style="{height:$store.state.clienHeight +'px'}">
                <div class="tou-title">类别</div>
                <el-input placeholder="搜索小组" v-model="search">
                    <i slot="prefix" class="el-icon-search el-input__icon"></i>
                </el-input>
                <cart-list :list="menu"></cart-list>
            </el-aside>
            <el-main>
                <div class="book-title2 el-bottom">幽默</div>
                <groups-list :list="list"></groups-list>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import cartList from '@/common/cart-list'
import groupsList from '@/common/groups-list'
export default {
    components:{
        groupsList,
        cartList
    },
    data() {
        return {
            menu:[
                {
                    title:"所有类别",
                    icon:"el-icon-tickets"
                },
                {
                    title:"幽默",
                    icon:"el-icon-tickets"
                },
                {
                    title:"科技",
                    icon:"el-icon-tickets"
                },
                {
                    title:"旅行",
                    icon:"el-icon-tickets"
                },
                {
                    title:"二手华",
                    icon:"el-icon-tickets"
                },
                {
                    title:"商业",
                    icon:"el-icon-tickets"
                },
                {
                    title:"风格时尚",
                    icon:"el-icon-tickets"
                },
                {
                    title:"健康",
                    icon:"el-icon-tickets"
                },
                {
                    title:"动物",
                    icon:"el-icon-tickets"
                },
                {
                    title:"运动健身",
                    icon:"el-icon-tickets"
                },
                {
                    title:"教育",
                    icon:"el-icon-tickets"
                },
                {
                    title:"艺术",
                    icon:"el-icon-tickets"
                },
                {
                    title:"娱乐",
                    icon:"el-icon-tickets"
                },
                {
                    title:"宗教信仰与精神信仰",
                    icon:"el-icon-tickets"
                },
                {
                    title:"交际与身份认同",
                    icon:"el-icon-tickets"
                },
                {
                    title:"育儿",
                    icon:"el-icon-tickets"
                },
                {
                    title:"兴趣爱好",
                    icon:"el-icon-tickets"
                },
                {
                    title:"美食靓饮",
                    icon:"el-icon-tickets"
                },
                {
                    title:"车辆和通勤",
                    icon:"el-icon-tickets"
                },
                {
                    title:"公名与社群",
                    icon:"el-icon-tickets"
                },
                {
                    title:"兴趣爱好",
                    icon:"el-icon-tickets"
                },
                
            ],
            list:[],
            search:""
        };
    },
    created(){
        this.$axios.get("/api/getGroups").then(res=>{
            this.list=res.data
        })
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >

</style>
