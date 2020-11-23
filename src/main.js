// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import jquery from 'jquery'
import Swiper from 'swiper'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.css'
import '@/css/app.css'
import axios from 'axios'
import VEmojiPicker from 'v-emoji-picker';
Vue.use(VEmojiPicker);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$url = "http://127.0.0.1:1212";
Vue.prototype.getTimeDistance=function(time) {

  var date_now = new Date();
  var date_time = new Date(time);
  var distance = date_now.getTime() - time;
  var days = parseInt(distance / (1000 * 60 * 60 * 24));
  if (days == 1) {
          return "昨天"
  } else if (days > 1 && days < 4) {
          return days + "天前";
  } else if (days > 3) {
          // 超过3天的，返回日期，如 2018-12-05
          // 如果是今年的，就省去年份，返回 12-05
          var year = date_time.getFullYear();
          var month = date_time.getMonth() + 1;
          if (month < 10) {
          month = "0" + month;
          }
          var day = date_time.getDate();
          if (day < 10) {
          day = "0" + day;
          }
          if (date_now.getFullYear() == year) {
          return month + "-" + day;
          } else {
          return year + "-" + month + "-" + day;
          }
  }
  var hours = parseInt((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours > 0) {
          return hours + "小时前";
  }
  var minutes = parseInt((distance % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes > 0) {
          return minutes + "分钟前";
  };
  return "刚刚";
};
window.Swiper=Swiper
window.jquery = window.$ = jquery
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
