import React, { Component } from 'react';
import axios from 'axios'
import Son1 from './Son1';
import Son2 from './Son2';
class Father extends Component {
    constructor(){
        super()
        // console.log('constructor');
    }
    state = {
        count: 100,
        schoolList: [],
        flag: true // 是否渲染组件
    }
    render() {
        return (
            <div>
                <p onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>count:{this.state.count}</p>
                <ul>
                    {
                        this.state.schoolList.map((item,index)=><li key={item.id}>{item.school_name}</li>)
                    }
                </ul>
                {/* 显示子组件 */}
                {/* <Son1></Son1> */}
                {
                    this.state.flag?<Son1></Son1>:<Son2></Son2>
                    
                }
                <p>
                    <button onClick={()=>{
                        this.setState({
                            flag: !this.state.flag
                        })
                    }}>显示/隐藏</button>
                </p>
            </div>
        );
    }
    componentDidMount(){
        // console.log('componentDidMount');
        // axios.get('https://api.i-lynn.cn/college').then(res=>{
        //     // console.log(res);
        //     this.setState({
        //         schoolList:res.data.data.list1
        //     })
        // })
    }
    componentDidUpdate() {
        // console.log('componentDidUpdate')
    }
}

export default Father;
