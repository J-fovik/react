// 定义操作user模块中的所有的action任务

//同步任务：count+1
export function addCountAction(){
    return {type:'addcount'}
}
// 同步任务: count - payload
export function jianCountAction(payload) {
    return {
        type: 'jiancount',
        payload
    }
}

// 同步任务: age+payload
export function addAgeAction(payload) {
    return {
        type: 'addage',
        payload
    }
}