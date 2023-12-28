import React, { Component } from 'react';
// vue使用了object.defineProperty 给每一个data数据绑定get 和set 方法,
//当修改数据的时候, 触发了set 方法, 当访问数据的时候, 触发get 实现对数据的监听
// react为了监听到数据的变化, 使用this.setState()去修改数据,这样才能被react 监听到数据的变化
//
// 在类组件中定义组件的状态:
// 方式2种:
// 方式1: 在constructor 构造器中定义初始的状态
// 方式2: 以类成员属性的形式定义状态

// 类组件中修改state 状态的方式;
// 方式1: 对象形式 this.setState({key:value,key1:value2,...})
// 方式2: 函数形式 this.setState((state)=>{return {key:val1,key2:val2,....}}) state为数据对象


export default class Father extends Component {
    constructor() {
        super();
        //方式1
        // this.state = {
        //     num: 100,
        //     nameArr: ['姚明', '易建联', '郭艾伦', '胡卫东']
        // }
    }
    state = {
        num: 100,
        nameArr: ['姚明', '易建联', '郭艾伦', '胡卫东'],
        user: {
            name: '李楠',
            age: 50
        }
    }
    addPalyerFn = () => {
        //this.state.nameArr.push('陈江华')
        this.setState({
            nameArr: [...this.state.nameArr, '陈江华']
        })
    }
    render() {
        return (
            <div>
                <p onClick={() => {
                    // console.log(this)
                    // 对象形式修改
                    // this.setState({
                    //     num: this.state.num + 1
                    // })
                    // 函数形式修改
                    this.setState((state) => ({
                        num: state.num + 1
                    })
                    )
                }}>num:{this.state.num}</p>

                {/* 遍历数组 */}
                <ul>
                    {
                        this.state.nameArr.map((item, index) => <li key={index}>{item}</li>)
                    }
                    <button onClick={this.addPalyerFn}>添加运动员</button>
                </ul>
                {/* 修改对象 */}
                <p onClick={() => {

                    // this.setState({
                    //     user: {
                    //         ...this.state.user,  // 展开运算符
                    //         age: this.state.user.age + 1
                    //     }
                    // })
                    this.state.user.age = this.state.user.age + 1
                    this.setState({
                        user: this.state.user
                    })
                }}>{this.state.user.name}-{this.state.user.age}</p>



            </div>
        )
    }
}
