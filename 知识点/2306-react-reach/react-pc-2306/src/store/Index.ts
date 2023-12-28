// 定义仓库 ts版本的rtk
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './modules/userslice'
const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
// state 对象的类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
// dispatch 的类型
export type AppDispatch = typeof store.dispatch

// 导出store
export default store