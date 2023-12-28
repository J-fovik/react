import React, { Component } from 'react'
// 导入eventBus 这个实例对象
import eventBus from './eventBus';

console.log('eventBus', eventBus);
export default class Son1 extends Component {
    state = {
        say: '我是兄弟1组件中的数据',
        run() {
            console.log('我是兄弟1 组件中的方法');
        }
    }
    render() {
        return (
            <div onClick={() => {
                //向兄弟2组件中发送数据
                //语法: eventBus.emit('自定义事件',要传递的数据)
                // eventBus.emit('myevents', this.state.say)
                eventBus.emit('myevents', this.state.run)
            }}>Son1</div>
        )
    }
}
