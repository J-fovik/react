import React from 'react';
import { NavBar, Space } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons';
import { useHistory } from 'react-router-dom';
export default function Appnavbar(props) {
    // console.log('isshowright', props.isshowright);
    const right = (
        <div style={{ fontSize: 24 }}>
            <Space style={{ '--gap': '16px' }}>
                <MoreOutline />
            </Space>
        </div>
    )
    const his = useHistory();
    const back = () => {
        his.go(-1)
    }
    return (
        <NavBar right={props.isshowright ? right : null} onBack={back}>
            {props.children}
        </NavBar>
    )
}
