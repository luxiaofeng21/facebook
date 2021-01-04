<template>
    <div>
        <el-dialog title="创建帖子" :visible.sync="show" width="550px" :before-close="getclose" :append-to-body="true">
            <div class="el-flex">
                <el-avatar :src="user_info.me_img"></el-avatar>
                <div class="rg">
                    <div class="me-name">{{user_info.user_name}}</div>
                    <div class="me-type" @click="showSet=true">
                            <img :src="selectObj.img" alt="" v-if="selectObj.img"> 
                            <i :class="selectObj.icon" v-else></i>
                            <span>{{selectObj.title}}</span>
                            <i class="el-icon-caret-bottom"></i>
                    </div>
                </div>
            </div>
            <p>
                    <el-input type="textarea" v-model="content" :placeholder="user_info.user_name+'，分享你的新鲜事吧！'" :autosize="{minRows:4}"></el-input>
            </p>
            <div class="flex">
                <img alt="" src="../assets/SATP_Aa_square-2x.png" height="38">
                <el-popover
                    placement="bottom"
                    trigger="click">
                        <VEmojiPicker @select="selectEmoji"   /> 
                        <div class="hover-icon " slot="reference" >
                            <i class="hu5pjgll bixrwtb6 sp_Osp8PMBw1xR sx_b6020a" style="height: 24px; width: 24px;"> </i>
                        </div>
                </el-popover>
            </div>
            <div class="tie-arrow">
                <div class="lf">添加更多内容</div>
                <div class="rg">
                    <div class="hover-icon">
                        <i class="hu5pjgll bixrwtb6 sp_sCNqGdumk_3 sx_6bee45" style="height: 24px; width: 24px;"> </i>
                    </div>
                    <div class="hover-icon">
                            <i class="hu5pjgll bixrwtb6 sp_JnKaLLvPoxR sx_ee8eae" style="height: 24px; width: 24px;"></i>
                    </div>
                    <div class="hover-icon">
                            <i class="hu5pjgll bixrwtb6 sp_JnKaLLvPoxR sx_c48911" style="height: 24px; width: 24px;"></i>
                    </div>
                    <div class="hover-icon">
                            <i class="hu5pjgll bixrwtb6 sp_JnKaLLvPoxR sx_3bba41" style="height: 24px; width: 24px;"></i>
                    </div>
                    <div class="hover-icon">
                            <i class="hu5pjgll bixrwtb6 sp_sCNqGdumk_3 sx_346c20" style="height: 24px; width: 24px;"> </i>
                    </div>
                    <div class="hover-icon">
                            <i class="hu5pjgll bixrwtb6 sp_Osp8PMBw1xR sx_19f068" style="height: 24px; width: 24px;"></i>
                    </div>
                </div>
            </div>
            <el-button type="primary" @click="getbtn">发帖</el-button>
        </el-dialog>
        <el-dialog :visible.sync="showSet" title="隐私设置" width="550px" > 
                <div class="el-bottom">
                    <div class="el-title">谁能够看到你的帖子</div>
                    <div class="el-text">你的帖子会显示在动态消息、个人主页和搜索结果中。</div>
                </div>
                <cart-list class="cart-ul" :list="setList" type="radio" :active="active" @getcart="getcart"></cart-list>
        </el-dialog>
    </div>
</template>

<script>
import  cartList from "@/common/cart-list"
export default {
    components:{
        cartList
    },
    props:["show"],
    data() {
        return {
            selectObj:{},
            active:0,
            setList:[
                {
                    img:require("@/assets/diqiu.png"),
                    title:"公开",
                    text:"Facebook 站内和站外的任何人"
                },
                {
                    img:require("@/assets/friend2.png"),
                    title:"好友",
                    text:"你的Facebook 好友"
                },
                {
                    arrow:true,
                    img:require("@/assets/friend.png"),
                    title:"好友,除了...",
                    text:"你的Facebook 好友",

                },
                {
                     img:require("@/assets/suo.png"),
                    title:"仅限自己",
                },
                {
                    arrow:true,
                    icon:"el-icon-user-solid",
                    title:"指定好友",
                    text:"只对部分好友可见"
                },
                {
                    arrow:true,
                    icon:"el-icon-s-tools",
                    title:"自定义",
                    text:"包含或排除单个或多个好友"
                },
            ],
            showSet:false,
            content:"",
            user_info:this.$store.state.user_info
        };
    },
    created() {
        this.selectObj=this.setList[0]
    },
    mounted() {

    },
    methods: {
        //发帖
        getbtn(){
            var content=this.content;
            var selectObj=this.selectObj;
            var type=this.active;
            this.$emit("getbtn",{content,type,selectObj})
        },
        //关闭
        getclose(){
            this.$emit(`update:show`,false)
        },
        getcart(i,item){
            if(!item.arrow){
                this.active=i;
                this.selectObj=this.setList[i];
                this.showSet=false;
            }
            
        },
         //选择表情
        selectEmoji(data){
            this.content+=data.data
        },
    }
};
</script>
<style>
    .cart-ul .cart-img>img{
        width: 25px;
        height: 25px;
    }
</style>
<style scoped >
.me-type{
    margin-top: 5px;
    background-color: #E4E6EB;
    padding: 4px 5px;
    display: inline-flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
}
.me-type>img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
}

.tie-arrow{
    display: flex;
    align-items: center;
    border: 2px solid #eee;
    padding:5px 10px;
    border-radius: 5px;
    margin: 15px 0;
}
.tie-arrow>.rg{
    width: 65%;
    justify-content: flex-end;
    display: flex;
}
.tie-arrow>.lf{
    width: 35%;
    color: #000;
    font-weight: bold;
}
.el-text{
    line-height: 25px;
}
</style>
