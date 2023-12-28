import instance from "@/utils/request";

// 定义轮播图列表接口
export function getBannerListApi() {
    return instance({
        url: '/admin/banner/list',
        method: 'get',
    })
}

// 添加轮播图接口
type addbannerType = {
    link: string,
    img: string,
    alt: string
}
export function addBannerApi(data: addbannerType) {
    return instance({
        url: '/admin/banner/add',
        method: 'post',
        data
    })
}

// 删除接口
export function deleteBannerApi(data: { bannerid: string }) {
    return instance({
        url: '/admin/banner/delete',
        method: 'get',
        params: data
    })
}
