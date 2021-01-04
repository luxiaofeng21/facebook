<template>
    <div>
        <div class="book-null">
                <img src="../../assets/null4.svg" alt="">
                <div>无审核提醒</div>
                <div class="book-text el-margin">没有帖子或评论触发你设置的提醒。</div>
                <el-button type="primary" @click="dialogVisible=true">编辑提醒</el-button>
        </div>
        <el-dialog title="审核提醒" :visible.sync="dialogVisible" width="600px">
            <div v-if="sactive==0">
                    <div class="flex">
                        <span class="book-title">关键词</span>
                        <span class="link" @click="sactive=1">创建</span>
                    </div>
                    <p>设置关键词提醒后，每当成员用到关键词，这里会显示提醒。你将能审核包含关键词的内容并采取措施。</p>

                    <el-divider></el-divider>

                    <div class="flex">
                        <span class="book-title">互动</span>
                        <span class="link" @click="sactive=2">创建</span>
                    </div>
                    <p>在小组帖子或评论获得热烈响应时接收提醒。</p>
            </div>
            <div v-else-if="sactive==1">
                    <p>有成员在小组中使用特定字词或短语时，关键词提醒功能会通知你。</p>
                    <div class="flex">
                        <el-input v-model="keyword" placeholder="添加关键词"></el-input>
                    </div>
                   
            </div>
            <div v-else>
                    <div class="el-bottom">
                        <div class="book-title">内容</div>
                        <p>你希望收到关于哪类内容的提醒？</p>
                        <el-select v-model="alert.content">
                            <el-option label="Posts" vlaue="1"></el-option>
                            <el-option label="Comments" vlaue="2"></el-option>
                        </el-select>
                    </div>
                    <div>
                        <div class="book-title">互动</div>
                        <p>你希望收到哪类帖子互动的提醒？</p>
                        <el-select v-model="alert.type">
                            <el-option label="评论" vlaue="1"></el-option>
                            <el-option label="所有心情" vlaue="2"></el-option>
                            <el-option label="赞" vlaue="3"></el-option>
                            <el-option label="大爱" vlaue="4"></el-option>
                            <el-option label="抱抱" vlaue="5"></el-option>
                            <el-option label="笑趴" vlaue="6"></el-option>
                            <el-option label="哇" vlaue="7"></el-option>
                            <el-option label="心碎" vlaue="8"></el-option>
                            <el-option label="怒" vlaue="9"></el-option>
                        </el-select>
                    </div>
            </div>
             <span slot="footer" class="el-footer" v-if="sactive!=0">
                  <el-button @click="sactive=0" >返回上一页</el-button> 
                  <el-button type="primary">保存</el-button>
             </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alert:{
                content:"",
                type:""
            },
            keyword:"",
            sactive:0,
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

</style>
