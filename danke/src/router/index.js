import Vue from "vue"
import VueRouter from "vue-router";
import Rentsharing from "../views/rentsharing";
import Allrent from "../views/allrent";
import Join from "../views/join";
import Detail from '../views/detail'

Vue.use(VueRouter);


//路由的配置
const router = new VueRouter({
    mode: "hash",
    routes: [
        //一个对象代表一个路由的配置项
        {
            path: "/", //匹配用户请求的地址
            redirect: "/rentsharing", //当路径匹配成功后显示对于的组件
            meta: {
                flag: true,
                flag1: true
            }
        },
        {
            path: "/rentsharing",
            component: Rentsharing,
            meta: {
                flag: true,
                flag1: true
            },
            // children: [{
            //     path: "detail",
            //     component: Detail,
            //     meta: {
            //         flag: false,
            //         flag1: false
            //     }
            // }]
        },
        {
            path: "/detail", //匹配用户请求的地址
            component: Detail, //当路径匹配成功后显示对于的组件
            meta: {
                flag: false,
                flag1: false
            }
        },
        {
            path: "/allrent",
            component: Allrent,
            meta: {
                flag: true,
                flag1: true
            }
        },
        {
            path: "/join",
            component: Join,
            meta: {
                flag: false,
                flag1: true
            }
        }
    ]
})


export default router;