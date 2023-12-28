import React from 'react';
// 首页
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { useState, useEffect } from 'react'
import { Layout, Button, theme, Space } from 'antd';
// 导入eventBus 
import eventvBus from '@/utils/myevents'
// 导入面包屑导航组件
import Appbreadcrumb from '@/components/Appbreadcrumb';
// 引入退出登录组件
import Loginout from './Loginout';
const { Header } = Layout;
type Props = {}

export default function Appheader({ }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 定义折叠变量
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    // console.log('collapsed', collapsed);
    // 将collapsed 变量传递给兄弟2组件
    eventvBus.emit('myevent', collapsed)
  }, [collapsed])
  return (
    <Header style={{
      padding: 0,
      background: colorBgContainer,
      display: 'flex',
      justifyContent: 'space-between',
      paddingRight: '20px'
    }}>
      <Space>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => {
            // 修改折叠变量
            setCollapsed(!collapsed)
          }}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        {/* 面包屑导航组件 */}
        <Appbreadcrumb></Appbreadcrumb>
      </Space>
      {/* 退出登录组件 */}
      <Loginout></Loginout>
    </Header>
  )
}