import React from 'react'
import { Button, Form, Input, message } from 'antd';
import {
    UserOutlined,
    LockOutlined
} from '@ant-design/icons';

import { loginApi } from '@/api/login';
import store from 'store'
// 导入已经定义了类型的dispatch 
import { useAppDispatch } from '@/store/hooks/index'
// 导入对应的rtk 方法去修改store中的数据
import {
    updateAdminName,
    updateRole,
    updateCheckedKeys,
    updateToken
} from '@/store/modules/userslice'
import { useNavigate } from 'react-router-dom'

type Props = {}

export default function LoginForm({ }: Props) {
    // 配置提示框
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onFinish = (values: any) => {
        //console.log('Success:', values);
        loginApi(values).then((res: any) => {
            console.log(res);
            // 01: 
            store.set('token', res.data.token);
            store.set('adminname', res.data.adminname);
            store.set('role', res.data.role)
            store.set('checkedkeys', res.data.checkedkeys)
            // 02: 将用户信息存到rtk 中
            dispatch(updateToken(res.data.token))
            dispatch(updateAdminName(res.data.adminname))
            dispatch(updateRole(res.data.role))
            dispatch(updateCheckedKeys(res.data.checkedkeys))
            // 03:提示
            if (res.code == 200) {
                messageApi.open({
                    type: 'success',
                    content: res.message,
                    duration: 1,
                    onClose() {
                        // 04:跳转页面到首页
                        navigate('/')
                    }
                })
            } else {
                messageApi.open({
                    type: 'error',
                    content: res.message,
                    duration: 1
                })
            }
        })
    };

    return (
        <>
            {contextHolder}
            <Form
                name="basic"
                style={{
                    width: 400,
                    background: '#fff',
                    padding: '30px',
                    boxSizing: 'border-box',
                    borderRadius: '10px'

                }}
                initialValues={{ adminname: 'admin', password: '123456' }}
                onFinish={onFinish}
                autoComplete="off"

            >
                <Form.Item
                    name="adminname"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        size='large'
                        placeholder='请输入用户名' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                        size='large' placeholder='请输入密码' />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" size='large' htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}