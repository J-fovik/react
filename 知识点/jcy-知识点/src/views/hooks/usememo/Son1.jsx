import React from 'react';
import { useState, useEffect, memo } from 'react';
import axios from 'axios';
// memo 为高阶组件函数;
// 语法:  const 纯组件 = memo(普通组件)
// 作用: 将组件处理成纯组件
// 纯组件: 只有当组件自身的props 或 state 发生变化的时候, 当前组件才会重新渲染

// 函数组件使用memo 实现纯组件
// 类组件 class 组件名 extends pureComponent{}


function Son1() {
    // console.log('son1');
    // 定义搜索关键字
    const [keywords, setKeywords] = useState('');
    // 定义渲染的数组
    const [schoollist, setSchoollist] = useState([]);

    useEffect(() => {
        axios.get('https://api.i-lynn.cn/college').then(res => {
            // console.log(res.data.data.list1);
            setSchoollist(res.data.data.list1)
        })
    }, [])

    const fiterSchoollist = schoollist.filter(item => {
        console.log('过滤');
        return item.school_name.includes(keywords)
    })
    return (
        <div>
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

export default memo(Son1)