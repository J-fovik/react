import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Father1() {
    const [user, setUser] = useState({
        name: '吕布',
        age: 20
    })

    const [schoollist, setSchoolList] = useState([])

    const [goodsArr, setGoodsArr] = useState(['电脑', '手机'])
    //  初始执行, 数据发生变化,再次执行
    // useEffect(() => {
    //     console.log('user', user);
    // })



    // 初始化执行 1 当数据更新执行2.再执行1
    const handleClick = () => {
        console.log('点击事件');
    }
    // useEffect(() => {
    //     // console.log(1); 
    //     document.querySelector('button').addEventListener('click', handleClick)
    //     return () => {
    //         // console.log(2);
    //         document.querySelector('button').removeEventListener('click', handleClick)
    //     }
    // })

    // 初始化执行1, 状态更新不在执行, 只执行一次
    // 进行数据请求
    // useEffect(() => {
    //     // console.log(1);
    //     // document.querySelector('button').addEventListener('click', handleClick)
    //     axios.get('https://api.i-lynn.cn/college').then(res => {
    //         setSchoolList(res.data.data.list1)
    //     })
    // }, [])


    // 初始化执行1次, 当数组依赖的值发生变化, 再次触发执行
    useEffect(() => {
        console.log(100)
    }, [user, goodsArr])

    return (
        <div>
            <p onClick={() => {
                setUser({
                    ...user,
                    age: user.age + 1
                })
            }}>{user.name}--{user.age}</p>
            <p> <button>原生点击事件</button></p>

            {/* 渲染学校列表 */}
            {/* <ul>
                {
                    schoollist.map(item => <li key={item.id}>{item.school_name}</li>)
                }
            </ul> */}

            {/* 渲染商品数组 */}
            <ul>
                {
                    goodsArr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <p>
                <button onClick={() => {
                    goodsArr.push('ipad')
                    // console.log('goodsArr', goodsArr)
                    // let newArr = goodsArr
                    setGoodsArr([...goodsArr])
                }}>添加商品</button>
            </p>
        </div>
    )
}
