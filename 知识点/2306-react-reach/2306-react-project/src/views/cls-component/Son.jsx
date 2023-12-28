// 快捷方式创建类组件 rcc

import React, { Component } from 'react'
export default class Son extends Component {
    render() {
        //console.log('this-son', this); // 
        const { user } = this.props
        return (
            <div>Son-{user.username}-{user.age}</div>
        )
    }
}

