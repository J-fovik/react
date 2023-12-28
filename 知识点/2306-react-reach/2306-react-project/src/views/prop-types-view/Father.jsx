import React, { Component } from 'react'
// import Son from './Son'
import Sonfun from './Sonfun'
export default class Father extends Component {
    state = {
        nameArr: ['樱木花道', '流川枫', '赤木']
    }
    render() {
        return (
            <div>
                {/* 使用类-子组件 */}
                {/* <Son nameArr={this.state.nameArr}></Son> */}
                {/* 使用函数子组件 */}
                <Sonfun></Sonfun>
            </div>
        )
    }
}
