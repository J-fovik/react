import React from 'react'
import { useEffect, useLayoutEffect, useState } from 'react';

// useEffect 和useLayputEffect 区别:
// 相同点: 二者的语法都有4种语法,语法规则一样
// 不同点: useEffect 是在浏览器已经完成渲染才触发, 是异步的hook
// 而 useLayoutEffect  是在浏览器更新dom后,同步执行 useLayoutEffect ,此时dom还没有完全渲染在页面中
// useLayputEffect 执行时机比 useEffect执行时机早,
// useEffect 是异步的
// useLayoutEffect 是同步渲染的

export default function Father() {
    const [username, setusername] = useState('曹操')
    // useEffect(() => {
    //     for (let i = 0; i < 10000000; i++) {

    //     }
    //     setusername('曹阿瞒')
    // })

    useLayoutEffect(() => {
        for (let i = 0; i < 10000000; i++) {

        }
        setusername('曹阿瞒')
    })
    return (
        <div>
            <p>{username}</p>
        </div>
    )
}
