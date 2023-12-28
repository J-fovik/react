import React from 'react'
import contextObj from './context'
import { useContext } from 'react'
export default function Grandson1() {
    const { state, dispatch } = useContext(contextObj)
    return (
        <div>
            <p>Grandson1</p>
            <p onClick={() => {
                dispatch({ type: 'edit', payload: 10 })
            }}>{state.userinfo.name}--{state.userinfo.age}</p>
        </div>
    )
}
