import React from 'react'
import { useEffect, useState } from 'react';
// 引入k 线图组件
import Kechart from '@/components/Kechart';
// 引入折线图组件
import Lineechart from '@/components/Lineechart';
import { getKdataApi, getSimpleDataApi } from '@/api/home'
type Props = {};
type kdataTypes = {
    x: Array<string>,
    val: Array<Array<number>>
}
export default function Home({ }: Props) {
    // 定义k 线图数据
    const [kdata, setKdata] = useState<kdataTypes | {}>({});
    // 定义折线图数据
    const [lineData, setLineData] = useState<Array<{ x: string, val: string }>>([])
    useEffect(() => {
        getKdataApi().then(res => {
            console.log('res', res);
            setKdata(res.data)
        })

        getSimpleDataApi().then(res => {
            // console.log(res);
            setLineData(res.data)
        })
    }, [])
    return (
        <div style={{
            display: 'flex',

        }}>
            {/* 使用k线图组件 */}
            {
                (kdata as kdataTypes).x ?
                    <Kechart kdata={kdata as kdataTypes}
                        isshowtooltip={true}
                        w='50%'
                        h='400px'
                        id='kbox'
                        title='千锋股票'
                    ></Kechart>
                    : <></>
            }
            {/* 使用折线图 */}
            {
                lineData.length > 0 ? <Lineechart lineData={lineData}
                    id='linebox'
                    w='50%'
                    h='400px'
                    title='千锋学生成绩'
                ></Lineechart> : <></>
            }

        </div >
    )
}