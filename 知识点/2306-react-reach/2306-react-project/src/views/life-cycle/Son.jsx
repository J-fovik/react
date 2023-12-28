import React, { Component } from 'react'
import axios from 'axios';
export default class Son extends Component {
    render() {
        return (
            <div>
                <p>我是Son1组件</p>
            </div>
        )
    }
    state = {
        timer: null  // 定时器
    }
    // 创建请求控制器
    controller = new AbortController();

    handleClickFn1() {
        console.log('document点击事件');
    }
    componentDidMount() {
        console.log('componentDidMount-son1');
        // const timer1 = setInterval(() => {
        //     console.log('替天行道');
        // }, 1000)
        // // 设置定时器
        // this.setState({
        //     timer: timer1
        // })

        // 定义原生的事件
        // document.onclick = this.handleClickFn1

        // 发起数据请求
        axios.get('https://api.i-lynn.cn/college', {
            signal: this.controller.signal  // 设置开关/取消请求的标记
        }).then(res => {
            console.log('res1', res);
        }).catch(err => { })
    }
    componentWillUnmount() {
        // 卸载的生命周期
        // 01: 卸载定时器
        console.log('componentWillUnmount-son1');
        // clearInterval(this.state.timer)

        // 02: 清除原生dom 事件
        // document.onclick = null

        // 03: 取消请求
        this.controller.abort()
    }
}
