import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Cart from './Cart'
import Mine from './Mine'
// 导入自定义导航组件
import Mylink from './Mylink'
export default class Father extends Component {
    render() {
        return (
            <div>
                {/*  */}
                {/* <Link to='/home'>首页</Link> */}
                <Mylink to='/home' tag='span'>首页</Mylink>
                <Mylink to='/category'>分类</Mylink>
                <Mylink to='/cart'>购物车</Mylink>
                <Mylink to='/mine'>我的</Mylink>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/category' component={Category}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/mine' component={Mine}></Route>
                </Switch>

            </div>
        )
    }
}
