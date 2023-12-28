import React, { Component } from 'react';
import Pts from 'prop-types'
console.log('Pts', Pts);

class Son extends Component {
    // // 通过静态属性约束方式1：
    // static propTypes = {
    //     nameArr:Pts.array
    // }
    // static defaultProps = {
    //     nameArr:['漩涡鸣人', '宇智波-佐助', "波风水门"]
    // }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.nameArr.map((item,index)=><li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}
// 通过静态属性约束方式2:
Son.propTypes = {
    nameArr: Pts.array.isRequired
}
// 设置默认值方式2
Son.defaultProps = {
    nameArr: ['漩涡鸣人', '宇智波-佐助', "波风水门"]
}

export default Son;
