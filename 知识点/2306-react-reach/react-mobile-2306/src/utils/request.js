// 定义axios
import axios from 'axios';
//判断开发环境和生产环境
let baseURL = '';
//process.env.NODE_ENV nodejs 内置的全局变量  development 或 production
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV == 'development') {
    // 开发环境地址
    baseURL = '/api'
} else {
    // 线上环境地址
    baseURL = 'http://47.94.148.165:3001' // 上线的服务器地址
}

// instance其实还时axios. 只不过是封装过的axios ,
// 该instance 是自带请求baseurl ,timeout,  headers这些属性的axios
// axios 没有拜师之前的孙悟空
// instance 学艺归来的孙悟空
const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' } // post 请求时的请求参数格式
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 获取token 
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 统一处理各种状态码的响应

    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance

