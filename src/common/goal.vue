<template>
    <span>
        <el-button type="success" size="medium" @click="dialogVisible=true">
            <i class="el-icon-plus"></i> 创建
        </el-button>
        <el-dialog :visible.sync="dialogVisible" width="600px">
                <div slot="title">
                    <el-radio-group v-model="choose" >
                        <el-radio-button label="1">新建广告系列</el-radio-button>
                        <el-radio-button label="2">使用现有广告系列</el-radio-button>
                    </el-radio-group>
                </div>
                <div v-if="choose==1">
                        <div class="book-title2">选择广告目标 </div>
                        <div class="el-bottom"><a href="">详细了解</a></div>
                        <el-radio-group v-model="goal" class="choose">
                            <el-radio v-for="(item,index) in groups" :key="index" :label="index">{{item.title}}</el-radio>
                        </el-radio-group>
                        <div class="goal-content">
                                <i :class="groups[goal].icon"></i>
                                <div class="title">{{groups[goal].title}}</div>
                                <div class="text">{{groups[goal].text}}</div>
                                <a class="link" v-if="groups[goal].url==''">详细了解</a>
                        </div>
                        <el-collapse>
                            <el-collapse-item title="为广告系列命名">
                                    <div class="set-item">
                                            <i class="el-icon-folder"></i>
                                            <div class="content">
                                                    <div class="title">广告系列</div>
                                                    <div class="text">添加广告目标和预算优化目标。</div>
                                                    <el-input size="small" v-model="set.name1" placeholder="为这个广告系列命名"></el-input>
                                                    <div class="set-item">
                                                            <i class="el-icon-orange"></i>
                                                            <div class="content">
                                                                <div class="title">广告系列</div>
                                                                <div class="text">添加广告目标和预算优化目标。</div>
                                                                <div class="flex">
                                                                    <el-select size="small" v-model="set.selected2">
                                                                        <el-option label="创建广告组" value="1"></el-option>
                                                                        <el-option label="跳过广告组" value="2"></el-option>
                                                                    </el-select>
                                                                    <el-input size="small" v-model="set.name2" placeholder="为这个广告组命名"></el-input>     
                                                                </div>  
                                                                <div class="set-item">
                                                                        <i class="el-icon-orange"></i>
                                                                        <div class="content">
                                                                            <div class="title">广告</div>
                                                                            <div class="text">包括所有广告创意设置。</div>
                                                                            <div class="flex">
                                                                                <el-select size="small" v-model="set.selected3">
                                                                                    <el-option label="创建广告组" value="1"></el-option>
                                                                                    <el-option label="跳过广告组" value="2"></el-option>
                                                                                </el-select>
                                                                                <el-input size="small" v-model="set.name3" placeholder="为这个广告命名"></el-input>     
                                                                            </div>   
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            
                                                    </div>
                                            </div>
                                    </div>
                            </el-collapse-item>
                        </el-collapse>
                </div>
                <div v-else>
                        <div class="set-item">
                                <i class="el-icon-folder"></i>
                                <div class="content">
                                        <div class="title">广告系列</div>
                                        <div class="text">添加广告目标和预算优化目标。</div>
                                        <el-input size="small" v-model="set.name1" placeholder="为这个广告系列命名"></el-input>
                                        <div class="set-item">
                                                <i class="el-icon-orange"></i>
                                                <div class="content">
                                                    <div class="title">广告系列</div>
                                                    <div class="text">添加广告目标和预算优化目标。</div>
                                                    <div class="flex">
                                                        <el-select size="small" v-model="set.selected2">
                                                            <el-option label="创建广告组" value="1"></el-option>
                                                            <el-option label="跳过广告组" value="2"></el-option>
                                                        </el-select>
                                                        <el-input size="small" v-model="set.name2" placeholder="为这个广告组命名"></el-input>     
                                                    </div>  
                                                    <div class="set-item">
                                                            <i class="el-icon-orange"></i>
                                                            <div class="content">
                                                                <div class="title">广告</div>
                                                                <div class="text">包括所有广告创意设置。</div>
                                                                <div class="flex">
                                                                    <el-select size="small" v-model="set.selected3">
                                                                        <el-option label="创建广告组" value="1"></el-option>
                                                                        <el-option label="跳过广告组" value="2"></el-option>
                                                                    </el-select>
                                                                    <el-input size="small" v-model="set.name3" placeholder="为这个广告命名"></el-input>     
                                                                </div>   
                                                            </div>
                                                    </div>
                                                </div>
                                                
                                        </div>
                                </div>
                        </div>
                </div>
                
                <span slot="footer">
                     <el-button>取消</el-button>
                     <el-button type="primary">继续</el-button>
                </span>
        </el-dialog>
    </span>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible:false,
            set:{
                selected2:"1",
                selected3:"1",
                name1:"",
                name2:"",
                name3:""
            },
            groups:[
                {
                    title:"品牌知名度",
                    text:"向最有可能记得你广告的用户展示广告。",
                    icon:"icon1 goal"
                },
                {
                    title:"覆盖人数",
                    text:"向尽可能多的用户展示广告。",
                    icon:"icon2 goal"
                },
                {
                    title:"流量",
                    text:"把用户送往目标位置，例如网站、应用、Facebook 活动或 Messenger 对话。",
                    icon:"icon3 goal",
                    url:""
                },
                {
                    title:"帖文互动",
                    text:"获得更多公共主页赞、活动响应，或帖子心情、评论或分享。",
                    icon:"icon4 goal"
                },
                {
                    title:"应用安装量",
                    text:"把广告展示给最可能下载应用并与之互动的用户。",
                    icon:"icon5 goal",
                    url:""
                },

                {
                    title:"视频观看量",
                    text:"向用户展示视频广告。",
                    icon:"icon6 goal"
                },
                {
                    title:"潜在客户开发",
                    text:"为业务或品牌开发潜在客户。",
                    icon:"icon7 goal"
                },
                {
                    title:"消息互动量",
                    text:"向用户展示可在 Messenger、WhatsApp 或 Instagram Direct 与你互动的广告。",
                    icon:"icon8 goal"
                },
                {
                    title:"转化量",
                    text:"向最有可能在你的网站、应用或 Messenger 中执行有价值操作（例如购物或添加支付信息）的用户展示广告。",
                    icon:"icon9 goal"
                },
                {
                    title:"目录促销",
                    text:"向目标受众展示包含目录商品的广告。",
                    icon:"icon10 goal"
                },
                {
                    title:"店铺客流量",
                    text:"把广告展示给位于实体店附近并最可能访问实体店的用户。",
                    icon:"icon11 goal",
                    url:""
                },


            ],
            goal:0,
            choose:"1",
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
  .choose .el-radio{
         width: 150px;
     }


     .goal-content{
         text-align: center;
         margin: 30px 0;
     }
     .goal-content>.title{
         font-size: 22px;
         margin: 5px 0;
     }
     .goal-content>i{
         width: 60px;
         height: 60px;
         display: inline-block;
         background-image: url('../assets/goal.png');
     }
     .goal.icon1{
         background-position: 0 -1758px;
     }
     .goal.icon2{
         background-position: 0 -2734px
     }
     .goal.icon3{
         background-position: 0 -2978px;
     }
     .goal.icon4{
         background-position: 0 -2551px;
     }
     .goal.icon5{
         background-position: 0 -2185px;
     }
     .goal.icon6{
         background-position: 0 -2917px;
     }
     .goal.icon7{
         background-position: 0 -2307px;
     }.goal.icon8{
         background-position: 0 -2368px;
     }
     .goal.icon9{
         background-position: 0 -3039px;
     }
     .goal.icon10{
         background-position: 0 -2673px;
     }
     .goal.icon11{
         background-position:0 -2856px;
     }
     
      .set-item{
         display: flex;
     }
     .set-item>.content{
         margin: 10px 0;
     }
     .set-item>i{
         font-size: 20px;
         margin-right: 10px;
         margin-top: 12px;
     }
     .set-item .title{
         font-weight: bold;
     }
     .set-item .text{
         font-size: 12px;
         color: #666;
     }
</style>
