import http from "../utils/http.js"

export const home_banner_api = () => http("get", "/web-api/home-page/home-data?city_id=1");


// 城市

export const cityList = () => http("get", "/web-api/base-configure/city-list");