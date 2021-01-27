import Vue from 'vue'
import vuex from 'vuex'
//挂载
Vue.use(vuex)
//创建vuex对象
const store=new vuex.Store({
    state:{
        tui:true,
        clienHeight:window.innerHeight - 62,
        user_info:JSON.parse(localStorage.getItem("user_info"))
    },
    //eidt方法
    mutations:{
          settui(state,data){
            state.tui=data
          },
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