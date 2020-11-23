<template>
    <div class="share-list" :class="type">
        <div class="share-item" v-for="(item,index) in list" :key="index">
            <div class="lf">
                <img :src="item.img" alt="">
            </div>
            <div class="rg">
                <div class="share-title">{{item.title}}</div>
                <div class="share-text">{{item.text}}</div>
                <div class="share-text">{{item.date}}</div>
            </div>
            <div v-if="type=='friend'" class="book-icon2 icon-checked">加为好友</div>
        </div>
    </div>
</template>

<script>
export default {
    props:["list","type"],
    data() {
        return {

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
    .share-list{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 8px -8px;
    }
    .share-item{
        width: 44%;
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        padding: 16px;
        margin:0 8px 8px ;
        border-radius: 10px;
        cursor: pointer;
    }
    .share-item>.rg>*:hover{
        text-decoration: underline;
    }
    .share-item>.lf{
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
    .share-item>.rg{
        flex: 1;
    }
    .share-item>.lf>img{
        width: 100%;
        height: 100%;
         border-radius: 8px;
         object-fit: cover;
    }
    .share-title{
        color: var(--primary-text);
        font-size: 1.0625rem;
        font-weight: 600;
        line-height: 1.1rem;
        margin-bottom: 5px;
    }
    .share-text{
        color: var(--secondary-text);
        font-size: .8125rem;
    }

    /*垂直布局 */
     .share-list.vertical .share-item{
        display: block;
        width: 22.9%;
        padding: 0;
        border: 0;
    }
    .share-list.vertical .share-title{
        font-weight: normal;
    }
    .share-list.vertical .share-item>.lf{
        width: 100%;
        height: 180px;
        margin-bottom: 10px;
    }
    .share-list.vertical .share-item>.lf >img{
        border-radius: 5px;
    }
</style>
