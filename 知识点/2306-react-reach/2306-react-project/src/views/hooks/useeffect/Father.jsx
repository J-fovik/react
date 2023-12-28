import React from 'react';
import { useState, useEffect } from 'react';

// useEffect:
// 执行时间: 等到页面渲染完毕触发(重要);
// 作用: 用于模拟react中的组件的生命周期的

export default function Father() {
    const [count, setCount] = useState(100)
    const [user, setUser] = useState({ name: '田安星', age: 20 })
    const addCountFn = () => {
        setCount(count + 1)
    }

    const editUser = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    //console.log('count', count);
    //语法1:
    // 初始化执行, 状态更新执行
    // 类似于 生命周期函数, componentDidmount 和componentDidupdate
    // useEffect(() => {
    //     // console.log('count-1', 1);
    //     console.log(count);
    //     // console.log(document.querySelector('#p1').innerHTML);
    // })

    //语法2:
    // 初始化执行user1, 当状态发生变化的时候,先执行user2,然后再执行user1
    // 类似于 生命周期函数, componentDidmount 和componentDidupdate
    // useEffect(() => {
    //     console.log('user1', user);
    //     return () => {
    //         console.log('user2', user);
    //     }
    // })

    // 语法3:
    // 只执行一次 user1 
    // 类似 生命周期componentDidmount
    // 参数1: 为执行函数 初始化只执行一次
    // 参数2: 为空数组, 当前依赖的值, 当数组中依赖的值发生变化, 则参数1函数就执行
    // 如果数组中依赖的值没有发生变化, 则参数1 函数不执行
    // 使用场景: 一般适用于 进行数据的请求
    // useEffect(() => {
    //     console.log('user1', user);
    // }, [])

    // 语法4: 
    // 当参数2数组中依赖的值发生变化,参数1函数就会触发
    // 执行时间: 初始化执行, 当count 变化也执行
    // 类似于vue中生命周期updated,
    // 更类似于 vue中的watch监听器
    // useEffect(() => {
    //     console.log('count', count);
    // }, [count])

    return (
        <div>
            <p id='p1' onClick={addCountFn}>count:{count}</p>
            <p onClick={editUser}>{user.name}--{user.age}</p>
        </div>
    )
}
