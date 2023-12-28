import React from 'react'
// hooks 的使用
// react中所有的hooks 都是以use开头的函数

// hooks 的使用限制:
// 01: hooks只能在函数组件内使用
// 02: hooks不能被有条件的使用
// 03: hooks 不能在普通函数中使用

// useaState 定义组件的状态
// 语法: const [state,setState] = useState (初始值)
// state 为定义的初始变量, 就是响应式的数据
// setState 这是函数. 只有通过该函数才能修改 state
// 一般规范, state 如果为count , 方法名一般为 setCount

// 类组件也是两种修改方式
// this.setState({key:value},()=>{})
// this.setState(()=> ({key:value},()=>{})

// 修改count
// 方式1: 直接赋值 setCount(新值);
// 方式2: 使用函数赋值 setCount((state)=>{return 新值}) state 为要修改的数据
// setCount 方法是异步的方法

import { useState } from 'react';
// console.log(useState);
export default function Father() {
    let [count, setCount] = useState(100);
    // console.log(useState(100)); // [100,f]
    // if (true) {
    //     const [count, Setcount] = useState(100);
    // }
    // function fn() {
    //     const [count, Setcount] = useState(100);
    // }
    // fn()
    return (
        <div>
            <p onClick={() => {
                // 方式1:修改
                // setCount(count + 1)
                // 方式2:修改
                setCount((state) => {
                    console.log(state)
                    return state + 1
                })

                // console.log('count', count)

            }}>count:{count}</p>
        </div>
    )
}
