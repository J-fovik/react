import React, { Component } from 'react';
// 由于Mylink 组件并不是通过路由跳转的组件, 而是直接就显示的组件, 和路由没关系
// 所以 该组件上没有路由三剑客, 解决方式: 使用 widthRouter组件包裹处理
import { withRouter, Route } from 'react-router-dom';
import Pts from 'prop-types';
class Mylink extends Component {
    //  设置属性约束
    static propTypes = {
        to: Pts.string.isRequired,
        tag: Pts.string
    }
    // 设置属性默认值
    static defaultProps = {
        tag: 'a'
    }

    render() {
        // console.log(this);
        const url = this.props.to;
        const Tag = this.props.tag;
        // console.log('url', url);
        // 定义样式
        const style = {

        }
        return (
            <Route path={url} children={(props) => {
                //  console.log('props', props)
                // 只有当前导航匹配当前的路由. 那props中的match才不为null,否则都为null
                if (props.match) {
                    style.background = 'red'
                }
                return <Tag style={style} onClick={() => {
                    // console.log('this', this)
                    this.props.history.push(url)
                }}>{this.props.children}</Tag>
            }} ></Route>

        )
    }
}

export default withRouter(Mylink)
