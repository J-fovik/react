import React from 'react'
import { Space, SpinLoading } from 'antd-mobile'
export default function Loading() {
    return (
        <Space
            style={{
                width: '100%',
                height: '100%'
            }}
            align='center'
            justify='center'
        >
            <SpinLoading style={{ '--size': '48px' }} />
        </Space>
    )
}
