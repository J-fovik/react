import React from 'react'
import { useReducer } from 'react'
// 在当前father组件中定义一个小仓库, 可以部分组件访问该仓库数据

// 步骤1: 定义初始数据
const defaultState = {
    count: 100,
    userinfo: {
        name: '郎朗',
        age: 20
    }
}

// 步骤2: 定义reducer函数
const reducer = (state, action) => {
    if (action.type == '+') {
        return {
            ...state,
            count: state.count + action.payload
        }
    }
    if (action.type == 'edit') {
        return {
            ...state,
            userinfo: {
                ...state.userinfo,
                age: state.userinfo.age + action.payload
            }
        }
    }
    return state
}


export default function Father() {
    const [state, dispatch] = useReducer(reducer, defaultState)
    console.log(state, dispatch);

    return (
        <div>
            {/* count */}
            <p onClick={() => {
                dispatch({ type: '+', payload: 1 })
            }}>
                count:{state.count}
            </p>
            {/* userinfo */}
            <p>{state.userinfo.name}--{state.userinfo.age}</p>
        </div>
    )
}
