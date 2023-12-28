import React, { Component,createRef } from 'react';
import Son from './Son';
class Father extends Component {
    ref1 = createRef()
    state= {
        user: {
            name: '孙仲谋',
            age:20
        }
    }
    ref1 = createRef()
    render() {
        const {user } = this.state
        return (
            <div>
                {/* 使用子组件 */}
                {/* 第一种方式；父传子 */}
                {/* <Son user={user}></Son> */}
                {/* 第二种方式 传递函数方法 */}
                {/* <Son tosonFn={this.tosonFn}></Son> */}
                {/* 第三种方式  */}
                <Son ref= {this.ref1}></Son>
            </div>
        );
    }
    // tosonFn=()=>{
    //     console.log('this',this);
    //     return this.state.user
    // }
    componentDidMount(){
        console.log('this.ref1',this.ref1);
        // console.log(this.ref1.current);
        this.ref1.current.aaa(this.state.user)  
    }
}

export default Father;
