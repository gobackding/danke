import axios from "axios";
import qs from "qs";
import Loading from "../lib/loading/index.js"

let vm=Loading();
const server=axios.create({
    //延迟的时间
    timeout:5000,
    // 允许携带cookie
    withCredential:true
})


//拦截器的配置
server.interceptors.request.use((config)=>{
    // 判断当请求的数据是get形式的时候
    if(config.method.toUpperCase()=="GET"){
        // 浅复制  如果前面非要写data就把数据给params  因为get请求的参数是在params中
    config.params={...config.data}
    // 如果是post请求的时候  设置响应头
}else if(config.method.toUpperCase()=="POST"){
    config.headers["content-type"]="application/x-www/form-urlencoded";
    //config.data=qs.stringify(config.data)
}
console.log(111)
vm.handlemount(true);
//请求数据的时候出现加载的动图


return config;
},(err)=>{
    Promise.reject(err);
})



server.interceptors.response.use((res)=>{
    if(res.statusText=="OK"){
    vm.handleDestory();
    //数据请求成功之后让加载的动图消失
    return res.data;

}
},(err)=>{
    Promise.reject(err);
})



export default (method,url,data={})=>{
    if(method.toUpperCase()=="GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase()=="POST"){
        return server.post(url,data);
    }
}
