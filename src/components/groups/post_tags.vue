<template>
    <div>
        <el-card class="el-bottom">
            <div class="flex">
                <span class="el-tou">帖子话题</span>
                <span class="link" @click="dialogVisible=true"> 创建</span>
            </div>
        </el-card>
        <el-card class="el-bottom">
                <div class="flex">
                    <el-input placeholder="搜索话题" v-model="filter.title">
                        <i slot="sufix" class="el-icon-search"></i>
                    </el-input>
                    <el-select v-model="filter.type">
                        <el-option label="默认" value="1"></el-option>
                        <el-option label="从新到旧" value="2"></el-option>
                        <el-option label="人气高低" value="3"></el-option>
                        <el-option label="字母顺序" value="4"></el-option>
                    </el-select>
                </div>
                <div class="book-null2 el-margin" v-if="list.length<=0">
                    <div class="book-icon" style="margin:auto"> <i class="el-icon-s-marketing"></i>  </div>
                    <div class="book-title2 el-margin" >你的小组还没有任何帖子话题</div>
                    <div class="book-text">首先，请创建帖子话题。</div>
                </div>
                <ul class="tag-ul">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="title">{{item.title}}</div>
                        <div class="text">{{item.num}}篇帖子</div>
                        <div class="hover-icon"> <i class="el-icon-more"></i> </div>
                    </li>
                </ul>
        </el-card>
        <el-dialog title="创建帖子话题" :visible.sync="dialogVisible" width="600px">
             <book-input :book="title"></book-input>
            <span class="el-footer" slot="footer">
                <el-button type="primary" @click="dialogVisible=false" plain >取消</el-button>  
                <el-button type="primary" @click="getsave" :disabled="title.text!=''?false:true">保存</el-button>  
            </span>
        </el-dialog>
    </div>
</template>

<script>
import bookInput from '@/common/book-input'
export default {
    components:{
        bookInput
    },
    data() {
        return {
            title:{
                title:"话题",
                tetx:""
            },
            dialogVisible:false,
            list:[],
            filter:{
                title:"",
                type:"1"
            }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getsave(){
            this.list.push({title:this.title.text,num:0})
            this.$notify({
                title:"成功",
                message:"创建成功",
                type:"success",
                position:"bottom-left"
            })
            this.title.text=""
            this.dialogVisible=false
        }
    }
};
</script>

<style scoped >
.book-null2{
    padding: 100px 50px;
    text-align: center;
}
.book-null2 >.book-icon{
    height: 80px;
    width: 80px;
    font-size: 40px;
}

.tag-ul{
    margin-top: 15px;
    margin-right: -10px;
}
.tag-ul >li{
    border: 1px solid #eee;
    padding:20px 10px;
    border-radius: 5px;
    display: inline-block;
    width: 29.5%;
    margin:0  10px 10px 0;
    position: relative;
}
.tag-ul>li>.hover-icon{
    position: absolute;
    right: 5%;
    top: 5%;
}
.tag-ul>li>.title{
    font-size: 18px;
    width: 85%;
}
.tag-ul>li>.text{
    margin-top: 5px;
    color: #666;
}
</style>
