import React from 'react'
import {
    Form,
    Input,
    Button,
    Toast
} from 'antd-mobile';
// 引入登录接口
import { loginApi } from '@/api/login'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export default function Loginform() {
    const state = useSelector(state => state.userid)
    // console.log('state', state);
    const dispatch = useDispatch();
    const his = useHistory();
    const onFinish = (values) => {
        // console.log('values', values);
        // 调用登录接口;
        loginApi(values).then(res => {
            // console.log(res);
            Toast.show({
                content: res.data.message,
                duration: 1000,
                afterClose() {
                    if (res.data.code == 200) {
                        // 01: 将token 存到本地
                        localStorage.setItem('token', res.data.data.token)
                        // 02: 将用户信息存到redux 中
                        dispatch({
                            type: 'updateuser',
                            payload: res.data.data.userid
                        })
                        // 03: 跳转首页
                        his.push('/home')
                    }
                }
            })
        })

    }
    // 验证登录名
    const checkLoginname = (_, value) => {
        // console.log('_', _);
        // console.log('value', value);  就是输入的内容
        if (/^1[3-9]\d{9}$/.test(value)) {
            return Promise.resolve()
        }
        return Promise.reject(new Error('手机号输入有误!'))
    }
    //验证密码
    const checkPasswprd = (_, value) => {
        if (/^\w{6}$/.test(value)) {
            return Promise.resolve()
        }
        return Promise.reject(new Error('密码输入有误!'))
    }

    return (
        <div className='loginbox'>
            <Form
                layout='horizontal'
                onFinish={onFinish}
                footer={
                    <Button block type='submit' color='primary' size='large'>
                        提交
                    </Button>
                }
            >
                <Form.Item
                    name='loginname'
                    label='登录名'
                    rules={[{
                        validator: checkLoginname
                    }]}
                >
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item
                    name='password'
                    label='密码'
                    rules={[{
                        validator: checkPasswprd
                    }]}
                >
                    <Input placeholder='请输入密码' />
                </Form.Item>
            </Form>
        </div>
    )
}
