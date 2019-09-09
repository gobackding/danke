export  default{
    path:"/Home",
    component:()=>import("../../views/Home/index.vue"),
    name:"Home",
    meta:{
        search:true,
            header:true
    }
}