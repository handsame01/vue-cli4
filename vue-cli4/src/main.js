import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
const HOST=process.env.VUE_APP_BASE_API
axios.defaults.baseURL = HOST;
window.axios = axios;
// window.HOST = HOST;
Vue.config.productionTip = false
window.EvnetBus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
