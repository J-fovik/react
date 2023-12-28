// 配置代理
// src/setupProxy.js
// 引入 代理中间件
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://47.94.148.165:3001',
            changeOrigin: true, // needed for virtual hosted sites
            ws: true, // proxy websockets
            pathRewrite: {
                '^/api': ''
            }
        })
    )
};
