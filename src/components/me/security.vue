<template>
    <div class="book-w6">
        <ul class="secuity-ul">
            <li>
                  <div class="title">推荐</div>
                  <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                <div>
                                    <div class="secuity-title">接收陌生登录提醒</div>
                                     <div class="secuity-text">接收陌生设备或浏览器登录提醒，进一步保护帐户安全。</div>
                                </div>
                            </template>
                            <div class="an-content">
                                <div class="secuity-text">有人通过未知设备或浏览器登录时收到提醒。</div>
                                <ul class="an-ul">
                                    <li>
                                        <div class="an-title"> <i class="el-icon-chat-round"></i>通知 </div>
                                        <el-radio-group v-model="tui.tongzhi">
                                            <el-radio label="1">接收通知</el-radio>
                                            <el-radio label="2">不接收通知</el-radio>
                                        </el-radio-group>
                                    </li>
                                    <li>
                                        <div class="an-title"> <i class="el-icon-chat-round"></i>Messenger </div>
                                        <el-radio-group v-model="tui.msg">
                                            <el-radio label="1">接收通知</el-radio>
                                            <el-radio label="2">不接收通知</el-radio>
                                        </el-radio-group>
                                    </li>
                                    <li>
                                        <div class="an-title"> <i class="el-icon-chat-round"></i>发邮件 </div>
                                        <el-checkbox v-model="tui.email">通过 543787366@qq.com 接收邮件提醒。</el-checkbox>
                                    </li>
                                </ul>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
            </li>
            <li>
                  <div class="title">登录位置</div>
                  <ul class="tell-ul">
                      <li v-for="(item,index) in tells" :key="index">
                          <i class="el-icon-data-analysis"></i>
                          <div class="rg"> 
                              <div class="secuity-title">{{item.she}} · {{item.address}}</div>
                              <div class="secuity-text"> {{item.name}} {{item.date}}</div>
                          </div>
                      </li>
                  </ul>
            </li>
            <li>
                  <div class="title">登录</div>
                  <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                <div>
                                    <div class="secuity-title">更改密码</div>
                                     <div class="secuity-text">建议你使用高强度密码，不要与其他地方重复</div>
                                </div>
                            </template>
                            <div class="an-content">
                                <el-form form="form">
                                    <el-form-item label="当前密码" label-width="120px">
                                        <el-input v-model="form.nowpassword"></el-input>
                                    </el-form-item>
                                    <el-form-item label="新密码" label-width="120px">
                                        <el-input v-model="form.newpassword"></el-input>
                                    </el-form-item>
                                     <el-form-item label="再次输入新密码" label-width="120px">
                                        <el-input v-model="form.password"></el-input>
                                    </el-form-item>
                                </el-form>
                                <a href="" class="link">忘记密码</a>
                                <div class="an-footer">
                                     <el-button type="primary" size="small">保存更改</el-button>
                                </div>
                               
                            </div>
                        </el-collapse-item>
                  </el-collapse>
                  <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                <div>
                                    <div class="secuity-title">保存登录信息</div>
                                     <div class="secuity-text">开•系统只会在你选择的浏览器和设备上保存登录信息</div>
                                </div>
                            </template>
                            <div class="an-content">
                                <el-timeline >
                                    <el-timeline-item timestamp="这个浏览器" placement="top" >
                                        <div class="el-card">
                                            <h4>移除已保存的登录信息</h4>
                                            <div>下次使用这个浏览器登录时必须输入密码。</div>
                                        </div>
                                        <div class="el-card">
                                            <h4>移除帐户</h4>
                                            <div>你下次登录时需要输入邮箱或手机号。</div>
                                        </div>
                                    </el-timeline-item>
                                    <el-timeline-item timestamp="其他设备或浏览器" placement="top">
                                         <div class="el-card">
                                            <h4>从 Windows 10 · Firefox 移除已保存的登录信息</h4>
                                            <div>上次使用：2020年11月17日 10:20</div>
                                            <div>无登录密码</div>
                                        </div>
                                         <div class="el-card">
                                            <h4>从 Windows 10 · Firefox 移除已保存的登录信息</h4>
                                            <div>上次使用：2020年11月17日 10:20</div>
                                            <div>无登录密码</div>
                                        </div>
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </el-collapse-item>
                  </el-collapse>
            </li>
        </ul>
      
    </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                nowpassword:"",
                newpassword:"",
                password:"",
            },
            tells:[
                {
                    name:"Chrome",
                    date:new Date(),
                    address:"Gulangyu, 福建, China",
                    she:"Windows 电脑"
                },
                {
                    name:"Chrome",
                    date:new Date(),
                    address:"Gulangyu, 福建, China",
                    she:"Windows 电脑"
                }
            ],
            tui:{
                tongzhi:"1",
                msg:"1",
                email:false
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
    .secuity-ul>li{
        padding:0 20px; 
         border: 1px solid #ddd;
         margin-bottom: 15px;
    }
    .secuity-ul>li>.title{
        font-weight: bold;
        font-size: 18px;
        padding: 10px ;
        margin: 0 -20px;
        background-color: #eee;
    }
    .secuity-title{
        line-height: initial;
        font-size: 15px;
        color: #000;
    }
    .secuity-text{
        line-height: initial;
        color: #666;
        font-size: 13px;
    }
    .an-ul>li{
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }
    .an-title{
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 5px;
    }
    .an-title>i{
        margin-right: 5px;
    }

    .an-content{
      padding: 20px 40px;
      border-top: 1px solid #ddd;
      margin-top: 10px;
    }

    .tell-ul>li{
        display: flex;
        align-items: center;
        margin: 10px 0; 
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    .tell-ul>li>i{
        font-size: 25px;
        margin-right: 10px;
    }
    .tell-ul>li>.rg{
        flex: 1;
    }

    .an-footer{
        margin-top: 10px;
        border-top: 1px solid #eee;
        padding-top: 10px;
    }
    
    .el-timeline .el-card{
        padding: 10px;
        margin-bottom: 10px;
    }
</style>
<style >
    .el-timeline-item__timestamp{
        color: #666;
    }
</style>
