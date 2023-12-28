import React, { Component } from 'react'
// 修改state 两种方式的区别?
// 在react中如果使用对象形式修改state, 则react内部会将这三个对象进行合并
// 然后只有最后一次对象修改起作用
// 在react中如果使用函数形式修改state, 则会将函数存放在一个数组中,然后循环执行,
// 这样每次修改都会触发

export default class Father extends Component {
    state = {
        count: 100,
        num: 99
    }
    render() {
        console.log('render');
        return (
            <div>
                <p>count:{this.state.count}</p>
                <p>num:{this.state.num}</p>
                <p>
                    <button onClick={() => {
                        // console.log('点击事件')
                        this.setState({
                            count: this.state.count + 1
                        })
                        // this.setState({
                        //     count: this.state.count + 1
                        // })
                        // this.setState({
                        //     count: this.state.count + 1
                        // })
                    }}>使用对象形式修改</button>
                    <button onClick={() => {
                        this.setState((state) => ({
                            count: state.count + 1
                        }))
                        this.setState((state) => ({
                            count: state.count + 1
                        }))
                        this.setState((state) => ({
                            count: state.count + 1
                        }))
                    }}>使用函数形式修改</button>
                </p>
            </div>
        )
    }
}
