import React, { Component } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom'
import Mine1 from './Mine1'
import Mine2 from './Mine2'
import Notfind from './Notfind'

class Mine extends Component {
    render() {
        return (
            <div>
                Mine
                <Switch>
                    <Route path='/mine/mine1' component={Mine1}></Route>
                    <Route path='/mine/mine2' component={Mine2}></Route>
                    {/* 以下两种都可以实现默认二级路由显示*/}
                    {/* <Route path='' component={Mine1} ></Route> */}
                    <Redirect from='/mine' to='mine/mine2' exact></Redirect>
                    {/* 404路由 */}
                    <Route path='*' component={Notfind}></Route>
                </Switch>
            </div>
        );
    }
}

export default Mine;
