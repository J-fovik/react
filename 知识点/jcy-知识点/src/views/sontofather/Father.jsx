import React, { Component , createRef} from 'react';
import Son from './Son';
class Father extends Component {
    ref1 = createRef()
    
    
    state= {
        arr:[]
    }
   
    render() {
        return (
            <div>
                {/* 使用子组件 */}
                {/* <Son ref= {this.ref1}></Son> */}

                {/* 遍历数组 */}
                <ul>
                    {
                        this.state.arr.map((item,index)=><li key={index}>{item}</li>)
                    }
                </ul>
                {/* 方式三 */}
                <Son getdatafromsonFn= {
                    this.getdatafromsonFn
                }></Son>
            </div>
        );
    }
  
    componentDidMount(){
        // console.log(this.state)
        //获得子组件的实例
        // console.log(this);
        // console.log(this.ref1);
        // console.log(this.ref1.current);
        // console.log(this.ref1.current.givedatatofather());
        // // console.log(this.ref1.current.state.nameArr);
        // this.setState({
        //     arr:this.ref1.current.state.nameArr
        // })
        // this.setState({
        //     arr:this.ref1.current.givedatatofather()
        // })
        // this.state.arr.push.data
       

}
getdatafromsonFn= (data)=> {
    console.log('data', data);
    this.setState({
        arr:data
    })
  

}

}

export default Father;
