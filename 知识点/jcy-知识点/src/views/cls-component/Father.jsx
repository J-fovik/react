import { Component } from 'react';
// import  Son  from "./Son";
class Father extends Component {
    constructor(){
        super()
        this.handClickFn1 = this.handClickFn1.bind(this,100)
    }
    handClickFn1(m,e){
        console.log(this);//  此时的this指向当前组价的实例对象
        console.log(m);
        console.log(e); // 事件对象
    }
    handClickFn2(m,e){
        console.log(this);//  此时的this指向当前组价的实例对象
        console.log(m);
        console.log(e); // 事件对象
    }
    render() {
        const user = {
            username:'小明',
            age: 18
        }
        return (
            <div>
                <p>我是类组件</p>
                {/*使用son子组件*/}
                {/* <Son user={user}></Son> */}
                <button onClick={this.handClickFn1}>事件绑定1</button>
                {/* <button onClick={}>事件绑定2</button> */}
                {/* <button onClick={}>事件绑定3</button>
                <button onClick={}>事件绑定4</button> */}
            </div>
        );
    }
}

export default Father;
