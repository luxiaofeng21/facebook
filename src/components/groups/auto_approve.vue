<template>
    <div>
        <div class="book-null">
                <img src="../../assets/null.svg" alt="">
                <div>你还没有设置自动批准成员的条件。完成设置后，符合条件的申请用户将自动加入小组。</div>
                <el-button class="el-margin" type="primary" @click="dialogVisible=true">设置条件</el-button>
        </div>
        <el-dialog title="自动批准成员加入" :visible.sync="dialogVisible" width="500px">
            <p>请选择自动获批加入的用户需满足的所有条件。我们会告诉你自动获批的成员，方便你检查。你也可以随时关闭这项设置。</p>
            <el-checkbox-group v-model="form.selected" class="book-checkbox">
                    <el-checkbox label="1" disabled>
                        <strong>你还没有为申请加入的用户设置问题</strong>
                    </el-checkbox>
                    <el-checkbox label="2">
                        <el-select  v-model="form.address" placeholder="用户公开资料的所在地距离以下地点不超过" ></el-select>
                    </el-checkbox>
                    <el-checkbox label="3">
                        <strong>是现有小组成员的好友</strong>
                    </el-checkbox>
                    <el-checkbox label="4">
                        <el-select  v-model="form.year" placeholder="加入facebook至少" >
                            <el-option label="3个月" value="1"></el-option>
                            <el-option label="6个月" value="2"></el-option>
                            <el-option label="1年" value="3"></el-option>
                            <el-option label="2年" value="4"></el-option>
                        </el-select>
                    </el-checkbox>
            </el-checkbox-group>
            <span slot="footer" class="el-footer">
                <el-button type="primary">确认</el-button>
                <el-button @click="dialogVisible=false">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible:false,
            form:{
                selected:["1"],
                year:"1",
                address:""
            }
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

<style  >
.book-checkbox .el-checkbox{
    display: block;
    width: 100%;
    margin: 20px 0;
}
.book-checkbox .el-checkbox__label{
    width: 95%;
}
</style>
