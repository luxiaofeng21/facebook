<template>
    <div>
        <div class="tie-item">
            <div class="lf">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide v-for="(item,index) in list" :key="index">
                                <img :src="item.img" alt="">
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                    <div class="tie-head">
                        <div class="lf">
                            <div class="book-icon">
                                <i class="el-icon-close" @click="getback"></i>
                            </div>
                        </div>
                        <div class="rg">
                            <i class="el-icon-position"></i>
                            <i class="el-icon-full-screen"></i>
                        </div>
                    </div>
            </div>
            <div class="rg" :style="{height:$store.state.clienHeight+'px'}">
                   <post-list :list="[info]" url="/api/createComments" url2="/api/comments"></post-list>
            </div>
        </div>
    </div>
</template>

<script>
import  postList from './post-list'
export default {
    components: {
      postList  
    },
    data() {
        return {
            list:[
                {
                    img:require("@/assets/groupBg.png")
                },
                 {
                    img:require("@/assets/me.jpg")
                },
            ],
            swiperOption: {
                lazy: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            info:{}
        };
    },
    created() {
        this.$axios.get("/api/recommended").then(res=>{
            this.info=res[0]
            this.info.showEmoji=true
        })
    },
    mounted() {

    },
    methods: {
        getback(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped >
    .tie-item{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: 111;
    }
    .tie-item>.lf{
        width: 80%;
        height: 100%;
        display: flex;
        background-color: #000;
        position: relative;
        /* margin-top: -60px; */
        
    }
    .tie-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        padding: 10px 0;
        top: 0;
        left: 0%;
        width: 100%;
        z-index: 111;
    }
    .tie-head>*{
        padding: 0 10px;
    }
    .tie-head>.rg{
        font-size: 30px;
        color: #fff;
    }
    .tie-item>.rg{
        width: 20%;
        overflow: auto;
        background-color: #fff;
    }
    
</style>
<style>
   .tie-item  .swiper-slide{
         display: flex;
         justify-content: center;
         align-items: center;
     }
   .tie-item .swiper-slide >img {
      width: auto;
      height: auto;
      max-width: 70%;
      max-height: 100%;
      vertical-align: bottom;
    }
   .tie-item .card-collect{
        position: fixed;
        bottom: 0%;
        background-color: #fff;
    }
  .tie-item  .cart-ti{
        display: none;
    }
    /* .facebook-tou{
        display: none;
    } */
</style>