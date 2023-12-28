import React, { Component } from 'react'
import Son from './Son';

// 跨级组件通信思路:
// 首先引入 createContext方法, 使用该方法创建一个contetObj对象,
// 从contextObj对象中解构出 Provider(提供者,供应商) 和Consumer(消费者) 组件
// 在祖先组件中使用 Provider包裹要消费数据的后代组件 , value 属性就是提供的数据
// 在后代组件中, 使用 Consumer组件接收数据


// 导入contextObj 对象
import contextObj from './context';
const { Provider } = contextObj
export default class Father extends Component {
    state = {
        userinfo: {
            name: '汉寿亭侯-关羽',
            age: 30
        }
    }
    render() {
        return (
            <div>
                <p>faher</p>
                <Provider value={this.state.userinfo}>
                    <Son></Son>
                </Provider>
            </div>
        )
    }
}
