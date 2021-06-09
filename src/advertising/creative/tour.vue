<template>
    <div class="book-w7 tour">
        <div class="flex">
            <span class="book-title2">入门指南</span>
            <el-button size="small"> <i class="el-icon-back"></i> 返回样图 </el-button>
        </div>
        <el-card class="el-margin">
                <div class="book-title2">培训视频</div>
                <ul class="tour-ul">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="lf"> 
                                <img :src="item.img" alt="">
                        </div>
                        <div class="content">
                                <div class="title">{{item.title}}</div>
                                <div class="text">{{item.text}}</div>
                                <el-button type="info" size="medium"> <i class="el-icon-video-play"></i> 播放视频 </el-button>
                        </div>
                    </li>
                </ul>
        </el-card>
        <el-card>
            <div class="book-title2 el-bottom" > 经常问的问题</div>
            <el-collapse  accordion>
                <el-collapse-item title="如何理解“在广告管理工具中显示/在广告管理工具中隐藏”状态？" name="1">
                    <p>新样图会默认在广告管理工具中隐藏，这表示你仍处于编辑阶段。这些样图不会显示在创意馆之外的任何位置，在不公开的状态下让你继续编辑，直到可用于广告中。</p>
                    <p>当你将样图标记为“在广告管理工具中显示”，样图便会显示在广告帐户中广告系列下广告层级的“样图”版块中。这表示该样图可用于广告，而且广告帐户中的其他用户都可在广告管理工具中看到该样图。</p>
                </el-collapse-item>
                 <el-collapse-item title="协作在新的Creative Hub中如何工作？" name="9">
                    <p>样图会分广告帐户保存。你广告帐户中的其他用户打开创意馆可以看到你制作的样图，但在你将样图标记为“在广告管理工具中显示”之前，他们将不能在广告中使用这些样图。</p>
                    <p>你可以把样图标记为“在广告管理工具中显示”，样图便会“发送”给使用广告管理工具管理你广告帐户的其他用户。样图会显示到广告系列广告层级的“样图”版块。</p>
                </el-collapse-item>
                <el-collapse-item title="在广告管理器中哪里可以找到样机？" name="2">
                    <p>在Ads Manager中，首先选择目标，受众群体和其他设置。在广告级别，选择使用样机（“创建广告”和“使用现有”旁边），然后选择要用于广告的样机。</p>
                </el-collapse-item>
                <el-collapse-item title="我在哪里可以在新的Creative Hub中找到项目/导入链接/视频测试/ PNG下载/预览链接/移动设备预览？" name="3">
                    <p>在Ads 这些功能在新的Creative Hub中不可用。要使用它们，请选择右上角的“切换回以前的版本”。</p>
                    <p>导入链接已不能使用。但将广告样图标记为“在广告管理工具中显示”可起到相同作用，会把你的样图发送到广告管理工具，便能立即用来创建广告。</p>
                </el-collapse-item>
                <el-collapse-item title="我的旧模型在哪里？" name="4">
                    <p>样机仅在创建它们的Creative Hub版本中可用。要查看使用旧的Creative Hub创建的任何模型，请切换回它。这只会切换回您的用户帐户，而不是广告帐户中的其他任何人。</p>
                </el-collapse-item>
                <el-collapse-item title="如何加入广告帐户？" name="5">
                    <p>要加入广告帐户，请参阅 <span class="link">加入业务经理帐户</span> </p>
                </el-collapse-item>
                <el-collapse-item title="在哪里可以创建即时体验/精品栏广告？" name="6">
                    <p>创意馆已不再支持即时体验和精品栏广告。你可以直接在广告管理工具的广告系列中创建即时体验或精品栏广告。即时体验还可以通过公共主页发布工具创建。 </p>
                </el-collapse-item>
                <el-collapse-item title="在如何与他人共享模型？" name="7">
                    <p>拥有您企业帐户的任何人都可以在Creative Hub中看到您的模型。 </p>
                    <p>您可以使用“管理Creative Hub样机”权限邀请新朋友加入您的公司帐户。他们将有权在您的Creative Hub中查看，创建和编辑模型。这使他们无法创建广告系列或查看您的广告系列结果。 </p>
                    <p>选择Creative Hub主页左上方的“邀请”按钮，邀请使用其电子邮件地址的人。接受后，他们将被添加为您的企业帐户中的合作伙伴，并具有在Creative Hub中查看和创建模型的权限。</p>
                    <p>您还可以在业务管理器的业务设置的“人员”部分中管理这些权限。</p>
                </el-collapse-item>
                <el-collapse-item title="为什么在创建样图时看不到某个公共主页？" name="8">
                    <p>要为某个公共主页创建样图，你需要获得该公共主页的特定角色身份。先请求公共主页管理员为你分配公共主页管理员、编辑、版主、广告主或分析员角色，然后你才能在创建样图时从“公共主页”下拉列表中看到并选择该公共主页。</p>
                </el-collapse-item>
            </el-collapse>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    img:require("@/assets/account.png"),
                    title:"如何在Creative Hub中创建模型",
                    text:"了解如何制作您的第一个模型。"
                },
                {
                    img:require("@/assets/ftae_landing.png"),
                    title:"如何在广告中使用样机",
                    text:"了解如何在广告系列中使用样机，在哪里找到它们以及如何与他人共享。"
                },
                {
                    img:require("@/assets/goal9.png"),
                    title:"邀请用户使用创意馆",
                    text:"邀请其他用户到创意馆查看和编辑样图。"
                },
            ]
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
    .tour-ul>li{
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }
    .tour-ul>li>.lf{
        width: 35%;
    }
    .tour-ul>li img{
        width: 100%;
        height: 100px;
        object-fit: cover;
    }
    .tour-ul>li>.content{
        width: 62%;
    }
    .tour-ul>li .title{
        font-size: 16px;
        font-weight: bold;
    }
    .tour-ul>li .text{
        margin: 10px 0;
    }
  
</style>
