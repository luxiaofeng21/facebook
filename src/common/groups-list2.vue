<template>
<div class="me-group">
    <div class="me-group-item" v-for='(item,index) in list' :key="index"  @click="getgroups(item)">
            <div class="lf">
                <img :src="item.img" alt="">
            </div>
            <div class="rg">
                    <div class="me-group-title">{{item.title}}</div>
                    <div class="me-group-date">上次发帖：{{getTimeDistance(item.date)}}</div>
                    <slot></slot>
            </div>
    </div>
</div>
</template>

<script>
export default {
    props:["list"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getgroups(item){
            this.$emit("getgroups",item)
        }
    }
};
</script>

<style scoped >
    .me-group-item{
        display: flex;
        padding: 10px 16px;
        cursor: pointer;
        align-items: center;
        position: relative;
    }
    .me-group-item>.lf{
        width: 60px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid #eee;
        margin-right: 10px;
    }
    .me-group-item>.lf>img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .me-group-item:hover{
        background-color: #eee;
    }
    .me-group-title{
      font-weight: 600;
      font-size: .9375rem;
      margin-bottom: 5px;
    }
    .me-group-date{
        color: var(--secondary-text);
        line-height: 1.2308;
        font-size: .8125rem;

    }
    .me-group-item>.rg>i{
        font-size: 20px;
        position: absolute;
        right: 4%;
        top: 50%;
        margin-top: -10px;
    }
</style>
