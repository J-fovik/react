import React from 'react'
import { useReducer } from 'react'
import Son1 from './Son1'
import Son2 from './Son2'
import contextObj from './context'
const { Provider } = contextObj
// 在当前father组件中定义一个小仓库, 可以部分组件访问该仓库数据
// useReducer +createContetext+useContext 结合使用,实现
// 跨级组件通信, 局部定义一个小仓库, 仓库位于父组件中,后代组件都可以获取和修改仓库数据





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

            {/* 使用Son1和Son2组件 */}
            <Provider value={{
                state,
                dispatch
            }}>
                <Son1></Son1>
                <Son2></Son2>
            </Provider>
        </div>
    )
}
