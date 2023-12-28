// 函数组件的快捷创建方式
// rfc
import React, { Fragment } from 'react';

export default function Son(props) {
    console.log('props', props);
    const { footbalGirls } = props
    return (
        <>
            <div>Son</div>
            <ul>
                {
                    footbalGirls.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </>
    )
}
