const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

let proxyObj = {}

proxyObj['/'] = {
    ws: false.valueOf,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathReWRITE: {
        '^/': '/'
    }
}