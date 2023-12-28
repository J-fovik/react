import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector
} from 'react-redux'

// 从 index.ts 中引入定义 RootState 类型和 AppDispatch 类型
// RootState 就是state仓库状态对象的类型
// AppDispatch 就是 dispatch 这个函数的类型

import type { RootState, AppDispatch } from '../Index'

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
// useAppDispatch 就是useDispatch 只不过是设置了类型的 useDispatch
// useAppSelector 就是useSlector 只不过是设置了类型的useSelector
// 以后在页面使用这两个hook 的时候, 直接使用 useAppDispatch 和useAppSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// 在页面中使用时
// const state = useAppSelector(state => state)