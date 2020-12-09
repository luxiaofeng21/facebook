<template>
<div>
    <ul class="account-list">
        <li  v-for="(item,index) in list" :key="index">
                <h3  class="lf">{{item.label}}</h3>
                <div class="rg">
                    <ul class="account-ul">
                        <li v-for="(v,i) in item.children" :key="i" :class="active==index+'-'+i?'factive':''">
                            <div class="flex"  @click="getedit(index,i)" v-if="active!=index+'-'+i">
                                <div class="lf">
                                    <span class="account-text">{{v.label}} </span>
                                    <span class="account-title">{{v.title}}</span> 
                                </div>
                                <div class="link">编辑</div>
                            </div>
                                <div class="account-item" v-if="active==index+'-'+i">
                                    <h3>{{v.text||v.label}}</h3>
                                    <el-input v-if="v.type=='input'" size="small" v-model="v.atitle"></el-input>
                                    <el-select  :multiple="v.type=='search'?true:false" filterable v-else v-model="v.atitle" size="small">
                                        <el-option  v-for="(e,l) in v.list" :key="l" :label="e.label" :value="e.value"></el-option>
                                    </el-select>
                                    
                                    <div class="account-footer">
                                            <el-button type="primary" @click="getsave(v)" size="small">保存更改</el-button>
                                            <el-button  size="small" @click="active=''">取消</el-button>
                                    </div>
                            </div>
                        </li>
                    </ul>
                    
                </div>
        </li>
    </ul>
    <div class="_4-u2 _30i5 _4-u8" id="settings_usability_survey_root"><span class="_48ul">你找到需要的帮助了吗？<a ajaxify="/settings/survey/usability/feedback/?response=yes&amp;ref=language" rel="async" href="#" role="button" class="mls">是</a> · <a ajaxify="/settings/survey/usability/feedback/?response=no&amp;ref=language" rel="async" href="#" role="button">否</a> · <a ajaxify="/settings/survey/usability/feedback/?response=browsing&amp;ref=language" rel="async" href="#" role="button">我不需要什么具体帮助</a></span></div>
</div>
</template>

<script>
export default {
    props:["list"],
    data(){
       return{
            active:""
       }
    },
    methods:{
        getsave(v){
            this.$emit("getsave",v)
        },
        getedit(index,i){
            this.active=index+"-"+i
        }
    }
}
</script>

<style scoped>
.account-list>li{
    display: flex;
    padding: 10px ;
    border-top: 1px solid #999;
    cursor: pointer;
}
.account-list>li>.lf{
    padding: 10px;
    width: 20%;
}
.account-list>li>.rg{
    width: 80%;
}
.account-ul>li{
    display: flex;
    justify-content: space-between;
    padding: 10px !important;
}
.account-ul>li:hover{
    background-color: #eee;
}
.account-ul>li>.flex{
    width: 100%;
}
.account-ul>li>.flex>.lf{
    display: flex;
    width: 90%;
}
.account-ul>li>.lf>*{
    display: inline-block;
}
.account-text{
    width: 75%;
}
.account-title{
    font-weight: 600;
    color: #000;
    width: 24%;
    margin-left: 20px;
}
.factive{
    background-color: #eee;
}
.account-item>*{
    margin-bottom: 10px;
}
</style>
