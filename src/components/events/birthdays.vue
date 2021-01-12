<template>
    <div class="birthdays">
        <el-card class="el-bottom">
            <div class="book-title2 el-bottom">即将过生日的好友</div>
            <ul class="birthdays-ul">
                <li v-for="(item,index) in about" :key="index">
                    <div class="lf">
                        <el-avatar :size="60" :src="item.me_img"></el-avatar>
                        <div class="content">
                            <div class="title">{{item.user_name}}</div>
                            <div class="title">{{item.month}}月{{item.day}}日</div>
                        </div>
                    </div>
                    <el-button type="info" size="small">创建活动</el-button>
                </li>
            </ul>
        </el-card>
        <el-card class="el-bottom" v-for="(item,index) in about" :key="index">
            <div class="book-title2">{{item.month}}月</div>
            <a class="el-block el-margin" href=" " >{{item.user_name}}</a>
            <el-avatar :src="item.me_img" :size="60"></el-avatar>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            about:[],
        };
    },
    created() {
        this.$axios("/api/friends").then(res=>{
            this.about=res
        })
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
.birthdays{
    width: 500px;
    margin:20px auto;
}

.birthdays-ul>li{
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-top: 1px solid #eee;
}
.birthdays-ul>li>.lf{
    display: flex;
    align-items: center;
    flex: 1;
}
.birthdays-ul>li>.lf>.el-avatar{
    margin-right: 10px;
}
</style>
