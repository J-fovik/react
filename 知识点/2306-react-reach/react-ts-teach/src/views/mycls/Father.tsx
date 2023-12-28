import React, { Component, createRef } from 'react'
import Son from './Son'
// interface 和 type到的区别?
// 相同点: 都可以创建一个数据类型
// 不同点:
// interface一般用来创建对象数据类型
// type 可以创建任意一种数据类型
// interface 可以实现继承
// type不能继承

interface Props {

}

type State = {
  count: number
}


export default class Father extends Component<Props, State> {
  // Props 为接收的父组件传递的属性对象的类型
  // State 定义当前组件自身的state 的类型
  state = {
    count: 100
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // HTMLInputElement 表示input 元素类型
  ref1 = createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        <p onClick={() => {
          // this.setState({
          //   count: 10000
          // })
          // this.setState((): State => {
          //   return {
          //     count: '999'
          //   }
          // })
        }}>count:{this.state.count}</p>
        {/* 使用子组件 */}
        <Son count={this.state.count} addCount={this.addCount}></Son>
        {/* 受控组件 */}
        <p>
          <input type="text" value={this.state.count} onChange={(e) => {
            this.setState({
              count: Number(e.target.value)
            })
          }} />
        </p>
        {/* 非受控组件 */}
        <p>
          <input ref={this.ref1} type='text' defaultValue={this.state.count} />
          <button onClick={() => {
            // 解决方式1: 可选链
            // console.log(this.ref1.current?.value); 
            // 解决方式2: 类型断言
            // console.log((this.ref1.current as HTMLInputElement).value);
            // 解决方式3: ! 非null 断言操作符 !之前的值一定不是null 或undefined
            console.log(this.ref1.current!.value);

          }}>提交表单</button>
        </p>
      </div >
    )
  }
}