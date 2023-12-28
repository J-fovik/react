// 定义一个高阶组件函数;
import { Component } from "react";
const hoc =(Com)=>{
    return class Newcom extends Component {
        render(){
            return <div style={{
                background: 'red',
                fontSize: '30px'
            }}>

                {/* 使用形参组件 */}
                <Com></Com>
            </div>
        }
    }
}
export default hoc