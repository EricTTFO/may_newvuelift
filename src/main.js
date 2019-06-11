import Vue from 'vue'
import Vuex from './min-vuex'
import App from './App.vue'
import router from './router'
// import store from './store'
import './registerServiceWorker'


Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  // actions: {
  //   increment({state}) {
  //     setTimeout(() => {
  //       state.count++  
  //     }, 100);
  //   },
  // },
  // getters: {
  //   doubleCount(state) {
  //     return state.count * 10
  //   }
  // }
})
Vue.prototype.$store = store
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
