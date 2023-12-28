import React from 'react'
import navlist from '@/assets/json/nav';
import { Image } from 'antd-mobile';
export default function Appnavlist() {
    return (
        <ul style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            {
                navlist.map((item) => <li
                    style={{
                        width: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16px 8px',
                        boxSizing: 'border-box'
                    }}
                    key={item.navid
                    }>
                    <Image className='navImg' src={item.imgurl} />
                    <p style={{ fontSize: '12px' }}>{item.title}</p>
                </li>)
            }
        </ul>
    )
}
