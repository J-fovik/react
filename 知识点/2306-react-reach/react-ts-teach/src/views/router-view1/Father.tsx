import React from 'react'
import {
    useRoutes,
    Navigate,
    Link,
    NavLink,
    useNavigate
} from 'react-router-dom';
import Home from './Home'
import Category from './Category';
import Cart from './Cart';
import Mine from './Mine';
import Notfind from './Notfind'
import Mine1 from './Mine1'
import Mine2 from './Mine2'
import { useState } from 'react'
type Props = {}
//router@6 定义路由规则
// 第二种语法路由语法2: 使用 useRoutes+routes+outlet
//  


export default function Father({ }: Props) {

    // 定义路由映射表
    const routes = [
        {
            path: '/home',
            // caseSensitive: true, // 对大小写敏感
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element: <Category></Category>
        },
        {
            path: '/cart',
            element: <Cart></Cart>
        },
        {
            path: '/mine/*',
            element: <Mine></Mine>,
            children: [ // 嵌套路由
                {
                    path: '', // 设置默认匹配的二级路由
                    element: <Mine1></Mine1>
                },
                {
                    path: 'mine1',
                    element: <Mine1></Mine1>
                },
                {
                    path: 'mine2',
                    element: <Mine2></Mine2>
                }
            ]
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

    const ele = useRoutes(routes);
    // console.log('ele', ele);
    const [id, setId] = useState(100)
    const navigate = useNavigate()
    return (
        // 一级路由匹配显示的坑
        <>
            {/* 声明式导航 */}
            <div>
                {/* 第一种方式: 查询字符串方式 */}
                <NavLink to={'/home?id=' + id}>首页</NavLink>
                {/* 第二种方式:动态路由 */}
                <NavLink to={'/category/' + id}>分类</NavLink>
                {/* 第三种方式: 隐式传参 页面埋点*/}
                <NavLink to='/cart' state={{ id: id }}>购物车</NavLink>
                <NavLink to='/mine'>我的</NavLink>
            </div>

            {/* 编程式导航 */}
            <ul style={{
                display: 'flex',
                listStyle: 'none'
            }}>
                <li onClick={() => {
                    // 传参方式1 : 查询字符串方式 同上
                    navigate('/home')
                }}>首页</li>
                <li onClick={() => {
                    // 传参方式2 : 动态路由方式 同上
                    navigate('/category')
                }}>分类</li>
                <li onClick={() => {
                    // 传参方式3: 隐式传参方式 
                    navigate('/cart', {
                        state: {
                            id: id
                        }
                    })
                }}>购物车</li>
                <li>我的</li>
            </ul>

            {/* 一级路由坑 */}
            {ele}
        </>
    )
}