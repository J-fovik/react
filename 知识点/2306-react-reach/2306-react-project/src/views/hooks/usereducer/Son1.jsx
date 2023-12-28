import React from 'react'
import { useContext } from 'react'
import contextObj from './context';

import Grandson1 from './Grandson1';

export default function Son1() {
    const { state, dispatch } = useContext(contextObj)
    // console.log('data', data);
    return (
        <div>
            <p>Son1</p>
            <p onClick={() => {
                dispatch({ type: '+', payload: 5 })
            }}>son1: {state.count}</p>

            {/* 使用孙子组件 */}
            <Grandson1></Grandson1>
        </div>
    )
}
