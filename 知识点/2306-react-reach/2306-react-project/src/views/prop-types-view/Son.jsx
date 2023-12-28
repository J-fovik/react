import React, { Component } from 'react'
// 导入类型包
import Pts from 'prop-types';
// console.log('Pts', Pts);
export default class Son extends Component {
    // 通过静态属性约束方式1:
    // static propTypes = {
    //     nameArr: Pts.array
    // }

    // 通过静态属性设置默认值方式1;
    // static defaultProps = {
    //     nameArr: ['漩涡鸣人', '宇智波-佐助', "波风水门"]
    // }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.nameArr.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
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
