import React from 'react'
import type { userType } from './types';
import { useState, forwardRef, useImperativeHandle } from 'react'
type Props = {
    user: userType,
    addAge: () => void,
    getdataFn: (m: any) => void
}

function Son({ user, addAge, getdataFn }: Props, ref: any) {
    const [minister, setMinister] = useState<userType>({
        name: '王毅',
        age: 70
    })

    const givedatatofatherFn = (): userType => {
        return minister
    }

    useImperativeHandle(ref, () => {
        return {
            givedatatofatherFn
        }
    })
    return (
        <div>
            <p onClick={() => {
                addAge()
            }}>我是子组件 -{user.name}-{user.age}</p>
            <button onClick={() => {
                getdataFn(minister)
            }}>子传父</button>
        </div>
    )
}

export default forwardRef(Son)