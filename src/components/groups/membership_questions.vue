<template>
    <div>
        <div v-if="list.length>0">
             <el-card class="el-bottom">
                <div class="flex">
                    <span class="book-title">成员加入问题</span>
                    <span class="link" @click="dialogVisible=true">创建</span>
                </div>
            </el-card>
            <el-card class="el-bottom" v-for="(item,index) in list" :key="index">
                <div>问题{{index+1}}</div>
                <strong>{{item.title}}</strong>
                <div class="book-checkbox" v-for="(v,i) in item.issue" :key="i">
                    <el-checkbox disabled>
                        {{v}}
                    </el-checkbox>
                </div> 
                <div class="book-footer">
                    <el-button type="primary" size="medium" plain>编辑</el-button>
                    <el-button type="info" size="medium" plain>删除</el-button>
                </div>
            </el-card>
        </div>
       
        <div class="book-null" v-else>
                <img src="../../assets/null2.svg" alt="">
                <div>要求申请加入小组的用户回答最多 3 个问题。只有管理员和版主能看到回答。</div>
                <el-button class="el-margin" type="primary" @click="dialogVisible=true">添加问题</el-button>
        </div>
        <el-dialog :visible.sync="dialogVisible" title="编辑问题" width="600px">
                <div class="flex">
                    <el-input v-model="filter.title" placeholder="提问...."></el-input>
                    <el-select v-model="filter.type">
                        <el-option label="多选题" value="1"></el-option>
                        <el-option label="选择题" value="2"></el-option>
                        <el-option label="文字题" value="3"></el-option>
                    </el-select>
                </div>
                <ul class="questions-ul">
                    <li v-for="(item,index) in filter.issue" :key="index">
                        <el-checkbox checked disabled>
                            <el-input v-model="filter.issue[index]" placeholder="添加选项"></el-input>
                        </el-checkbox>
                        <i @click="issue.splice(index,1)" class="el-icon-close"></i>
                    </li> 
                </ul>
                <div class="el-margin">
                    <div class="el-success" @click="getadd">
                        <i class="el-icon-plus"></i><span>添加问题</span>
                    </div>
                </div>
                <span class="el-footer">
                    <el-button @click="dialogVisible=false">取消</el-button>
                    <el-button @click="getsave" type="primary" :disabled="filter.issue.length>1?false:true">保存</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[],
            filter:{
                title:"",
                type:"1",
                issue:[]
            },
            dialogVisible:false
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        //添加选项
        getadd(){
            this.filter.issue.push("")
        },
        //保存
        getsave(){
            var info=Object.assign({},this.filter);
            this.list.push(info)
            this.filter.type="1"
             this.filter.title="";
            this.filter.issue=[]
            this.dialogVisible=false
        }
    }
};
</script>

<style scoped >
    .questions-ul>li{
        margin: 10px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
    .questions-ul>li>.el-checkbox{
        flex: 1;
    }
   
    .questions-ul>li>i{
        font-size: 18px;
        cursor: pointer;
        margin-left: 10px;
    }
    .book-checkbox{
        margin: 10px 0;
    }
</style>
<style>
     .questions-ul>li .el-checkbox__label{
        width: 90%;
    }
</style>