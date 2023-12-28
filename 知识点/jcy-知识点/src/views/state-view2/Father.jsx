import React, { Component } from 'react';

class Father extends Component {
    state = {
        count: 100,
        num:99
    }
    render() {
        return (
            <div>
                <p>count:{this.state.count}</p>
                <p>num:{this.state.num}</p>
                <p>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1
                        })
                        this.setState({
                            count:this.state.count+1
                        })
                        this.setState({
                            count:this.state.count+1
                        })
                    }}>使用对象形式修改</button>
                    <button onClick={()=>{
                        this.setState((state)=>({
                            num: state.num + 1 
                        }))
                        this.setState((state)=>({
                            num: state.num + 1 
                        }))
                        this.setState((state)=>({
                            num: state.num + 1 
                        }))
                    }}>使用函数形式修改</button>
                </p>
            </div>
        );
    }
}

export default Father;
