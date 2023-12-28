import React from 'react';
// 面试题? 怎么获取 useState 修改完的数据
// 可以使用useEffect 监听对应的值, 当该变量被修改, 就可以获取最新的变量以及变量对应最新的dom
// 类比于类组件中的 this.setState({},()=>{等价于该处的代码})
import { useState, useEffect } from 'react'
export default function Father2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count);
        console.log(document.querySelector('p').innerHTML);
    }, [count]);
    return (
        <div>
            <p onClick={() => {
                setCount((state) => state + 1);
                // 
                // console.log(count)
            }}>count:{count}</p>
        </div>
    )
}