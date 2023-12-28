import React from 'react';
import contextObj from './conxt'
import { useContext } from 'react'
// useContext  可以在后代组件中获取跨级组件通信中祖先组件的数据
// 语法: const 数据 = useContext(createContext());

// 与类组件相比, 只有后代组件消费数据的方式变了, 其余不变

export default function Grandson() {
    const data = useContext(contextObj)
    console.log('data', data);
    return (
        <div>
            <p>Grandson</p>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}
