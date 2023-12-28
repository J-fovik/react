// 定义shop模块的所有的任务 (同步和异步任务)
import axios from 'axios';
// 同步任务:
export function addNumAction(payload) {
    return {
        type: 'addnum',
        payload: payload
    }
}

// 异步任务
export function addNumActionAsync(payload) {
    return (dispatch) => {
        // dispatch 相当于 store2.dispatch
        // 2s 后派发一个同步任务,去修改store中的数据
        setTimeout(() => {
            dispatch(addNumAction(payload))
        }, 2000)
    }
}

// 同步任务: 给学校数组赋值
export function initSchoolList(payload) {
    return {
        type: 'initschoollist',
        payload: payload
    }
}

// 异步任务: 请求学校列表的任务
export function initSchoolListAsync() {
    return (dispatch) => {
        // 在异步任务重派发同步任务修改学校列表
        axios.get('https://api.i-lynn.cn/college').then(res => {
            dispatch(initSchoolList(res.data.data.list1))
        })
    }
}

// 同步任务: 添加商品
export function addgoodsAction(payload) {
    return {
        type: 'addgood',
        payload
    }
}