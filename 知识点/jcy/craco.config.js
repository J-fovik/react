// 配置修改webpack
const path = require('path');
// console.log(__dirname);
// console.log(path.resolve(__dirname, 'src'));
module.exports = {
    webpack: {
        alias: { // 配置路径别名, 修改脚手架中默认的webpack配置
            '@': path.resolve(__dirname, 'src')
        }
    },
    style: { // 做移动端的适配 使用vw 实现适配
        postcss: {
            mode: "extends",
            loaderOptions: { // 加载选项
                postcssOptions: {
                    ident: "postcss",
                    plugins: [
                        [
                            "postcss-px-to-viewport-8-plugin",
                            {
                                viewportWidth: 375, // 设计稿的视口宽度
                            },
                        ],

                        // pxtorem({
                        //     rootValue: 37.5,
                        //     propWhiteList: [],
                        //     minPixelValue: 2,
                        //     exclude: /node_modules/i
                        // }),
                    ],
                },
            },
        },
    }
};
