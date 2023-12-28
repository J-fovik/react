import React, { Component } from 'react';

class Father extends Component {
    state = {
        username: '刘备',
        sex: '男',
        selected: '圣罗兰',
        checkboxArr: ['面试']
    }
    render() {
        const {username, sex, selected,checkboxArr } = this.state
        return (
            <div>
                {/* 输入框 */}
                <p><input type="text" value={username} onChange={(e)=>{
                    this.editFn('username',e)
                }} /></p>
                {/* 单选框 */}
                <p>
                    <input type='radio' value='男' name='sex' checked={sex=='男'} onChange={(e) => {
                        this.editFn('sex', e);
                    }} /> 男
                    <input type='radio' value='女' name='sex' checked={sex=='女'} onChange={(e) => {
                        this.editFn('sex', e);
                    }} /> 女
                </p>
                {/* 下拉框 */}
                <select value={selected} onChange={(e)=>{
                    this.editFn('selected',e)
                }}>
                    <option value="迪奥口红">迪奥口红</option>
                    <option value="纪梵希">纪梵希</option>
                    <option value="阿玛尼">阿玛尼</option>
                    <option value="雅诗兰黛">雅诗兰黛</option>
                    <option value="MAC">MAC</option>
                    <option value="圣罗兰">圣罗兰</option>
                </select>
                {/* 复选框 */}
                <p>
                    <input type='checkbox' value='面试' checked={checkboxArr.includes('面试')} onChange={(e) => {
                        this.editFn('checkboxArr', e)
                    }} />面试
                    <input type='checkbox' value='上班' checked={checkboxArr.includes('上班')} onChange={(e) => {
                        this.editFn('checkboxArr', e)
                    }} />上班
                    <input type='checkbox' value='复习' checked={checkboxArr.includes('复习')} onChange={(e) => {
                        this.editFn('checkboxArr', e)
                    }} />复习
                </p>
                <p>
                    <button onClick={() => {
                        // 获取表单中的所有的内容
                        console.log(this.state)
                    }}>提交表单</button>
                </p>
            </div>
        );
    }
    editFn = (key, e)=>{
        // console.log(e);
        console.log(e.target.value);
        console.log(key);
        if(key == 'checkboxArr'){
            if(this.state.checkboxArr.includes(e.target.value)){
                let newArr = this.state.checkboxArr.filter((item)=>{
                    return item !=e.target.value
                })
                this.setState({
                    checkboxArr:newArr
                })
            }else{
                //  点击前, 该项不选中, 需要设置为选中
                 this.state.checkboxArr.push(e.target.value)
                 this.setState({
                     checkboxArr: this.state.checkboxArr
                 })
            }
        }else{
            this.setState({
                [key]:e.target.value
            })
        }
        // this.setState({
        //             [key]:e.target.value
        //         })
    }
}

export default Father;
