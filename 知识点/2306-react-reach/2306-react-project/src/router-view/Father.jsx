import React, { Component } from 'react';
// 在该组件中配置路由;
import { Route, Link, NavLink, Redirect, Switch, withRouter } from 'react-router-dom';
import '../assets/css/nav.css';
// 引入路由相关的页面组件
import Home from './Home';
import Category from './Category';
import Cart from './Cart';
import Mine from './Mine';
// 导入404 组件
import Notfind from './Notfind';
// Route 作用:
// 相当于 router-view + routes
// Switch 组件: 保证路由只能匹配一个路由, 匹配的规则从上往下依次匹配.知道匹配成功
// 则不在往下继续匹配
export default withRouter(class Father extends Component {
    state = {
        id: 100,
        name: '牛夫人'
    }
    render() {
        return (
            <>
                {/* 声明式导航 */}

                {/* <p> */}
                {/* 查询字符串方式 */}
                {/* <NavLink to={`/home?id=${this.state.id}&name=${this.state.name}`}>首页</NavLink> */}
                {/* 动态路由传参:需要配置路由规则 */}
                {/* <NavLink to={'/category/' + this.state.id}>分类</NavLink> */}
                {/* 对象形式参数 01: 对象查询字符串 02: 隐式传参,埋点  */}
                {/* <NavLink
                        to={{
                            pathname: '/cart',
                            // search: `id=${this.state.id}&name=${this.state.name}`
                            state: {
                                id: this.state.id,
                                name: this.state.name
                            }
                        }}>购物车</NavLink>
                    <NavLink to='/mine'>我的</NavLink> */}
                {/* </p> */}

                {/* 编程式导航 */}
                {/* this.props.history */}
                <p>
                    <span onClick={() => {
                        // console.log(this)
                        this.props.history.push('/home?id=' + this.state.id)
                    }}>首页</span>
                    <span onClick={() => {
                        this.props.history.push('/category/' + this.state.id)
                    }}>分类</span>
                    <span onClick={() => {
                        this.props.history.push({
                            pathname: '/cart',
                            search: 'id=' + this.state.id,
                            state: {
                                id: this.state.id
                            }
                        })
                    }}>购物车</span>
                    <span onClick={() => {
                        this.props.history.push('/mine')
                    }}>我的</span>
                </p>

                {/* 路由重定向 */}
                {/* <Switch>
                    <Redirect from='/' to='/home' exact></Redirect>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/category/:id?' component={Category}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/mine' component={Mine}></Route> */}
                {/* 
                        404路由:
                         方式1: path:'*'
                         方式2: 没有path 属性
                    
                    */}
                {/* <Route path='*' component={Notfind}></Route>
                </Switch> */}

                {/*  路由的渲染方式*/}
                {/* <Switch> */}
                {/* 路由渲染方式: 第一种:component 最常用的方式 */}
                <Route path='/home' component={Home}></Route>
                {/* 路由渲染方式: 第一种: component  值为组件标签
                     缺点: 默认组件没有路由三剑客, 没有办法实现组件的跳转,和参数的获取
                     解决方式: 通过给组件使用属性传值 传递props ok啦
                    */}
                <Route path='/category' component={(props) => <Category {...props}></Category>}></Route>
                {/* 路由渲染方式: 第二种 使用render 方法 
                        缺点: 目标组件没有路由三剑客, 需要props传参
                    */}
                <Route path='/cart' render={(props) => <Cart {...props}></Cart>}></Route>
                {/* 路由渲染的方式: 第三种 使用children 属性
                        缺点: 没有路由三剑客 需要props 传参
                        缺点: 当children 组件为函数的时候, 无论路由是否匹配, 都会显示该组件
                        // 解决方式 : 根据当前路由如果匹配组件, 则props.match为一个对象, 否则为null
                        // 根据该中原因, 实现有条件的返回组件
                     */}
                <Route path='/mine' children={(props) => {
                    // console.log('props', props)
                    if (props.match) {
                        return <Mine {...props}></Mine>
                    }
                    return <></>

                }
                } ></Route>
                {/* <Route path='/mine' children={<Mine  {...this.props}></Mine>}></Route> */}
                {/* </Switch> */}
            </>
        )
    }
})
