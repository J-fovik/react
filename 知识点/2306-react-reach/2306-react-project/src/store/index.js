//  定义仓库

// 步骤1:  引入创建仓库的方法
import { legacy_createStore as createStore } from 'redux';

// 步骤2: 定义初始仓库数据
const defaultState = {
    count: 0, // 就是仓库中的数据 
    user: {
        name: '会娟老师',
        age: 30
    }
}

// 步骤3:定义reducer函数,该函数用来修改仓库中的数据
function userReducer(state = defaultState, action) {
    // 参数1:state 就是仓库数据
    // 参数2:action reducer接收的任务
    // 判断接收的任务类型
    // console.log('action', action);
    if (action.type == '+') {
        return {  // 返回新的state 对象用来更新初始的defaultState
            // return 返回的对象辉替换掉原state, 所以需要有保留原数据的操作
            ...state,
            count: state.count + 1
        }
    }
    if (action.type == '-') {
        return {  // 返回新的state 对象用来更新初始的defaultState
            ...state,
            count: state.count - action.payload
        }
    }
    // 如果没有任务类型, 说明不修改, 返回原state
    return state
}



// 步骤4: 创建仓库store
const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 步骤5: 导出仓库
export default store


