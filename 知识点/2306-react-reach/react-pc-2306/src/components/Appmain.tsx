import React from 'react'
import { Layout, theme } from 'antd';
// 导入二级组件
import Appcontent from '@/router/Index'
const { Content } = Layout;
type Props = {}

export default function Appmain({ }: Props) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
            }}
        >
            {/* 要显示二级的组件 */}
            <Appcontent></Appcontent>
        </Content>
    )
}