// 02: 
const userState = {
    userid: '',
    count: 100,
    cartlist: [] //  购物车数据
}

// 03: 
const userReducer = (state = userState, action) => {
    if (action.type == 'updateuser') {
        return {
            ...state,
            userid: action.payload
        }
    };
    if (action.type == 'updateCartList') {
        return {
            ...state,
            cartlist: action.payload
        }
    }

    return state
}

export default userReducer