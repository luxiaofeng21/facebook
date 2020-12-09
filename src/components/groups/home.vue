<template>
    <div>
        <el-container>
            <el-aside>
                <div class="menu-lf">
                    <cart-list :list="menu" :active="mactive" @getcart="getmenu"></cart-list>
                </div>
            </el-aside>
            <el-main v-if="active>=0">
                    <book-friend :me_ul="me_ul"></book-friend>
            </el-main>
             <div class="book-null" v-else>
                    <img src="../../assets/null.svg" alt="">
                    <div>选择用户姓名来预览 TA 的个人主页。</div>
            </div>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mactive:0,
            menu:[
                {
                    icon:"el-icon-s-home",
                    title:"首页"
                }
            ],
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
