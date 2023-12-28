// 定义仓库

// 步骤一：引用创建仓库的方法
// combineReducers 可以将多个reducer结合到一起, 组成一个
import { legacy_createStore as createStore, combineReducers } from 'redux';

// 引入模块
import  userReducer  from './modules/user';
import  shopReducer  from './modules/shop';
// 步骤4: 创建仓库store
const store = createStore(
    combineReducers({
        user: userReducer,
        shop: shopReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 步骤5: 导出仓库
export default store