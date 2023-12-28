import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
type Props = {}

export default function Home({ }: Props) {
    const loc = useLocation()
    const par = useParams()
    console.log(loc);
    console.log(par);
    return (
        <div>Home</div>
    )
}