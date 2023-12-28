import React, { Component } from 'react';

class Father extends Component {
    constructor(){
        super()
        // console.log(this);
        this.handClickFn1= this.handClickFn1.bind(this,100,200)
    }
    handClickFn1(num,n,e){
        console.log(num,n,e);
    }
    handClickFn2(num,n,e){
        console.log(num,n,e);
    }
    handClickFn3(num,n,e){
        console.log(num,n,e);
    }
    handClickFn4=(e)=>{
        console.log(e);
    }
    render() {
        return (
            <div>
                {/* 构造器中绑定this */}
                <p onClick={this.handClickFn1}>事件绑定1</p>
                {/* 行内绑定 */}
                <p onClick={this.handClickFn2.bind(this,99,22)}>事件绑定2</p>
                <p onClick={(e)=>{this.handClickFn3(99,30,e)}}>事件绑定3</p>
                <p onClick={this.handClickFn4}>事件绑定4</p>

            </div>
        );
    }
}

export default Father;
