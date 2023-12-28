import React, { Component } from 'react'
import store from '../../store1';
// 导入仓库store1
import store1 from '../../store1';

console.log('store1', store1);
console.log('store1', store1.getState());
export default class Father extends Component {
    constructor() {
        super()
        this.state = {
            ...store1.getState()
        }
        // 重新订阅
        store1.subscribe(() => {
            this.setState({
                ...store1.getState()
            })
        })
    }
    render() {
        const { user, shop } = this.state
        return (
            <div>
                {/* user模块数据 */}
                <p>{user.userinfo.name}--{user.userinfo.age}</p>
                <p>
                    <button onClick={() => {
                        store.dispatch({
                            type: 'addage',
                            payload: 10
                        })
                    }}>age++</button>
                </p>
                {/* 商品模块数据 */}

            </div>
        )
    }

}
