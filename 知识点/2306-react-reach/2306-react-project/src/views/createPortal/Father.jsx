import React from 'react'
// 引入模态框组件
import Modal from './Modal'
import { useState } from 'react'
export default function Father() {
    const [flag, setFlag] = useState(false)
    return (
        <div>
            <p>father</p>
            <p><button onClick={() => {
                setFlag(true)
            }}>显示</button></p>
            {/* 使用模态框 */}
            {flag ? <Modal setFlag={setFlag}></Modal> : <></>}
        </div>
    )
}
