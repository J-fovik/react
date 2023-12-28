// 账户管理所以得接口

import instance from "@/utils/request";

// 定义登录接口
export function getAdminListApi(data?: null) {
    return instance({
        url: '/admin/admin/list',
        method: 'get',
        params: data
    })
}