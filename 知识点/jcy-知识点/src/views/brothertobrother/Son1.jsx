import React, { Component } from 'react';
// 导入eventBus这个实例对象
import eventBus from './eventBus';
console.log('eventBus',eventBus);
class Son1 extends Component {
    state ={
        say : '我是兄弟一组件的数据',
        run(){
            console.log('我是兄弟一组件的方法');
        }
    }
    render() {
        return (
            <div onClick={()=>{
                // eventBus.emit('myevents', this.state.say)
                eventBus.emit('myevents',this.state.run)
            }}>
                Son1
            </div>
        );
    }
}

export default Son1;
