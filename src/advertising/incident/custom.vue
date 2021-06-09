<template>
    <div>
        <el-card>
                <div class="book-null">
                    <img src="../../assets/ftae_landing.png" alt="">
                    <div class="book-title2">开始创建自定义转化事件</div>
                    <div class="book-text el-margin">借助自定义转化事件，你可以衡量重要成效，还可以针对网页流量和自定义事件进行广告优化。 <span class="link">详细了解 </span> </div>
                     <el-button type="primary">创建自定义转化事件</el-button>
                </div>
               
                <ul class="custom-ul">
                    <li>
                        <div class="title">衡量</div>
                        <div class="text">使用自定义转化事件衡量重要的业务互动，这些互动信息有助于创建自定义受众并将其用于广告投放。</div>
                    </li>
                    <li>
                        <div class="title">优化</div>
                        <div class="text">使用自定义转化事件向最可能采取特定操作的人群投放广告。你可以将自定义事件与标准事件对应，并将其用于优化广告投放。</div>
                    </li>
                    <li>
                        <div class="title">分享</div>
                        <div class="text">与 Facebook 的其他广告帐户或商务管理平台帐户分享自定义转化事件，或与第三方经销商分享，合作投放广告。</div>
                    </li>
                </ul>
        </el-card>
    </div>
</template>

<script>
export default {
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
    .book-null>img{
        width: 500px;
    }
    .custom-ul{
        display: flex;
        justify-content: space-between;
    }
    .custom-ul>li{
        width: 33%;
        margin: 10px 0;
        padding: 10px;
    }
    .custom-ul>li>.title{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
    }
</style>

