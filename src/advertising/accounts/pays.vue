<template>
    <div class="book-w6">
            <el-card>
                <div class="pay-title">每日摘要</div>
                <div class="pay-date">
                    <div class="lf"> 
                        <div class="title">2021年1月27日</div>
                        <div class="text">系统将从你的余额中扣除每日花费。</div>
                    </div>
                    <div class="rg"> 
                        <div class="title">￥3.00</div>
                        <div class="text">可用余额 <i class="el-icon-info"> </i> </div>
                    </div>
                </div>
            </el-card>
            <el-card class="el-margin">
                <div class="pay-title">
                    <span>支付方式</span>
                    <el-button @click="dialogVisible=true" size="small" type="info">充值</el-button>
                </div>
                <div class="pay-item">
                        <div class="lf">
                             <div class="img">
                                 <i class="el-icon-s-finance"></i>
                             </div>
                             <span>预付余额：¥3.00</span>
                        </div>
                </div>
                <div class="pay-item">
                        <div class="lf">
                            <div class="img">
                                  <img src="../../assets/pay.png" alt="">
                             </div>
                             <span>支付宝</span>
                        </div>
                        <div class="rg">
                                <el-button @click="dialogVisible=true" size="small" type="info">充值</el-button>
                                <el-button size="small" type="info">移除</el-button>
                        </div>
                </div>
            </el-card>
            <el-card class="el-bottom">
                <div class="flex">
                    <strong>账单和收据记录</strong>
                    <el-button size="small" type="info">查看收据</el-button>
                </div>
            </el-card>
            <div class="flex">
                <span></span>
                <span>需要帮助？<span class="link">请联系我们</span></span>
            </div>
            <el-dialog title="充值" :visible.sync="dialogVisible" width="600px">
                    <div class="book-title2 el-bottom">充值金额</div>
                    <el-input placeholder="金额" v-model="info.name"></el-input>
                    <p class="book-text">你的新预付余额将为¥133.00</p>
                    <div class="book-title2 el-margin">添加支付方式</div>
                    <el-radio-group v-model="info.type">
                        <el-radio label="1">借记卡或信用卡</el-radio>
                        <el-radio label="2">支付宝</el-radio>
                        <el-radio label="3">广告抵用金</el-radio>
                    </el-radio-group>
                    <span slot="footer">
                         <el-button @click="dialogVisible=false">关闭</el-button>
                         <el-button type="primary" >充值</el-button>
                    </span>
            </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible:false,
            info:{
                type:"2",
                name:""
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

<style scoped >
    .pay-item{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }
    .pay-item>.lf{
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .pay-item .img{
        width: 80px;
        height: 30px;
        margin-right: 10px;
    }
    .pay-item .img>*{
        width: 100%;
        height: 100%;
        display: inline-block;
        text-align: center;
        font-size: 20px;
        color: #fff;
    }
    .pay-item .img>i{
        background-color: #4CBBA6;
          border-radius: 5px;
          line-height: 30px;
    }
    .pay-date{
        display: flex;
    }
    .pay-date>.lf{
        width: 70%;
        padding: 10px;
        background-color: #F5F7F8;
    }
    .pay-date .title{
        font-weight: bold;
        font-size: 20px;
    }
    .pay-date>.rg{
        flex: 1;
        text-align: center;
    }
    .pay-title{
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
