// 定义首页的所有的接口请求
import instance from "@/utils/request";

// 轮播图接口
export function bannerlistApi(data) {
    return instance({
        method: 'get',
        url: '/api/banner/list',
        params: data
    })
}

// 秒杀接口
export function seckilllistApi(data) {
    return instance({
        method: 'get',
        url: '/api/pro/seckilllist',
        params: data
    })
}

// 产品列表数据请求
export function prolistApi(data) {
    return instance({
        method: 'get',
        url: '/api/pro/list',
        params: data
    })
}
