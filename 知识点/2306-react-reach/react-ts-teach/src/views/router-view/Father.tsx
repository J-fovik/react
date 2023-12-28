import React from 'react'
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Home from './Home'
import Category from './Category';
import Cart from './Cart';
import Mine from './Mine';
import Notfind from './Notfind'
type Props = {}
//router@6 定义路由规则
// 使用Routes 代替Switch =>保证每次只能匹配一个路由

// 重定向移除 Redirect组件使用 Navigate组件

// 404路由 只能使用 <Route path='*' element={<Notfind></Notfind>}></Route>

// 嵌套路由:
// 写法1: 延续V5的规则在子组件中使用 Routes+Route ,
// 注意:二级路径不需要拼接一级路径
// 注意:父级路由必须设置path='一级路径/*' 表示后面有子路由

// 设置默认二级路由
// 方式1: <Route path='' element={<Mine1 />}></Route>
// 方式2: <Route path='' element={<Navigate to='mine1'></Navigate>}></Route>

// (了解)路由规则path默认大小写都支持, 可以设置大小写敏感匹配,这样就必须严格匹配
// caseSensitive: true
export default function Father({ }: Props) {
    return (
        <Routes>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/category' element={<Category></Category>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/mine/*' element={<Mine></Mine>}></Route>
            {/* 重定向 */}
            <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
            {/* 
                404路由 :  v5中可以使用path='*' 或移除path
                           v6中只能使用 path='*'

            */}
            <Route path='*' element={<Notfind></Notfind>}></Route>
        </Routes>
    )
}