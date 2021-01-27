<template>
    <div>
            <el-aside class="el-padding" :class="down?'aside-down':'aside-up'"  :style="{height:$store.state.clienHeight + 62 +'px'}">
                <div class="flex">
                    <span class="tou-title" v-if="down">{{title}}</span>
                    <el-popover width="400" placement="right-end">
                        <div>
                            <div class="flex">
                                <strong>快速访问</strong>
                                <el-tooltip slot="reference" content="展开菜单" placement="right"> 
                                    <span class="hover-icon" @click="dialogVisible=true"> <i class="el-icon-full-screen"></i> </span>
                                </el-tooltip>
                               
                            </div>
                            <ul class="tool-ul">
                                <li v-for="(item,index) in tools" :key="index" :class="oactive==index?'oactive':''" @click="getool(index,item)">
                                    <div class="icon"> <i :class="item.icon"></i> </div>
                                    <div class="title">{{item.title}}</div>
                                </li>
                            </ul>
                            <div class="tool-item" v-for="(v,i) in  tools2" :key="i">
                                    <div class="title">{{v.title}}</div>
                                    <ul class="tool-ul2">
                                        <li v-for="(item,index) in v.children" :key="index">
                                            <i :class="item.icon"></i>
                                            <span>{{item.title}}</span>
                                        </li>
                                    </ul>
                            </div>
                            
                        </div>
                        <el-tooltip slot="reference" content="业务工具" placement="right"> 
                            <i   class="el-icon-s-grid"></i> 
                        </el-tooltip>
                         
                    </el-popover>
                </div>
                <el-popover width="250">
                    <div class="flex el-bottom">
                        <el-input style="flex:1;margin-right:10px" size="small" placeholder="搜索帐户和商务管理平台" v-model="mhandle.search">
                            <i slot="suffix" class="el-icon-search el-input__icon"></i></el-input>
                        <div class="hover-icon"> <i class="el-icon-folder-delete"></i></div>
                    </div>
                    <strong>你的账户</strong>
                    <cart-list :list="[$store.state.user_info]"></cart-list>
                    <cart-list slot="reference" :list="[$store.state.user_info]"><i slot="right" class="el-icon-caret-bottom"></i></cart-list>
                </el-popover>
                <cart-list class="el-margin" @getcart="getmenu" :active="mactive" :list="menu" size="medium">  </cart-list>
                <div class="aside-footer">
                        <div class="flex aside-icon">
                            <div class="lf">
                                    <el-tooltip size="small" content="设置">
                                        <i class="el-icon-setting"></i>
                                    </el-tooltip>
                                    <el-badge :value="12" class="item">
                                            <el-tooltip size="small" content="通知">
                                                <i class="el-icon-bell"></i>
                                            </el-tooltip>
                                    </el-badge>
                                    <el-tooltip size="small" content="搜索">
                                        <i class="el-icon-search"></i>
                                    </el-tooltip>
                                    <el-tooltip size="small" content="帮助中心">
                                        <i class="el-icon-question"></i>
                                    </el-tooltip>
                            </div>
                            <div class="rg" @click="down=!down">
                                    <el-tooltip size="small" :content="down?'收起':'展开'">
                                        <i class="el-icon-guide"></i>
                                    </el-tooltip>
                            </div>
                        </div>

                </div>
            </el-aside>
            <el-dialog title="探索所有工具" :visible.sync="dialogVisible">
                    <div v-for="(item,index) in tools2" :key="index" class="probe-item">
                        <div class="title">{{item.title}}</div>
                        <ul class="probe-ul">
                            <li v-for="(v,i) in item.children" :key="i">
                                <i :class="v.icon"></i>
                                <div class="content">
                                        <div class="title">{{v.title}}</div>
                                        <div class="text">{{v.text}}</div>
                                        <i class="el-icon-right"></i>
                                </div>
                                
                            </li>
                            
                        </ul>
                    </div>
            </el-dialog>
    </div>
</template>

<script>
import  cartList from '@/common/cart-list'
export default {
    props:["menu","mactive","getmenu","title"],
    components:{
        cartList
    },
    data() {
        return {

            dialogVisible:false,
            down:false,
            clienHeight:0,
             state:"index",
             mhandle:{
                search:""
            },
            oactive:0,
            tools2:[
                {
                    title:"管理业务",
                    children:[
                        {
                            title:"店铺管理工具",
                            icon:"el-icon-map-location",
                            text:"管理你的店铺网点，以便用户通过 Facebook 或 Instagram 找到附近的店铺。"
                        },
                        {
                            title:"媒体库",
                            icon:"el-icon-picture-outline",
                            text:"管理广告和帖子使用的图片和视频。"
                        },
                        {
                            title:"品牌安全",
                            icon:"el-icon-price-tag",
                            text:"创建黑名单，控制广告在 Audience Network、即阅文和视频插播位的投放位置。"
                        },
                        {
                            title:"商务管理平台设置",
                            icon:"el-icon-setting",
                            text:"管理与商务管理平台关联的用户、资产和集成。"
                        },
                        {
                            title:"事件管理工具",
                            icon:"el-icon-reading",
                            text:"关联来自网站、应用或店铺的数据，全方位了解客户操作。"
                        },
                        {
                            title:"账户内容品质",
                            icon:"el-icon-discount",
                            text:"管理未遵守广告发布政策的广告并申请复审。"
                        },
                        {
                            title:"账单",
                            icon:"el-icon-postcard",
                            text:"查看广告帐户的支付记录。"
                        },
                        {
                            title:"Business Suite",
                            icon:"el-icon-orange",
                            text:"管理你的 Facebook 公共主页和 Instagram 帐户，包括帖子、消息、通知、成效分析等等。"
                        }
                    ]
                },
                {
                    title:"发布广告",
                    children:[
                        {
                            title:"创意馆",
                            icon:"el-icon-magic-stick",
                            text:"创建样图，合力制作广告创意，以及预览和分享广告创意。"
                        },
                        {
                            title:"公共主页的广告数量上限",
                            icon:"el-icon-data-line",
                            text:"广告数量上限。"
                        },
                        {
                            title:"广告管理工具",
                            icon:"el-icon-video-camera",
                            text:"创建和管理广告，以及追踪广告表现。"
                        },
                        {
                            title:"广告账户设置",
                            icon:"el-icon-brush",
                            text:"管理广告帐户设置，包括通知和支付方式。"
                        },
                        {
                            title:"受众",
                            icon:"el-icon-user",
                            text:"为广告创建自定义受众、类似受众或保存的受众。"
                        },
                        {
                            title:"自动规则",
                            icon:"el-icon-cpu",
                            text:"设置自动规则，高效管理广告。"
                        }
                    ]
                },
                 {
                    title:"分析与报告",
                    children:[
                        {
                            title:"创意报告",
                            icon:"el-icon-picture-outline",
                            text:"了解广告创意的表现。"
                        },
                        {
                            title:"分析",
                            icon:"el-icon-data-line",
                            text:"了解用户在不同设备、平台和网站中与你业务的互动情况。"
                        },
                        {
                            title:"广告报告",
                            icon:"el-icon-data-analysis",
                            text:"创建灵活的报告，分析和优化广告表现。"
                        },
                        {
                            title:"广告实验室",
                            icon:"el-icon-magic-stick",
                            text:"开展测试，学习并总结经验，找出最佳广告方案。"
                        },
                        {
                            title:"归因分析",
                            icon:"el-icon-aim",
                            text:"衡量各个广告系列和来源的广告成效。"
                        },
                        {
                            title:"流量分析报告",
                            icon:"el-icon-set-up",
                            text:"分析 Facebook 展示次数和你网站或应用使用情况的相关趋势。"
                        },
                        {
                            title:"品牌合作管理工具",
                            icon:"el-icon-set-up",
                            text:"探索和管理你的品牌内容。"
                        },
                        {
                            title:"受众分析",
                            icon:"el-icon-user",
                            text:"探索受众的独有特征，对症下药地创建有效广告。"
                        }
                    ]
                },
                {
                    title:"吸引客户互动",
                    children:[
                        {
                            title:"公共主页帖子",
                            icon:"el-icon-news",
                            text:"创建不同类型的帖子，与受众交流互动或推广公共主页。"
                        }
                    ]
                },
                {
                    title:"销售商品和服务",
                    children:[
                        {
                            title:"电商管理工具",
                            icon:"el-icon-shopping-cart-2",
                            text:"管理你在 Facebook 和 Instagram 的电子商务销售，包括订单、成效分析和进账。"
                        },
                        {
                            title:"目录管理工具",
                            icon:"el-icon-files",
                            text:"在 Facebook 和 Instagram 上传、管理和销售库存。"
                        },
                    ]
                },
                
            ],
            tools:[
                {
                    title:"广告管理工具",
                    icon:"el-icon-discount",
                    path:"/advertising"
                },
               
                {
                    title:"广告账户设置",
                    icon:"el-icon-folder-opened",
                    path:"/advertising/account"
                },
                 {
                    title:"事件管理工具",
                    icon:"el-icon-files"
                },
                {
                    title:"创意馆",
                    icon:"el-icon-magic-stick"
                },
                {
                    title:"公共主页的广告数量上限",
                    icon:"el-icon-mobile-phone"
                },
                {
                    title:"店铺管理工具",
                    icon:"el-icon-map-location"
                }
            ],
          
        };
    },
    created(){
        var name=this.$route.name;
        if(name=='advertising_account'){
                this.oactive=1;
        }else{
            this.oactive=0
        }
        console.log()
    },
    methods:{
        getool(index,item){
            this.$router.push({path:item.path})
        }
    }
};
</script>
<style scope>
    .probe-item{
        margin-bottom: 16px;
    }
    .probe-item >.title{
        font-size: 18px;
        color: #000;
        margin-bottom: 16px;
    }
    .probe-ul>li{
        display: flex;
        margin-bottom: 5px;
        padding:15px 10px;
        width: 500px;
        border-radius: 5px;
        cursor: pointer;
    }
    .probe-ul>li:hover{
        box-shadow: 0 0 10px #ddd;
    }
    .probe-ul>li:hover .content>i{
        display: block;
    }
    .probe-ul>li>i{
        font-size: 25px;
        color: #000;
        padding: 8px;
        background-color: #eee;
        margin-right: 10px;
        border-radius: 5px;
        height: 100%;
    }
    
    .probe-ul>li>.content{
        position: relative;
        padding-right: 15px;
        flex: 1;
    }
     .probe-ul>li>.content>i{
         position: absolute;
         right: 0;
         top: 5%;
         font-size: 16px;
         color: #1871ED;
         display: none;
     }
    .probe-ul>li .title{
        font-size: 16px;
        color: #333;
        font-weight: bold;
    }
    .probe-ul>li .text{
        font-size: 13px;
        line-height: 18px;
        margin-top: 5px;
    }


    .tool-ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tool-ul>li.oactive{
        color: #1871ED;
    }
    .tool-ul>li.oactive>.icon{
        color: #fff;
        background-color: #1871ED;
    }
    .tool-ul>li{
        width: 33%;
        text-align: center;
        margin-top: 16px;
        cursor: pointer;
    }
    .tool-ul>li>.icon{
        display: inline-block;
        padding: 2px 8px;
        font-size: 25px;
        background-color: #eee;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    
    .tool-item>.title{
        font-weight: bold;
        margin: 10px 0;
        color: #000;
    }
    .tool-ul2>li{
        padding: 10px 15px;
        border-radius: 5px;
    }
    .tool-ul2>li>i{
        padding: 5px;
        background-color: #eee;
        font-size: 20px;
        margin-right: 10px;
        border-radius: 5px;
    }
    .tool-ul2>li:hover{
        cursor: pointer;
        background-color: #f8f8f8;
    }
    
     .el-icon-s-grid{
         padding:5px 5px;
         font-size: 25px;
     }
     .el-icon-s-grid:hover{
         background-color: #eee;
         cursor: pointer;
         border-radius: 5px;
     }

     .el-popover{
         max-height: 600px;
         overflow: auto;
     }
     .el-aside{
        transition: all 0.1s linear;
     }
     .aside-up>.flex{
         display: block;
         text-align: center;
     }
     .aside-up{
         width: 80px !important;
          
     }
     .aside-up .cart-arrow,.aside-up .cart-content{
         display: none;
     }
     .aside-up .cart-img{
         margin-right: 0;
     }
     .aside-up .aside-footer{
         width: 80px;
         text-align: center;
     }
     .aside-up  .aside-icon ,.aside-up .aside-icon>.lf{
         display: block;
     }
     .el-dialog__body{
         max-height: 600px;
         overflow: auto;
     }
</style>
