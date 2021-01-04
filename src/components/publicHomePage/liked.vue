<template>
    <div class="book-main">
        <el-card class="el-bottom">
            <div class="book-title2">公共主页更改内容</div>
            <div>从你点赞以来，这些公共主页更改了名称，这可能意味着公共主页所发布的内容将与以往不同。你可以决定是否继续关注这些公共主页的动态。</div>
            <ul class="link-ul">
                <li v-for="(item,index) in list" :key="index">
                    <div class="flex el-bottom">
                        <el-avatar :src="item.img" :size="80"></el-avatar>
                        <div class="content" style="flex:1">
                            <div class="title">{{item.title}} <i v-if="item.public" class="el-icon-success"></i> </div>
                            <div class="type">{{item.type}}</div>
                            <div class="text">{{item.text}}</div>
                        </div>
                    </div>
                    <div class="flex">
                            <div class="book-icon2" :class="item.checked?'icon-primary2':''" style="flex:1" @click="getkeep(item)"> 
                                <i class="el-icon-s-opportunity"></i>
                                {{item.checked?'已关注':'关注'}}
                            </div>
                            <div class="book-icon2"> <i class="el-icon-more"></i> </div>
                    </div>
                </li>
            </ul>
        </el-card>
        <el-card>
            <div class="flex">
                <span class="book-title2">你点赞或关注的所有公共主页 ({{list.length}})</span>
                <span class="link">排序</span>
            </div>
            <ul class="link-ul">
                <li v-for="(item,index) in list" :key="index">
                    <div class="flex el-bottom">
                        <el-avatar :src="item.img" :size="80"></el-avatar>
                        <div class="content" style="flex:1">
                            <div class="title">{{item.title}} <i v-if="item.public" class="el-icon-success"></i> </div>
                            <div class="type">{{item.type}}</div>
                            <div class="text">{{item.text}}</div>
                        </div>
                    </div>
                    <div class="flex">
                            <div class="book-icon2" :class="item.checked?'icon-primary2':''" style="flex:1" @click="getkeep(item)"> 
                                <i class="el-icon-s-opportunity"></i>
                                {{item.checked?'已关注':'关注'}}
                            </div>
                            <div class="book-icon2"> <i class="el-icon-more"></i> </div>
                    </div>
                </li>
            </ul>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    img:require("@/assets/me.jpg"),
                    title:"渋谷ゆり涉谷由里 Shibuya Yuri",
                    public:true,
                    type:"公众人物",
                    text:"原来的名称是渋谷 ゆり和其他2个",
                    checked:true,
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"渋谷ゆり涉谷由里 Shibuya Yuri",
                    public:true,
                    type:"公众人物",
                    text:"原来的名称是渋谷 ゆり和其他2个",
                    checked:true,
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"渋谷ゆり涉谷由里 Shibuya Yuri",
                    public:false,
                    checked:true,
                    type:"公众人物",
                    text:"原来的名称是渋谷 ゆり和其他2个"
                }
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getkeep(item){
            item.checked=!item.checked
        }
    }
};
</script>

<style scoped >
    .link-ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .link-ul>li{
        display: inline-block;
        margin: 10px 0;
        width: 46%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
    }
    .link-ul>li .content{
        margin-left: 10px;
    }

    .link-ul>li .title{
        font-size: 16px;
        font-weight: bold;
    }
    .link-ul>li .type{
        color: #666;
        font-size: 12px;
        margin-bottom: 10px;
        line-height: 20px;
    }
    .link-ul>li .title>i{
        color: #1877F2;
    }
</style>
