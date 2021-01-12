<template>
    <div class="book-w9 el-margin">
        <el-card>
            <div class="flex">
                <span class="book-title2">好友</span>
                <div>
                    <el-button size="small" @click="dialogVisible=true"> <i class="el-icon-plus"> </i>创建名单 </el-button>
                    <router-link :to="{name:'mePage'}"> <el-button size="small"> <i class="el-icon-s-check"></i> 全部好友 </el-button> </router-link> 
                </div>
            </div>
            <ul class="friend-ul">
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </el-card>
        <el-dialog append-to-body :visible.sync="dialogVisible" title="创建新名单" width="600px">
            <p>创建好友名单，轻松分享信息、保持联系。</p>
            <el-form :form="form">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="成员">
                    <el-input type="textarea" v-model="form.content" :rows="3"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button>取消</el-button>
                <el-button type="primary">创建</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    img:require("@/assets/xin.png"),
                    title:"密友"
                },
                {
                    img:require("@/assets/S0U5ECzYUSu.png"),
                    title:"普通朋友"
                },
                {
                    img:require("@/assets/xin.png"),
                    title:"受限用户"
                },
            ],
            form:{
                name:"",
                content:""
            },
            dialogVisible:false
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
.friend-ul>li{
    border-bottom: 1px solid #eee;
    padding: 10px;
    display: flex;
    align-items: center;
}
.friend-ul>li>img{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
</style>
