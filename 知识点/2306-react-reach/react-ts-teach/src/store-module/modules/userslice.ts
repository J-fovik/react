
import { createSlice } from '@reduxjs/toolkit'

// 用户相当的数据
const userSlice = createSlice({
    name: 'user',
    initialState: {
        count: 100,
        userinfo: {
            name: "张雪峰",
            age: 30
        }
    },
    reducers: {
        addCount: (state, action) => {
            state.count += action.payload
        },
        addAge(state, action) {
            state.userinfo.age += action.payload
        }
    }
})

// 导出用户切片修改state 的方法(同步方法)
export const { addCount, addAge } = userSlice.actions

export default userSlice