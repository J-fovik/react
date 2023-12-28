import React, { forwardRef, useState } from 'react'
// 注意1:
// 如果需要给函数组件使用ref 属性, 需要给函数组件使用 hoc 高阶组件函数 forwardRef
// 处理,返回一个新组件, 否则报错

// 注意2:
// 由于子组件Son 是一个函数组件, 所以没有this实例, 通过ref 获取不到组件实例,
// 需要借助 useImperActiveHandle 这个hooks 来将子组件上的数据和方法抛出给父组件
// 这样父 组件就可以获取子组件上的数据和方法啦
import { useImperativeHandle } from 'react'
function Son(props, ref) {
    const [user, setUser] = useState({
        name: '貂蝉',
        age: 18
    });

    useImperativeHandle(ref, () => {
        // return 返回的对象就是要抛出的内容
        return {
            addAge
        }
    })
    const addAge = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }
    return (
        <div>
            <p>{user.name}--{user.age}</p>
        </div>
    )
}

export default forwardRef(Son)