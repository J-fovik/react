// 定义一个高阶组件函数简称 hoc

// 语法:
// 01: 就是第一个函数中返回一个组件,
// 02: 接收一个参数,参数也是组件
// 03: 在函数中处理接收的形参组件
import { Component } from 'react'
const hoc = (Com) => {
    return class Newcom extends Component {
        render() {
            return <div style={{
                background: 'red',
                fontSize: '30px'
            }}>
                {/* 使用形参组件 */}
                <Com></Com>
            </div>
        }
    }
}


export default hoc