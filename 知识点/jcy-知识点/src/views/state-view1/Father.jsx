import React, { Component } from 'react'

//问题? this.setState() 是同步还是异步?
//回答: 在react18之前可以同步可以异步, 在react18之后只有异步
// 在18之前 setState 方法在定时器中或在原生事件中 是同步的, 其余都异步


// 怎么获取最新的状态和最新的dom;
// this.setState(update,()=>{});
// 参数1为更新操作 可以是函数或对象形式;
// 参数2为回调函数, 当状态变化后,立即调用执行,相当于vue中 nextTick 这个钩子函数


export default class Father extends Component {
    state = {
        count: 0
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <p id='p0' onClick={() => {
                    this.setState({
                        count: count + 1
                    }, () => {
                        // 获取最新的count
                        console.log('count', this.state.count)
                        console.log('innerHTML', document.querySelector('#p0').innerHTML)
                    })

                }}>count:{count}</p>

                {/* 模拟18之前的同步操作 */}
                <p onClick={() => {
                    setTimeout(() => {
                        this.setState({
                            count: count + 1
                        })
                        console.log(count)
                    }, 0)
                }}>count:{count}</p>
                {/*react18之前的同步修改 模拟原生事件 */}
                <p id='p1' >count:{count}</p>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
        // console.log(document.querySelector('#p1'))
        //const { count } = this.state
        // 事件流机制
        document.querySelector('#p1').addEventListener('click', () => {
            console.log(this);
            this.setState({
                count: this.state.count + 1
            })
            console.log('count', this.state.count);
        })
    }
}
