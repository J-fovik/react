import React from 'react'
//引入样式文件
import '@/assets/css/login.scss';
// 引入登录表单组件
import LoginForm from '@/components/loginForm'
type Props = {}

export default function Login({ }: Props) {
    return (
        <div className='loginBox'>
            {/* 表单登录组件 */}
            <LoginForm></LoginForm>
        </div>
    )
}