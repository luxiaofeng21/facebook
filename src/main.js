// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import jquery from 'jquery'
import Swiper from 'swiper'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.css'
import '@/css/app.css'
import '@/js/app.js'
import axios from 'axios'
import VEmojiPicker from 'v-emoji-picker';

Vue.use(VEmojiPicker);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


window.Swiper=Swiper
window.jquery = window.$ = jquery
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
