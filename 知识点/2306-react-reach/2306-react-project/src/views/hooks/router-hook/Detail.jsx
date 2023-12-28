import React from 'react';
// 获取参数;
import { useLocation, useParams } from 'react-router-dom'
export default function Detail() {
    // 相当于 this.props.location 查询字符串方式获取参数
    const loc = useLocation();
    console.log('loc', loc);
    // 相当于  this.props.match.params 适用于动态路由获取参数
    const par = useParams()
    console.log('par', par);
    return (
        <div>Detail</div>
    )
}
