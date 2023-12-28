import React from 'react';
import {
    Form,
    Input,
    Button,
    Modal,
    Space,
    Toast
} from 'antd-mobile';
// 导入京东注册导航组件
import Appnavbar from '@/components/Appnavbar';
// 导入接口
import { dosendmsgcodeApi, docheckcodeApi } from '@/api/regist';
import {
    useHistory,
    useLocation
} from 'react-router-dom'
export default function Step1() {
    // 获取上一级路由传递的参数
    const loc = useLocation()
    console.log('loc', loc);
    let phone = loc.state.tel
    const his = useHistory()
    const onFinish = (values) => {
        // his.push('/regist/step3')
        values.tel = phone;
        // console.log(values);
        docheckcodeApi(values).then(res => {
            Toast.show({
                content: res.data.message,
                duration: 1000,
                afterClose: () => {
                    if (res.data.code == 200) {
                        his.push({
                            pathname: '/regist/step3',
                            state: {
                                tel: phone
                            }
                        })
                    }
                }
            })
        })
    }
    // 验证手机号
    const checkPhone = (_, value) => {
        if (/^\d{5}$/.test(value)) {
            return Promise.resolve()
        }
        return Promise.reject(new Error('验证码输入有误!'))
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

                <Space style={{
                    position: 'relative'
                }}>
                    <Form.Item
                        name='telcode'
                        label='短信验证码'
                        rules={[{
                            validator: checkPhone
                        }]}
                    >
                        <Input onChange={console.log} placeholder='请输入验证码' />
                    </Form.Item>
                    <Form.Item style={{
                        position: 'absolute',
                        right: '5px',
                    }}>
                        <Button size='small' color='danger' onClick={(e) => {
                            let ele = e.target
                            // 点击发送验证码
                            let count = 10;
                            ele.disabled = true
                            let timer = setInterval(() => {
                                count--;
                                ele.innerHTML = `倒计时${count}s`;
                                if (count <= 0) {
                                    clearInterval(timer);
                                    ele.innerHTML = `发送验证码`;
                                    ele.disabled = false
                                }
                            }, 1000)
                            // 发送验证码接口
                            dosendmsgcodeApi({
                                tel: phone
                            }).then(res => {
                                // console.log(res)
                                Toast.show({
                                    content: res.data.message,
                                    duration: 1000,
                                    // afterClose: () => {
                                    //     // 在提示框关闭后执行的函数
                                    // },
                                })

                            })


                        }}>发送验证码</Button>
                    </Form.Item>
                </Space>

            </Form>
        </div>
    )
}
