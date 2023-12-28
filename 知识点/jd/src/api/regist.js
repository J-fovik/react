// 注册接口
import instance from '@/utils/request';

//  注册第一步接口
export function docheckphoneApi(data) {
    return instance({
        url: '/api/user/docheckphone',
        method: 'post',
        data
    })
}

// 发送验证码接口
export function dosendmsgcodeApi(data) {
    return instance({
        url: '/api/user/dosendmsgcode',
        method: 'post',
        data
    })
}

// 验证短信验证码接口是否输入正确
export function docheckcodeApi(data) {
    return instance({
        url: '/api/user/docheckcode',
        method: 'post',
        data
    })
}

// 定义注册接口
export function dofinishregisterApi(data) {
    return instance({
        url: '/api/user/dofinishregister',
        method: 'post',
        data
    })
}