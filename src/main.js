// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Swiper from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.css'
import '@/css/app.css'
import '@/js/app.js'
import VEmojiPicker from 'v-emoji-picker';
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VEmojiPicker);

Vue.config.productionTip = false;
window.Swiper=Swiper

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
