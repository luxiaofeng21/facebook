<template>
    <div>
        <div class="flex">
            <div class="lf">
                <span class="book-title2">账户概览</span>
            </div>
            <el-popover  width="100" >
                <ul class="popver-ul">
                    <li>重置广告管理工具…</li>
                    <li>键盘快捷键</li>
                </ul>
                <el-button size="small" type="info" slot="reference" > <i class="el-icon-more"></i></el-button>
            </el-popover> 
        </div>
        <div class="book-w12">
            <div class="flex">
                <div class="lf">
                    <div class="account-title">{{user.user_name}}，早上好</div>
                    <div class="account-text">以下是你的帐户今天发生的情况。</div>    
                </div>
                <img src="../../assets/account.png" alt="">
            </div>
            <div class="account-content">
                    <div class="lf">
                        <el-card>
                            <div class="flex el-bottom">
                                    <div class="lf">
                                            <span class="book-title">广告系列趋势</span>
                                            <span class="book-text">过去7天</span>
                                    </div>
                                   <goal></goal>
                            </div>
                            <ul class="account-ul">
                                <li v-for="(item,index) in list" :key="index">
                                    <div class="lf">
                                        <div class="img"> <i class="el-icon-picture"></i> </div>
                                        <div class="content">
                                                <div class="title">{{item.title}}</div>
                                                <div class="button">{{item.type}}</div>
                                        </div>
                                    </div>
                                    <div class="cer">
                                        <div>成效</div>
                                        <div class="num"> {{item.num}}</div>
                                    </div>
                                    <div class="rg">
                                            <div class="lf">
                                                <div class="text">{{item.text}}</div>
                                                <div class="link">编辑草稿</div>
                                            </div>
                                            <el-popover  width="300" >
                                                <ul class="popver-ul">
                                                    <li>查看广告系列</li>
                                                </ul>
                                                <div slot="reference" class="hover-icon"> <i class="el-icon-more"></i></div>
                                            </el-popover>   
                                            
                                    </div>
                                </li>
                            </ul>
                        </el-card>
                    </div>
                    <div class="rg">
                        <el-card>
                                <div class="el-flex">
                                        <div class="book-icon"> <i class="el-icon-s-cooperation"></i> </div>
                                        <div class="content">
                                                <div class="book-title">{{user.user_name}}</div>
                                                <div class="book-text">665011544367594</div>
                                        </div>
                                </div>
                                <div class="el-margin  goal-item">
                                    <div class="flex">
                                            <span>投放中的广告系列</span>
                                            <strong class="num">0</strong>
                                    </div>
                                    <div class="flex">
                                            <span>
                                                帐户花费上限
                                                <el-popover trigger="hover" width="300" placement="right">
                                                    <div>帐户当前花费金额会用于计算已花费金额的百分比，可能与帐户在广告发布期间的总花费金额不同</div>
                                                    <i slot="reference" class="el-icon-info"></i> 
                                                </el-popover>     
                                            </span>
                                            <div class="rg">
                                                <strong class="num">￥3.00</strong>
                                                <div class="text">已花费0%</div>
                                            </div>
                                    </div>
                                </div>
                                <div class="goal-item">
                                    <strong >
                                        过去七天 
                                        <el-popover trigger="hover" width="200" placement="right">
                                            <div>不包含今天的数据</div>
                                            <i slot="reference" class="el-icon-info"></i> 
                                        </el-popover>    
                                    </strong>
                                    <div class="flex">
                                            <span>
                                                已花费金额
                                                <el-popover trigger="hover" width="200" placement="right">
                                                    <div>广告的估计花费总额</div>
                                                    <i slot="reference" class="el-icon-info"></i> 
                                                </el-popover>    
                                            </span>
                                            <strong class="num">￥0.00</strong>
                                    </div>
                                    <div class="flex">
                                            <span>
                                                机器学习阶段的广告花费占比
                                                <el-popover trigger="hover" width="300" placement="right">
                                                    <div>在广告管理工具的“投放”栏中状态显示为“学习中”或“学习期数据不足”的广告的估计花费占比。<a href="" class="link">详细了解</a></div>
                                                    <i slot="reference" class="el-icon-info"></i> 
                                                </el-popover>  
                                            </span>
                                            <strong class="num">0%</strong>
                                    </div>
                                </div>
                        </el-card>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import goal from '@/common/goal'
export default {
    components:{
        goal
    },
    data() {
        return {
            list:[
                {
                    title:"新广告系列",
                    text:"This campaign is a draft and has no results yet.",
                    type:"草稿",
                    num:"100"
                },
                 {
                    title:"新广告系列",
                    text:"This campaign is a draft and has no results yet.",
                    type:"草稿",
                    num:"100"
                },
            ],
            user:this.$store.state.user_info
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

<style  scoped >
.account-content{
    display: flex;
    justify-content: space-between;
}
.account-content>.lf{
    width: 64%;
}
.account-content>.rg{
    width: 35%;
}
.account-title{
    font-size: 25px;
}
.account-text{
    font-size: 15px;
    margin-top: 5px;
    color: green;
}

.account-ul>li{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    line-height: 20px;
}
.account-ul>li:hover{
    box-shadow: 0 0 10px #ddd;
}
.account-ul>li .button{
    padding: 2px 5px;
    background-color: #eee;
    display: inline-block;
    border-radius: 50px;
    font-size: 12px;
}

.account-ul>li .img{
    width: 65px;
    height: 65px;
    background-color: #eee;
    margin-right: 10px;
    border-radius: 5px;
    line-height: 65px;
    font-size: 28px;
    color: #666;
    text-align: center;
}
.account-ul>li .title{
    font-weight: bold;
    margin-bottom: 5px;
}
.account-ul>li .num{
    font-weight: bold;
    font-size: 20px;
}
.account-ul>li .text{
    font-size: 12px;
    color: #999;
    margin-right: 10px;
}
.account-ul>li>.cer{
   width: 20%;
}
.account-ul>li>.rg,.account-ul>li>.lf{
    width: 40%;
    display: flex;
    align-items: center;
}
.account-ul>li>.rg{
    justify-content: space-between;
}
.account-ul>li>.rg>.lf{
    flex: 1;
}


.goal-item .text{
    font-size: 12px;
    color: #666;
}
.goal-item .rg{
    text-align: right;
}
.goal-item>*{
    margin: 5px 0;
}
</style>
