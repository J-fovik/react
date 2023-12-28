import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

export default function Mine({ }: Props) {
    return (
        <>
            <p>mine</p>
            {/* 留一个二级路由组件显示的坑 */}
            <Outlet></Outlet>
        </>
    )
}