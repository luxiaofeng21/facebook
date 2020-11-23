<template>
<div>
    <!--创建聊天室-->
    <el-dialog :visible.sync="dialogVisible" :show-close="false" width="500px" :before-close="getclose">
        <div class="dialog-title" slot="title">
            <span class="dialog-icon"><i class="el-icon-info"></i></span>
            <span class="dialog-icon" @click="getclose"><i class="el-icon-close"></i></span>
        </div>
        <div class="video-header">
            <div class="etr7akla taijpn5t pioscnbf j83agx80 rq0escxv spb7xbtv bkmhp75w emlxlaya s45kfl79 snggw924 czabki66 hx37s9t6 qjs0y65x bp9cbjyn"><i class="hu5pjgll bixrwtb6 sp_Dk-puqZ-HC9 sx_6798ea" style="height: 36px; width: 36px;"></i></div>
            <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id oqcyycmt" dir="auto">创建你的视频聊天室</span>
        </div>
        <cart-list :list="chat" @getcart="getcart" type="arrow"></cart-list>
        <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
            <div class="qzhwtbm6 knvmm38d"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi knj5qynh m9osqain oqcyycmt" dir="auto">首先，请选择你想邀请的用户</span></div>
        </div>
        <el-button style="width:100%" type="primary" v-on:click="getnewVideo" :disabled="chat[1].text!='选择用户' && chat[2].text!='选择时间'?false:true">创建聊天室</el-button>
    </el-dialog>
    <!--聊天室-->
    <el-dialog :show-close="false" :visible.sync="dialogVisible7" width="500px">
        <div class="dialog-title" slot="title">
            <span class="dialog-icon" @click="dialogVisible7=false"><i class="el-icon-close"></i></span>
        </div>
        <div class="video-header">
            <div class="etr7akla taijpn5t pioscnbf j83agx80 rq0escxv spb7xbtv bkmhp75w emlxlaya s45kfl79 snggw924 czabki66 hx37s9t6 qjs0y65x bp9cbjyn">
                <img src="../assets/me.jpg" />
            </div>
            <div class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db  b2s5l15y  oo9gr5id oqcyycmt" dir="auto">
                <div class="o3w64lxj hnhda86s"><img :src="chat[0].img" /> <span>{{chat[0].title}}</span></div>
                <div class="chat-text">你的视频已预定开启时间</div>
                <div class="chat-date">{{chat[1].text}}</div>
            </div>
        </div>
        <ul class="gong-ul">
            <li v-for="(item,index) in gong" :key="index">
                <div class="book-icon">
                    <i class="sp_UunXq4RlMQk" :class="item.icon"></i>
                </div>
                <div class="gong-title">{{item.title}}</div>
            </li>
        </ul>
        <br>
        <book-input :book="bookUrl">
            <div class="book-icon2"> <i class="el-icon-copy-document"></i> </div>
        </book-input>
        <div class="visible-title">谁会收到邀请？</div>
        <cart-list :list="[chat[1]]"></cart-list>
        <span slot="footer" class="footer-join">
            <el-button icon="el-icon-s-marketing" type="primary">加入</el-button>
        </span>
    </el-dialog>
    <!--选择时间-->
    <el-dialog :visible.sync="dialogVisible2" :show-close="false" width="400px">
        <div class="dialog-title2">
            <span class="dialog-icon" v-on:click="dialogVisible2=false"><i class="el-icon-back"></i></span>
            <span class="dialogTitle">开始时间</span>
            <span class="dialog-icon" v-on:click="dialogVisible2=false"><i class="el-icon-close"></i></span>
        </div>
        <div class="dialogSelectDate">
            <el-date-picker v-model="selectDate" type="date" value-format="yyyy年MM月dd日" format="yyyy年MM月dd日" placeholder="选择日期">
            </el-date-picker>
            <el-time-select :picker-options="{start:nowtime,end:'23:45'}" v-model="selectTime" placeholder="选择时间">
            </el-time-select>
            <el-button>立即重置</el-button>
        </div>
        <span slot="footer">
            <el-button type="primary" @click="getSavedate">保存</el-button>
        </span>
    </el-dialog>
    <!--视频聊天室活动-->
    <el-dialog :visible.sync="dialogVisible4" :show-close="false" width="500px">
        <div class="dialog-title2">
            <span class="dialog-icon" v-on:click="dialogVisible4=false"><i class="el-icon-back"></i></span>
            <span class="dialogTitle">视频聊天室活动</span>
            <span class="dialog-icon" v-on:click="dialogVisible4=false"><i class="el-icon-close"></i></span>
        </div>
        <div class="activity">
            <cart-list class="cart-list" @getcart="getactivity" :list="activity"></cart-list>
        </div>
    </el-dialog>
    <!--视频聊天室新活动-->
    <el-dialog :visible.sync="dialogVisible5" :show-close="false" width="515px">
        <div class="dialog-title2">
            <span class="dialog-icon" v-on:click="dialogVisible5=false"><i class="el-icon-back"></i></span>
            <span class="dialogTitle">视频聊天室新活动</span>
            <span class="dialog-icon" v-on:click="dialogVisible5=false"><i class="el-icon-close"></i></span>
        </div>
        <book-input :book="bookObj"></book-input>
        <div class="visible-title">选择标签符号</div>
        <div class="emoticons-list">
            <div class="book-icon" @click="getemoticons(index)" :class="iconActive==index?'icon-active':''" v-for="(item,index) in emoticons" :key="index"> <img :src="item" alt=""></div>
        </div>
        <div slot="footer">
            <el-button type="primary" @click="getSmybol">保存</el-button>
        </div>
    </el-dialog>
    <!--谁会受到邀请-->
    <el-dialog :visible.sync="dialogVisible3" :show-close="false" width="500px">
        <div class="dialog-title2">
            <span class="dialog-icon" v-on:click="dialogVisible3=false"><i class="el-icon-back"></i></span>
            <span class="dialog-icon" v-on:click="dialogVisible3=false"><i class="el-icon-close"></i></span>
        </div>

        <div class="visible-title">谁会收到邀请？</div>
        <cart-list :list="visitation" :type="'radio'" :active="active" @getcart="getradio"></cart-list>
        <span slot="footer">
            <el-button type="primary" @click="getfriend">{{active==0?'保存':'邀请好友'}}</el-button>
        </span>
    </el-dialog>
    <!--邀请指定好友-->
    <el-dialog :visible.sync="dialogVisible6" :show-close="false" width="500px">
        <div class="dialog-title2">
            <span class="dialog-icon" v-on:click="dialogVisible6=false"><i class="el-icon-back"></i></span>
            <span class="dialogTitle">邀请指定好友</span>
            <span class="dialog-icon" v-on:click="dialogVisible6=false"><i class="el-icon-close"></i></span>
        </div>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search">
        </el-input>
        <ul class="friend-ul">
            <li v-for="(item,index) in friend" :key="index" @click="getCheckbox(item)" :class="item.checked?'is-checked':''">
                <div class="friend-lf">
                    <img :src="item.img" alt="">
                    <span>{{item.title}}</span>
                </div>
                <div class="friend-rg">
                    <span class="el-checkbox__inner"></span>
                </div>
            </li>
        </ul>
        <div class="skip" v-if="friendAll.length<=0">
            <i class="el-icon-link"></i>
            <span>你也可以跳过这一步，并通过分享链接来邀请其他人</span>
            <el-button type="primary" size="medium" @click="getskip(1)">跳过</el-button>
        </div>
        <div class="skip" v-else>
            <i class="el-icon-link"></i>
            <span>你也可以通过分享链接来邀请其他人</span>
            <el-button type="primary" size="medium" @click="getskip(2)">邀请</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import bookInput from "@/common/book-input"
import cartList from "@/common/cart-list"
export default {
    components: {
        'cartList': cartList,
        'bookInput': bookInput,
    },
    props: ["dialogVisible"],
    data() {
        return {
            bookUrl: {
                disabled: true,
                icon: "el-icon-paperclip",
                title: "复制链接来邀请好友",
                text: "msngr.com/lyduygdjcgto"
            },
            gong: [{
                    title: "邀请",
                    icon: "sx_a4d9d7"
                },
                {
                    title: "分享",
                    icon: "sx_dff75d"
                },
                {
                    title: "编辑",
                    icon: "sx_c29edb"
                },
                {
                    title: "关闭",
                    icon: "sx_5abfc5"
                }
            ],
            friendAll: [],
            friend: [{
                    title: "丽丽",
                    img: require('@/assets/me.jpg'),
                    checked: false
                },
                {
                    title: "丽丽1",
                    img: require('@/assets/me.jpg'),
                    checked: false
                },
                {
                    title: "丽丽2",
                    img: require('@/assets/me.jpg'),
                    checked: false
                }
            ],
            dialogVisible7: false,
            dialogVisible6: false,
            search: "",
            active: 0,
            iconActive: 0,
            emoticons: [
                require("@/assets/1f44b.png"),
                require("@/assets/1f642.png"),
                require("@/assets/26a1.png"),
                require("@/assets/1f6cb.png"),
                require("@/assets/1f917.png"),
                require("@/assets/1f440.png"),
                require("@/assets/1f3e0.png"),
                require("@/assets/1f3a4.png"),
                require("@/assets/1f393.png"),
                require("@/assets/1f334.png"),
                require("@/assets/1f939.png"),
                require("@/assets/1f319.png"),
                require("@/assets/2600.png"),
                require("@/assets/2615.png"),
                require("@/assets/1f4aa.png"),
                require("@/assets/1f4da.png"),
                require("@/assets/1f4fa.png"),
                require("@/assets/1f495.png"),
                require("@/assets/1f958.png"),
                require("@/assets/1f37d.png"),
                require("@/assets/1f3b2.png"),
                require("@/assets/1f382.png"),
                require("@/assets/1f57a.png"),
                require("@/assets/1f57a.png"),
                require("@/assets/1f60e.png"),
            ],
            bookObj: {
                title: "视频聊天室",
                img: require("@/assets/1f44b.png"),
                text: "",
            },
            dialogVisible5: false,
            activity: [{
                    icon: "el-icon-plus",
                    title: "新建"
                },
                {
                    img: require("@/assets/1f44b.png"),
                    title: "枫果果的聊天室"
                },
                {
                    img: require("@/assets/1f642.png"),
                    title: "随便聊聊"
                },
                {
                    img: require("@/assets/26a1.png"),
                    title: "找我聊！"
                },
                {
                    img: require("@/assets/1f6cb.png"),
                    title: "全天不掉线"
                },
                {
                    img: require("@/assets/1f917.png"),
                    title: "求人陪"
                },
                {
                    img: require("@/assets/1f440.png"),
                    title: "试用视频聊天"
                }, {
                    img: require("@/assets/1f3e0.png"),
                    title: "宅家好无聊"
                }, {
                    img: require("@/assets/1f3a4.png"),
                    title: "心事向谁说？"
                }, {
                    img: require("@/assets/1f393.png"),
                    title: "终于周五啦"
                }, {
                    img: require("@/assets/1f393.png"),
                    title: "毕业派对"
                }, {
                    img: require("@/assets/1f334.png"),
                    title: "嗨起来"
                }, {
                    img: require("@/assets/1f939.png"),
                    title: "一心多用"
                }, {
                    img: require("@/assets/1f319.png"),
                    title: "庆祝开斋节"
                }, {
                    img: require("@/assets/2600.png"),
                    title: "朝气满满"
                }, {
                    img: require("@/assets/2615.png"),
                    title: "品咖会友"
                },
                {
                    img: require("@/assets/1f4aa.png"),
                    title: "运动健身"
                },
                {
                    img: require("@/assets/1f4da.png"),
                    title: "学里偷闲"
                },
                {
                    img: require("@/assets/1f4fa.png"),
                    title: "追剧吐槽"
                },
                {
                    img: require("@/assets/1f495.png"),
                    title: "唠唠家常"
                },
                {
                    img: require("@/assets/1f958.png"),
                    title: "云晚餐"
                },
                {
                    img: require("@/assets/1f37d.png"),
                    title: "云午餐"
                },
                {
                    img: require("@/assets/1f3b2.png"),
                    title: "游戏之夜"
                },
                {
                    img: require("@/assets/1f382.png"),
                    title: "隔空庆生"
                },
                {
                    img: require("@/assets/1f57a.png"),
                    title: "卡拉 OK"
                },
                {
                    img: require("@/assets/1f57a.png"),
                    title: "一起跳起来"
                },
                {
                    img: require("@/assets/1f60e.png"),
                    title: "小圈子密聊"
                },
            ],
            visitation: [{
                    icon: "sp_nUTijdutLoC haoyou",
                    title: "好友",
                    text: "你的所有 Facebook 或 Messenger 好友都能看到和加入这个视频聊天室。"
                },
                {
                    icon: "sp_nUTijdutLoC specify",
                    title: "指定好友",
                    text: "选择特定好友，让他们看到和加入这个视频聊天室。如果你打开链接分享，任何获得链接的人都能加入聊天室。"
                },
            ],
            nowtime: "",
            selectTime: "",
            selectDate: "",
            dialogVisible4: false,
            dialogVisible3: false,
            dialogVisible2: false,
            chat: [{
                    img: require("@/assets/1f44b.png"),
                    title: "视频聊天室活动",
                    text: "枫果果的视频聊天室"
                },
                {
                    icon: "sp_Dk-puqZ-HC9 icon-login",
                    title: "谁会收到邀请？",
                    text: "选择用户"
                },
                {
                    icon: "sp_Dk-puqZ-HC9 icon-date",
                    title: "开始时间",
                    text: "选择时间"
                },
            ],
        };
    },
    methods: {
        //创建聊天室
        getnewVideo() {
            var chat = this.chat;
            let info = {
                img: chat[0].img,
                name: chat[0].text,
                date: chat[2].text
            }
            this.$emit("getnewVideo", info)
        },
        //选择时间
        getSavedate() {
            var date = this.selectDate;
            var time = this.selectTime;
            this.chat[2].text = date + time;
            this.dialogVisible2 = false;
        },
        //跳过，邀请
        getskip(state) {
            if (state == 1) {

                this.$confirm("允许任何人加入和分享链接，即使他们不是你的好友或者并非 Facebook 或 Messenger 用户。 如果关闭链接分享功能，其他人都无法再加入该视频聊天室。", "确定要打开链接分享功能？", {
                    confirmButtonText: "打开",
                    cancelButtonText: "保持关闭",
                    type: "warning"
                }).then(res => {
                    this.chat[1].text = "获得链接的人"
                    this.dialogVisible6 = false;
                    this.dialogVisible3 = false;
                }).catch(res => {
                    this.chat[1].text = "选择受邀对象，并决定是否允许分享邀请链接"
                    this.dialogVisible6 = false;
                    this.dialogVisible3 = false;
                })

            } else {
                this.dialogVisible6 = false;
                this.dialogVisible3 = false;
                this.chat[1].text = `选择${this.friendAll.length}个好友`
            }
        },
        //多选
        getCheckbox(item) {
            item.checked = !item.checked
            var list = this.friend.filter(x => x.checked);
            this.friendAll = list
        },
        //邀请好友，保存
        getfriend() {
            if (this.active == 0) {
                this.chat[1].text = "好友"
                this.dialogVisible3 = false
            } else {
                this.dialogVisible6 = true
            }
        },
        //选择好友
        getradio(i) {
            console.log(i)
            this.active = i
        },
        //关闭
        getclose() {
            this.$emit("getclose")
        },
        //保存标记符号
        getSmybol() {
            this.dialogVisible4 = false;
            this.dialogVisible5 = false;
            this.chat[0] = Object.assign({}, this.bookObj);
            this.chat=JSON.parse(JSON.stringify(this.chat))
            this.$message.success("保存成功")
        },
        //选择标记符号
        getemoticons(i) {
            this.iconActive = i;
            this.bookObj.img = this.emoticons[i]
        },
        //视频聊天室活动
        getactivity(e) {
            if (e > 0) {
                this.dialogVisible4 = false;
                this.chat[0].text = this.activity[e].title;
                if (this.activity[e].img) {
                    this.chat[0].img = this.activity[e].img;
                } else {
                    this.chat[0].icon = this.activity[e].icon;
                }
            } else {
                this.dialogVisible5 = true
            }

        },
        //创建你的语音聊天室
        getcart(e) {
            if (e == 2) {
                this.dialogVisible2 = true
            } else if (e == 1) {
                this.dialogVisible3 = true
            } else {
                this.dialogVisible4 = true
            }
        },
    },
    created() {
        var date = new Date();
        var time = date.toLocaleTimeString().substring(2).split(":").map(x => x.length < 2 ? "0" + x : x)
        time.pop();
        time = time.join(":")
        var formDate = ["年", "月", "日"]
        var nowDate = date.toLocaleDateString().split("/").map((x, i) => x < 10 ? "0" + x : x).map((x, i) => x + formDate[i]).join("");
        this.selectDate = nowDate;
        this.selectTime = time;
        this.nowtime = time;
    },
};
</script>

<style scoped>
.sp_UunXq4RlMQk {
    background-image: url(../assets/_AgLJqLL0tL.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 20px;
    width: 20px;
}

.sp_UunXq4RlMQk.sx_a4d9d7 {
    background-position: -2px -50px;
}

.sp_UunXq4RlMQk.sx_dff75d {
    background-position: 1px -1410px;
}

.sp_UunXq4RlMQk.sx_c29edb {
    background-image: url(../assets/zqqZaHKOWzc.png);
    background-position: 2px -408px;
    width: 18px;
    height: 18px;
}

.sp_UunXq4RlMQk.sx_5abfc5 {
    background-image: url(../assets/yHc6lhnD990.png);
    background-position: -25px -158px;
}

.gong-ul .book-icon {
    margin-right: 0;
    margin-bottom: 5px;
}

.gong-ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
}

/*聊天室 */
.taijpn5t {
    border-radius: 50%;
    overflow: hidden;
}

.chat-text {
    color: var(--secondary-text);
    font-weight: 600;
    margin: 5px 0;
}

.chat-date {
    color: var(--event-date);

}

/*邀请指定好友 */
.friend-ul {
    margin: 10px 0;
}

.friend-ul li {
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.friend-ul li:hover {
    background: #eee;
}

.friend-ul .friend-lf {
    display: flex;
    align-items: center;
}

.friend-ul li img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.skip {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.skip>i {
    font-size: 20px;
}

.skip>span {
    display: inline-block;
    width: 70%;
}

.skip .el-button {
    width: 100px;
}

/**/
.emoticons-list {
    display: flex;
    flex-wrap: wrap;
}

.emoticons-list>div {
    margin-bottom: 10px;
    border: 2px solid transparent;
}

.emoticons-list>.icon-active {
    border: 2px solid #1F7BF2;
}

.activity {
    height: 400px;
    overflow: auto;
}

.el-checkbox__inner {
    width: 18px;
    height: 18px;
}

.is-checked .el-checkbox__inner {
    background-color: #1877F2;
    border-color: #1877F2;

}

.is-checked .el-checkbox__inner::after {
    transform: rotate(45deg) scaleY(1);
    top: 3px;
    left: 6px;
}

.footer-join .el-button {
    font-size: 1.0625rem;
    font-weight: 600;
}
</style>
