import React, { Component } from 'react'
import axios from 'axios'
export default class Son1 extends Component {
    render() {
        return (
            <div>我是Son2组件</div>
        )
    }
    // 定义请求控制器
    controller = new AbortController()
    componentDidMount() {
        console.log('componentDidMount-son2');
        axios.get('https://api.i-lynn.cn/college', {
            signal: this.controller.signal
        }).then(res => {
            console.log('res2', res);
        }).catch(err => { })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount-son2');
        // 取消请求
        this.controller.abort()
    }
}
