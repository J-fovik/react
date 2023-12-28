import React from 'react'
// 写二级路由
import { Routes, Route, Navigate } from 'react-router-dom'
import Mine1 from './Mine1';
import Mine2 from './Mine2'
type Props = {}

export default function Mine({ }: Props) {
    return (
        <>
            <p>mine</p>
            <Routes>
                {/* 设置默认显示的二级路由 */}
                {/* <Route path='' element={<Mine1 />}></Route> */}
                <Route path='mine1' element={<Mine1 />}></Route>
                <Route path='mine2' element={<Mine2 />}></Route>
                {/* <Route path='' element={<Navigate to='mine1'></Navigate>}></Route> */}
            </Routes>
        </>
    )
}