import React from 'react'
import { useParams } from 'react-router-dom'
type Props = {}

export default function Category({ }: Props) {
    const par = useParams()
    console.log(par);

    return (
        <div>Category</div>
    )
}