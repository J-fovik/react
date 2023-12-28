import React, { Component } from 'react'
import Son from './Son'
export default class Father extends Component {
    state = {
        count: 1000,
        user: {
            name: '曹操',
            age: 50
        }
    }
    render() {
        return (
            <div>
                {/* 使用子组件 */}
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>父-count:{this.state.count}</button>
                <Son count={this.state.count} user={this.state.user}></Son>
            </div>
        )
    }
}
