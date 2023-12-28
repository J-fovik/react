import React from 'react'
import { TabBar } from 'antd-mobile';
// 导入阿里巴巴图标
import '@/assets/iconfont/iconfont.css'

import { useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
function Home() {
    return <span
        style={{ fontSize: '24px' }}
        className='iconfont icon-shouye'
    ></span>
}

function Cart() {
    return <span
        style={{ fontSize: '24px' }}
        className='iconfont icon-cart'
    ></span>
}

function Login() {
    return <span
        style={{ fontSize: '24px' }}
        className='iconfont icon-denglu'
    ></span>
}

function Mine() {
    return <span
        style={{ fontSize: '24px' }}
        className='iconfont icon-wode'
    ></span>
}

const Fixedblock = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
`
export default function Apptabbar() {
    const token = localStorage.getItem('token')
    console.log('token', token);
    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <Home />,
        },
        {
            key: '/cart',
            title: '购物车',
            icon: <Cart></Cart>

        },
        {
            key: token ? '/mine' : '/login',
            title: token ? '我的' : '登录',
            icon: token ? <Mine /> : <Login />,
        },

    ]
    const [activeKey, setActiveKey] = useState('/home');
    const his = useHistory();


    return (
        <Fixedblock>
            <TabBar
                onChange={(key) => {
                    // console.log('key', key)
                    setActiveKey(key)
                    his.push(key)
                }}
                activeKey={activeKey}
            >
                {tabs.map(item => (
                    <TabBar.Item key={item.key}
                        icon={item.icon}

                        title={item.title}
                    />
                ))}
            </TabBar>
        </Fixedblock>
    )
}
