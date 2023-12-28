import React, { Component } from 'react';
//引入 contextObj 对象;
import contextObj from './context';

const { Consumer } = contextObj;
export default class Grandson extends Component {
    render() {
        return (
            <div>
                <p>Grandson</p>
                {/* 消费Provider提供的数据 */}
                <Consumer>
                    {
                        (value) => {
                            // value 就是提供的数据
                            console.log('value', value)
                            return <div>
                                <p>{value.name}--{value.age}</p>
                            </div>
                        }
                    }
                </Consumer>
            </div>
        )
    }
}
