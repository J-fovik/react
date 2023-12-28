import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Mine1 from './Mine1'
import Mine2 from './Mine2'
import Notfind from './Notfind'
export default class Mine extends Component {
    render() {
        console.log('this-mine', this);
        return (
            <div>
                <p>MIne</p>
                {/* 如下就是mine页面的子路由规则及子路由显示位置 */}
                {/* react的二级路由path 需要拼接以及路径语法:  /一级路径/二级路径/... */}
                <Switch>
                    <Route path='/mine/mine1' component={Mine1}></Route>
                    <Route path='/mine/mine2' component={Mine2}></Route>
                    {/* 以下两种都可以实现默认二级路由显示*/}
                    <Route path='' component={Mine1}></Route>
                    {/* <Redirect from='/' to='mine/mine2'></Redirect> */}
                    {/* 404路由 */}
                    <Route path='*' component={Notfind}></Route>
                </Switch>
            </div>
        )
    }
}
