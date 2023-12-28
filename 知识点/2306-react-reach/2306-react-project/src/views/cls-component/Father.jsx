// 类组件

// 类组件的特点:
// 01: 有状态
// 02: 有生命周期
// 03: 有this  this 指向当前组件的实例对象
// 04: 无hooks (辅助工具函数)

import { Component } from 'react';
import Son from './Son';
class Father extends Component {
    render() {
        const user = {
            username: '刘玄德',
            age: 20
        }
        return <div>
            <p>我是类父组件</p>
            {/* 使用son子组件 */}
            <Son user={user}></Son>
        </div>
    }
}


export default Father



