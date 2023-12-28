// 定义一个高阶组件函数;
import { Component } from "react";
const hoc =()=>{
    return class Newcom extends Component {
        render(){
            console.log('Newcom-props',this.props);
        }
    }
}
export default hoc