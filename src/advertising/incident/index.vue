<template>
    <div>
        <el-container>
            <el-aside class="el-padding">
                <el-input size="small" class="el-bottom">
                    <i class="el-icon-search el-input__icon" slot="suffix"></i>
                </el-input>
                <cart-list size="small" :list="menu" :active="mactive"></cart-list>
            </el-aside>
            <el-main>
                    <el-card>
                        <div class="incident-head">
                            <div class="lf ">
                                    <div class="book-icon2"> <i :class="info.icon"></i> </div>
                                    <strong>{{info.title}}</strong> 
                                    <i class="el-icon-edit"></i>
                            </div>
                            <div class="rg">
                                    <el-date-picker
                                    size="medium"
                                    type="daterange"
                                    v-model="filter.date"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                    <el-popover>
                                        <ul class="popver-ul">
                                            <li v-for="(item,index) in createList" :key="index">
                                                <div class="content">
                                                    <div class="popver-title">{{item.title}}</div>
                                                    <div class="popver-text">{{item.text}}</div>
                                                </div>
                                            </li>
                                        </ul>
                                        <el-button size="medium" slot="reference" type="success">创建 <i class="el-icon-caret-bottom"></i> </el-button>
                                    </el-popover>
                                    
                            </div >
                        </div>
                        <el-radio-group v-model="filter.type" class="el-margin" size="medium">
                            <el-radio-button label="1">概览</el-radio-button>
                            <el-radio-button label="2">测试事件</el-radio-button>
                            <el-radio-button label="3">诊断工具</el-radio-button>
                            <el-radio-button label="4">历史记录</el-radio-button>
                            <el-radio-button label="5">设置</el-radio-button>
                        </el-radio-group>
                    </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import cartList from '@/common/cart-list'
export default {
    components: {
        cartList  
    },
    data() {
        return {
            createList:[
                {
                    title:"创建广告",
                    text:"创建转化量广告系列，并根据Pixel 像素代码信息吸引更多客户采取操作"
                },
                {
                    title:"创建自定义受众",
                    text:"根据Pixel 像素代码信息，触达与品牌互动过的用户，或寻找与最优客户相似的新受众。"
                },
                {
                    title:"创建类似受众",
                    text:"根据Pixel 像素代码信息触达与现有的最优客户相似，因而可能对你经营的内容感兴趣的新受众。"
                },
                {
                    title:"创建自定义受众",
                    text:"根衡量更具体的客户操作，以及投放广告并优化其投放方式和覆盖范围。"
                },
            ],
            filter:{
                date:"",
                type:"1"
            },
            info:{},
            mactive:0,
            menu:[
                {
                    icon:"el-icon-s-platform",
                    title:"656565",
                    text:"编号 545654879461"
                }
            ]
        };
    },
    created() {
        this.info=this.menu[this.mactive];
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
    .incident-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .incident-head>.lf{
        display: flex;
        align-items: center;
    }
    .incident-head>.lf>strong{
        margin:0 10px;
    }
    .incident-head>.lf>i{
        font-size: 20px;
        cursor: pointer;
    }
</style>
