import React, { Component } from 'react';
import Grandson from './Grandson';
import contextObj from './context'
class Son extends Component {
    static contextType = contextObj
    render() {
        return (
            <div>
                <p>son{this.context.name}-{this.context.age}</p>
                <Grandson></Grandson>
            </div>
        );
    }
}

export default Son;
