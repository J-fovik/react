import React, { Component } from 'react'
import axios from 'axios';
import Son from './Son';
export default class Father extends Component {
    state = {
        schoollist: []
    }
    render() {
        return (
            <div>
                <p>Father</p>
                <Son schoollist={this.state.schoollist}></Son>
            </div>
        )
    }
    componentDidMount() {
        axios.get('https://api.i-lynn.cn/college').then(res => {
            console.log(res);
            this.setState({
                schoollist: res.data.data.list1
            })
        })
    }
}
