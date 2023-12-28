const { createProxyMiddleware } = require('http-proxy-middleware');
// 配置反向代理解决浏览器的跨域问题
// 客户端请求服务端时的跨域问题
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', { // 当请求的地址中有/api 字段的时候,转发该请求到 target 地址
            target: 'http://47.94.148.165:3001', // 开发的服务器地址
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: {
                '^/api': '', //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
            }
        })
    );
};