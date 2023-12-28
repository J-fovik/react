
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
// 商品相关的数据
const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        num: 1000,
        schoolList: []
    },
    reducers: {
        addNum: (state, action) => {
            state.num += action.payload
        },
        updateSchoolList(state, action) {
            state.schoolList = action.payload
        }
    }
})

// 导出商品切片修改state 的方法(同步方法)
export const { addNum, updateSchoolList } = shopSlice.actions
// 导出异步方法
// 注意: 在ts中需要设置 异步任务的返回值类型, 否则调用时报类型错误.
export const updateSchoolListAsync = (): any => {
    return (dispatch: any) => {
        axios('https://api.i-lynn.cn/college').then(res => {
            // 派发任务修改state
            dispatch(updateSchoolList(res.data.data.list1))
        })
    }
}

export default shopSlice