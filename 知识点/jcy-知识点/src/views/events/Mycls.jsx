import React, { Component } from 'react';

class Mycls extends Component {
    handleClick=(e)=>{
        console.log('类组件事件');
        console.log(this); // 当前组件实例
        console.log(e);
        console.log('e', e.target.innerHTML);
        console.log('原生e', e.nativeEvent.target.innerHTML);
    }
    render() {
        return (
            <div>
                <p>类组件的事件绑定</p>
                <button onClick={this.handleClick}>点击事件</button>
            </div>
        );
    }
}

export default Mycls;


 


