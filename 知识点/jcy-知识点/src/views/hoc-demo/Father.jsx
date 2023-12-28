import React, { Component } from 'react';
import axios from 'axios';
import Son from './Son';
class Father extends Component {
    state = {
        schoolList: []
    }
    render() {
        return (
            <div>
                <p>father</p>
                <Son schoolList={this.state.schoolList}></Son>
            </div>
        );
    }
    componentDidMount(){
        axios.get('https://api.i-lynn.cn/college').then(res =>{
            console.log(res);
            this.setState({
                schoolList:res.data.data.list1
            })
        })
    }
}

export default Father;
