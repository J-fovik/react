import React from 'react'
// 引入头部导航
import Appnavbar from '@/components/Appnavbar';
// 引入登录表单组件
import Loginform from '@/components/Loginform';
import { Card } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons';
import { useHistory } from 'react-router-dom'
export default function Login() {
    const his = useHistory();
    const onHeaderClick = () => {
        console.log('onHeaderClick');
        // 跳转到注册页的第一步
        his.push('/regist/step1')
    }

    return (
        <div style={
            {
                background: '#f6f6f6',
                width: '100%',
                height: '100%'
            }
        }>
            {/* 头部导航 */}
            <Appnavbar isshowright={false}>京东登录</Appnavbar>
            {/* 登录表单 */}
            <Loginform></Loginform>
            {/* 去注册 */}
            <Card
                title={
                    <div style={{ fontWeight: 'normal' }}>
                        快速注册
                    </div>
                }
                extra={<RightOutline />}
                onHeaderClick={onHeaderClick}
                style={{ borderRadius: '16px' }}
            >
            </Card>
        </div>
    )
}
