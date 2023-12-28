import types from '../types'
const userState = {
    count: 0,
    userinfo:{
        name:'科比',
        age:30
    }
}
// 定义操作user模板数据的reducer函数
function userReducer(state = userState, action){
    if(action.type == types.a) {
        return {
            ...state,
            count:state.count +1
        }
    }
    if(action.type == types.b) {
        return {
            ...state,
            count: state.count - action.payload
        }
    }
    if(action.type == types.c) {
        return {
            ...state,
            userinfo: {
                ...state.userinfo,
                age:state.userinfo.age+action.payload
            }
        }
    }
    return state
}
export default userReducer