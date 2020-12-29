<template>
    <div >
        <el-card>
            <div class="flex">
                <el-input size="medium" v-model="filter.name" class="book-inline" placeholder="按姓名搜索">
                   <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <el-select size="medium" v-model="filter.user" placeholder="推荐用户">
                    <el-option v-for="(item,index) in recommend" :label="item.label" :value="item.value" :key="index"></el-option>
                </el-select>
            </div>
        </el-card>
        <div class="book-null">
                <img src="../../assets/null.svg" alt="">
                <div>没有待定成员</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter:{
                name:"",
                user:""
            },
            recommend:[
                {
                    label:"推荐用户",
                    value:1
                },
                {
                    label:"从新到旧",
                    value:2
                },
                {
                    label:"按名排序",
                    value:3
                },
                {
                    label:"按姓排序",
                    value:4
                },
                {
                    label:"加入facebook的日期",
                    value:5
                },
                {
                    label:"加入小组数量",
                    value:6
                },

            ]
        };
    },
    created() {

    },
    mounted() {
        document.height
    },
    methods: {

    }
};
</script>

<style scoped >

</style>
