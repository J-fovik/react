import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Category from './Catefory'
import Detail from './Detail'
export default function Father() {
    return (
        <div>

            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/category' component={Category}></Route>
                <Route path='/detail/:id' component={Detail}></Route>
                <Redirect from='/' to='/home' exact></Redirect>
            </Switch>
        </div>
    )
}
