import React from 'react';
import { SearchBar, Space } from 'antd-mobile';
import { useHistory } from 'react-router-dom';

export default function Appheader() {
    const token = localStorage.getItem('token')
    const his = useHistory()
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 10px',
            background: 'red',
            color: 'white'
        }}>
            <span>地址</span>
            <div style={{
                flex: 1,
                margin: '0 10px'
            }}>
                <SearchBar style={{
                    width: '100%'
                }} placeholder='请输入内容' />
            </div>
            <span onClick={() => {
                if (token) {
                    his.push('/mine')
                } else {
                    his.push('/login')
                }
            }}>{token ? '我的' : '登录'}</span>
        </div>
    )
}
