import instance from '@/utils/request'

// 删除单条数据
export function removeCartItemApi(data) {
    return instance({
        url: '/api/cart/remove',
        method: 'post',
        data
    })
}

// 更新某一条购物车的数据选中状态
export function selectoneApi(data) {
    return instance({
        url: '/api/cart/selectone',
        method: 'post',
        data
    })
}

// 更新当前购物车的所有的数据的选中状态
export function selectAllApi(data) {
    return instance({
        url: '/api/cart/selectall',
        method: 'post',
        data
    })
};

// 更新某一条购物车数据的数量接口
export function updatenumApi(data) {
    return instance({
        url: '/api/cart/updatenum',
        method: 'post',
        data
    })
};


