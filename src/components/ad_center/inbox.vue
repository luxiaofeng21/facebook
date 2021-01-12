<template>
    <div>
        <el-container>
            <el-aside class="el-padding" :style="{height:$store.state.clienHeight-100+'px'}"> 
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">第一个公共主页</el-breadcrumb-item>
                        <el-breadcrumb-item>inbox</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="tou-title">Inbox</div>
                    <div class="el-margin"> <hr> </div>
                    <div class="book-title2 el-bottm">Messages</div>
                    <cart-list :list="menu" type="menu"></cart-list>
                    <div class="el-margin"> <hr> </div>
                     <div class="book-title2">Comments & More</div>
                    <cart-list :list="menu2" type="menu"></cart-list>
            </el-aside>
            <el-aside class="el-padding">
                <el-input placeholder="search inbox" v-model="filter.name">
                    <i slot="prefix" class="el-icon-search el-input__icon"></i>
                </el-input>
                <div class="book-null">
                        <img src="../../assets/null4.svg" alt="">    
                        <div>没有消息</div>
                </div> 
            </el-aside>
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
            filter:{
                name:""
            },
            menu2:[
                {
                    icon:"el-icon-platform-eleme",
                    title:"facebook"
                },
                {
                    icon:"el-icon-camera-solid",
                    title:"Instagram"
                },
            ],
            menu:[
                {
                    icon:"el-icon-chat-dot-round",
                    title:"所有消息",
                    down:true,
                    children:[
                        {
                            icon:"el-icon-success",
                            title:"Messenger"
                        },
                        {
                            icon:"el-icon-s-promotion",
                            title:"Instagram Direct"
                        },
                    ]
                }
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
