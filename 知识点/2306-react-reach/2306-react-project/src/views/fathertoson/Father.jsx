import React, { Component, createRef } from 'react'
import Son from './Son';
// 父传子方法:
// 01: 通过设置动态属性传值, 子组件通过 this.props 接收数据;

// 02: 在父组件中定义一个方法, 该方法的返回值为当前父组件中的数据,
// 将该函数通过属性形式传递给子组件, 然后子组件中获取该方法, 并调用,
// 获取的函数返回值就是父组件中的数据

// 03: 在子组件中定义一个函数,该函数接收一个形参. 然后在父组件中调用子组件上的这个方法
// 并且将父组件中的数据通过实参传递给给该方法, 这样该方法就可以获取父组件中的数据了

export default class Father extends Component {
    // constructor() {
    //     super()
    //     this.ref1 = createRef()
    // }

    ref1 = createRef()
    state = {
        user: {
            name: '孙仲谋',
            age: 20
        }
    }
    render() {
        const { user } = this.state
        return (
            <div>
                {/*使用子组件 */}
                {/*第一种方式: 父传子  */}
                {/* <Son user={user}></Son> */}
                {/* 第二种方式: 父传子 传递的函数 */}
                {/* <Son tosonFn={this.tosonFn}></Son> */}
                {/* 第三种方式: 父传子  */}
                <Son ref={this.ref1}></Son>
            </div>
        )
    }
    // 该方法要传递给子组件
    // tosonFn = () => {
    //     console.log('this', this);
    //     return this.state.user
    // }

    componentDidMount() {
        // 获取子组件Son 实例对象
        console.log('this.ref1', this.ref1);
        this.ref1.current.getdatafromfather(this.state.user)
    }
}
