import Vue from 'vue'
import App from './App.vue'

import router from "./router/index"
import VueTouch from "vue-touch";

import "./components/index.js";
import '../mock/index';



Vue.config.productionTip = false
Vue.use(VueTouch, { name: 'v-touch' })


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')