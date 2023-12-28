import React from 'react';
import { useState, useEffect } from 'react'

const Father = () => {
    const [count, setCount] = useState(100)
    const [user, setUser] = useState({
        name: '科比',
        age: 20
    })
    const addCountFn = () => {
        setCount(count + 1)
    }
    const editUser = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

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

    // 语法3，
    // 只执行一次 user1
    // 类似 生命周期compontentDidmount
    // 参数一：为执行函数 初始化只执行一次
    // 参数二：为空数组，当前依赖的值，当数组中依赖的值发生变化，则参数1函数就执行
    // 如果数组中依赖的值，没有发生变化，则参数1函数不执行
    // 使用场景：一般适用于进行数据的请求
    // useEffect(()=>{
    //     console.log('user1',user);
    // },[])


    // 语法4：
    // 当参数二数组中依赖的值发生变化，参数一函数就会触发
    // 执行时间：初始化执行，当count变化也执行
    // 类似于vue中生命周期undated
    // 更类似于vue中的watch监听器
    useEffect(()=>{
        console.log('count',count);

    },[count])

    return (
        <div>
            <p onClick={addCountFn}>count:{count}</p>
            <p onClick={editUser}>{user.name}--{user.age}</p>
        </div>
    );
}

export default Father;
