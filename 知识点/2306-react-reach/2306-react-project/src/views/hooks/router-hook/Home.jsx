import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// 类组件实现跳转
// this.props.history(url)
// 函数组件实现跳转

export default function Home() {
    const [schoolList, setSchoolList] = useState([]);

    // 相当于 this.props.history
    const his = useHistory();
    // console.log('his', his);
    useEffect(() => {
        axios.get('https://api.i-lynn.cn/college').then(res => {
            setSchoolList(res.data.data.list1)
        })
    }, []);
    const gotodetail = (id) => {
        console.log('id', id);
        // 查询字符串方式
        // his.push('/detail?id=' + id)
        his.push('/detail/' + id)
    }
    return (
        <div>
            <ul>
                {
                    schoolList.map(item => <li
                        key={item.id}
                        onClick={() => {
                            gotodetail(item.id)
                        }}
                    >{item.school_name}</li>)
                }
            </ul>
        </div>
    )
}
