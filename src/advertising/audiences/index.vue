<template>
    <div>
        <el-container>
            <book-aside title="受众" :menu="menu" :mactive="mactive" :getmenu="getmenu"></book-aside>
            <el-main>
                   <div class="flex el-bottom">
                       <span class="book-title2">受众</span>
                       <el-select size="small" v-model="name" filterable>
                            <el-option label="枫果果" value="1"></el-option>
                       </el-select>
                   </div>

                   <el-card>
                       <div class="flex el-bottom">
                           <div class="lf el-handle">
                                <el-popover>
                                        <ul class="popver-ul">
                                            <li v-for="(item,index) in popver" :key="index">
                                                <i :class="item.icon"></i>
                                                <span class="popver-title">{{item.title}}</span>
                                            </li>
                                        </ul>
                                        <el-button slot="reference" type="primary">创建受众 <i class="el-icon-caret-bottom"></i> </el-button>
                                </el-popover>
                                <el-button type="info"> <i class="el-icon-edit"></i> 编辑</el-button>
                                <el-button type="info"> <i class="el-icon-share"></i> 共享</el-button>
                                <el-button type="info"> <i class="el-icon-delete"></i> 删除</el-button>
                                 <el-popover>
                                        <ul class="popver-ul">
                                            <li v-for="(item,index) in popver2" :key="index">
                                                <span class="popver-title">{{item.title}}</span>
                                            </li>
                                        </ul>
                                        <el-button slot="reference" type="info"> <i class="el-icon-more"></i></el-button>
                                </el-popover>
                                
                           </div>
                   
                            <el-popover width="400">
                                <ul class="popver-ul">
                                    <li v-for="(item,index) in group" :key="index">
                                        <el-checkbox v-model="item.checked"></el-checkbox>
                                        <div class="content">
                                             <div class="popver-title">{{item.title}}</div>
                                             <div class="popver-text">{{item.text}}</div>
                                        </div>
                                    </li>
                                </ul>
                                <el-button slot="reference" type="info"> <i class="el-icon-s-fold"></i> 栏 </el-button>
                           </el-popover>
                       </div>
                       <div class="audiences-content">
                            <div class="lf tour"> 
                                <el-input v-model="filter.search" placeholder="按名称或受众编号搜索">
                                    <i class="el-icon-search el-input__icon" slot="prefix"></i>
                                </el-input>
                                <div class="book-title2 el-margin">过滤</div>
                                <el-collapse  accordion>
                                    <el-collapse-item v-for="(item,index) in filter.list" :key="index" :title="item.title"  :name="index">
                                            <el-checkbox v-for="(v,i) in item.children" :key="i" v-model="v.checked" :label="v.label"></el-checkbox>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                            <div class="rg"> 
                                <el-table :data="tableData">
                                    <el-table-column type="selection"></el-table-column>
                                    <el-table-column label="名称">
                                        <template slot-scope="scope">
                                            <span class="link">{{scope.row.name1}}</span>
                                        </template>
                                    </el-table-column>
                                     <el-table-column v-for="(item,index) in list" :key="index" :label="item.title">
                                        <template slot-scope="scope">
                                            <span class="link">{{scope.row[item.name]}}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="可用性">
                                        <template slot-scope="scope">
                                            <span v-if="scope.row.state" class="audiences-state">
                                                    <span class="success"></span>
                                                    <div class="content">
                                                        <div class="title">可用</div>
                                                        <div class="text">上次编辑：{{showDate(scope.row.date)}}</div>
                                                    </div>
                                            </span>
                                            <span v-else class="audiences-state">
                                                    <span class="info"></span>
                                                    <div class="content">
                                                        <div class="title">Pixel 像素代码还未安装</div>
                                                    </div>
                                            </span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                       </div>
                   </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import  bookAside from '@/common/book-aside'
export default {
    components:{
        bookAside
    },
    data() {
        return {
            filter:{
                list:[
                    {
                        title:"状态",
                        children:[
                            {
                                checked:false,
                                label:"正在用于广告"
                            },
                            {
                                checked:false,
                                label:"近期使用"
                            },
                            {
                                checked:false,
                                label:"共享受众"
                            },
                            {
                                checked:false,
                                label:"需要执行操作"
                            },
                        ]
                    },
                    {
                        title:"类型",
                        children:[
                            {
                                checked:false,
                                label:"自定义受众"
                            },
                            {
                                checked:false,
                                label:"类似受众"
                            },
                            {
                                checked:false,
                                label:"保存的受众"
                            }
                        ]
                    },
                    {
                        title:"可用性",
                        children:[
                            {
                                checked:false,
                                label:"可用"
                            },
                            {
                                checked:false,
                                label:"不可用"
                            },
                            {
                                checked:false,
                                label:"有错误"
                            }
                        ]
                    },
                    {
                        title:"资源",
                        children:[
                            {
                                checked:false,
                                label:"网站"
                            },
                            {
                                checked:false,
                                label:"客户名单"
                            },
                            {
                                checked:false,
                                label:"视频",
                            },
                            {
                                checked:false,
                                label:"视频"
                            },
                            {
                                checked:false,
                                label:"公共主页"
                            },
                            {
                                checked:false,
                                label:"线索广告"
                            },
                            {
                                checked:false,
                                label:"instagram业务主页"
                            },
                            {
                                checked:false,
                                label:"线下事件"
                            },
                            {
                                checked:false,
                                label:"Facebook活动"
                            },

                            {
                                checked:false,
                                label:"移动应用"
                            }
                        ]
                    },
                ],
                search:""
            },
            name:"1",
            tableData:[
                {
                    name2:"",
                    name1:"飒飒打撒",
                    state:true,
                    date:new Date()
                },
                 {
                    name1:"飒飒打撒",
                    state:false,
                    date:new Date()
                }
            ],
            popver2:[
                {
                    title:""
                }
            ],
            popver:[
                {
                    icon:"el-icon-s-check",
                    title:"自定义受众"
                },
                {
                    icon:"el-icon-user-solid",
                    title:"类似受众"
                },
                {
                    icon:"el-icon-s-data",
                    title:"特殊广告受众"
                },
                {
                    icon:"el-icon-s-finance",
                    title:"保存的受众"
                },
            ],
            group:[
                {
                    title:"类型",
                    name:"name2",
                    text:"受众类型，包括自定义受众、类似受众，或是已与你的公共主页、活动或应用建立过联系的用户。",
                    checked:true
                },
                {
                    title:"规模",
                    name:"name3",
                    text:"Facebook 在受众中找到的人数。",
                    checked:true
                },
                {
                    name:"name4",
                    title:"创建日期",
                    text:"受众创建的日期和时间。",
                    checked:true
                },
                {
                    name:"name5",
                    title:"受众编号",
                    text:"每个受众独有的编号。",
                    checked:true
                },
                {
                    name:"name6",
                    title:"共享",
                    text:"与你共享受众的帐户",
                    checked:true
                },
            ],
            mactive:0,
            menu:[
                {
                    title:"受众",
                    icon:"icon-custom icon1",
                    tab:"index"
                }
            ],
          
        };
    },
    created() {
        
    },
  
    methods: {
        getmenu(i,item){
            this.$router.push({name:"incident",query:{state:item.tab}})
            this.mactive=i;
        }
    }
};
</script>

<style scope>   

    .audiences-content{
        display: flex;
    }
    .audiences-content>.lf{
        width: 30%;
    }
    .audiences-content>.rg{
        width: 70%;
    }
    .audiences-state{
        display: flex;
    }
    .audiences-state .title{
        font-size: 14px;
        color: #000;
    }
    .audiences-state .text{
        font-size: 12px;
        color: gray;
    }
    .success,.info{
        width: 8px;
        height: 8px;
        margin-top: 10px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .success{
        background-color: green;
    }
    .info{
        background-color: gray;
    }
</style>