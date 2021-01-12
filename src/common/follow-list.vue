<template>
 <ul class="follow-ul" :class="size">
        <li v-for="(item,index) in list" :key="index">
            <div class="follow-img">
                    <img :src="item.img" alt="">
                    <div class="follow-look">
                            <i class="el-icon-view"></i>{{item.look}}
                    </div>
            </div>
            <div class="follow-content">
                <div class="follow-title">{{item.title}}</div>
                <div class="book-icon2"><i class="el-icon-circle-plus"></i> 关注</div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props:["list","size"]
}
</script>
<style scoped>
    .follow-ul{
        margin:0  -5px;
        display: flex;
    }
    .follow-ul>li{
        flex-grow: 1;
        width: 10%;
        margin: 4px;
    }
    .follow-ul .follow-img{
        position: relative;
    }
    .follow-ul .follow-img .follow-look{
        position: absolute;
        top: 3%;
        left:3%;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        color: #fff;
        padding: 4px 10px;
        display: flex;
        align-items: center;
    }
    .follow-look i{
        font-size: 16px;
        margin-right: 5px;
    }
    .follow-ul .follow-img>img{
        width: 100%;
        height: 235px;
        object-fit: cover;
    }
    .follow-title{
        margin-bottom: 20px;
        line-height: 1.2rem;
    }
    .follow-content{
        background: #fff;
        padding: 10px;
        margin-top: -5px;
    }
    .book-icon2 i{
        margin-right: 5px;
    }
    .medium>li{
        width: 15.5%;
    }
</style>