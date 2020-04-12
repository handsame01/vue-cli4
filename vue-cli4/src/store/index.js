import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a:1,
    b:2
  },
  mutations: {
    adda(state,n){
      state.a+=n
    },
    
  },
  actions: {
  },
  modules: {
  }
})
