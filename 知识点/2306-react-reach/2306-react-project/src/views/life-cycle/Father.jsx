import React, { Component } from 'react';
import axios from 'axios'
import Son from './Son';
import Son1 from './Son1';
// 类组件中的生命周期
//01: constructor 初始化执行, 当数据更新时不执行
// 作用: 一般用来进行初始化定义响应式state 状态 和给事件处理函数绑定this 实例

//02: render 初始化执行, 数据更新的时候也执行,必须要有的生命周期
// 作用:渲染dom

// 03:componentDidMount() 初始化执行, 数据更新不执行 
// 与vue中的mounted 一样
// 作用: 该生命周期DOM 已经挂载的dom树上去了, 一般操作dom, 进行数据请求

// 04: componentDidUpdate(props.state,snap) 初始化不执行, 当数据更新执行
// 与vue中的updated 一样
// 作用: 页面中已经渲染了最新的dom 

// 面试题?数据请求应该在哪一个生命周期进行?
// constructor 一般进行初始化操作. 一般数据请求可能出错,
// 所以导致 render 生命周期不再触发, 用户看不到界面, 直接报错. 用户体验不好

// render  数据请求一般伴随着修改state操作, 而类组件执行语法当组件的状态发生改变,
// 组件就会重新渲染. 执行render,陷入死循环, 不能在render

export default class Father extends Component {
    constructor(props) {
        // props 为接收的父组件传递的属性对象 
        super()
        //console.log('constructor');
        // console.log(a);
    }
    state = {
        count: 100,
        schoolList: [],  // 学校列表数组
        flag: true  // 是否显示子组件
    }
    render() {
        // console.log('render');
        return (
            <div>
                <p onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>count:{this.state.count}</p>
                {/* 学校列表 */}
                <ul>
                    {
                        this.state.schoolList.map(item => <li key={item.id}>{item.school_name}</li>)
                    }
                </ul>
                {/* 显示子组件Son */}

                {
                    this.state.flag ? <Son></Son> : <Son1></Son1>
                }
                <p><button onClick={() => {
                    this.setState({
                        flag: !this.state.flag
                    })
                }}>显示/隐藏子组件</button></p>
            </div>
        )
    }
    componentDidMount() {
        //console.log('componentDidMount');
        // axios.get('https://api.i-lynn.cn/college').then(res => {
        //     //console.log(res);
        //     this.setState({
        //         schoolList: res.data.data.list1
        //     })
        // })


    }
    componentDidUpdate() {
        // console.log('componentDidUpdate')
    }


}

