// 
import instance from "@/utils/request";

// 定义轮播图列表接口
export function getKdataApi() {
    return instance({
        url: '/admin/data/kData',
        method: 'get',
    })
}

export function getSimpleDataApi() {
    return instance({
        url: '/admin/data/simpleData',
        method: 'get',
    })
}