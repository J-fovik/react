import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
// useMemo() 高频面试问题?

// 定义: 主要用来做性能优化使用的
// 语法: const 新值 = useMemo(()=>{return 值},[变量,变量...])
//  return 返回的值就是 新值的值
//  当依赖的变量的发生变化, 则参数1函数会重新执行, 重新返回值
//  当依赖的变量没有发生变化, 则使用上一次缓存的值, 参数1函数不会执行

export default function Father() {
    // 定义搜索关键字
    const [keywords, setKeywords] = useState('');
    // 定义渲染的数组
    const [schoollist, setSchoollist] = useState([])
    // 定义count 
    const [count, setCount] = useState(100)
    useEffect(() => {
        axios.get('https://api.i-lynn.cn/college').then(res => {
            // console.log(res.data.data.list1);
            setSchoollist(res.data.data.list1)
        })
    }, [])

    // 过滤schoollist数组
    // const fiterSchoollist = schoollist.filter(item => {
    //     console.log('过滤');
    //     return item.school_name.includes(keywords)
    // })
    // console.log('fiterSchoollist', fiterSchoollist);

    // 使用usememo 优化过滤
    //keywords 没有发生变化, 就不会触发计算重新计算
    const fiterSchoollist = useMemo(() => schoollist.filter(item => {
        console.log('过滤');
        return item.school_name.includes(keywords)
    }), [keywords, schoollist]);
    return (
        <div>
            <p onClick={() => {
                setCount(count + 1)
            }}>count:{count}</p>
            <hr />
            <br />
            <p>
                <input type='text' value={keywords} onChange={(e) => {
                    //console.log(e.target.value)
                    setKeywords(e.target.value)
                }} />
            </p>

            {/* 渲染列表数据 */}
            <ol>
                {
                    fiterSchoollist.map(item => <li key={item.id}>{item.school_name}</li>)
                }
            </ol>
        </div>
    )
}
