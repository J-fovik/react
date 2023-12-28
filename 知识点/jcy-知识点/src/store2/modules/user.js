
// 导入types 这个标识符管理文件
import types from "../types"

// 定义的user模块相关的数据
const userState = {
    count: 0, // 就是仓库中的数据 
    userinfo: {
        name: '科比',
        age: 30
    }
}


// 定义操作user模块数据的reducer函数
function userReducer(state = userState, action) {
    // 参数1:state 就是仓库数据
    // 参数2:action reducer接收的任务
    // 判断接收的任务类型
    // console.log('action', action);
    if (action.type == types.a) {
        return {  // 返回新的state 对象用来更新初始的defaultState
            // return 返回的对象辉替换掉原state, 所以需要有保留原数据的操作
            ...state,
            count: state.count + 1
        }
    }
    if (action.type == types.b) {
        return {  // 返回新的state 对象用来更新初始的defaultState
            ...state,
            count: state.count - action.payload
        }
    }

    if (action.type == types.c) {
        return {
            ...state,
            userinfo: {
                ...state.userinfo,
                age: state.userinfo.age + action.payload
            }
        }
    }
    // 如果没有任务类型, 说明不修改, 返回原state
    return state
}

export default userReducer