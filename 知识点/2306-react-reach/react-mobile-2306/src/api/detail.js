//详情页接口
import instance from '@/utils/request'

export function getProDetail(data) {
    return instance({
        url: '/api/pro/detail/' + data.id,
        method: 'get',
    })
}

//加入购物车接口
export function addCartApi(data) {
    return instance({
        url: '/api/cart/add',
        method: 'post',
        data,
        // headers: {
        //    'Content-Type' :'application/x-www/form-urlencoded'
        // }
    })
}

// 查看所有购物车数据结构
export function getCartListApi(data) {
    return instance({
        url: '/api/cart/list',
        method: 'post',
        data
    })
}


