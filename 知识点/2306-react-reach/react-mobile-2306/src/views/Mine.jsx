import React from 'react'
// 导入头部导航组件
import Appnavbar from '@/components/Appnavbar'
export default function Mine() {
    return (
        <div>
            {/* 头部导航 */}
            <Appnavbar isshowright={true} isshowloginout={true}>个人中心</Appnavbar>
        </div>
    )
}
