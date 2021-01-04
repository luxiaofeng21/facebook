<template>
    <div>
        <el-card class="el-bottom">
            <div class="flex">
                <span class="book-title">小组规则</span>
                <span class="link" @click="dialogVisible=true;ractive=-1">创建</span>
            </div>
        </el-card>
        <el-card >
                <div class="book-null" v-if="list.length<=0">没有小组规则</div>
                <ul class="manage-ul">
                    <li v-for="(item,index) in list" :key="index">
                       <div class="lf">
                            <i class="el-icon-tickets"></i>
                            <span class="index">{{index+1}}</span>
                       </div>
                        <div class="content">
                             <div class="flex title">
                                <span>{{item.title}}</span>    
                                <el-popover width="200">
                                    <ul class="popver-ul">
                                        <li @click="getedit(item,index)">编辑规则</li>
                                        <li @click="getdelete(index)">删除规则</li>
                                    </ul>
                                    <span slot="reference" class="hover-icon"> <i class="el-icon-more"></i> </span>
                                </el-popover>
                                
                            </div>
                            <div class="text">{{item.content}}</div>
                        </div>
                       
                    </li>
                </ul>
        </el-card>
        <el-dialog title="创建规则" :visible.sync="dialogVisible" width="550px">
            <div class="book-title">规则示例</div>
            <ul class="rules-ul">
                <li v-for="(item,index) in rules" :key="index" :class="active==index?'ractive':''" @click="getnav(item,index)">
                    {{item.title}}
                </li>
            </ul>
            <el-input class="el-margin" v-model="filter.title" placeholder="标题"></el-input>
            <el-input v-model="filter.content" placeholder="说明" type="textarea"></el-input>
            <span slot="footer" class="el-footer">
                <el-button type="primary" @click="dialogVisible=false" plain>取消</el-button>
                <el-button type="primary" @click="getsave">确认</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ractive:-1,
            list:[],
            active:-1,
            dialogVisible:false,
            filter:{
                title:"",
                content:""
            },  
            rules:[
                {title:"请保持友善和礼貌",content:"友善的环境需要我们共同创造。我们都应彼此尊重，用温和而自然的言语，理性地面对每一次辩论。"},
                {title:"禁止仇恨言论或欺凌",content:"让每一位成员感到安全。决不允许任何形式的欺凌行为，决不容忍对种族、宗教、文化、性取向、性别或身份进行贬低的评论。"},
                {title:"禁止促销或垃圾信息",content:"真诚先行，反对伸手党。禁止发布个人广告、垃圾信息和不相关的链接。"},
                {title:"尊重所有人的隐私",content:"小组成员应以诚相待。真实、直爽的讨论让小组互动更有趣味，但也可能触及敏感或隐私话题。小组中分享的内容不宜外传。"},
            ]
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        getedit(item,index){
            console.log("🚀 ~ file: manage_rules.vue ~ line 80 ~ getedit ~ item", item)
            this.filter=Object.assign({},item)
            this.ractive=index;
            this.active=-1;
            this.dialogVisible=true
        },
        getdelete(index){
            this.list.splice(index,1)
        },
        getsave(){
            if(this.ractive==-1){
                this.list.push(this.filter)
            }else{
                this.list[this.ractive]=Object.assign({},this.filter)
            }
            this.dialogVisible=false;
            this.$notify({
                title:"成功",
                message:this.ractive==-1?"规则创建成功":"规则编辑成功",
                type:"success",
                position:"bottom-left"
            })
        },
        getnav(item,index){
            this.filter=Object.assign({},item)
            this.active=index
        }
    }
};
</script>

<style scoped >
    /*规则列表 */
    .manage-ul>li{
        display: flex;
    }
    .manage-ul>li>.lf{
        margin-top:8px;
        font-size: 20px;
        margin-right: 10px;
        font-style: italic;
        letter-spacing: 2px;
    }
    .manage-ul>li>.content{
        flex: 1;
    }
    .manage-ul>li .title{
        font-size: 15px;
    }
    .manage-ul>li .text{
        color: #666;
        font-size: 13px;
    }
    /*选择规则 */
    .rules-ul{
        margin: 0 -5px;
        margin-top: 10px;
    }
    .rules-ul>li{
        border:1px solid #ddd;
        border-radius: 30px;
        display: inline-block;
        padding: 8px 10px;
        margin: 5px;
        cursor: pointer;
        font-weight: bold;
        color: #000;
        background-color: #E4E6EB;
    }
    .rules-ul>li.ractive{
        color:#257DF3 ;
        background-color: #E7F3FF;
    }
</style>
