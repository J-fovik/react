import React, { Component } from 'react'
// react 中类组件中的事件绑定
// 由于react中的事件绑定默认是没有this的
// 给事件处理函数绑定this 有4种方式:
// 方式1: 在constructor 初始化构造函数中绑定this
// 方式2 :
export default class Father extends Component {
    constructor() {
        super()
        // console.log(this); // 该位置的this 为当前组件实例
        // 方式1 : 绑定this
        // this.handClickFn1 = this.handClickFn1.bind(this, 100)
    }
    handClickFn1(num, e) {
        // console.log('this-handClickFn1', this);
        // console.log('e', e);
        // console.log('num', num);
    }

    handClickFn2(num, e) {
        console.log('this-handClickFn2', this);
        console.log(num);
        console.log(e);
    }
    handClickFn3(num, e) {
        console.log('this-handClickFn3', this);
        console.log('num', num);
        console.log('e', e);
    }

    handClickFn4 = (e) => {
        console.log('this-handClickFn4', this);
        console.log('e', e);
    }
    render() {
        return (
            <div>
                {/* 方式1:在构造器中绑定this */}
                <p onClick={this.handClickFn1}>事件绑定方式1</p>
                {/* 方式2: 行内绑定this -- 推荐*/}
                <p onClick={this.handClickFn2.bind(this, 99)}>事件绑定this方式2</p>
                {/* 方式3: 行内使用箭头函数的形式绑定this--- 推荐*/}
                <p onClick={(e) => { this.handClickFn3(88, e) }}>事件绑定方式3</p>
                {/* 方式4: 使用箭头函数定义事件处理函数 -- 不能传参 */}
                <p onClick={this.handClickFn4}>事件绑定方式4</p>
            </div>
        )
    }
}
