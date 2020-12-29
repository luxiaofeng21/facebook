import Vue from 'vue'
import vuex from 'vuex'
//挂载
Vue.use(vuex)
//创建vuex对象
const store=new vuex.Store({
    state:{
        clienHeight:document.body.clientHeight -60,
        user_info:JSON.parse(localStorage.getItem("user_info"))
    },
    //eidt方法
    mutations:{
          setedit(state,data){
            state.user_info=data
          }
    },
    actions: {
        increment (context) {
          context.commit('setedit')
        }
      }
})

export default store