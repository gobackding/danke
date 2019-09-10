const path = require("path")
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.danke.com",
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                "api": path.join(__dirname, "./src/api"),
                "router": path.join(__dirname, "./src/router"),
                "store": path.join(__dirname, "./src/store"),
            }
        }
    }
}