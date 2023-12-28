import React, { Component, PureComponent } from 'react'
//PureComponent 表示纯组件,
// 特点: 只有当前组件自身的state 或接收的props 发生变化,组件才会重新渲染
// PureComponent 只能进行浅层比较, 不能进行深层比较, 当数据接收的props 为
// 引用数据类型的时候, 无法比较, 只能使用 shouldComponentUpdate 比较, 但是不建议, 影响性能

export default class Son1 extends PureComponent {
    render() {
        console.log('render-田安星');
        const { salary1 } = this.props
        return (
            <div>田安星--{salary1}</div>
        )
    }

}
