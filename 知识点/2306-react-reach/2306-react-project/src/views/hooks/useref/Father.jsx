import React from 'react'
import { useState, useRef, createRef, useEffect } from 'react';
// useRef 使用
// 实现了函数组件的子传父

// 语法:const ref1 = useRef() 创建一个引用对象
// 当ref1 赋值给普通元素, 则获取的是 原生dom节点
// 当ref1 赋值给函数组件, 则需要给函数组件使用forwordRef 这个高阶组件处理,
// 然后再子组件中将子组件中的数据和方法抛出 使用 useImperActiveHandle 这个hook


// useRef 和 createRef 区别:
// createRef 当数据更新的时候, 每次都会重新创建一个ref 引用对象
// useRef 当数据更新, useRef 只创建一次引用对象 

// 引入子组件Son
import Son from './Son';
export default function Father() {
    const [count, setCount] = useState(0)
    const ref1 = useRef();
    const ref2 = useRef()
    useEffect(() => {
        console.log('ref1', ref1.current.innerHTML);
        console.log('ref2', ref2.current);
    })

    return (
        <div>
            {/* 绑定在普通元素 */}
            <p ref={ref1}>count:{count}</p>
            <p><button onClick={() => {
                ref2.current.addAge()
            }}>修改子组件中的年龄</button></p>
            {/* 绑定在组件上 */}
            <Son ref={ref2}></Son>
        </div>
    )
}
