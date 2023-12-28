import React, { Component } from 'react'

// 引入高阶组件函数
import hoc from './Hoc'

class Father extends Component {
    render() {
        return (
            <div>Father</div>
        )
    }
}

export default hoc(Father)