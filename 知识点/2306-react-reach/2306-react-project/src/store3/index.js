//  定义仓库

// 步骤1:  引入创建仓库的方法
// combineReducers 可以将多个reducer结合到一起, 组成一个
import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,  //++++
    compose   //+++
} from 'redux';

// 引入user模块和 shop模块
import userReducer from './modules/user';
import shopReducer from './modules/shop';

// 引入redux-thunk 这个中间件 +++++++
import reduxthunk from 'redux-thunk';

// 步骤4: 创建仓库store
// ++++
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        user: userReducer,
        shop: shopReducer
    }),
    composeEnhancers(  // +++++
        applyMiddleware(reduxthunk)  // 应用中间件 reduxthunk
    )
);

// 步骤5: 导出仓库
export default store





