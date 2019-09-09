const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/web-api":{
                target:"https://www.danke.com",
                changeOrigin:true,
            }
        }
    },
}


