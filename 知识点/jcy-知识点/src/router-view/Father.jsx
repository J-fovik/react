import React, { Component } from 'react';
// 在该组件中配置路由
import { Route, Redirect, Switch,withRouter } from 'react-router-dom';
import '../assets/css/nav.css';
// 引入路由相关的页面组件
import Home from './Home';
import Category from './Category';
import Cart from './Cart';
import Mine from './Mine';
// import Notfind from './Notfind';

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
                <p>
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
                </p>




                <p>
                    {/* 编程式导航 */}
                    {/* this.props.history */}
                    <button onClick={() => {
                        // console.log(this);
                        this.props.history.push('/home?id='+this.state.id)
                    }}>首页</button>
                    <button onClick={()=>{
                        this.props.history.push('/category/' + this.state.id)
                    }}>分类</button>
                    <button onClick={()=>{
                        this.props.history.push({
                            pathname:'/cart',
                            // search:'id='+this.state.id,
                            state:{
                                id:this.state.id
                            }
                        })
                    }}>购物车</button>
                    <button onClick={()=>{
                        this.props.history.push('/mine')
                    }}>我的</button>
                </p>



                {/* 路由重定向 */}
                {/* <Switch>
                    <Redirect from='/' to='/home' exact></Redirect>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/category/:id' component={Category}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/mine' component={Mine}></Route>
                    <Route path='*' component={Notfind}></Route>
                </Switch> */}


                <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/category' component={(props)=>{
                    <Category {...props}></Category>
                }}></Route>
                <Route path='/cart' render={(props)=>{
                    <Cart {...props}></Cart>
                }}></Route>
                <Route path='/mine' children={(props)=>{
                    if(props.match){
                        return <Mine {...props}></Mine>
                    }
                }}></Route>
                <Route path='/mine' children={<Mine  {...this.props}></Mine>}></Route>
                </Switch>
            </>
        )
    }
})

