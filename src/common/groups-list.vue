<template>
<div class="groups-list">
    <swiper class="swiper" :options="swiperOption">
            <swiper-slide  v-for="(item,index) in list" :key="index"  class="groups-item" :class="size" >
             <img :src="item.img" alt="" @click="getitem(item)">
            <div class="groups-con">
                    <div class="groups-title">{{item.title}} </div>
                    <div class="groups-text">{{item.num}}位成员 • 单日发帖：{{item.pian}} 篇  </div>
                    <div class="groups-city"> <i class="el-icon-location"></i> <span>在你的地区人气很高</span> </div>
                    <div class="book-icon2" @click="getitem(item)">加入小组</div>
                    <div class="groups-icon" @click="list.splice(index,1)"> <i class="el-icon-close"></i> </div>
            </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</div>
</template>

<script>
export default {
    props: ["list","size","num"],
    data() {
        return {
            swiperOption: {
                slidesPerGroup: this.num,
                slidesPerView:  this.num,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getitem(item){
            this.$router.push({name:"groups_item",query:{id:item.id}})
        }
    }
};
</script>

<style scoped>
.groups-list {
    display: flex;
    width: 100%;
    margin: 0 -5px;
}

.groups-item{
    border-radius: 5px;
    overflow: hidden;
    width: 24.5%;
    margin: 5px;
    background-color: #fff;
    position: relative;
}

.groups-item.big{
    width: 50%;
}
.groups-item>img{
    width: 100%;
    height: 180px;
    margin:0;
    padding: 0;
    object-fit: cover;
}
.groups-con{
    padding: 5px 10px;
    padding-bottom: 16px;
}

.groups-title{
   font-size: 1.0625rem;
   font-weight: 600;
}
.groups-text{
    color: var(--secondary-text);
    font-size: .9375rem;
    margin-top: 2px;
}
.groups-city{
    margin: 10px 0;
    font-size: .9rem;
}
.groups-city>i{
    font-size: 20px;
}

.groups-icon{
    position: absolute;
    right: 5%;
    top: 5%;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 50%;
    color: #fff;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
</style>
