import React, { Component } from 'react'
// const handleClick = () => {
//     console.log('类组件事件');
//     console.log(this); // undefined react处理了, 不是window
// }

// 类组件事件绑定 : 可以写在组件外和组件内
// 建议将事件处理函数写在组件内, 以类成员属性形式定义,这样可以获取组件实例,
// 进而操作实例上的数据和方法
// react 中的事件对象, 是合成事件对象,
// 特点1: 属性和原生事件对象基本一致,
// 特点2: 合成事件对象不需要考虑浏览器的兼容

export default class Mycls extends Component {
    handleClick = (e) => {
        console.log('类组件事件');
        console.log(this); // 当前组件实例
        console.log('e', e.target.innerHTML);
        console.log('原生e', e.nativeEvent.target.innerHTML);
    }

    render() {
        // console.log('this', this);
        return (
            <div>
                <p>类组件事件绑定</p>
                <button onClick={this.handleClick}>点击事件</button>
            </div>
        )
    }
}
