import React, { Component } from 'react';
import store1 from '../../store1'

console.log(store1);
console.log(store1.getState());
class Father extends Component {
    state= {
        ...store1.getState()
    }
    render() {
        const {user,shop}= this.state
        return (
            <div>
                {/* user模块数据 */}
                <p>{user.userinfo.name}-{user.userinfo.age}</p>
                <p>
                    <button onClick={() => {
                        store1.dispatch({
                            type: 'addage',
                            payload: 10
                        })
                    }}>age++</button>
                </p>
                <p>{shop.num}</p>
                <p>
                    <button onClick={() => {
                        store1.dispatch({
                            type: 'addnum',
                            payload: 10
                        })
                    }}>num++</button>
                </p>
                
            </div>
        );
    }
    componentDidMount(){
        // 重新订阅
        store1.subscribe(() => {
            this.setState({
                ...store1.getState()
            })
        })
    }
}

export default Father;
