
// 配置路径别名,修改脚手架中默认的webpack 的配置
// 注意: 在ts项目中使用 require nodejs语法, 会有类型报错
// 解决方式1: craco.config.ts 改成 .js 文件
// 解决方式2: 修改 ts.config.json 中的 isolatedModules 为false
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    }
}