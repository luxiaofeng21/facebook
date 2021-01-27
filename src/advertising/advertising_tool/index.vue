<template>
    <div>
        <div class="flex">
                        <div class="lf">
                                <span class="book-title2">广告</span>
                                <el-select v-model="filter.name" size="small">
                                        <el-option label="枫果果" value="1"></el-option>
                                        <el-option label="枫果果2" value="2"></el-option>
                                </el-select>
                        </div>
                        <div class="rg">
                            <span>更新时间：5分钟前</span>
                            <el-button type="info" size="small"> <i class="el-icon-refresh-right"></i> </el-button>
                            <el-button type="info" size="small">放弃草稿</el-button>
                            <el-button type="primary" size="small">检查发布(6)</el-button>
                            <el-popover>
                                <el-button slot="reference" size="small" type="info"> <i class="el-icon-more"></i> </el-button>
                                <ul class="popver-ul">
                                    <li>重置广告管理工具</li>
                                    <li>键盘快捷键</li>
                                </ul>
                            </el-popover>
                        </div>
        </div>
        <div class="flex el-margin">
                <el-input placeholder="搜索并筛选" v-model="filter.search">
                    <i slot="prefix" class="el-icon-search el-input__icon"></i>
                </el-input>
                <el-date-picker
                v-model="filter.date"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
                </el-date-picker>
        </div>
        <ul class="tabs-ul">
                <li v-for="(item,index) in tabsList" :key="index" :class="tactive==index?'tactive':''" @click="tactive=index"> 
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </li>
        </ul>
        <el-card>
            <div class="flex el-bottom el-handle">
                    <div class="lf">
                        <goal></goal>
                        <el-button type="info" size="medium">
                            <i class="el-icon-plus"></i> 复制
                        </el-button>
                        <el-button type="info" size="medium">
                            <i class="el-icon-plus"></i> 编辑
                        </el-button>
                        <el-button type="info" size="medium">
                            <i class="el-icon-s-order"></i> 
                        </el-button>
                        <el-button type="info" size="medium">
                            <i class="el-icon-arrow-left"></i> 
                        </el-button>
                        <el-button type="info" size="medium">
                            <i class="el-icon-delete-solid"></i> 
                        </el-button>
                        <el-button type="info" size="medium">
                            <i class="el-icon-upload"></i> 
                        </el-button>
                        <el-button type="info" size="medium">
                            <i class="el-icon-s-open"></i> 
                        </el-button>
                        <el-select v-model="filter.rules" size="medium">
                            <el-option v-for="(item,index) in rules" :label="item.label" :value="item.value" :key="index"></el-option>
                        </el-select>
                    </div>
                    <div class="rg">
                            <span>查看设置</span>
                            <el-switch v-model="filter.switch"></el-switch>
                            <el-select style="margin-left:10px" placeholder="栏" v-model="filter.name1" size="medium">
                                    <el-option-group v-for="(item,index) in lang" :key="index" :label="item.label" :value="item.value">
                                        <el-option v-for="(v,i) in item.children" :key="i" :label="v.label" :value="v.value"></el-option>
                                    </el-option-group>
                            </el-select>
                            <el-cascader
                                size="medium"
                                placeholder="细分数据"
                                v-model="filter.name2"
                                :options="feng"
                                :props="{ expandTrigger: 'hover' }">
                            </el-cascader>
                                <el-cascader
                                size="medium"
                                placeholder="报告"
                                v-model="filter.name3"
                                :options="gao"
                                :props="{ expandTrigger: 'hover' }">
                            </el-cascader>
                    </div>
            </div>
            <el-table border :data="tableData" show-summary>
                    <el-table-column type="selection" align="center" width="60"></el-table-column>
                   
                    <el-table-column width="70" align="center">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.state"></el-switch>
                        </template>
                    </el-table-column>
                     <el-table-column label="广告系列名称" prop="name1" min-width="200" sortable>
                        <template slot-scope="scope">
                            <div class="campaign-title">
                                <span class="link">{{scope.row.name1}} </span>
                                <span class="content">
                                    <i class="el-icon-edit"></i>
                                    <ul class="icon-ul">
                                        <li>
                                            <i class="el-icon-s-marketing"></i>
                                            <span>查看图表</span>
                                        </li>
                                        <li>
                                            <i class="el-icon-edit"></i>
                                            <span>编辑</span>
                                        </li>
                                        <li>
                                            <i class="el-icon-document-copy"></i>
                                            <span>复制</span>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                          
                        </template>
                    </el-table-column>
                    <el-table-column label="投放状态" prop="name2" align="center">
                        <template slot-scope="scope">
                            <el-tag>{{scope.row.name2}}</el-tag>
                        </template>
                    </el-table-column>
                        <el-table-column  label="结束日期" prop="name11" align="center" sortable>
                        <template slot-scope="scope">
                            <el-tag>{{scope.row.name11}}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="竞价策略" prop="name3" min-width="100px"></el-table-column>
                    <el-table-column label="预算" prop="name4"></el-table-column>
                    <el-table-column label="归因设置"  align="center" prop="name5"></el-table-column>
                    <el-table-column label="成效" align="center" prop="name6" sortable></el-table-column>
                    <el-table-column label="覆盖人数" align="center" prop="name7" sortable></el-table-column>
                    <el-table-column label="展示次数" align="center" prop="name8" sortable></el-table-column>
                    <el-table-column label="单次成效费用" prop="name9" align="center" min-width="100px" sortable></el-table-column>
                    <el-table-column label="花费金额" prop="name10" align="center" sortable></el-table-column>
                    
            </el-table>
        </el-card>
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
            users:[],
            tactive:0,
            tableData:[
                {
                    state:false,
                    name1:"广告新系列",
                    name2:"草稿",
                    name3:"使用广告竞价策略",
                    name4:"使用广告组预算",
                    name5:"",
                    name6:"",
                    name7:"1",
                    name8:"1",
                    name9:"1",
                    name10:"0.00",
                    name11:"长期"
                },
                {
                    state:false,
                    name1:"广告新系列",
                    name2:"草稿",
                    name3:"使用广告竞价策略",
                    name4:"使用广告组预算",
                    name5:"",
                    name6:"",
                    name7:"1",
                    name8:"1",
                    name9:"1",
                    name10:"10.00",
                    name11:"长期"
                },
            ],
            lang:[
                {
                  label:"",
                  value:"",
                  children:[
                        {
                            label:"表现（默认）",
                            value:1,
                        },
                        {
                            label:"设置",
                            value:2,
                        },
                        {
                            label:"展示",
                            value:3,
                        },
                        {
                            label:"参与度",
                            value:4,
                        },
                        {
                            label:"视频互动率",
                            value:5,
                        },
                        {
                            label:"应用使用率",
                            value:6,
                        },
                        {
                            label:"轮播参与度",
                            value:7,
                        },
                        {
                            label:"表现与参与度",
                            value:8,
                        },
                        {
                            label:"跨设备",
                            value:9,
                        },
                        {
                            label:"线下转化",
                            value:10,
                        },
                        {
                            label:"受众定位和广告创意",
                            value:11,
                        },
                        {
                            label:"竞价与优化",
                            value:12,
                        },
                        {
                            label:"messenger互动",
                            value:13,
                        },
                  ]  
                },
                {
                    label:"",
                    value:"",
                    children:[
                        {
                            label:"定制栏",
                            value:14
                        },
                        {
                            label:"对比归因条件",
                            value:15
                        },
                        {
                            label:"设为默认设置",
                            value:16
                        },
                    ]
                }
            ],
            gao:[
                {
                    label:"导出表格数据",
                    value:1
                },
                {
                    label:"创建自定义报告",
                    value:2
                },
                {
                    label:"分享链接",
                    value:3
                },
                {
                    label:"广告",
                    value:4
                },
                {
                    label:"广告组",
                    value:5
                },
                {
                    label:"年龄和性别",
                    value:6
                },
                {
                    label:"全部",
                    value:7,
                    children:[
                        {
                            label:"所有层级",
                            value:"01"
                        },
                        {
                            label:"所有层级",
                            value:"01"
                        },
                        {
                            label:"所有层级",
                            value:"01"
                        },
                        {
                            label:"所有层级",
                            value:"01"
                        },
                        {
                            label:"所有层级",
                            value:"01"
                        },
                        {
                            label:"所有层级",
                            value:"01"
                        },
                        {
                            label:"所有层级",
                            value:"01"
                        },
                    ]
                },

            ],
            feng:[
                {
                    value:"1",
                    label:"按时间",
                    children:[
                        {
                            label:"无",
                            value:"01"
                        },
                        {
                            label:"日期",
                            value:"02"
                        },
                        {
                            label:"周",
                            value:"03"
                        },
                        {
                            label:"二周",
                            value:"04"
                        },
                        {
                            label:"月份",
                            value:"05"
                        },
                    ]
                },
                {
                    value:"2",
                    label:"按投放",
                    children:[
                        {
                            label:"无",
                            value:"021"
                        },
                        {
                            label:"年龄",
                            value:"022"
                        },
                        {
                            label:"性别",
                            value:"023"
                        },
                        {
                            label:"年龄和性别",
                            value:"024"
                        },
                        {
                            label:"业务网点",
                            value:"025"
                        },
                        {
                            label:"国家/地区",
                            value:"026"
                        },
                        {
                            label:"地域",
                            value:"027"
                        },
                        {
                            label:"DMA地域",
                            value:"028"
                        },
                        {
                            label:"设备",
                            value:"029"
                        },
                        {
                            label:"多媒体素材类型",
                            value:"030"
                        },
                        {
                            label:"版位",
                            value:"031"
                        },
                        {
                            label:"版位和设备",
                            value:"032"
                        },
                        {
                            label:"商品编号",
                            value:"033"
                        },
                        {
                            label:"投放时间（广告账户时区）",
                            value:"034"
                        },
                        {
                            label:"投放时间（浏览者时区）",
                            value:"035"
                        },
                    ]
                },
                {
                    label:"按操作",
                    value:"3",
                    children:[
                        {
                            label:"无",
                            value:"031"
                        },
                        {
                            label:"转化设备",
                            value:"032"
                        },
                        {
                            label:"帖子心情类型",
                            value:"033"
                        },
                        {
                            label:"目标页",
                            value:"034"
                        },
                        {
                            label:"视频观看类型",
                            value:"035"
                        },
                        {
                            label:"视频声音",
                            value:"036"
                        },
                        {
                            label:"轮播图卡",
                            value:"037"
                        },
                    ]
                }
            ],
            tabsList:[
                {
                    icon:"el-icon-s-goods",
                    title:"广告系列"
                },
                {
                    icon:"el-icon-s-cooperation",
                    title:"广告组"
                },
                {
                    icon:"el-icon-s-goods",
                    title:"广告"
                },
            ],
            tabs:"1",
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            filter: {
                switch:false,
                date:"",
                search:"",
                name:"",
                rules:""
            },
            rules:[
                {
                    label:"创建新规则",
                    value:"1"
                },
                {
                    label:"应用现有规则",
                    value:"2"
                },
                {
                    label:"管理规则",
                    value:"3"
                },
            ],
        };
    },
    created() {

    },
    mounted() {

    },
};
</script>
<style scope>
   
    .el-handle {
        flex-wrap: wrap;
    }
    .el-handle>*{
        margin: 5px 0;
    }
    .el-handle .el-select,.el-handle .el-cascader{
        max-width: 150px;
    }
     .tabs-ul{
        display: flex;
        justify-content: space-between;
    }
    .tabs-ul>li{
        cursor: pointer;
        width: 31%;
        padding:10px 10px;
        background-color: #fff;
        border-radius: 5px;
        font-size: 18px;
        border: 5px solid #fff;
    }
     .tabs-ul>li>i{
         font-size: 25px;
     }
     .tabs-ul>li.tactive{
         color: #1871ED;
         border-top: 5px solid  #1871ED;
     }

     .icon-ul{
         display: flex;
     }
     .icon-ul>li{
         cursor: pointer;
         margin-right: 16px;
         color:#000;
     }
     .icon-ul>li:hover{
         text-decoration: underline;
     }
      .icon-ul>li i{
          font-size: 16px;
          font-weight: bold;
      }

    
    .campaign-title >.content{
        visibility: hidden;
    }
    .campaign-title:hover .content{
        visibility:visible
    }

    .el-aside .book-icon{
        margin-right: 0;
    }
</style>
<style  >
    .el-table thead{
        color: #666;
        background-color: #E4E6EB;
    }
    .el-table thead th{
        background-color: #E4E6EB;
    }
   
</style>

