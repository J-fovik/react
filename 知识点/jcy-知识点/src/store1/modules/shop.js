import types from "../types";

// 定义购物车模块数据
const shopState = {
    num: 100,
    goodsArr:[
        {
            id:1,
            proname:'防晒霜',
            price:999
        },
        {
            id:2,
            proname:'粉底液',
            price: 399
        },
        {
            id: 3,
            proname: '口红',
            price: 599
        }
    ]
    
}

// 定义购物车模块数据操作的reducer方法
function shopReducer(state = shopState,action){
    if (action.type == types.d) {
        return {
            ...state,
            num: state.num + action.payload
        }
    }
    if (action.type == types.e) {
        state.goodsArr.push(action.payload)
        return {
            ...state,
            goodsArr: state.goodsArr
        }
    }

    return state
}
export default shopReducer