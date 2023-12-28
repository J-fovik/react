// 步骤01： 引入rtk 中的两个方法
import { createSlice, configureStore } from '@reduxjs/toolkit'

// 步骤2： 创建切片slice
const userSlice = createSlice({
    name: 'user', // 命名切片 相当于vuex中的子模块的命名空间 namespaced:true
    initialState: { // 定义仓库初始数据
        count: 0
    },
    reducers: { // 定义reducer, 存放修改state 数据的所有的方法
        addCount(state) { // state  就相当于initialState
            state.count += 1
        },
        jianCount(state, action) {
            console.log('action', action);

            state.count -= action.payload
        }
    }
})

// 步骤3: 导出操作state 数据的方法
export const { addCount, jianCount } = userSlice.actions

// 步骤4： 创建store 仓库
const store = configureStore({
    reducer: userSlice.reducer
})

// 步骤5： 导出store 仓库
export default store