//  定义产品模块的所有的接口

import instance from "@/utils/request";

// 定义产品列表接口
export function getProListApi(data: {
    count: number,
    limitNum: number
}) {
    return instance({
        url: '/admin/pro/list',
        method: 'get',
        params: data
    })
}

// 定义修改产品状态的接口
export function updateFlagApi(data: {
    proid: string,
    type: string,
    flag: boolean
}) {
    return instance({
        url: '/admin/pro/updateFlag',
        method: 'POST',
        data: data
    })
}


// 定义删除产品的接口
