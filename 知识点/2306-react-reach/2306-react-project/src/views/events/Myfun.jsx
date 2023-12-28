import React from 'react'
// 函数组件中的事件绑定 可以在函数组件内或函数组件外
// 函数组件的事件处理函数建议写在函数组件内
// 原因: 因为函数组件的事件处理函数一般伴随着要操作 使用 hooks,而hooks 使用有限制条件
// hooks 的函数只能在函数组件内使用,所以事件处理函数写在函数组件内. 

export default function Myfun() {
    const handleClickFn = () => {
        console.log('点击事件1')
        // useState()
    }
    return (
        <div>
            <p>函数组件</p>
            <button onClick={handleClickFn}>函数点击事件</button>
        </div>
    )
}
