
// rtk 和 redux 的区别?
// rtk 自带immutable.js 性能得到了优化, 实现了数据state的拷贝;
// rtk 不需要配置redux-thunk, 直接使用就可以,内部已经自动配置了;
// rtk 整体的包体积更小;

import { configureStore } from '@reduxjs/toolkit'
import userSlice from './modules/userslice';
import shopSlice from './modules/shopslice'

// 创建仓库store
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        shop: shopSlice.reducer
    }
})

export default store


