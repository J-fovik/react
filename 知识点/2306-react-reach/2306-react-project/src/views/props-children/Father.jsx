import React, { Component } from 'react'
import Son from './Son';
// react 中 插槽的实现方式:
// 特点: 也是一种变相的父传子
export default class Father extends Component {
    state = {
        count: 10,
        nameArr: ['曹雪芹', '罗贯中', '施耐庵', '吴承恩']
    }
    render() {
        return (
            <div>
                {/* 使用子组件 */}
                {/* <Son>{this.state.count}</Son> */}
                <Son>
                    <ul>
                        {
                            this.state.nameArr.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </Son>
            </div>
        )
    }
}


