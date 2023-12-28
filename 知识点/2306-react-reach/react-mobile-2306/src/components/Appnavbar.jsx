import React from 'react';
import { NavBar, Space } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

export default function Appnavbar(props) {
    // console.log('isshowright', props.isshowright);
    // console.log('props', props.isshowloginout);
    const dispatch = useDispatch()
    const his = useHistory();
    const back = () => {
        his.go(-1)
    }
    const right = (
        props.isshowloginout ? <div onClick={() => {
            // 01: 清除本地登录时存储的信息
            localStorage.removeItem('token')
            // 02: 跳转到登录
            dispatch({
                type: 'updateuser',
                payload: ''
            })
            // 03: 跳转到登录
            his.push('/login')

        }}>退出</div> :
            <div style={{ fontSize: 24 }}>
                <Space style={{ '--gap': '16px' }}>
                    <MoreOutline />
                </Space>
            </div>
    )

    return (
        <NavBar right={props.isshowright ? right : null} onBack={back}>
            {props.children}
        </NavBar>
    )
}
