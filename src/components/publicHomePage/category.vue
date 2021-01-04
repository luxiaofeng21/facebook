<template>
    <div>
        <div class="el-bottom tou-title">为你推荐</div>
        <ul class="category-ul">
            <li v-for="(item,index) in list" :key="index">
                <img :src="item.img" alt="">
                <div class="icon"> <i class="el-icon-close"></i> </div>
                <div class="content">
                    <div class="el-flex">
                         <div class="lf">
                             <el-avatar :src="item.user_info.me_img"></el-avatar>
                         </div>
                         <div class="rg">
                              <div class="title">{{item.user_info.title}}</div>
                              <div class="text">{{item.user_info.text}}</div>
                              <div class="text" v-if="item.user_info.good">{{item.user_info.good}}位用户赞了</div>
                         </div>
                    </div>
                    <div class="book-icon2 el-margin" :class="item.checked?'icon-primary':''" @click="getgood(item)"> 
                        <img src="../../assets/good.png" alt=""> {{item.checked?'已赞':'赞'}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    img:require("@/assets/groupBg.png"),
                    user_info:{
                        me_img:require("@/assets/me.jpg"),
                        title:"撒大噶是几号大概哈",
                        text:"哈哈哈哈",
                        good:12,
                    },
                     checked:false
                },
                {
                    img:require("@/assets/groupBg.png"),
                    checked:false,
                    user_info:{
                        me_img:require("@/assets/me.jpg"),
                        title:"撒大噶是几号大概哈",
                        text:"哈哈哈哈",
                        good:12
                    }
                },
                {
                    img:require("@/assets/groupBg.png"),
                    checked:false,
                    user_info:{
                        me_img:require("@/assets/me.jpg"),
                        title:"撒大噶是几号大概哈",
                        text:"哈哈哈哈",
                        good:12
                    }
                },
                {
                    img:require("@/assets/groupBg.png"),
                    checked:false,
                    user_info:{
                        me_img:require("@/assets/me.jpg"),
                        title:"撒大噶是几号大概哈",
                        text:"哈哈哈哈",
                        good:12
                    }
                },
                {
                    img:require("@/assets/groupBg.png"),
                    checked:false,
                    user_info:{
                        me_img:require("@/assets/me.jpg"),
                        title:"撒大噶是几号大概哈",
                        text:"哈哈哈哈",
                        good:12
                    }
                },

            ]
        }
    },
    methods:{
        getgood(item){
            item.checked=!item.checked
        }
    }
}
</script>


<style scoped>
.category-ul{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
}
.category-ul>li{
    background-color: #fff;
    width: 19%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 5px;
}
.category-ul>li>img{
    width: 100%;
    height: 150px;
    object-fit: cover;
}
.category-ul>li>.content{
    padding: 10px;
}
.category-ul>li .icon{
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
    position: absolute;
    right: 5%;
    top: 5%;
    background-color:rgba(0, 0, 0, 0.5);
}
.category-ul>li .title{
    font-size: 20px;
    font-weight: bold;
}
</style>