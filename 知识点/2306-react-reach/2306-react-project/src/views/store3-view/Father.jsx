import React, { Component } from 'react'

// 在类组件中, 要想获取全局的store 数据,需要借助react-redux 一个方法 connect 高阶组件
import { connect } from 'react-redux';
// 导入 user模块中的action
import {
    addAgeAction,
    addCountAction,
    jianCountAction
} from '../../store3/actions/userAction'
class Father extends Component {
    render() {
        const { user, shop } = this.props
        return (
            <div>
                {/* user模块数据 */}
                {/* count */}
                <p>store中的count: {user.count}</p>
                <p>
                    <button onClick={() => {
                        this.props.addCountFn()
                    }}>+1</button>
                    <button onClick={() => {
                        this.props.jianCountFn(20)
                    }}>-20</button>
                </p>
                {/* userinfo */}
                <p>
                    store中的userinfo: {user.userinfo.name}--{user.userinfo.age}
                </p>
                <p><button onClick={() => {
                    this.props.addAgeFn(100)
                }}>age+100</button></p>
            </div>
        )
    }
}


// 定义方法mapStatetoProps 方法  
// 该方法的作用就是将store仓库中的数据映射到当前组件自身实例的props 属性上
function mapStateToProps(state) {
    return state
}

// 定义一个方法将操作仓库数据的方法映射到组件实例的props 属性上
// 将 addCountFn  和jianCountFn 和 addAgeFn 映射到当前组件自身的props 属性上
function mapActionToProps(dispatch) {
    return {
        addCountFn() {
            dispatch(addCountAction())
        },
        jianCountFn(payload) {
            dispatch(jianCountAction(payload))
        },
        addAgeFn(payload) {
            dispatch(addAgeAction(payload))
        }
    }
}


export default connect(mapStateToProps, mapActionToProps)(Father)
