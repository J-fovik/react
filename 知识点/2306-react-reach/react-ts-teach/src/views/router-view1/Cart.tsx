import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
type Props = {}

export default function Cart({ }: Props) {
    const loc = useLocation();
    console.log('loc', loc);
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate(-1)
        }}>Cart</div>
    )
}