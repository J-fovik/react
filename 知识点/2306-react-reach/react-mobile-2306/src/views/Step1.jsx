import React from 'react'
import {
    Form,
    Input,
    Button,
    Modal
} from 'antd-mobile';
// 导入京东注册导航组件
import Appnavbar from '@/components/Appnavbar';
// 导入接口
import { docheckphoneApi } from '@/api/regist';
import { useHistory } from 'react-router-dom'
export default function Step1() {
    const his = useHistory()
    const onFinish = (values) => {
        // console.log('values', values);
        // 调用注册第一步接口;
        docheckphoneApi(values).then(res => {
            // console.log('res', res);
            // 根据不同的返回内容做提示
            if (res.data.code == '200') {
                //  注册成功,到下一步
                Modal.confirm({
                    content: `将向手机号${values.tel}发送验证码!`,
                    onConfirm: () => {
                        // await sleep(1000)
                        his.push({
                            pathname: '/regist/step2',
                            state: {
                                tel: values.tel
                            }
                        })
                    }
                })
            } else {
                // 已被注册
                Modal.confirm({
                    content: '已注册,请直接登录',
                    onConfirm: () => {
                        // await sleep(1000)
                        his.push("/login")
                    },
                })
            }
        })
    }
    // 验证手机号
    const checkPhone = (_, value) => {
        if (/^1[3-9]\d{9}$/.test(value)) {
            return Promise.resolve()
        }
        return Promise.reject(new Error('手机号输入有误!'))
    }
    return (
        <div>
            {/* 导航组件 */}
            <Appnavbar isshowright={false}>京东注册</Appnavbar>
            {/* 表单组件 */}
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
                    name='tel'
                    label='手机号'
                    rules={[{
                        validator: checkPhone
                    }]}
                >
                    <Input onChange={console.log} placeholder='请输入手机号' />
                </Form.Item>
            </Form>
        </div>
    )
}
