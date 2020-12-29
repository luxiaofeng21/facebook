<template>
<div>
    <div class="l9j0dhe7 tkr6xdv7">
        <div class="rq0escxv l9j0dhe7 du4w35lb">
            <div class="h3gjbzrl l9j0dhe7" data-pagelet="root">
                <div class="j83agx80 cbu4d94t h3gjbzrl l9j0dhe7 du4w35lb qsy8amke">
                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw jifvfom9 gs1a9yip owycx6da btwxx1t3 buofh1pr dp1hu0rb">
                        <div aria-label="推广" role="navigation" class="rq0escxv l9j0dhe7 tkr6xdv7 j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz dp1hu0rb rek2kq2y o36gj0jk ahb00how">
                            <div class="hybvsw6c cjfnh4rs j83agx80 cbu4d94t dp1hu0rb l9j0dhe7 kr520xx4 iyyx5f41 spg0vajj aip8ia32 so2p5rfc hxa2dpaq">
                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd bp9cbjyn owycx6da btwxx1t3 jei6r52m wkznzc2l n851cfcs dhix69tm">
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz rj1gh0hx buofh1pr">
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd bp9cbjyn owycx6da btwxx1t3">
                                            <div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz kud993qy buofh1pr g5gj957u">
                                                <div class="j83agx80 cbu4d94t q9se6cdp p984guvr">
                                                    <div class="px9k8yfb hk9dxy2p"><span class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j irj2b8pg mysgfdmx o0t2es00 f530mmz5 hnhda86s oo9gr5id hzawbc8m" dir="auto">
                                                            <h1 class="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl" dir="auto" tabindex="-1">推广</h1>
                                                        </span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <cart-list :list="menu" :active="mactive" @getcart="getmenu"></cart-list>
                                <div class="kd0sc8dh sl8jk4me ie5zihkj i09qtzwb rm3jng1j hzruof5a pmk7jnqg kr520xx4 c0wkt4kp"></div>
                            </div>
                        </div>
                        <div aria-label="推广" role="main" class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz rj1gh0hx buofh1pr dp1hu0rb">
                            <div v-if="mactive==1" class="fsy3e5b7 j83agx80 cbu4d94t dhix69tm pb8wu8ze k4urcfbm">
                                    <span dir="auto" class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j irj2b8pg mysgfdmx o0t2es00 f530mmz5 hnhda86s oo9gr5id hzawbc8m">自动广告</span>
                                    <div class="book-card">
                                            <div class="book-img"><img src="../../assets/ftae_landing.png" alt=""></div>
                                            <div class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id hzawbc8m"> 关于 Facebook 广告 </div>
                                            <div class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a5q79mjw g1cxx5fr knj5qynh m9osqain"> 设置合适的预算 </div>
                                            <div class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a5q79mjw g1cxx5fr knj5qynh m9osqain">找准目标受众 </div>
                                            <div @click="dailogVisible=true" style="text-align:center" class="oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329" >继续</div>
                                    </div>
                            </div>
                            <div v-else class="fsy3e5b7 j83agx80 cbu4d94t dhix69tm pb8wu8ze k4urcfbm">
                                    <span dir="auto" class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j irj2b8pg mysgfdmx o0t2es00 f530mmz5 hnhda86s oo9gr5id hzawbc8m">选择目标</span>
                                    <ul class="flag-ul">
                                        <li v-for="(item,index) in flags" :key="index" @click="getflag(index)">
                                            <div class="book-icon"> <i :class="item.icon"></i> </div>
                                            <div class="book-title">{{item.title}}</div>
                                            <div class="book-text">{{item.text}}</div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
        <div>
            <div></div>
        </div>
    </div>
    <el-dialog :visible.sync="dailogVisible" :append-to-body="true" width="500px" :show-close="false">
        <div v-if="sep==0">
            <img src="../../assets/goal1.png" alt="">
            <div class="visible-title">你是否希望用户到访你的业务网点</div>
            <el-radio-group v-model="need.outlets">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
                <el-radio label="3">这不适用于我的情况</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==1">
            <img src="../../assets/goal2.png" alt="">
            <div class="visible-title">你有网站吗？</div>
            <el-radio-group v-model="need.website">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==2">
            <img src="../../assets/goal3.png" alt="">
            <div class="visible-title">客户可以在你的网站购物吗？</div>
            <el-radio-group v-model="need.shopping">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==3">
            <img src="../../assets/goal3.png" alt="">
            <div class="visible-title">客户可以在你的网站上预约吗？</div>
            <el-radio-group v-model="need.appointment">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==4">
            <img src="../../assets/goal4.png" alt="">
            <div class="visible-title">你是否通过自己的网站收集潜在客户信息？</div>
            <el-radio-group v-model="need.collect">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==5">
            <img src="../../assets/goal5.png" alt="">
            <div class="visible-title">你是否希望客户联系你</div>
            <el-radio-group v-model="need.relation">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==6">
            <img src="../../assets/goal6.png" alt="">
            <div class="visible-title">你希望客户以哪种方式联系你？请选择所有适用项。</div>
            <el-checkbox v-model="item.checked" v-for="(item,index) in relation" :label="item.label" :key="index"></el-checkbox>
        </div>
        <div v-else-if="sep==7">
            <img src="../../assets/goal7.png" alt="">
            <div class="visible-title">你的受众可能会喜欢哪些主题？</div>
             <el-select v-model="need.like" placeholder="添加兴趣"> 
                <el-option label="看书" value="1"></el-option>
                <el-option label="阅读" value="2"></el-option>
                <el-option label="写字" value="3"></el-option>
                <el-option label="跑步" value="4"></el-option>
                <el-option label="游泳" value="5"></el-option>
             </el-select>
        </div>
        <div v-else-if="sep==8">
            <img src="../../assets/goal8.png" alt="">
            <div class="visible-title">你希望每天花费多少金额？</div>
            <el-radio-group v-model="need.moeny" class="book-radio">
                <el-radio label="1">￥ 7.00 - ￥ 19.99</el-radio>
                <el-radio label="2">￥ 20.00 - ￥ 39.99</el-radio>
                <el-radio label="3">￥ 40.00 - ￥ 74.99</el-radio>
                <el-radio label="4">￥ 75.00 - ￥ 139.99</el-radio>
                <el-radio label="5">￥ 140.00 - ￥ 329.99</el-radio>
                <el-radio label="6">不低于 ￥ 330.00</el-radio>
            </el-radio-group>
        </div>
        <div v-else-if="sep==9">
            <img src="../../assets/goal9.png" alt="">
            <div class="visible-title">建议</div>
            <div class="visible-text">我们建议你使用这些设置，以取得最佳成效。定制广告时，你可以编辑这些设置。</div>
            <div class="visible-item">
                    <div class="visible-text">预估单日成效</div>
                    <ul class="sep-ul">
                        <li>
                            <div class="sep-text">覆盖人数</div>
                            <div class="sep-title">426 - 1,232</div>
                            <div class="hover-icon"> <i class="el-icon-info"></i> </div>
                        </li>
                        <li>
                            <div class="sep-text">覆盖人数</div>
                            <div class="sep-title">426 - 1,232</div>
                            <div class="hover-icon"> <i class="el-icon-info"></i> </div>
                        </li>
                    </ul>
            </div>
            <div class="visible-item">
                    <div class="visible-text">目标</div>
                    <div class="visible-title">吸引更多网站访客</div>
            </div>
            <div class="visible-item">
                    <div class="visible-text">受众</div>
                    <div class="visible-title">通过目标定位功能选择的用户</div>
            </div>
            <div class="visible-item">
                    <div class="visible-text">单日预算</div>
                    <div class="visible-title">￥ 30.00</div>
            </div>
            <div class="visible-item">
                    <div class="visible-text">投放期</div>
                    <div class="visible-title">7天</div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="info" @click="sep-=1" v-if="sep>0">返回</el-button>
            <el-button type="primary" @click="getnext">继续</el-button>
        </span>
    </el-dialog>

</div>
</template>

<script>
import cartList from '@/common/cart-list'
export default {
    components: {
        cartList,
    },
    data() {
        return {
             relation:[//联系方式列表
                {
                    label:"客户打电话联系我",
                    checked:false
                },
                {
                    label:"客户提供联系方式，然后我联系他们",
                    checked:false
                },
                {
                    label:"客户通过 Facebook 发消息给我",
                    checked:false
                },
                {
                    label:"They message me on WhatsApp",
                    checked:false
                },
            ],
            sep:0,
            need:{
                moeny:"1",  //花费
                like:"1",   //兴趣
                relation2:"1",//联系方式
                relation:"1",//联系
                collect:"1",//收集
                appointment:"1",//预约
                shopping:"1",  //购物
                website:"1",   //网站
                outlets:"1"    //业务
            },
            dailogVisible:false,
            dialogVisible2: true,
            mactive: 0,
            menu: [
                {
                    active:0,
                    down:false,
                    title:"大家",
                    text:"公开",
                    img:require("@/assets/public.png"),
                    children:[]
                },
                {
                    title: "自动广告",
                    text: "根据个人需求，随时间不断调整广告策略，争取更优成效",
                    icon: "el-icon-edit-outline",
                },
                {
                    title: "选择目标",
                    text: "根据个人需求，随时间不断调整广告策略，争取更优成效",
                    icon: "el-icon-magic-stick",
                }
            ],
            flags:[
                {
                    icon:"el-icon-s-promotion",
                    title:"使用自动化广告",
                    text:"根据个性化需求，获得随时间调整的自动广告，争取更优成效。"
                },
                 {
                    icon:"el-icon-s-promotion",
                    title:"吸引更多网站访客",
                    text:"推荐"
                },
                {
                    icon:"el-icon-picture",
                    title:"挖掘更多潜在的客户",
                    text:"推荐"
                },
                {
                    icon:"el-icon-picture",
                    title:"推广应用",
                    text:"推荐"
                },
                 {
                    icon:"el-icon-s-comment",
                    title:"吸引更多用户发消息",
                },
                {
                    icon:"el-icon-s-flag",
                    title:"推广公共主页",
                },
               
            ]
        }
    },
    created(){
        var that=this;
        this.$axios.get("/publicPage").then(res=>{
            for(let item of res){
                item.img=require("@/assets/public.png")
            }
            that.menu[0].children=res
        })
    },
    methods: {
        //选择目标
        getflag(i){
            if(i==0){
                this.mactive=1
            }else if(i==1){
                 this.$router.push({
                    path:"ad_center/websitead"
                })
            }else if(i==2){
                this.$router.push({
                    path:"ad_center/potential"
                })
            }else if(i==3){
                this.$router.push({
                    path:"ad_center/appinstall"
                })
            }else if(i==4){
                this.$router.push({
                    path:"ad_center/entry_point"
                })
            }else if(i==5){
                this.$router.push({
                    path:"ad_center/pagead"
                })
            }
        },
        //下一步
        getnext(){
            if(this.sep==6){
                 var list=this.relation.filter(x=>x.checked)
                 if(list.length<=0){
                     this.$message.error("请选择联系方式")
                     return false 
                 }
            }
            if(this.sep==9){
                this.$router.push({name:"websitead"})
            }else{
                 this.sep+=1
            }
           
        },
        getmenu(i) {
            this.mactive = i
        }
    }
}
</script>
<style>
    .cart-img{
         overflow: hidden;
     }
     .cart-img>img{
         height:100%;
         object-fit: cover;
     }
</style>
<style scoped>
.l9j0dhe7 {
    position: static;
}

.book-card>*{
    margin-bottom: 10px;
    width: 600px;
}
.book-card>.book-img{
     margin: -10px -10px 10px -10px;
}
.book-card>.book-img>img{
    width: 103.5%;
}

 img{
        width: 100%;
    }
    .el-checkbox,.book-radio .el-radio{
        width: 100%;
        padding: 10px 0;
    }
    .sep-ul{
          display: flex;
          justify-content: space-between;
      }
    .sep-ul>li{
        width: 40%;
        padding: 16px;
        background-color: #f8f8f8f8;
        border-radius: 10px;
        position: relative;
    }
    .sep-ul>li>.hover-icon{
        position: absolute;
        right: 5%;
        top: 10%; 
    }
    .sep-title{
        font-size: 1.25rem;
        font-weight: 600;
        color: #333;
    }
    .flag-ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
    }
    .flag-ul .book-icon{
        margin: 0 auto;
        margin-bottom: 10px;
        margin-top: 35px;
        font-size: 25px;
        width: 50px;
        height: 50px;
    }
    .flag-ul>li{
        text-align: center;
        height: 200px;
        margin-bottom: 10px;
        width: 20%;
        padding: 10px;
        background-color: #fff;
        box-shadow: 10px 10px 10px #eee;
        margin: 0 5px;
        margin-bottom: 10px;
        cursor: pointer;
    }
     .flag-ul>li:hover{
         background-color: #f5f5f5;
     }


    
</style>
