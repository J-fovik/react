import React, { Component } from 'react';
import Son from './Son';
//导入contextObj对象
import contextObj from './context'
const {Provider}= contextObj
class Father extends Component {
    state = {
        userInfo : {
            name:'关羽',
            age:30
        }
    }
    render() {
        return (
            <div>
                <p>father-{this.state.userInfo.name}</p>
                <Provider value={this.state.userInfo}>
                    <Son></Son>
                </Provider>
            </div>
        );
    }
}

export default Father;
