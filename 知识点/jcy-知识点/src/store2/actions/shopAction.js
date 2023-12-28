// 定义shop模块的所有任务（同步和异步）
import axios from "axios";
//同步任务：
export function addNumAction(payload){
    return{
        type:'addnum',
        payload:payload
    }
}

//异步任务
export function addNumActionAsync(payload){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addNumAction(payload))
        },2000)
    }
}

// 同步任务：给学校数组赋值
export function initSchoolList(payload){
    return {
        type:'initschoollist',
        payload:payload
    }
}
// 异步任务：请求学校列表的任务
export function initSchoolListAsync(){
    return (dispatch)=>{
        // 在异步任务派发同步任务修改学校列表
        axios.get('https://api.i-lynn.cn/college').then(res=>{
// console.log(res);
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
// 异步任务: 添加商品
export function addgoodsActionAsync(payload){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addgoodsAction(payload))
        },2000)
    }
}