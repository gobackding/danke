import http from "utils/http.js"
//正在热映
export const home_banner_api = (city_id=1)=>http("get","web-api/home-page/banner?",{city_id:city_id})
