import React from 'react'
import { useState } from 'react';
import Appmenu from '@/components/Appmenu'
import eventBus from '@/utils/myevents';
import { Layout } from 'antd';
const { Sider } = Layout;
type Props = {}
export default function Appside({ }: Props) {
    const [collapsed, setCollapsed] = useState(false);
    eventBus.on('myevent', (data: boolean) => {
        // console.log('data', data);
        setCollapsed(data)
    })
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            {/*  菜单组件 */}
            <Appmenu></Appmenu>
        </Sider>
    )
}