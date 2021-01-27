<template>
    <div class="book-w12">
            <div class="lf">
                <el-card class="el-bottom">
                       <strong >所有广告帐户通知</strong> 
                       <div class="flex">
                            <div class="lf">
                                 <div >所有邮件和 Facebook 通知</div>
                                 <div >如果不希望接收有关广告表现、预算、排期等内容的任何通知，关闭这一项即可。</div>
                            </div>
                            <el-switch v-model="filter.msg"></el-switch>
                       </div>
                </el-card>
                <el-card>
                        <strong>广告邮件通知</strong>
                        <p>Facebook 广告团队会向你发送和广告帐户相关的邮件通知以及营销动态，以便你了解情况。即使关闭所有通知，我们有时还是会向你发送帐户相关的重要更新。</p>
                        <p>如需更改其他广告帐户的通知设置，你需要分别编辑每个广告帐户。如果广告帐户已加入商务管理平台，你将在商务管理平台中管理这些帐户的邮箱设置。</p>
                        <p>Facebook 将通过以下邮箱联系你： <strong>543787366@qq.com </strong> <span class="link">(更改邮箱)</span> </p>
                        <el-checkbox-group v-model="filter.email">
                                <el-checkbox label="1">
                                        <div>支付已完成</div>
                                        <div class="notify-text">每次向支付方式扣费时会收到邮件通知。这项通知无法关闭。</div>
                                </el-checkbox>
                                <el-checkbox label="2">
                                        <div>宣传信息和产品更新</div>
                                        <div class="notify-text">每次向支付方式扣费时会收到邮件通知。这项通知无法关闭。</div>
                                </el-checkbox>
                                <el-checkbox label="3">
                                        <div>宣传信息和产品更新</div>
                                        <div class="notify-text">Facebook 定期发送的邮件，包含新广告功能、优化技巧、政策更新等实用信息。</div>
                                </el-checkbox>
                                <el-checkbox label="4">
                                        <div>广告创建提醒</div>
                                        <div class="notify-text">提醒你有未完成广告的邮件。</div>
                                </el-checkbox>
                                <el-checkbox label="5">
                                        <div>广告审核意见</div>
                                        <div class="notify-text">你收到的邮件中包含获批和未获批的广告审核意见。</div>
                                </el-checkbox>
                                <el-checkbox label="6">
                                        <div>动态广告提醒</div>
                                        <div class="notify-text">动态广告帐户出现问题时发送邮件通知。</div>
                                </el-checkbox>
                                <el-checkbox label="7">
                                        <div>测试和调研更新</div>
                                        <div class="notify-text">包含广告组 A/B 测试报告和更新的邮件。</div>
                                </el-checkbox>
                        </el-checkbox-group>
                </el-card>
            </div>
            <div class="rg">
                <el-card class="el-bottom">
                        <strong>Messenger 广告通知</strong>
                        <p>控制 Messenger 接收的广告通知：</p>
                        <el-checkbox-group v-model="filter.messenger">
                                <el-checkbox label="1">
                                        <div>支付已完成</div>
                                        <div class="notify-text">广告更新、发布准则和建议</div>
                                </el-checkbox>
                        </el-checkbox-group>
                </el-card>
                <el-card class="el-bottom">
                        <strong>Facebook 广告通知</strong>
                        <p>控制 Messenger 接收的广告通知：</p>
                        <el-checkbox-group v-model="filter.facebook">
                                <el-checkbox label="1">广告通过审核</el-checkbox>
                                <el-checkbox label="2">广告未通过审核</el-checkbox>
                                <el-checkbox label="3">帐户已结清</el-checkbox>
                                <el-checkbox label="4">充值成功</el-checkbox>
                                <el-checkbox label="5">帐户余额已用完</el-checkbox>
                                <el-checkbox label="6">帐户余额不足</el-checkbox>
                                <el-checkbox label="7">支付已完成</el-checkbox>
                                <el-checkbox label="8">测试和调研更新</el-checkbox>
                        </el-checkbox-group>
                </el-card>
                <el-card>
                        <div class="el-bottom">要保存通知更改吗？</div>
                        <el-button type="info">放弃更改</el-button>
                        <el-button type="primary">保存更改</el-button>
                </el-card>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter:{
                msg:true,
                email:[],
                messenger:[],
                facebook:[]
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
.book-w12{
    display: flex;
    justify-content: space-between;
}
.book-w12>*{
    width: 49%;
}
.el-checkbox{
    display: flex;
    width: 100%;
    margin-bottom: 10px;
}

.notify-text{
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}
</style>
