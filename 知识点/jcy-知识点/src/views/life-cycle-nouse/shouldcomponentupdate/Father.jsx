import React, { Component } from 'react'
import Son1 from './Son1'
import Son2 from './Son2'
export default class Father extends Component {
    state = {
        salary1: 10000,
        salary2: 20000
    }
    render() {
        const { salary1, salary2 } = this.state
        return (
            <div>
                <Son1 salary1={salary1}></Son1>
                <p>
                    <button onClick={() => {
                        this.setState({
                            salary1: salary1 + 1000
                        })
                    }}>田安星涨薪--1000</button>
                </p>
                <Son2 salary2={salary2}></Son2>
                <p>
                    <button onClick={() => {
                        this.setState({
                            salary2: salary2 + 500
                        })
                    }}>李世林涨薪--500</button>
                </p>
            </div>
        )
    }
}
