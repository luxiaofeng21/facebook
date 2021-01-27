<template>
    <div>
        <div class="book-title2">广告账户设置</div>
        <div class="book-w12"> 
              <el-card>
                    <el-form>
                        <el-form-item label="广告账户编号">
                            {{form.code}}
                        </el-form-item>
                        <el-form-item label="广告帐户名称">
                            <el-input size="small" v-model="form.title"></el-input>
                        </el-form-item>
                        <el-form-item label="时区">
                            {{form.date}}
                            <div calss="book-text">你的帐户中仍有余额，因此无法更改货币或时区。</div>
                        </el-form-item>
                        <el-form-item label="货币">
                            {{form.type}}
                        </el-form-item>
                        <el-form-item label="推广目的">
                                <el-radio-group v-model="form.name1">
                                    <el-radio label="1">我投放广告是出于商业目的</el-radio>
                                    <el-radio label="2">我投放广告不是出于商业目的</el-radio>
                                </el-radio-group>
                        </el-form-item>
                        <el-form-item label="公司名称">
                                <el-input size="small" v-model="form.company"></el-input>
                                <div calss="book-text">如果没有公司名称，请输入你的姓名。</div>
                        </el-form-item>
                          <el-form-item label="地址">
                                <div calss="book-text">你的公司地址是指业务经营的主要地点。</div>
                                <el-input size="small" v-model="form.address1" placeholder="街道地址1"></el-input>
                                <el-input size="small" v-model="form.address2" placeholder="街道地址第二行"></el-input>
                                <el-input size="small" v-model="form.address3" placeholder="城市"></el-input>
                                <div class="flex">
                                    <el-input size="small" v-model="form.address4" placeholder="州、省或地区"></el-input>
                                    <el-input size="small" v-model="form.zip" placeholder="邮编"></el-input>
                                </div>
                        </el-form-item>
                        <el-form-item label="国家/地区">
                                <el-select size="small" v-model="form.country" disabled>
                                    <el-option label="中国" value="1"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item label="纳税人识别号">
                                <el-input size="small" v-model="form.name2"></el-input>
                        </el-form-item>
                        <el-form-item label="广告经销商">
                                <el-radio-group v-model="form.name3">
                                    <el-radio label="1">我投放广告是出于商业目的</el-radio>
                                    <el-radio label="2">我投放广告不是出于商业目的</el-radio>
                                </el-radio-group>
                                <div class="link">停用账户</div>
                        </el-form-item>
                        <el-form-item>
                               <el-button type="info">放弃更改</el-button>
                               <el-button type="primary">保存更改</el-button>
                        </el-form-item>
                    </el-form>
              </el-card>
              <el-card>
                    <strong>广告帐户身份</strong>
                    <ul class="users-ul">
                        <li v-for="(item,index) in users" :key="index">
                            <div class="lf">
                                <img :src="item.img" alt="">
                                <div class="content">
                                     <div class="title">{{item.title}}</div>
                                     <div class="text">{{item.type}}</div>
                                </div>
                            </div>
                            <span class="link">移除用户</span>
                        </li>
                    </ul>
                    <el-button type="primary" @click="dialogVisible=true">添加用户</el-button>
              </el-card>
        </div>
        <el-dialog title="为广告帐户添加用户" :visible.sync="dialogVisible" width="600px">
                <div class="el-bottom">
                    搜索并选择要添加的用户。只能添加好友。
                </div>
                <div class="flex">
                    <el-input placeholder="输入好友" v-model="info.name"></el-input>
                    <el-select v-model="info.type">
                        <el-option label="广告账户管理员" value="1"></el-option>
                        <el-option label="广告主管（广告帐户）" value="2"></el-option>
                        <el-option label="广告帐户分析员" value="3"></el-option>
                    </el-select>
                </div>
                <div class="el-margin">广告主管可以查看并编辑你的广告，并通过与此广告帐户绑定的支付方式创建广告。</div>
                <div class="el-margin">拥有“分析员”权限的用户只能查看你的广告表现。</div>
                <div class="el-margin">前往帮助中心 <span class="link">详细了解</span> </div>
                <span slot="footer">
                        <el-button @click="dialogVisible=false">取消</el-button>
                        <el-button type="primary">确认</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible:false,
            info:{
                name:"",
                type:"1"
            },
            users:[
                {
                    img:require("@/assets/me.jpg"),
                    title:"钟曦",
                    type:"广告帐户管理员"
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"宋晓昱",
                    type:"广告主管（广告帐户）"
                }
            ],
            form:{
                name1:"1",
                name2:"",
                name3:"1",
                country:"1",
                title:"枫果果",
                name:"",
                type:"人民币",
                code:"665011544367594"
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
        height: 100%;
    }
    .users-ul{
        margin: 15px 0;
    }
    .users-ul>li{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
    .users-ul>li>.lf{
        display: flex;
    }
    .users-ul>li img{
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
</style>
