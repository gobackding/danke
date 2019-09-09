import Vue from 'vue'
import App from './App.vue'

import router from "./router/index"
import VueTouch from "vue-touch";
import Observer from "./observer"
import "./components/index.js"
import "./animate.css";
import store from "./store/index"

// vant UI插件
import 'vant/lib/index.css';


Vue.prototype.$observer = Observer

Vue.config.productionTip = false




Vue.use(VueTouch, {name: 'v-touch'})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
