import React from 'react'
import { createPortal } from 'react-dom'
// createPortal 语法: 
// createPortal(要传送dom结构或组件,该传送的dom或组件显示的容器)
export default function Modal(props) {
    console.log('props', props);
    return (
        createPortal(<div style={{
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
            onClick={() => {
                props.setFlag(false)
            }}
        >
            <div style={{
                width: '200px',
                height: '200px',
                background: 'white'
            }}>
                我是模态框中间要显示的内容
            </div>
        </div>, document.querySelector('#modalBox'))

    )
}
