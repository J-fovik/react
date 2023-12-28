import React from 'react'
// 在该组件中定义二级路由
// 引入组件
import Step1 from '@/views/Step1';
import Step2 from '@/views/Step2';
import Step3 from '@/views/Step3';
import Notfind from '@/views/Notfind'
import { Switch, Route, Redirect } from 'react-router-dom'
export default function Regist() {
    return (
        <div className='regist'>
            {/* 定义二级路由规则 */}
            <Switch>
                <Route path='/regist/step1' component={Step1}></Route>
                <Route path='/regist/step2' component={Step2}></Route>
                <Route path='/regist/step3' component={Step3}></Route>
                <Route component={Notfind}></Route>
            </Switch>
        </div>
    )
}
