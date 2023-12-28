// 
import { legacy_createStore as createStore } from 'redux';
import { fromJS } from 'immutable'
// fromJS() 将js 原生对象转成immutable 对象
// 注意 由于数据变成了immutable 数据结构, 所以不能再使用之前redux 提供的combineReducers
// redux 提供的combineReducers 只能操作原生的js 对象

//redux中使用immutable 不可变数据的优点:
// 在redux中操作state数据的时候, 每次都要返回一个自定义克隆对象, 这样当state 的
// 层级结构比较深的话,非常浪费性能, 因为原先没有改变的数据你也返回了一个新的数据替换了
// 可以使用immutable, 只拷贝变化的数据, 没有变化得state 数据还是使用原内存空间的数据


import { combineReducers } from 'redux-immutable';


// 定义user初始数据
const userState = fromJS({
    count: 100,
    user: {
        name: '张三',
        age: 20
    }
})

// console.log('userState', userState);
const userReducer = (state = userState, action) => {
    if (action.type == '+') {
        // return {
        //     ...state,
        //     count: state.count + action.payload
        // }
        return state.update('count', (val) => val + action.payload)
    }
    if (action.type == 'addAge') {
        // return {
        //     ...state,
        //     user: {
        //         ...state.user,
        //         age: state.user.age + action.payload
        //     }
        // }

        return state.updateIn(['user', 'age'], (val) => val + action.payload)
    }

    return state
}


// 定义shopReducer
const shopState = fromJS({
    goodsArr: ['手机', '笔记本', 'ipad']
})

function shopReducer(state = shopState, action) {
    if (action.type == 'addGood') {
        state.goodsArr.push(action.payload)
        // return {
        //     ...state,
        //     goodsArr: [...state.goodsArr]
        // }
        return state.update('goodsArr', val => val.push(action.payload))
    }
    return state
}


const store = createStore(combineReducers({
    shop1: shopReducer,
    user1: userReducer
}));


export default store
