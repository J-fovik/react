import React, { Component } from 'react'
// shouldComponentUpdate 生命周期
// 特点:  该生命周期是一个性能优化的生命周期函数.
// 语法: 必须有返回值. 返回值为一个boolean , 返回true则重新渲染当前组件,否则不render
// 执行时间: 在render 之前触发, 初始化不执行, 只有状态更新才执行

export default class Son2 extends Component {
    render() {
        console.log('render-李世林');
        const { salary2 } = this.props
        return (
            <div>
                李世林--{salary2}
            </div>
        )
    }
    shouldComponentUpdate(props, state) {
        //console.log('shouldComponentUpdate');
        // 判断条件: 当salary2变化了 , 该李世林 组件才渲染, 否则不渲染 不render
        // console.log('李世林-props', props); //为最新的接收的props 属性
        // console.log('李世林-this.props', this.props); // this.props 为上一次的props

        //判断两次的salary2有没有变化, 有变化则重新render,否则不重新render
        if (props.salary2 == this.props.salary2) {
            return false
        } else {
            return true
        }
    }
}
