<template>
    <div class="book-w6">
            <el-table :data="list">
                    <el-table-column label="公共主页名称" sortable>
                        <template slot-scope="scope">
                                <div class="pages-item">
                                    <img class="pages-img" :src="scope.row.img" alt="">
                                    <span class="link">{{scope.row.title}}</span>
                                </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="身份">
                        <template>
                            主页管理员
                        </template>
                    </el-table-column>
                    <el-table-column width="50">
                            <template>
                                <i class="el-icon-setting"></i>
                            </template>
                    </el-table-column>
            </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        };
    },
    created() {
         //公共主页
        this.$axios.get("/api/publicPage").then((res) => {
        var data = res.data;
        this.list = data;
        
        });
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
.el-icon-setting{
    font-size: 20px;
    cursor: pointer;
}
.pages-item{
    display: flex;
    align-items: center;
    
}
.pages-img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
</style>
