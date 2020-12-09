<template>
    <div class="katn9ffz">
        <div class="book-card">
                <div class="tou-title2">编辑主页信息</div>
                <div class="edit-content">
                        <div class="edit-item" v-for="(v,i) in list" :key="i">
                            <div class="book-flex items">
                                <span class="book-icon"> <i :class="v.icon"></i> </span>
                                <span class="book-title">{{v.text}}</span>
                            </div>
                            <div v-if="v.state==1">
                                    <book-input  :book="item" v-for="(item,index) in v.children" :key="index"></book-input>
                                    <map name=""></map>
                            </div>
                            <div v-else-if="v.state==2">
                                <el-select placeholder="类别（必填）" v-model="v.title" :multiple="true" filterable >
                                            <el-option v-for="(item,index) in v.children" :key="index" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </div>
                        </div>
                </div>
        </div>
    </div>
</template>

<script>
import bookInput from '@/common/book-input'
export default {
    components:{
        bookInput
    },
    data() {
        return {
            list:[
                {
                     text:"常规设置",
                     title:"",
                     icon:"el-icon-info",
                     state:1,
                     children:[
                            {
                                title:"主页名称",
                                text:"推广主页"
                            },
                            {
                                title:"账号",
                                text:""
                            },
                            {
                                title:"描述",
                                text:"这一定是你见过最好的网站"
                            },
                        ],
                },
                {
                     text:"类别",
                     title:"",
                     icon:"el-icon-s-finance",
                     state:2,
                     children:[
                            {
                            value:"电视节目",
                            label:"电视节目"
                            },
                            {
                            value:"电子商务网站",
                            label:"电子商务网站"
                            },
                            {
                            value:"电视频道",
                            label:"电视频道"
                            },
                            {
                            value:"非商业帐户",
                            label:"非商业帐户"
                            },
                            {
                            value:"女装店",
                            label:"女装店"
                            },
                            {
                            value:"DJ",
                            label:"DJ"
                            },
                            {
                            value:"家庭护理",
                            label:"家庭护理"
                            },
                            {
                            value:"电视网络",
                            label:"电视网络"
                            },
                            {
                            value:"影视剧奖",
                            label:"影视剧奖"
                            }
                        ],
                },
                {
                     text:"联系方式",
                     title:"",
                     icon:"el-icon-picture",
                     state:1,
                     children:[
                            {
                                title:"电话号码",
                                text:""
                            },
                            {
                                title:"发邮件",
                                text:""
                            },
                            {
                                title:"网站",
                                text:""
                            },
                        ],
                },
                {
                     text:"位置",
                     title:"",
                     icon:"el-icon-s-promotion",
                     state:1,
                     children:[
                            {
                                title:"地址",
                                text:""
                            },
                            {
                                title:"城市",
                                text:""
                            },
                            {
                                title:"邮编",
                                text:""
                            },
                        ],
                },
            ],
            
           

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
    .edit-content{
        padding: 20px;
    }
    .edit-content div{
        padding: 10px 0;
        width: 100%;
    }
</style>
