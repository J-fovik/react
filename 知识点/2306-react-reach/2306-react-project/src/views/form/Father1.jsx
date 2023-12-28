import React, { Component, createRef } from 'react';
// 非受控组件 其实就是之前学的dom 操作;
// 非受控组件通过操作远程dom 获取表单元素的值,进而可以提交表单;
// defaultChecked/defaultValue + ref/原生操作dom;


// react 获取dom 节点的方式?
// 01: 原生操作dom
// 02: 使用createRef 获取引用对象,进而获取dom 元素
// console.log('createRef', createRef);

export default class Fater1 extends Component {
    constructor() {
        super();
        // 创建一个ref 引用对象
        this.ref1 = createRef();
        // console.log('this.ref1', this.ref1);
        this.ref2 = createRef()
        this.ref3 = createRef()
        this.ref4 = createRef()
    };
    state = {
        username: '刘备',
        sex: '男',
        selected: '圣罗兰',
        checkboxArr: ['面试']
    };
    render() {
        const { username, sex, selected, checkboxArr } = this.state
        return (
            <div>
                {/*输入框 */}
                <input ref={this.ref1} type='text' id='username' defaultValue={username} />
                {/* 单选框 */}
                <p>
                    <input type='radio' ref={this.ref2} defaultChecked={sex == '男'} name='sex' value='男' /> 男
                    <input type='radio' ref={this.ref3} defaultChecked={sex == '女'} name='sex' value='女' /> 女
                </p>
                {/* 复选框 */}
                <p ref={this.ref4}>
                    <input type='checkbox' defaultChecked={checkboxArr.includes('面试')} value='面试' /> 面试
                    <input type='checkbox' defaultChecked={checkboxArr.includes('上班')} value='上班' /> 上班
                    <input type='checkbox' defaultChecked={checkboxArr.includes('复习')} value='复习' /> 复习
                </p>
                <p>
                    <button onClick={() => {
                        // 获取表单中所有值, 调用接口就可以
                        // console.log(
                        //     document.querySelector('#username').value
                        // )
                        // console.log(this.ref1.current.value);
                        // console.log(this.ref2.current)
                        // console.log(this.ref3.current)

                        // if (this.ref2.current.checked) {
                        //     console.log('男')
                        // } else {
                        //     console.log('女')
                        // }

                        // 将类数组转成数组形式
                        // console.log([...this.ref4.current.children])
                        // console.log(Array.from(this.ref4.current.children))
                        let checkedArr = Array.from(this.ref4.current.children).map(item => item.checked ? item.value : null)
                        console.log(checkedArr.filter(i => i))
                    }}>提交</button>
                </p>
            </div>
        )
    }
}
