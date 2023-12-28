import React from 'react'
import { Breadcrumb } from 'antd';
import {
    Link,
    useLocation
} from 'react-router-dom';
// 引入创建 breadcrumbNameMap 对象的方法
import { getbreadcrumbNameMapFn } from '@/utils/common'
import { routes } from '@/router/Index'
type Props = {}

export default function Appbreadcrumb({ }: Props) {
    const breadcrumbNameMap: Record<string, string> = getbreadcrumbNameMapFn(routes)

    // 获取当前路由信息对象 
    const location = useLocation(); // ocation.pathname=>/account/adminlist
    const pathSnippets = location.pathname.split('/').filter(i => i);
    // 定义一个不能点击的路由数组
    const disabledPathArr = routes.filter(item => item.key && item.children)
    // console.log('disabledPathArr', disabledPathArr);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url: string = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        // [account].join('/') => '/account/'
        // [account,adminlist].join('/') => ''/account/adminlist''
        //举例 url 结果为:  /account, /account/adminlist
        // console.log('url', url);

        if (disabledPathArr.some(item => item.path == url)) {
            return {
                key: url,
                title: <>{breadcrumbNameMap[url]}</>,
            };
        } else {
            return {
                key: url,
                title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
            };
        }
    });
    const breadcrumbItems = [
        {
            title: <>仪表盘</>,
            key: '/',
        },
    ].concat(extraBreadcrumbItems);
    //console.log('breadcrumbItems', breadcrumbItems);

    return (
        <Breadcrumb items={breadcrumbItems} />
    )
}