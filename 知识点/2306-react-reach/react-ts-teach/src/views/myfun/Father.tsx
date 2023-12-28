import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Son from './Son'
import type { userType } from './types'
type Props = {}

export default function Father({ }: Props) {
    const [count, setCount] = useState<number>(100);
    const [user, setUser] = useState<userType>({
        name: '张鹏',
        age: 20
    })

    const addAge = () => {
        setUser((state): userType => {
            return {
                ...state,
                age: state.age + 1
            }
        })
    }
    const ref1 = useRef<HTMLInputElement | null>(null);
    // 定义一个方法, 该方法接受一个参数, 
    const getdataFn = (data: userType) => {
        // data 就是子组件中的数据
        console.log('data', data.name);
    }

    const ref2 = useRef()
    useEffect(() => {
        console.log(((ref2.current) as any).givedatatofatherFn());

    }, [])

    return (
        <div>
            <p onClick={() => {
                setCount(count + 1)
            }}>count:{count}</p>

            {/* 使用子组件 */}
            <Son ref={ref2} user={user} addAge={addAge} getdataFn={getdataFn}></Son>
            {/* 受控组件 */}
            <p>
                <input type='text' value={count} onChange={(e) => {
                    setCount(Number(e.target.value))
                }} />
            </p>
            {/* 非受控组件 */}
            <p>
                <input type='text' defaultValue={count} ref={ref1} />
                <button onClick={() => {
                    // 解决类型方式同类组件中的三种方式一样
                    console.log(ref1.current!.value);

                }}>提交表单</button>
            </p>
        </div >
    )
}