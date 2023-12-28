import React from 'react'
import { useState } from 'react'
import Son from './Son'
// 引入contextObj 对象
import contextObj from './conxt';
// console.log('contextObj', contextObj);
const { Provider } = contextObj;

export default function Father() {
    const [nameArr, setNameArr] = useState([
        {
            id: 1,
            name: '王宝强'
        },
        {
            id: 2,
            name: '沈腾'
        },
        {
            id: 3,
            name: '徐峥'
        }
    ])
    return (
        <div>
            <p>Father</p>
            <button onClick={() => {
                nameArr.push({
                    id: nameArr[nameArr.length - 1].id + 1,
                    name: '黄渤'
                })
                setNameArr(() => [...nameArr])
            }}>给数组中添加人物</button>
            <Provider value={nameArr}>
                <Son></Son>
            </Provider>
        </div>
    )
}
