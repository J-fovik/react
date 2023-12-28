import React from 'react'
import { Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// 定义二级路由
import { useRoutes } from 'react-router-dom';
// 引入loading 组件
import Loading from '@/components/Loading'
// 引入路由需要的组件
// 在tsx 文件中导入 import('@/views/layout/home/Home') 可能有类型警告
// 处理方式第一步: 关闭 vscode 中的vetur 这个插件禁用
// 处理方式第二步: 在tsconfig.json 文件中 设置 @路径别名
//  "baseUrl": "./",
//  "paths": {
//     "@/*": [
//       "src/*"
//     ]
//   }

// 首页组件
const Home = lazy(() => import('@/views/layout/home/Home'));
// 账户管理组件
const Account = lazy(() => import('@/views/layout/account/Index'));
const Adminlist = lazy(() => import('@/views/layout/account/Adminlist'));
// 轮播图管理
const Banner = lazy(() => import('@/views/layout/banner/Index'));
const Bannerlist = lazy(() => import('@/views/layout/banner/Bannerlist'));
const Addbanner = lazy(() => import('@/views/layout/banner/Addbanner'));
// 产品管理
const Product = lazy(() => import('@/views/layout/product/Index'))
const Productlist = lazy(() => import('@/views/layout/product/Productlist'))
const Recommendlist = lazy(() => import('@/views/layout/product/Recommendlist'))
const Filterlist = lazy(() => import('@/views/layout/product/Filterlist'));
const Seckill = lazy(() => import('@/views/layout/product/Seckill'));
// 系统设置
const Setting = lazy(() => import('@/views/layout/setting/Index'));
// 数据操作
const Dataoperation = lazy(() => import('@/views/layout/dataoperation/Index'));
const Exportexcel = lazy(() => import('@/views/layout/dataoperation/Exportexcel'))
const Importexcel = lazy(() => import('@/views/layout/dataoperation/Importexcel'))


// 404组件
const Notfind = lazy(() => import('@/views/Notfind'))


type Props = {};

export const routes = [
    {
        path: '/home', // 二级路由
        element: <Home></Home>, // 二级组件
        label: '首页',
        key: '/home'
    },
    {
        path: '/account',
        element: <Account></Account>,
        label: '账户管理',
        key: '/account',
        children: [
            {
                path: '/account/adminlist',
                element: <Adminlist></Adminlist>,
                label: '管理员列表',
                key: '/account/adminlist',
            }
        ]
    },
    {
        path: '/banner',
        element: <Banner></Banner>,
        label: '轮播图管理',
        key: '/banner',
        children: [
            {
                path: '/banner/bannerlist',
                element: <Bannerlist></Bannerlist>,
                label: '轮播图列表',
                key: '/banner/bannerlist',
            },
            {
                path: '/banner/addbanner',
                element: <Addbanner></Addbanner>,
                label: '添加轮播图', // 注意需要label, 因为面包屑导航需要显示菜单名
                // 不需要设置key, 因为设置key 意味着你要讲该菜单显示在左侧菜单栏
            }
        ]
    },
    {
        path: '/product',
        element: <Product></Product>,
        label: '产品管理',
        key: '/product',
        children: [
            {
                path: '/product/productlist',
                element: <Productlist></Productlist>,
                label: '产品列表',
                key: '/product/productlist',
            },
            {
                path: '/product/recommendlist',
                element: <Recommendlist></Recommendlist>,
                label: '推荐列表',
                key: '/product/recommendlist',
            },
            {
                path: '/product/seckill',
                element: <Seckill></Seckill>,
                label: '秒杀列表',
                key: '/product/seckill',
            },
            {
                path: '/product/filterlist',
                element: <Filterlist></Filterlist>,
                label: '筛选列表',
                key: '/product/filterlist',
            }
        ]
    },
    {
        path: '/dataoperation', // 二级路由
        element: <Dataoperation></Dataoperation>, // 二级组件
        label: '表格导入导出',
        key: '/dataoperation',
        children: [
            {
                path: '/dataoperation/exportexcel',
                element: <Exportexcel></Exportexcel>,
                label: '数据导出',
                key: '/dataoperation/exportexcel',
            },
            {
                path: '/dataoperation/importexcel',
                element: <Importexcel></Importexcel>,
                label: '数据导入',
                key: '/dataoperation/importexcel',
            }
        ]
    },
    {
        path: '/setting', // 二级路由
        element: <Setting></Setting>, // 二级组件
        label: '系统设置',
        key: '/setting'
    },
    {
        path: '/', // 重定向
        element: <Navigate to='/home'></Navigate>
    },
    {
        path: '*', // 404 路由
        element: <Notfind></Notfind>
    }
]

export default function Index({ }: Props) {
    const ele = useRoutes(routes);
    return (
        <Suspense fallback={<Loading tip='加载中...'></Loading>}>
            {ele}
        </Suspense>
    )
}