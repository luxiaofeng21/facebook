<template>
    <div>
        <el-card>
            <div class="book-title">今天</div>
            <ul class="dynamic-ul">
                <li v-for="(item,index) in list" :key="index">
                    <i class="el-icon-user"></i>
                    <div class="content">
                        <div class="title"><strong>{{item.name}}</strong>{{item.title}}</div>
                        <div class="date">{{item.date}}</div>
                        <div class="remark" v-if="item.remark!=''">{{item.remark}}</div>
                    </div>
                    <el-button type="info" @click="getedit(item,index)" plain>{{item.remark==''?'添加备注':'编辑备注'}}</el-button>
                </li>
            </ul>
        </el-card>
        <el-dialog :visible.sync="dialogVisible" title="添加备注" width="600px">
            <el-input v-model="filter.text" placeholder="请补充细节，供其他管理员参考" type="textarea" :rows="4"></el-input>
            <span slot="footer" class="el-footer">
                <el-button  @click="dialogVisible=false" plain>取消</el-button>
                <el-button  @click="getsave" type="primary" >保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mactive:0,
            filter:{
                text:""
            },
            dialogVisible:false,
            list:[
                {
                    name:"张三",
                    title:"添加了成员加入问题：阿松大阿松大阿三。",
                    date:new Date(),
                    remark:""
                },
                {
                    name:"张三",
                    title:"添加了成员加入问题：阿松大阿松大阿三。",
                    date:new Date(),
                    remark:""
                },
                {
                    name:"张三",
                    title:"添加了成员加入问题：阿松大阿松大阿三。",
                    date:new Date(),
                    remark:""
                },
                {
                    name:"张三",
                    title:"添加了成员加入问题：阿松大阿松大阿三。",
                    date:new Date(),
                    remark:""
                },
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getedit(item,index){
            this.filter.text=item.remark
            this.dialogVisible=true;
            this.mactive=index
        },
        getsave(){
            this.list[this.mactive].remark=this.filter.text;
            this.dialogVisible=false;
            this.$notify({
                title:"成功",
                message:"操作成功",
                type:"success",
                position:"bottom-left"
            })
        }
    }
};
</script>

<style scoped >
.dynamic-ul>li{
    display: flex;
    align-items: center;
    padding: 15px 0;
}
.dynamic-ul>li>i{
    margin-right: 10px;
    font-size: 25px;
}
.dynamic-ul>li>.content{
    flex: 1;
}
.dynamic-ul>li>.content>.title{
    font-size: 18px;
}
.dynamic-ul>li>.content>.date{
    font-size: 14px;
    color: #666;
    margin-top: 5px;
}
.dynamic-ul>li>.content>.remark{
    margin-top: 10px;
    border-left: 4px solid #eee;
    padding: 0px 20px;
    font-style: italic;
    color: #666;
}
.dynamic-ul>li>.el-button{
    width: 200px;
}

</style>
