// 登录相关接口
import instance from "@/utils/request";

// 定义登录接口
interface loginType {
    adminname: string,
    password: string
}
export function loginApi(data: loginType) {
    return instance({
        url: '/admin/admin/login',
        method: 'post',
        data
    })
}