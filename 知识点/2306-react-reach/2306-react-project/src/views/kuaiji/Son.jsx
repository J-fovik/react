import React, { Component } from 'react'
import Grandson from './Grandson'
// 使用静态属性消费数据

// 后代组件消费数据的另一种方式:
// 使用静态属性contextType , 当将contetObj 赋值给静态属性 contextType时, react内部
// 会将contextObj 中value对应的数据映射到当前组件实例的context属性上, 
// 这样就可以通过this,context获取到祖先组件(Provider组件)提供的数据

import contextObj from './context';
export default class Son extends Component {
    static contextType = contextObj;
    render() {
        // console.log('this-son', this);
        return (
            <div>
                <p>son</p>
                <p>{this.context.name}--{this.context.age}</p>
                <Grandson></Grandson>
            </div>
        )
    }


}
