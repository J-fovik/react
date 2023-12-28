import React from 'react'
// import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space, Avatar } from 'antd';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {
    updateAdminName,
    updateCheckedKeys,
    updateRole,
    updateToken
} from '@/store/modules/userslice';
import store from 'store';
import { useNavigate } from 'react-router-dom'
type Props = {}

export default function Loginout({ }: Props) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = ({ key }) => {
        console.log(key);
        if (key == '1') {
            //退出登录
            // 01: 清除本地的登录信息
            store.clearAll();
            // 02: 清除rtk 中的信息
            dispatch(updateAdminName(''))
            dispatch(updateCheckedKeys([]))
            dispatch(updateRole(0))
            dispatch(updateToken(''))
            //03:跳转到登录页
            navigate('/login')
        }

        if (key == '2') {
            navigate('/setting')
        }

    };
    // 获取rtk 中的用户名
    const adminname = useAppSelector(state => state.users.adminname);

    const items: MenuProps['items'] = [
        {
            label: '退出登录',
            key: '1',
        },
        {
            label: '系统设置',
            key: '2',
        },
        {
            label: '其他',
            key: '3',
        },
    ];
    return (
        <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {/* 用户信息 */}
                    {adminname}
                    {/* <DownOutlined /> */}
                    <Avatar style={{
                        transform: " translateY(-3px)"
                    }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Space>
            </a>
        </Dropdown>
    )
}