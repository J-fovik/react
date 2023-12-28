// 定义所有的action
// 导入购物车列表数据接口
import { getCartListApi } from '@/api/detail'
// useSelector 是一个hook, 所以有限制条件, 不能在函数组件外使用
// 该文件useAction.js 不是一个函数组件, 所以可以直接引入 store, 通过改哦store.getState()获取
// import { useSelector } from 'react-redux'

// 引入store 仓库
import store from '@/store'

console.log('store', store);
// const state = store.getState();
// console.log('state', state);
const { userid } = store.getState();
// 同步任务
export function updateCartListAction(payload) {
    return {
        type: 'updateCartList',
        payload: payload
    }
}


// 异步任务
export function updateCartListActionAsync() {
    return (dispatch) => {
        getCartListApi({
            userid: userid
        }).then(res => {
            console.log('res-cartlist', res);
            dispatch(updateCartListAction(res.data.data))
        })
    }
}