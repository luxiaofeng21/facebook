<template>
 <ul class="activity-ul">
    <li v-for="(item,index) in list" :key="index" @click="geturl">
        <img :src="item.img" alt="">
        <div class="content">
            <div class="date">{{item.date}}</div>
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.type}}</div>
            <div class="user" v-if="item.user_info">
                <el-avatar :size="25" :src="item.user_info.me_img"> </el-avatar>
                <span>{{item.user_info.user_name}}</span>
            </div>
        </div>
        <el-popover width="300">
              <cart-list :list="group" :active="gactive" size="small" @getcart="gethandle"></cart-list>
             <div slot="reference" v-if="type=='collect'" class="book-icon medium" :class="item.collect?'icon-primary2':''" @click.stop="getcollect(item)"> <i :class="item.collect?'el-icon-star-on':'el-icon-star-off'"></i> </div>
        </el-popover>
       
    </li>
</ul>
</template>
<script>
import  cartList from '@/common/cart-list'
export default {
    components:{cartList},
    props:["list",'type'],
    data(){
        return{
            group:[
                {
                    icon:"el-icon-star-on",
                    title:"有兴趣"
                },
                {
                    icon:"el-icon-success",
                    title:"参加"
                },
                {
                    icon:"el-icon-error",
                    title:"没兴趣"
                },
                {
                    img:require("@/assets/friend2.png"),
                    title:"可见范围：组织者和",
                    arrow:true
                }
                
            ],
            gactive:0
        }
    },
    methods:{
        gethandle(i){
            this.gactive=i
        },
        getcollect(item){
            console.log("🚀 ~ file: activity-list.vue ~ line 23 ~ getcollect ~ item", item)
            item.collect=!item.collect;
            this.$forceUpdate()
        },
         geturl(){
             this.$router.push({name:"event-item"})
        }
    }
}
</script>

<style scoped>
.gactive{
    background-color: #EAF3FF;
}
.activity-ul>li {
    display: flex;
    padding: 10px  5px;
    cursor: pointer;
    border-radius: 5px;
}
.activity-ul>li .content{
    flex: 1;
}
.activity-ul>li img{
    width: 80px;
    height: 60px;
    border-radius: 5px;
    margin-right: 10px;
    object-fit: cover;
}
.activity-ul>li:hover{
    background-color: #eee;
}
.activity-ul>li .date{
    color: red;
    font-size: 12px;
}
.activity-ul>li .title{
    font-weight: bold;
}

.activity-ul>li .user{
    display: flex;
    align-items: center;
    margin-top:5px;
}
.activity-ul>li .user .el-avatar{
    margin-right: 5px;
}
</style>