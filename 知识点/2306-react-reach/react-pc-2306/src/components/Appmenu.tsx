import React from 'react'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
// 导入路由数组routes
import { routes } from '@/router/Index'
import { Link } from 'react-router-dom'
// console.log('routes', routes);
// 导入方法
import { getNewcheckedkeysFn, getNewRoutes } from '@/utils/common';
// 导入lodash 方法
import { cloneDeep } from 'lodash';
import { useAppSelector } from '@/store/hooks'
type MenuItem = Required<MenuProps>['items'][number];
type Props = {};

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
export default function Appmenu({ }: Props) {
    // 深拷贝一份 routes;
    const cloneRoutes = cloneDeep(routes);
    const checkedKeys = useAppSelector(state => state.users.checkedkeys);
    const adminname = useAppSelector(state => state.users.adminname)
    // 注意: 如下方法已经将 cloneRoutes 通过splice方法删除成了空数组, 所以下方判断管理员的时候,
    // 不能再使用 cloneRoutes 了, 只能使用 原routes(因为不是在该数组上进行删除的)
    let newRoutes = getNewRoutes(getNewcheckedkeysFn(checkedKeys), cloneRoutes);

    const getItemsFn = (routesArr: Array<any>) => {
        const targetArr: any = routesArr.map(item => {
            if (item.key) {
                if (item.children) {
                    return getItem(
                        item.label,
                        item.path,
                        <AppstoreOutlined />,
                        getItemsFn(item.children)
                    )
                } else {
                    // 表示只有一级菜单
                    return getItem(
                        <Link to={item.path}>{item.label}</Link>,
                        item.key,
                        <PieChartOutlined />
                    )
                }
            }
        });

        return targetArr.filter((i: any) => i)
    }

    // console.log(5555, getItemsFn(adminname == 'admin' ? routes : newRoutes));
    const items: MenuItem[] = getItemsFn(adminname == 'admin' ? routes : newRoutes)
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
        />
    )
}