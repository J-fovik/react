import React from 'react';
import { useState, useCallback } from 'react';

// useCallback
// 由于函数组件中的状态发生改变, 函数组件都会重新执行, 这样在函数组件中定义的函数(或其他事件处理函数)
// 都会重复重建, 这样有点浪费浏览器性能, 希望降低函数创建的次数,这时候可以使用useCallback

// 语法: const 函数名 = useCallback(()=>{},[变量,变量1,....])
// 参数1: 就是函数名对应的函数
// 参数2: 为一个数组, 数组中有依赖的变量, 只有依赖的变量发生改变, 参数1函数才会重新创建
// 否则如果没有发生变化, 使用上一次缓存的函数,不会重新创建




export default function Father() {
    const [keywords, setKeywords] = useState('');
    const [list, setList] = useState(['金庸', '古龙', '琼瑶'])
    const [count, setCount] = useState(0)


    // const addUserFn = () => {
    //     list.push(keywords)
    //     setList([...list])
    // }
    // console.log('执行代码');

    // 改造上述函数代码
    // 当数组中为空数组时, 说明依赖的值就没有发生变化,对应的addUserFn只有在初始化的
    // 时候创建一次, 当keywords更新的时候, 函数组件会重新执行, 而 addUserFn函数没有重新创建
    // 所以 keywords 还是第一次函数addUserFn创建的时候中的keywords,为 '',所以添加用户没法添加

    const addUserFn = useCallback(() => {
        console.log('keywords', keywords);
        list.push(keywords)
        setList([...list])
    }, [keywords]);


    return (
        <div>
            <p onClick={() => {
                setCount(count + 1)
            }}>
                count:{count}
            </p>
            <hr />
            <p>
                <input type='text' value={keywords} onChange={(e) => {
                    setKeywords(e.target.value)
                }} />
                <button onClick={addUserFn}>添加</button>
            </p>
            {/* 数据列表 */}
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}
