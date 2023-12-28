import React from 'react'
import Appnavbar from '@/components/Appnavbar';
import {
    Form,
    Input,
    Button,
    Modal,
    Space,
    Toast
} from 'antd-mobile';
import { useLocation, useHistory } from 'react-router-dom';
import { dofinishregisterApi } from '@/api/regist';

export default function Step3() {
    const his = useHistory()
    const loc = useLocation()
    // console.log('loc', loc);
    const phone = loc.state.tel
    const passwordCheck = (_, value) => {
        if (/^\w{6}$/.test(value)) {
            return Promise.resolve()
        }
        return Promise.reject(new Error('密码输入有误!'))
    }

    const onFinish = (values) => {
        values.tel = phone
        // console.log(values);
        // 调用注册接口
        dofinishregisterApi(values).then(res => {
            console.log(res);
            Toast.show({
                content: res.data.message,
                duration: 1000,
                afterClose: () => {
                    if (res.data.code == 200) {
                        // 跳转到登录页
                        his.push('/login')
                    }
                }
            })
        })

    }
    return (
        <div>
            <Appnavbar>京东注册</Appnavbar>
            {/*表单部分 */}
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
                    name='password'
                    label='密码'
                    rules={[{
                        validator: passwordCheck
                    }]}
                >
                    <Input onChange={console.log} placeholder='请输入密码' />
                </Form.Item>
            </Form>
        </div>
    )
}
