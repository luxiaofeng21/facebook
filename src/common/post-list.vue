<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="card-item hybvsw6c"
      @click="eindex = index"
    >
      <!--用户头部信息-->
      <div class="card-head" v-if="item.user_info">
        <div class="lf">
          <img :src="item.user_info.me_img" alt="" />
          <div class="card-name">{{ item.user_info.user_name }}</div>
          <div class="card-date">{{ showDate(item.date) }} <i class="date-icon"></i></div>
        </div>
        <el-popover placement="bottom" width="300" trigger="click">
          <ul class="popver-ul">
            <li v-for="(items, indexs) in popver" :key="indexs">
              <i :class="items.icon"></i>
              <div class="rg">
                <span class="popver-title">{{ items.title }}</span>
                <div class="popver-text">{{ items.text }}</div>
              </div>
            </li>
          </ul>
          <div slot="reference" class="hover-icon">
            <i class="el-icon-more"></i>
          </div>
        </el-popover>
      </div>
      <!--发布的内容-->
      <div class="card-what">
        <div class="card-title" v-html="item.content"></div>
        <div class="card-img" v-if="item.img"><img :src="item.img" alt="" /></div>
        <div class="card-img" v-if="item.video">
          <video :src="item.video" alt="" controls></video>
        </div>
      </div>
      <!--查看点赞人数-->
      <div class="card-count">
        <div class="lf">
          <i class="icon-count icon1"></i>
          <i class="icon-count icon2"></i>
          <i class="icon-count icon3"></i>
          <i class="icon-count icon4"></i>
          <i class="icon-count icon5"></i>
          <i class="icon-count icon6"></i>
          <i class="icon-count icon7"></i>
          <span>{{ item.goodsNum }}</span>
        </div>
        <div class="rg">
          <span @click="item.showEmoji = !item.showEmoji">{{ item.remark }}条评论</span>
          <span>{{ item.share }}条分享</span>
        </div>
      </div>
      <!--操作-->
      <div class="card-handle">
        <div
          class="handle-li"
          @click="gethandle(1, item)"
          :class="item.checked ? 'checked' : ''"
        >
          <i class="icon-handle icon1"></i>
          <span>点赞</span>
        </div>
        <div class="handle-li" @click="gethandle(2, item, $event)">
          <i class="icon-handle icon2"></i>
          <span>评论</span>
        </div>
        <div class="handle-li" @click="gethandle(3, item)">
          <i class="icon-handle icon3"></i>
          <span>转发</span>
        </div>
      </div>
      <div v-if="item.showEmoji">
        <!--评论列表-->
        <ul class="collect-list" v-loading="loading">
          <li
            v-for="(items, indexs) in item.collection"
            :key="indexs"
            @click="eindex2 = indexs"
          >
            <div class="me-img">
              <img :src="items.user_info.me_img" alt="" />
            </div>
            <div class="rg">
              <div class="collent-msg">
                <div class="me-name">{{ items.user_info.user_name }}</div>
                <div class="collect-text" v-html="items.content"></div>
                <div class="hover-icon">
                  <el-popover>
                    <ul class="popver-ul">
                      <li>编辑</li>
                      <li>删除</li>
                    </ul>
                    <i slot="reference" class="el-icon-more"></i>
                  </el-popover>
                </div>
              </div>
              <div class="collect-img" v-if="items.img">
                <img :src="items.img" alt="" />
              </div>
              <div class="collect-handle">
                <span>赞</span>·<span @click="item.showEmoji = !item.showEmoji"
                  >回复</span
                >
                <span>{{ showDate(items.date) }}</span>
              </div>

              <!-- <li   v-for="(detail,i) in items.collection" :key="i">
                                                        <div class="me-img">
                                                                <img :src="detail.me_img" alt="">
                                                        </div>
                                                        <div class="rg">
                                                                <div class="collent-msg">
                                                                        <div class="me-name">{{detail.name}}</div>
                                                                        <div class="collect-text" v-html="detail.content"></div>
                                                                        <div class="hover-icon">
                                                                                <el-popover>
                                                                                        <ul class="popver-ul">
                                                                                                <li>编辑</li>
                                                                                                <li>删除</li>
                                                                                        </ul>
                                                                                        <i slot="reference" class="el-icon-more"></i>
                                                                                </el-popover>
                                                                        </div>
                                                                </div>
                                                                <div class="collect-img" v-if="detail.img">
                                                                        <img :src="detail.img" alt="">
                                                                </div>
                                                                <div  class="collect-handle">
                                                                        <span>赞</span>·<span @click="items.item.showEmoji=!items.item.showEmoji">回复</span>
                                                                        <span>{{showDate(items.date)}}</span>
                                                                </div>
                                                        </div>
                                                        
                                                </li> -->
              <!-- <post-button v-if="item.showEmoji" :item="items" @getemoji="getemoji2"></post-button> -->
            </div>
          </li>
        </ul>
        <!--发布评论-->
        <post-button :item="item" @getemoji="getemoji"></post-button>
        <div class="cart-ti">按Enter键发布。</div>
      </div>
    </div>
  </div>
</template>
<script>
import postButton from "./post-button";
export default {
  components: {
    postButton,
  },
  props: ["list","url","url2"],
  data() {
    return {
      loading: false,
      eindex2: 0,
      eindex: 0,
      popver: [
        {
          icon: "el-icon-document-checked",
          title: "收藏帖子",
          text: "加入收藏",
        },
        {
          icon: "el-icon-edit",
          title: "编辑帖子",
        },
        {
          icon: "el-icon-edit-outline",
          title: "编辑分享帖子",
        },
        {
          icon: "el-icon-delete",
          title: "删除帖子",
        },
        {
          icon: "el-icon-close-notification",
          title: "关闭帖子通知",
        },
        {
          icon: "el-icon-date",
          title: "编辑日期",
        },
      ],
    };
  },
  created() {
      
  },
  mounted() {
      //   this.$nextTick(()=>{
      //     this.list.map(x=>{
      //       if(x.showEmoji){
      //           this.$axios.get(this.url2, { params: { aid:x.id } }).then((res) => {
      //               x.collection= res
      //               this.$forceUpdate()
      //           });
                  
      //       }
      //     })
      // })
  
  },
  methods: {
    getemoji(item) {
      var user_info = this.$store.state.user_info;
      var info = {
        aid: item.id,
        uid: user_info.id,
        content: item.collect_title,
      };
      this.$axios.post(this.url, info).then((res) => {
        if (res.code == 1) {
          item.collect_title = "";
          this.$notify({
            title: "成功",
            message: "评论成功",
            type: "success",
            position: "bottom-left",
          });
        }
      });
    },
    gethandle(state, item, e) {
      //点赞
      if (state == 1) {
        item.checked = !item.checked;
        if (item.checked) {
          item.goodsNum += 1;
        } else {
          item.goodsNum -= 1;
        }
        //评论
      } else if (state == 2) {
        this.loading = true;
        if (!item.showEmoji) {
            item.showEmoji = true;
            var dom = $(e.currentTarget)
              .parents(".card-item")
              .children()
              .children(".card-collect");
            if (dom.length > 0) {
              $("body,html").animate({ scrollTop: dom.offset().top - 800 });
              $(dom).find("input").focus();
            }
            this.$axios.get(this.url2, { params: { aid:item.id } }).then((res) => {
                item.collection= res
                this.loading = false;
                this.$forceUpdate();
            });
         
        } else {
          item.showEmoji = false;
          this.$forceUpdate();
        }

        //转发
      } else {
      }
    }
         
  },
};
</script>

<style scoped>
.date-icon {
  background-image: url(../assets/xVr-bSpqpnp.png);
  background-size: auto;
  background-repeat: no-repeat;
  display: inline-block;
  height: 12px;
  width: 12px;
  background-position: 0 -721px;
}

.icon-count {
  width: 25px;
  height: 25px;
  display: inline-block;
  background-image: url(../assets/08_2WsnTY6B.png);
  background-repeat: no-repeat;
  background-size: auto;
  margin-left: -10px;
  border: 1px solid #fff;
  border-radius: 50%;
  transform: scale(0.8);
}
.card-count > .lf {
  display: flex;
  align-items: center;
}
.card-count > div > *,
.collect-handle > * {
  cursor: pointer;
}
.card-count > div > *:hover,
.collect-handle > *:hover {
  text-decoration: underline;
}
.collect-handle {
  margin: 5px 0;
}
.icon-count.icon1 {
  background-position: 0px -1514px;
}
.icon-count.icon2 {
  background-position: -25px -1514px;
}
.icon-count.icon3 {
  background-position: 0px -1539px;
}
.icon-count.icon4 {
  background-position: -50px -1539px;
}
.icon-count.icon5 {
  background-position: 0px -1489px;
}
.icon-count.icon6 {
  background-position: -50px -1516px;
}
.icon-count.icon7 {
  background-position: -50px -1489px;
}

.handle-li.checked {
  color: #1877f2;
}
.handle-li.checked .icon-handle.icon1 {
  background-position: 0 -229px;
}

.card-item {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}
.card-head {
  padding: 12px 16px 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-head > .lf {
  width: 90%;
}
.card-head img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
}
.card-handle {
  display: flex;
  padding: 2px 0;
  margin: 0 16px;
  border-top: 1px solid #eee;
}
.card-handle > div > i {
  margin-right: 5px;
}
.card-handle > div {
  width: 33%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-handle > div:hover {
  background: #eee;
}
.card-title {
  padding: 0 16px 16px;
}
.card-img {
  background: #000;
  text-align: center;
}
.card-img > * {
  max-height: 500px;
}
.card-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 16px;
}

/*评论 */
.collect-list {
  padding: 16px;
  border-top: 1px solid #eee;
}
.collect-list li {
  display: flex;
  margin-bottom: 15px;
}

.collect-list > li > .rg {
  max-width: 85%;
  word-break: break-all;
}

.collent-msg {
  background-color: #f0f2f5;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
}
.collent-msg > .hover-icon {
  display: none;
  position: absolute;
  right: -35px;
  top: 50%;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #999;
}
.collect-list > li:hover .hover-icon {
  display: block;
}

.me-img {
  width: 30px;
  height: 30px;
}
.me-img {
  margin-right: 10px;
}
.cart-ti {
  margin-top: -5px;
  padding: 0 16px 16px 70px;
}
</style>
