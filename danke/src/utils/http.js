import axios from "axios";

// let vm = loading()
const server = axios.create({
    timeout: 5000,
    withCredentials: true
})

server.interceptors.request.use((config) => {
    if (config.method.toUpperCase() == "GET") {

    } else if (config.method.toUpperCase() == "POST") {
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";

    }

    return config;
}, (err) => {
    Promise.reject(err);
})

server.interceptors.response.use((res) => {
    if (res.statusText == "OK") {
        return res.data
    }

}, (err) => {
    Promise.reject(err);
})

export default (method, url, data = {}) => {
    if (method.toUpperCase() == "GET") {

        return server.get(url, {
            params: data
        })
    } else if (method.toUpperCase() == "POST") {
        return server.post(url, data);
    }
}