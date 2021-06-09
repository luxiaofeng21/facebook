<template>
    <div>
        <div class="el-handle el-bottom">
            <el-input size="small" v-model="filter.search" placeholder="搜索平台" >
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-select size="small" v-model="filter.type">
                <el-option label="所有类别" value="1"></el-option>
                <el-option label="电子商务" value="2"></el-option>
                <el-option label="网站平台" value="3"></el-option>
                <el-option label="客户数据平台" value="4"></el-option>
                <el-option label="客户连接平台" value="5"></el-option>
                <el-option label="CRM 和 营销软件" value="6"></el-option>
                <el-option label="标签管理" value="7"></el-option>
                <el-option label="移动平台" value="8"></el-option>
            </el-select>
        </div>
        <el-card>
            <p>立即绑定已经用来管理客户互动、网站或数据的合作伙伴帐户，就可轻松设置事件，无需编写任何代码。 <span class="link">详细了解</span> </p>
            <div class="tui-list">
                <div class="tui-item" v-for="(item,index) in list" :key="index">
                        <div class="tui-img" >
                            <img :src="item.img" alt="">
                        </div>
                        <div class="content">
                                <div class="title">{{item.title}}</div>
                                <el-button class="el-block" size="medium" type="info"  @click="getban(item)">绑定</el-button>
                        </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {    
            list:[
                {
                    img:require("@/assets/page/01.png"),
                    title:"Appointments for Square"
                },
                 {
                    img:require("@/assets/page/02.png"),
                    title:"Appointy"
                },
                 {
                     img:require("@/assets/page/03.png"),
                    title:"Fresha"
                },
                 {
                    img:require("@/assets/page/04.png"),
                    title:"Genbook BookNow! Application"
                },
                 {
                    img:require("@/assets/page/05.png"),
                    title:"MyTime"
                },
                {
                    img:require("@/assets/page/06.png"),
                    title:"Salon Iris"
                },
                {
                    img:require("@/assets/page/07.png"),
                    title:"Shore Booking"
                },
                {
                    img:require("@/assets/page/08.png"),
                    title:"SimplyBook.me"
                },
                {
                    img:require("@/assets/page/09.png"),
                    title:"Squire"
                },
                {
                    img:require("@/assets/page/10.png"),
                    title:"StyleSeat"
                },
                {
                    img:require("@/assets/page/11.png"),
                    title:"Timely"
                },
                {
                    img:require("@/assets/page/12.png"),
                    title:"Treatwell Connect"
                },
            ],
            filter:{
                search:"",
                type:"1"
            }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getban(item){
            this.info=item;
            this.dialogVisible=true;
        }
    }
};
</script>

<style scoped >
.tui-list{
    margin: 0 -5px;
}
.tui-item {
    display: inline-block;
    width: 19%;
    margin: 0 5px;
    border-radius: 10px;
    overflow: hidden;
     position: relative;
    text-align: center;
    background-color: #fff;
    margin-top: 15px;
   
}
.tui-item .content{
    padding: 10px;
}
.tui-item .title{
    font-weight: bold;
    font-size: 16px;
    margin: 10px 0;
    word-break:break-all;
    min-height: 40px;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.tui-item .text{
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
    line-height: 20px;
}
 .tui-img{
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    margin-top: 20px;
}
.tui-img>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.tui-img>.book-icon{
    position: absolute;
    top: 5%;
    right: -5%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
}
</style>
