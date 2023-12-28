import React from 'react'
import { useState } from 'react';

// 引入Son1 组件
import Son1 from './Son1';
export default function Father() {
    // 定义count 
    const [count, setCount] = useState(100);
    return (
        <div>
            <p onClick={() => {
                setCount(count + 1)
            }}>count:{count}</p>
            <hr />
            <br />
            {/* 使用Son1组件 */}
            <Son1></Son1>
        </div>
    )
}
