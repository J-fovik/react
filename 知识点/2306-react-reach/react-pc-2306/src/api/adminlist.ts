// 
import instance from "@/utils/request";

// 定义添加用户接口
interface addPamrasType {
    adminname: string,
    password: string,
    role: number
    checkedKeys: Array<any>
}
export function addAdminApi(data: addPamrasType) {
    return instance({
        url: '/admin/admin/add',
        method: 'POST',
        data: data
    })
}


//定义编辑用户接口

export function updateAdminApi(data: addPamrasType) {
    return instance({
        url: '/admin/admin/update',
        method: 'POST',
        data: data
    })
}

// 删除用户接口
export function deleteAdminApi(data: { adminid: string }) {
    return instance({
        url: '/admin/admin/delete',
        method: 'POST',
        data: data
    })
}

