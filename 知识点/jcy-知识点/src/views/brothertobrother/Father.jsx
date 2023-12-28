import React, { Component } from 'react';
import Son1 from './Son1';
import Son2 from './Son2';
class Father extends Component {
    render() {
        return (
            <div>
                <Son1></Son1>
                <Son2></Son2>
            </div>
        );
    }
}

export default Father;
