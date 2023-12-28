// 定义登录接口
import instance from '@/utils/request'

export function loginApi(data) {
    return instance({
        url: '/api/user/login',
        method: 'post',
        data
    })
}