import React, { Component, createRef } from 'react'
import Son from './Son'

// 子传父方式
// 01: 首先通过ref 属性获取子组件实例, 进而获取实例上数据

// 02: 在子组件中定义一个函数, 该函数的返回值是当前子组件中的数据, 然后父组件通过ref
// 调用子组件实例, 进而获取返回值的数据,实现子传父

// 03: 在父组件中定义一个方法, 该方法接受一个形参,然后通过动态属性的形式将该方法传递
// 给子组件,子组件接收该方法,并调用,传实参. 这样就将子组件中的数据传递给了父组件

export default class Father extends Component {
    ref1 = createRef();
    state = {
        arr: [],

    }
    render() {
        return (
            <div>
                {/* 使用子组件 */}
                {/* <Son ref={this.ref1}></Son> */}
                {/* 遍历数组 */}
                <ul>
                    {
                        this.state.arr.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
                {/* 方式3: */}
                <Son getdatafromsonFn={this.getdatafromsonFn.bind(this)}></Son>
            </div>
        )
    }
    componentDidMount() {
        // 获取子组件的实例
        // console.log(this.ref1.current.state.nameArr)
        // this.setState({
        //     arr: this.ref1.current.state.nameArr
        // })
        // this.setState({
        //     arr: this.ref1.current.givedatatofather()
        // })
    }
    getdatafromsonFn(data) {
        console.log(this);
        console.log('data', data);
        this.setState({
            arr: data
        })


    }
}
