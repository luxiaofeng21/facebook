<template>
    <div class="book-w10">
       <div class="book-container">
            <div class="lf">
                <div class="book-title">筛选条件 </div>
                <el-checkbox-group class="el-margin" v-model="filter.checkList">
                      <el-checkbox label="1">线上活动</el-checkbox>
                      <el-checkbox label="2">老少皆宜</el-checkbox>
                </el-checkbox-group>
                <div class="book-title">时间</div>
                <el-radio-group class="el-margin" v-model="filter.radio">
                      <el-radio label="1">所有</el-radio>
                      <el-radio label="2">现在</el-radio>
                      <el-radio label="3">今天</el-radio>
                      <el-radio label="4">明天</el-radio>
                      <el-radio label="5">本周</el-radio>
                      <el-radio label="6">本周末</el-radio>
                      <el-radio label="7">下周</el-radio>
                      <el-radio label="8">下周</el-radio>
                </el-radio-group>
                <div class="book-title">位置</div>
                <el-radio-group class="el-margin" v-model="filter.city">
                      <el-radio label="1">中华人民共和国 · 福建省 · Gulangyu 附近</el-radio>
                      <el-radio label="2">中华人民共和国 · 广东省 · 广东省 广州市</el-radio>
                      <el-radio label="3">中华人民共和国 · 福建省 · Gulangyu</el-radio>
                      <el-radio label="4">中华人民共和国 · 福建省 · 福建省 厦门市</el-radio>
                      <el-radio label="5">加利福尼亚 · 洛杉矶</el-radio>
                      <el-radio label="6">中华人民共和国 · 福建省 · Kulanghsü</el-radio>
                      <el-radio label="7">中西区 · 香港中环</el-radio>
                      <el-radio label="8">中华人民共和国 · 上海市 · 上海</el-radio>
                </el-radio-group>
                <div class="book-title">类别 </div>
                <el-checkbox-group class="el-margin" v-model="filter.types">
                      <el-checkbox label="1">艺术</el-checkbox>
                      <el-checkbox label="2">公益事业</el-checkbox>
                      <el-checkbox label="3">喜剧</el-checkbox>
                      <el-checkbox label="4">手工艺</el-checkbox>
                      <el-checkbox label="5">舞蹈</el-checkbox>
                      <el-checkbox label="6">饮料</el-checkbox>
                      <el-checkbox label="7">电影</el-checkbox>
                      <el-checkbox label="8">健身</el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="rg">
                <el-card class="el-bottom">
                     <div class="book-title">中华人民共和国 · 福建省 · Gulangyu 附近</div>
                </el-card>
                <el-card v-for="(item,index) in list" :key="index" class="discovery" >
                    <img :src="item.img" alt="">
                    <div class="content">
                            <div class="lf">
                                <div class="month">{{item.month}}</div>
                                <div class="day">{{item.day}}</div>
                            </div>
                            <div class="rg">
                                 <router-link :to="{name:'event-item'}"> <div class="title">{{item.title}}</div></router-link>
                                 <span class="date">{{item.date}}</span>
                                 <span>{{item.city}}</span>
                            </div>
                            <el-button size="small"> <i class="el-icon-star-on"></i>有兴趣 </el-button>
                    </div>
                    <div class="text">{{item.text}}</div>
                </el-card>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    date:"2020-06-26",
                    img:require("@/assets/groupBg.png"),
                    month:"6月",
                    day:"26日",
                    title:"International Conference on Information Technology in Education",
                    text:"The 10th International Conference on Information Technology in Education (CITE 2021)Website:https://www.marchconf.org/conference/CITE2021/",
                }
            ],
            filter:{
                types:[],
                city:"1",
                radio:"1",
                checkList:[]
            }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getitem(item){
           
        }
    }
};
</script>

<style scoped >
.discovery img{
    width: 100%;
    height: 200px;
}
.discovery .content{
    display: flex;
    align-items: center;
}
.discovery .content>.rg{
     width: 70%;
}
.discovery .content>.lf{
    margin: 0 10px;

}
.discovery .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 98%;
}
.discovery .content .month{
    color: red;
}
.discovery .content .day{
    font-size: 20px;
}
.discovery .text{
    font-size: 12px;
    color: #666;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #ddd;
}


.el-radio-group .el-radio{
    display: block;
    width: 100%;
    margin-bottom: 10px;
}
</style>
