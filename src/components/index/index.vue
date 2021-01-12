<template>
  <div class="app">
    <el-container>
      <el-aside :style="{ height: clienHeight + 'px' }">
        <cart-list :list="menu" @getcart="getmenu"></cart-list>
        <hr />
        <div class="flex el-padding">
          <div class="book-title">快速访问列表</div>
          <span @click="showRecommed = true" class="link">编辑</span>
        </div>
        <cart-list :list="publicPage" @getcart="publicUrl"></cart-list>
      </el-aside>
      <el-main :style="{ height: $store.state.clienHeight - 100 + 'px' }">
        <div class="book-w6">
          <slae v-if="mactive == 20"></slae>
          <friend v-else-if="mactive == 10"></friend>
          <ads v-else-if="mactive == 17"></ads>
          <div v-else>
            <tie-list @getie="getie"></tie-list>
            <div class="el-card">
              <div class="flex video-head">
                <div class="lf">
                  <i class="hu5pjgll sp_5kM2vwYmVrv sx_deb456"> </i>
                  <span class="me-name">视频聊天室</span>
                </div>
                <span class="link" v-on:click="dialogVisible = true">创建</span>
              </div>
              <div class="video-content">
                <el-avatar :src="user_info.me_img"></el-avatar>
              </div>
            </div>
            <post-list
              :list="list"
              url="/api/createComments"
              url2="/api/comments"
            ></post-list>
          </div>
        </div>
      </el-main>
      <el-aside
        :style="{ height: $store.state.clienHeight - 100 + 'px' }"
        style="background-color: transparent"
      >
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="el-title">你的公共主页</span>
            <div class="hover-icon">
              <i class="el-icon-more"></i>
            </div>
          </div>
          <cart-list :list="pages" :size="'small'" @getcart="getpublic"> </cart-list>
        </div>
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="el-title">加好友请求</span>
            <span class="link">查看全部</span>
          </div>
          <cart-list :list="friends" :size="'small'"> </cart-list>
        </div>
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="el-title">联系人</span>
            <div class="hover-icon">
              <i class="el-icon-more"></i>
            </div>
          </div>
          <cart-list :list="friends" :size="'small'"> </cart-list>
        </div>
        <div class="el-bottom">
          <span class="el-title el-bottom">群聊</span>
          <cart-list :list="chatAll" :size="'small'"></cart-list>
          <cart-list
            :list="[{ icon: 'el-icon-plus', title: '新建群聊' }]"
            size="small"
          ></cart-list>
        </div>
      </el-aside>
    </el-container>
    <video-chat
      @getclose="getclose"
      :dialogVisible="dialogVisible"
      @getnewVideo="getnewVideo"
    ></video-chat>
    <el-dialog title="创建群聊" :visible.sync="dialogVisible2" width="550px">
      <el-select
        placeholder="添加成员"
        v-model="chat"
        :filterable="true"
        :multiple="true"
        class="book-width"
      >
        <el-option
          :key="index"
          v-for="(item, index) in friends"
          :label="item.name"
          :value="item.id"
        >
          <div class="friend-item">
            <div class="friend-left">
              <div class="friend-img"><img :src="item.img" alt="" /></div>
              <div class="friend-content">
                <div class="friend-title">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </el-option>
      </el-select>
      <span slot="footer">
        <el-button type="primary" @click="cearteChat">创建</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="showRecommed" title="编辑快速访问列表" width="600px">
      <div>
        快速访问列表可以让你快速访问自己在 Facebook
        的常用功能。你的快速访问列表是自动排序的，但你可以置顶某些快速访问项，让其始终显示在顶部，也可以从列表中隐藏快速访问项。
      </div>
      <el-input
        class="el-margin"
        v-model="recommend.name"
        placeholder="搜索主页、小组和游戏"
      >
        <i class="el-input__icon el-icon-search" slot="prefix"></i>
      </el-input>
      <ul class="recommend-ul">
        <li v-for="(item, index) in recommend.list" :key="index">
          <div class="lf">
            <el-avatar :src="item.img"></el-avatar>
            <span>{{ item.title }}</span>
          </div>
          <el-select v-model="item.type" @click="changeCommend">
            <el-option :value="1" label="自动排序">
              <i class="el-icon-s-marketing"></i> <span>自动排序</span>
            </el-option>
            <el-option :value="2" label="置顶">
              <i class="el-icon-s-open"></i> <span>置顶</span>
            </el-option>
            <el-option :value="3" label="隐藏">
              <i class="el-icon-view"></i> <span>隐藏</span>
            </el-option>
          </el-select>
        </li>
      </ul>
      <span slot="footer">
        <el-button @click="showRecommed = false">取消</el-button>
        <el-button type="primary">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script scoped>
import videoChat from "@/common/video-chat";
import cartList from "@/common/cart-list";
import postList from "@/common/post-list";
import tieList from "@/common/tie-list";
import slae from "./sale";
import friend from "./friend";
import ads from "./ads";
export default {
  components: {
    ads,
    tieList,
    slae,
    friend,
    cartList,
    postList,
    videoChat,
  },
  data() {
    return {
      clienHeight: 0,
      recommend: {
        name: "",
        list: [],
      },
      showRecommed: false,

      mactive: 0,
      user_info: [],
      videoAll: [],
      chatAll: [],
      friends: [],
      dialogVisible2: false,
      chat: "",
      dialogVisible: false,
      linkman: [
        {
          img: require("@/assets/me.jpg"),
          name: "张胜男",
        },
        {
          img: require("@/assets/me.jpg"),
          name: "李四",
        },
      ],
      list: [],
      swiper: [
        {
          title: "陳麗映",
          commonNum: 2,
          img: require("@/assets/me.jpg"),
        },
        {
          title: "陳麗映",
          commonNum: 2,
          img: require("@/assets/me.jpg"),
        },
        {
          title: "陳麗映",
          commonNum: 2,
          img: require("@/assets/me.jpg"),
        },
        {
          title: "陳麗映",
          commonNum: 2,
          img: require("@/assets/me.jpg"),
        },
      ],
      downtile: "展开",
      down: 9,
      menu: [
        {
          title: this.$store.state.user_info.user_name,
          img: this.$store.state.user_info.me_img,
          url: "mePage",
        },
        {
          title: "新冠疫情信息中心",
          img: require("@/assets/kOxV5aCYUAE.png"),
        },
        {
          title: "好友",
          img: require("@/assets/S0U5ECzYUSu.png"),
          url: "friends",
        },
        {
          title: "Messenger",
          img: require("@/assets/SeXJIAlf_z-.png"),
          url: "messenger",
        },
        {
          title: "筹款活动",
          img: require("@/assets/n2vd2VduYc1.png"),
          url: "fundraisers",
        },
        {
          title: "公共主页",
          img: require("@/assets/kyCAf2jbZvF.png"),
          url: "publicpage",
        },
        {
          title: "视频",
          img: require("@/assets/duk32h44Y31.png"),
          url: "watch",
        },
        {
          title: "活动",
          img: require("@/assets/8wTx0Eu2vRq.png"),
          url: "events",
        },
        {
          title: "小组",
          img: require("@/assets/PrjLkDYpYbH.png"),
          url: "groups",
        },
        {
          title: "收藏夹",
          img: require("@/assets/lVijPkTeN-r.png"),
          url: "saved",
        },
        {
          title: "好友名单",
          img: require("@/assets/MN5ZSGIfEZ3.png"),
        },

        {
          title: "那年今天",
          img: require("@/assets/VPndBxotRgH.png"),
          url: "memories",
        },
        {
          title: "游戏",
          img: require("@/assets/PObY9OA5lvJ.png"),
          url: "gaming",
        },
        {
          title: "游戏视频",
          img: require("@/assets/5EU1wNhLmR6.png"),
          url: "gaming",
        },
        {
          title: "招聘求职",
          img: require("@/assets/DO-SN-shaZL.png"),
          url: "jobs",
        },
        {
          title: "最新动态",
          img: require("@/assets/w-vdKCGzCy1.png"),
        },
        {
          title: "直播视频",
          img: require("@/assets/Nl9CPY6q_n-.png"),
          url: "watch",
        },
        {
          title: "近期广告动态",
          img: require("@/assets/8OasGoQgQgF.png"),
        },
        {
          title: "Facebook Pay",
          img: require("@/assets/GJ4EaivDaSj.png"),
          url: "pay",
        },
        {
          title: "天气",
          img: require("@/assets/bo0Zt72NIra.png"),
          url: "weather",
        },
        {
          title: "优惠",
          img: require("@/assets/NYOGcd-z-qs.png"),
        },
        {
          title: "应急中心",
          img: require("@/assets/cT5nPnO8Wsc.png"),
          url: "onemi",
        },
      ],
      publicPage: [],
      pages: [
        {
          icon: "el-icon-bell",
          text: "通知",
        },
        {
          icon: "el-icon-phone-outline",
          text: "创建推广",
        },
      ],
    };
  },
  created() {
    var user_info = JSON.parse(localStorage.getItem("user_info"));
    var that = this;
    this.user_info = user_info;
    this.getlist();
    //朋友
    this.$axios.get("/api/friends").then((res) => {
      for (let item of res) {
        item.me_img = item.me_img;
        item.bg_img = item.bg_img;
      }
      that.friends = res;
    });
    //公共主页
    this.$axios.get("/api/publicPage").then((res) => {
      var data = res.data;
      this.publicPage = data;
      this.pages.unshift(data[data.length - 1]);
      this.recommend.list = res.data;
      //小组
      this.$axios.get("/api/getgroups").then((res) => {
        this.recommend.list = this.recommend.list.concat(res.data);
        this.recommend.list.map((x) => {
          x.type = 1;
        });
      });
    });
  },
  mounted() {
    this.clienHeight = document.body.clientHeight - 50;
    var mySwiper = new Swiper("#swiper", {
      slidesPerView: 3,
    });
  },
  methods: {
    getlist() {
      //推荐
      this.$axios.get("/api/recommended").then((res) => {
        this.list = res;
      });
    },
    //发帖
    getie(item) {
      var user_info = this.$store.state.user_info;
      var info = {
        uid: user_info.id,
        content: item.content,
        type: item.type,
      };
      this.$axios({
        method: "post",
        url: "/api/createRecommended",
        data: info,
      }).then((res) => {
        if (res.code == 1) {
          this.$message.success(res.msg);
          this.getlist();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    //快速列表排序方式
    changeCommend(item) {
      console.log(item);
    },

    //跳转
    getmenu(index, item) {
      console.log("🚀 ~ file: index.vue ~ line 1154 ~ getmenu ~ index", index);
      this.mactive = index;
      if (item.url) {
        this.$router.push({ name: item.url });
      }
    },
    //创建聊天室
    getnewVideo(item) {
      this.videoAll.push(item);
    },
    //创建群聊
    cearteChat() {
      var chat = this.chat;
      var list = this.friends.filter((x) => chat.indexOf(x.id) > -1);
      var title = list.map((x) => x.name).join(",");
      this.dialogVisible2 = false;
      this.$message.success("创建成功");
      this.chatAll.push({
        text: title,
        img: list[0].img,
      });
      this.chat = "";
    },
    //关闭
    getclose() {
      this.dialogVisible = false;
    },
    //收缩
    getdown() {
      if (this.down < 10) {
        this.down = 99;
        this.downtile = "收起";
      } else {
        this.down = 9;
        this.downtile = "展开";
      }
    },
    //公共主页
    getpublic(i, item) {
      if (i == 0) {
        this.$router.push({ name: "manageHome", query: { id: item.id } });
      }
    },
    publicUrl(i, item) {
      this.$router.push({ name: "manageHome", query: { id: item.id } });
    },
  },
};
</script>
<style>
.activity .cart-img > img {
  width: auto;
  height: auto;
}
</style>
<style scoped>
a > .scb9dxdr:hover {
  background-color: #eee;
}

.gs1a9yip {
  width: 100%;
}

.j1lvzwm4 {
  background: url("../../assets/08_2WsnTY6B.png") no-repeat no-repeat;
  background-size: 100%;
  width: 20px;
  height: 20px;
  border: 0;
}

.np69z8it:nth-of-type(1) .j1lvzwm4 {
  background-position: 0px -60px;
}

.np69z8it:nth-of-type(2) .j1lvzwm4 {
  background-position: 0 -80px;
}

.np69z8it:nth-of-type(3) .j1lvzwm4 {
  background-position: 0px -100px;
}

.pzggbiyp {
  border-radius: 50%;
}

.search .el-input__inner {
  border-radius: 100px;
}
.el-icon-edit-outline {
  font-size: 20px;
}

.video-head {
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}
.video-head > .lf {
  display: flex;
  align-items: center;
}
.video-head > .lf > i {
  margin-right: 5px;
}
.video-content {
  padding: 10px 15px;
}
.el-card {
  margin-bottom: 15px;
}

.recommend-ul > li {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.recommend-ul > li > .lf {
  flex: 1;
  display: flex;
  align-items: center;
}
.recommend-ul > li > .lf > .el-avatar {
  margin-right: 10px;
}

.el-container > {
}
</style>
