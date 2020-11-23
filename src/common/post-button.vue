<template>
<div class="card-collect"> 
        <div class="me-img">
                <img :src="item.me_img" alt="">
        </div>
        <div class="collect-input">
                <input type="text" @keyup.13="getup(item)" v-model="item.collect_title" placeholder="写评论....">
                <div class="ect-icon">
                    <el-popover 
                        placement="bottom"
                        trigger="click"
                    >
                        <i slot="reference" class="icon-handle ect1"></i>
                        <VEmojiPicker @select="selectEmoji" /> 
                    </el-popover>
                   
                 </div>
                <div class="ect-icon"> <i class="icon-handle ect2"></i></div>
                <div class="ect-icon"> <i class="icon-handle ect3"></i></div>
                <div class="ect-icon"> <i class="icon-handle ect4"></i></div>
                
        </div>
</div>
</template>

<script>

export default {
    props:["item"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    watch:{
        item(newVlaue,oldValue){
            this.$emit("getemoji",newVlaue)
        }
    },
    methods: {
        //发表评论
        getup(item){
              if(this.item.collect_title=='')
               return false
              var nowDate=new Date();
              var date=nowDate.getTime() ;
              item.remark+=1;
              item.collection.push({title:item.collect_title,img:"",date,collect_title:"",collection:[],me_img:item.me_img,name:item.name,showEmoji:false});
              item.collect_title="";
        },
        selectEmoji(emoji) {
           this.item.collect_title+=emoji.data
        },
    }
};
</script>

<style scoped >
.icon-handle{
        display: inline-block;
        width: 18px;
        height: 18px; 
        background-image: url(../assets/xVr-bSpqpnp.png);
    }
  .card-collect{
            border-top: 1px solid #eee;
            display: flex;
            padding: 16px;
    }
    .me-img{
            width: 30px;
            height: 30px;
    }
    .me-img{
            margin-right: 10px;
    }
    .collect-input{
            width: 80%;
            border-radius: 20px;
            background-color: #eee;
            display: flex;
            align-items: center;
            padding: 0 15px;
            position: relative;
    }
    .collect-input>input{
            border: 0;
            outline:none;
            background-color: transparent;
            width: 100%;
    }
    .collect-input .icon-handle{
            width: 16px;
            height: 16px;
    }
     .ect-icon{
        height: 30px;
        width: 40px;
        line-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
    }
    .ect-icon:hover{
            background-color: #ddd;
    }
    .icon-handle.ect1{
            background-position: 0 -464px;
    }
     .icon-handle.ect2{
           background-position: 0 -413px;
    }
     .icon-handle.ect3{
            background-position: 0 -481px;
    }
     .icon-handle.ect4{
            background-position: 0 -532px;
    }
    .el-popover{
        padding: 0 !important;
    }
</style>
