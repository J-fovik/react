import React, { Component } from 'react';
// 导入仓库到当前页面
import store from '../../store';
console.log('store', store);
// console.log('store.getState()', store.getState());
class Father extends Component {
    state= {
        mag:'hello',
        ...store.getState()
    }
    render() {
        return ( 
            <div>
                 <p>store中count:{this.state.count}</p>
                <p>
                    <button onClick={() => {
                        store.dispatch({
                            type: '+',
                        })
                    }}>count+1</button>
                    <button onClick={() => {
                        store.dispatch({
                            type: '-',
                            payload: 10
                        })
                    }}>count-10</button>
                </p>
            </div>
        );
    }
    componentDidMount(){
        // 监听store 仓库数据的变化, 进而修改当前页面的数据
        store.subscribe(() => {
            // console.log('监听store的变化');
            // console.log(store.getState());  //{count:1}
            this.setState({
                // ...store.getState()
                count: store.getState().count
            })
        })
    }
}

export default Father;
