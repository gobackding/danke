import Vue from "vue";
import VueRouter from "vue-router"

import Home from "./Home/index.js"
import DetailList from "./DetailList/index.js"
import Register from "./Register/index.js"
import Appointme from "./appointme/index"
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/Home"
        },
        Home,
        DetailList,
        Register,
        Appointme

    ]
})