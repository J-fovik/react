import React, { Component } from 'react';

class Father extends Component {
    constructor(){
        super()
        // // console.log(this);
        // this.state={
        //     num:100,
        //     nameArr:['姚明','易建联','科比','詹姆斯']
        // }
    }
    state = {
        num: 100,
        nameArr: ['姚明', '易建联', '郭艾伦', '胡卫东'],
        user: {
            name: '李楠',
            age: 50
        },
        a:['姚明', '易建联', '郭艾伦', '胡卫东','科比','詹姆斯']
    }
    addPalyerFn= ()=>{
        // this.state.nameArr.push('小明')
        this.setState({
            nameArr: [...this.state.nameArr, '陈江华']

        })
    }

    add(m,n,e){
       console.log(e); 
       console.log(m); 
       console.log(n); 
       this.setState({
        a: [...this.state.a, '陈江华']
       

    })
      
    }
    render() {
        return (
            <div>
                <p onClick={()=>{
                    // console.log(this);
                    //对象形式
                    this.setState({
                        num:this.state.num +1
                    })
                    //函数形式
                    // this.setState((state)=>({
                    //     num:state.num + 1
                    // }))
                }}>num:{this.state.num}</p>
                {/* 遍历数组 */}
                <ul>
                    {
                        this.state.nameArr.map((item,index)=><li key={index}>{item}</li>)
                    }
                    <button onClick={this.addPalyerFn}>添加成员</button>
                </ul>
                {/* 修改对象 */}
                <p onClick={()=>{
                    this.setState({
                        user:{
                            ...this.state.user,age:this.state.user.age+1
                        }
                    })
                    console.log(this.state.user);
                    // this.state.user.age=this.state.user.age+1
                    // this.setState({
                    //     user:this.state.user
                       
                    // })
                }}>{this.state.user.name}--{this.state.user.age}</p>



                <ul>
                    {
                        this.state.a.map((item,index)=><li key={index}>{item}</li>)
                    }
                    <button onClick={(e)=>{this.add(100,200,e)}}>a:{this.state.a}</button>
                </ul>
            </div>
        );
    }
}

export default Father;
