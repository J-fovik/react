// 01: 
import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import userReducer from './modules/userReducer';
// ++++++ 引入持久化插件 中两个方法
import { persistStore, persistReducer } from 'redux-persist';
// +++ 引入存储的方式
import storage from 'redux-persist/lib/storage'

// 引入异步中间件 ++++
import reduxThunk from 'redux-thunk'

//++++
const storageConfig = {
    key: 'root', // 必须有的  存的localStorage中的key属性名
    storage: storage, // 缓存机制
    blacklist: ['count'], // reducer 里不持久化的数据,除此外均为持久化数据
};

// ++++
const myPersistReducer = persistReducer(storageConfig, userReducer);
// 04: 创建仓库 +++
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    myPersistReducer,  //++++ 
    composeEnhancers(applyMiddleware(reduxThunk)) //+++
);

//+++++
export const persistor = persistStore(store);
export default store








