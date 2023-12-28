import React, { forwardRef, useState } from 'react';
import { useImperativeHandle } from 'react'

function Son(props, ref) {
    const [user, setUser] = useState({
        name: '貂蝉',
        age: 18
    })
    useImperativeHandle(ref, () => {
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
    );
}

export default forwardRef(Son);
