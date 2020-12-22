<template>
<div :class="[type,size]">
    <label v-for="(item,index) in list" :key="index" :class="item.active>-1?'ni-checked':''">
        <!--一级-->
        <div class="cart-item" :class="active==index?'ischecked':''" @click="getcart(index,item)">
            <div class="cart-left">
                <div class="cart-img" :class="item.iconChecked?'iconChecked':''">
                    <!--消息类型-->
                    <img v-if="item.img || item.me_img" :src="item.img|| item.me_img" alt="">
                    <span v-else-if="item.emoji">{{item.emoji}}</span>
                    <i v-else :class="item.icon"></i>
                    <span v-if="type=='msg'" class="imgicon" :class="item.imgicon"></span>
                   
                </div>
                <div class="cart-content">
                    <div class="cart-title">{{item.title}} </div>
                    <div class="cart-text">{{item.text}}<strong v-if="item.name">{{item.name}}</strong></div>
                    <div class="cart-date">{{item.date}}</div>
                </div>
            </div>
            <div class="cart-arrow">
                <slot name="right">
                    <!--消息-->
                    <span v-if="type=='msg'" class="cart-msg"></span>
                    <!--单选-->
                    <span v-if="type=='radio'" class="el-radio__inner"></span>
                    <!--开关-->
                    <el-switch v-if="type=='switch'" @change="getswitch($event,index)" v-model="item.switch"></el-switch>
                    <!--跳转-->
                    <i v-if="type=='arrow' || item.arrow" slot="right" class="el-icon-arrow-right"></i>
                    <!--下拉-->
                    <div v-if="item.children" @click.stop="item.down=!item.down" class="cart-img2">
                        <i :class="item.down?'down-icon':''" class="el-icon-arrow-right"></i>
                    </div>
                </slot>
            </div>
            <div v-if="type=='msg'" class="msg-all">
                <el-popover placement="bottom" width="300" trigger="hover">
                    <ul class="msg-ul">
                        <li v-for="(v,index) in msgul" :key="index">
                            <i :class="v.icon"></i>
                            <span>{{v.title}}</span>
                        </li>
                    </ul>
                    <div class="book-icon" slot="reference"> <i class="sp_JA7fDEHcyOz msg-down"></i> </div>
                </el-popover>
            </div>
        </div>
        <!--二级-->
        <div class="cart-children" v-show="item.down">
            <div class="cart-item" v-for="(detail,indexs) in item.children" :key="indexs" :class="item.active==indexs?'ischecked':''" @click="getcart(index,item,indexs)">
                <div class="cart-left">
                    <div class="cart-img" v-if="detail.icon ||detail.img" :class="detail.iconChecked?'iconChecked':''">
                        <!--消息类型-->
                        <img v-if="detail.img" :src="detail.img" alt="">
                        <i v-else :class="detail.icon"></i>
                        <span v-if="type=='msg'" class="imgicon" :class="detail.imgicon"></span>
                    </div>
                    <div class="cart-content">
                        <div class="cart-title">{{detail.title}} </div>
                        <div class="cart-text">{{detail.text}}<strong v-if="detail.name">{{detail.name}}</strong></div>
                        <div class="cart-date">{{detail.date}}</div>
                    </div>
                </div>
                <div class="cart-arrow">
                    <slot name="right">
                        <!--消息-->
                        <span v-if="type=='msg'" class="cart-msg"></span>
                        <!--单选-->
                        <span v-if="type=='radio'" class="el-radio__inner"></span>
                        <!--跳转-->
                        <i v-if="type=='arrow' || detail.arrow" slot="right" class="el-icon-arrow-right"></i>
                        <!--下拉-->
                        <div v-if="detail.children" class="cart-img">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </label>
</div>
</template>

<script>
export default {
    props: ["list", "type", "active", "size"],
    methods: {
        getswitch(state,index){
           if(index==0){    
               if(state){
                   $("#facebook").attr("class","_9dls __fb-dark-mode")
               }else{
                   $("#facebook").attr("class","_9dls")
               }
           }else{
               if(state){
                     $("#facebook body").addClass("concise")
               }else{
                     $("#facebook body").removeClass("concise")
               }
            
           }
        },
        //切换
        getcart(i, item, indexs) {
            //子数组
            if (item.children) {
                this.list.map(x => x.active = -1)
                if (indexs > -1) {
                    item.active = indexs;
                }
            }

            this.$emit("getcart", i, item)
        },
    },
    data() {
        return {
            msgul: [{
                icon: "el-icon-check",
                title: "标为已读"
            }, {
                icon: "el-icon-folder-delete",
                title: "移除通知"
            }, {
                icon: "el-icon-circle-close",
                title: "关闭主页管理建议通知"
            }, {
                icon: "el-icon-circle-close",
                title: "关闭这个主页的所有通知"
            }, {
                icon: "el-icon-files",
                title: "向通知团队报告问题"
            }]
        }
    },
}
</script>

<style scoped>
.video-list .cart-img img {
    height: 100%;
}

.cart-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.cart-list>* {
    width: 44%;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    cursor: pointer;
}

.cart-item:hover {
    background-color: #f2f2f2;
}

.cart-left {
    display: flex;
    width: 100%;
    align-items: center;
}

.cart-content {
    width: 70%;
}

.cart-img {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--secondary-button-background);
    border-radius: 50%;
    margin-right: 15px;
    position: relative;
}

.cart-img.iconChecked {
    background-color: #54C7EC !important;
}

.cart-img.iconChecked i {
    filter: var(--filter-always-white);
}

.cart-img>img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    background-color: var(--secondary-button-background);
}

.cart-img>i {
    width: 20px;
    height: 20px;
    display: inline-block;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    color: #000;
}

.cart-title {
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.1765;
    color: #000;
}

.cart-text {
    color: var(--secondary-text);
    font-size: .9375rem;
    line-height: 1.3333;
    font-weight: normal;
}

.cart-arrow {
    font-size: 24px;
    line-height: 40px;
    color: #999;
    font-weight: bold;
}

.icon-login {
    background-position: 0 -58px;
}

.icon-date {
    background-position: 0 -38px;
}

.sp_nUTijdutLoC {
    background-image: url(../assets/EV8jUR6lEDt.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
}

.ischecked .el-radio__inner {
    border-color: #1877F2;
    background: #1877F2;
    position: relative;
}

.ischecked .el-radio__inner::after {
    transform: translate(-50%, -50%) scale(1);
}

/*通知 */
.cart-date {
    color: var(--accent);
    font-size: 12px;
    font-weight: 600;
}

.cart-msg {
    border-radius: 50%;
    background: #1877F2;
    width: 10px;
    height: 10px;
    display: inline-block;
}

.sp_nkVxcm_S_R8 {
    background-image: url(../assets/_x_q1TYBIBj.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 28px;
    width: 28px;
}

.imgicon {
    position: absolute;
    right: -6px;
    bottom: -6px;
}

.sp_nkVxcm_S_R8.msg {
    background-position: 0 -261px;
}

.sp_nkVxcm_S_R8.flat {
    background-position: 0 -87px;
}

.msg .cart-img,
.big .cart-img {
    width: 56px;
    height: 56px;
}

.big .cart-img>i {
    font-size: 28px;
    width: 28px;
    height: 30px;
    line-height: 30px;
}

.small .cart-item:hover {
    background-color: #E4E6E9;
}

.small .cart-img {
    width: 30px;
    height: 30px;
}

.cart-item:hover .msg-all {
    display: block;
}

.msg-all {
    position: absolute;
    right: 5%;
    display: none;
}

.msg-all .book-icon {
    background: #fff;
}

.sp_JA7fDEHcyOz {
    background-image: url(../assets/d4D8oGNn1YF.png);
    display: inline-block;
    width: 20px;
    height: 20px;
}

.sp_JA7fDEHcyOz.msg-down {
    background-position: -2px -209px;
}



/*菜单 */

.ischecked {
    background-color: #EAF3FF !important;
}

.ischecked .cart-img {
    background-color: #1877F2;
}

.ischecked .cart-img>i {
    filter: var(--filter-always-white);
}

.ni-checked>.ischecked .cart-img {
    background: var(--secondary-button-background);
    ;
}

.ni-checked>.ischecked .cart-img>i {
    filter: none;
}

.watch-home {
    background-image: url(../assets/EV8jUR6lEDt.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
}

.menu .cart-img>i {
    width: 30px;
    height: 20px;
}

.cart-img>.home-icon {
    background-position: 5px -650px;
}

.cart-img>.program-icon {
    background-position: 5px -125px;
}

.cart-img>.live-icon {
    background-position: 5px -188px;
}

.cart-img>.watch-video {
    background-image: url(../assets/8v89jhzg6ax.png);
}

.cart-img>.collect-icon {
    background-position: 5px -50px;
}

.cart-img>.video-icon {
    background-image: url(../assets/videoall.png);
    background-position: 0 -301px;
}

.menu .cart-img>.dynamic {
    width: 20px;
    background-position: -21px -635px;
}

.menu .cart-img>.find {
    width: 20px;
    background-image: url(../assets/exE9Cc-p8hP.png);
    background-position: 0 -25px;
}

.menu .cart-img>.good {
    width: 20px;
    background-image: url(../assets/xVr-bSpqpnp.png);
    background-position: -21px -208px;
}

.menu .cart-img>.yao {
    width: 20px;
    background-image: url(../assets/exE9Cc-p8hP.png);
    background-position: 0 -45px;
}

/*游戏 */
.cart-img>.gaming-icon {
    background-image: url(../assets/gaming.png);
}

.cart-img>.gaming-icon.icon1 {
    background-position: 0 -352px;
}

.cart-img>.gaming-icon.icon2 {
    background-image: url(../assets/gaming2.png);
    background-position: 0 -704px;
}

/*子数组 */
.cart-children {
    padding: 5px 20px;
}
.cart-children .cart-img{
    width: 35px;
    height: 35px;
}
.cart-children .cart-title{
    font-size: 0.9rem;
}
.cart-children .cart-text{
    font-size: 0.8rem;
}
.cart-img2 {
    width: 35px;
    height: 35px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    font-size: 16px;
}

.cart-img2:hover {
    background: #DEE7F2;
}

.cart-img2>i {
    font-weight: bold;
    transition: all 0.1s;
}

.down-icon {
    transform: rotate(-90deg);
}

.__fb-dark-mode .cart-title,.__fb-dark-mode .cart-img > i{
    color: #fff !important;
}
.__fb-dark-mode .cart-item:hover{
    background-color: #252F3C !important;
}
.__fb-dark-mode .ischecked{
    background-color: #252F3C  !important;
}
.cart-img>span{
    font-size: 20px;
}
</style>
