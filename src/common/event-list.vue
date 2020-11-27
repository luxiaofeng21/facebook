<template>
    <div class="event-list">
            <div class="event-item" v-for="(item,index) in list" :key="index">
                    <img :src="item.img" alt="">
                    <div class="event-content">
                            <div class="event-date">{{item.date}}</div>
                            <div class="event-title">{{item.title}}</div>
                            <div class="event-text">{{item.text}}</div>
                            <div class="event-footer">
                                <div class="book-icon2" @click="getcollect(item)"> <i :class="!item.collect?'el-icon-star-off':'el-icon-star-on'"></i>有兴趣 </div>
                                <div class="book-icon2"> <i class="el-icon-s-promotion"></i> </div>
                            </div>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
    props:["list"],
    methods: {
        getcollect(item){
            item.collect=!item.collect;
        }
    },
}
</script>

<style>
.event-list{
    display: flex;
    padding: 0 -5px;
}
.event-list>.event-item{
    width:23%;
    margin: 0 5px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
}
.event-list>.event-item>img{
    width:100%;
    height: 200px;
    object-fit: cover;
}
.event-title{
    font-weight: 600;
    line-height: 1.1765;
    font-size: 1.0625rem;
}
.event-footer{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 5px;
}
.event-footer>div:first-child{
    width: 70%;
}
.event-footer>div:first-child i{
    margin-right: 5px;
}
.event-content{
    padding: 10px;
}
</style>