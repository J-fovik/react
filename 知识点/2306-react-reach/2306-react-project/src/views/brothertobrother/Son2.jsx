import React, { Component } from 'react';
// 导入 eventBus 这个实例对象
import eventBus from './eventBus';
export default class Son2 extends Component {

    render() {
        return (
            <div>Son2</div>
        )
    }
    componentDidMount() {
        eventBus.on('myevents', (data) => {
            console.log('data', data);
            data()
        })
    }
}
