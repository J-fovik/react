import React, { Component } from 'react'
// getDerivedStateFromProps 生命周期
// 执行时间: 初始化执行, 数据更新也执行
// 作用: 根据接收的父组件中的props 来更新自身的state 

export default class Son extends Component {
    state = {
        count: 10
    }
    render() {
        console.log('render');
        return (
            <div>Son--{this.state.count}</div>
        )
    }
    // 生命周期函数 -- 不常用
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        console.log('props', props);
        console.log('state', state);
        return {
            count: props.count,
            ...props
        }
    }
}
