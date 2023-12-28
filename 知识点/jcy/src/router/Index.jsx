import React from 'react';
import { lazy, Suspense } from 'react'
// lazy 实现路由懒加载的函数
// Suspense 是一个组件,用来实现当路由匹配后, 页面此刻还没有显示对应的路由组件的时候
// 路由组件渲染出来之前, 出现一个体验优化的组件 
import { Switch, Route, Redirect } from 'react-router-dom'

//引入loading组件
import Loading from '@/components/Loading';

// 使用路由懒加载的形式导入组件
const Home = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));
const Cart = lazy(() => import('@/views/Cart'));
const Notfind = lazy(() => import('@/views/Notfind'));
const Detail = lazy(() => import('@/views/Detail'));
const Regist = lazy(() => import('@/views/Regist'));
const Mine = lazy(() => import('@/views/Mine'));
export default function Index() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/cart' component={Cart}></Route>
                <Route path='/detail/:id' component={Detail}></Route>
                <Route path='/mine' component={Mine}></Route>
                {/* 注册页 */}
                <Route path='/regist' component={Regist}></Route>
                <Redirect from='/' to='/home' exact></Redirect>
                <Route component={Notfind}></Route>
            </Switch>
        </Suspense>
    )
}
