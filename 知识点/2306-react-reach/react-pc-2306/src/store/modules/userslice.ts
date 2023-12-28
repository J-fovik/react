//  定义用户切片相当于子模块 user
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Index';
import store from 'store'
// 为 slice state 定义一个类型
interface userState {
    count: number,
    adminname: string,
    role: number,
    checkedkeys: Array<any>,
    token: string
}

// 使用该类型定义初始 state
const initialState: userState = {
    count: 100,
    adminname: store.get('adminname') ? store.get('adminname') : '',
    role: store.get('role') ? store.get('role') : 0,
    checkedkeys: store.get('checkedkeys') ? store.get('checkedkeys') : [],
    token: store.get('token') ? store.get('token') : ''
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` 将从 `initialState` 参数推断 state 类型
    initialState: initialState,
    reducers: {
        // 使用 PayloadAction 类型声明 `action.payload` 的内容
        addCount: (state, action: PayloadAction<number>) => {
            state.count += action.payload  // action.payload  为number类型
        },
        updateAdminName(state, action: PayloadAction<string>) {
            state.adminname = action.payload
        },
        updateRole(state, action: PayloadAction<number>) {
            state.role = action.payload
        },
        updateCheckedKeys(state, action: PayloadAction<Array<any>>) {
            state.checkedkeys = action.payload
        },
        updateToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        }

    }
})

export const {
    updateAdminName,
    updateRole,
    updateCheckedKeys,
    updateToken
} = userSlice.actions;

export default userSlice.reducer