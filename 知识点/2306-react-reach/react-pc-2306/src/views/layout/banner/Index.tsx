import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {};

export default function Index({ }: Props) {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}