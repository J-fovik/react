import React from 'react';
import * as echarts from 'echarts';
import { useEffect } from 'react'
type Props = {}

export default function Home({ }: Props) {


    useEffect(() => {
        // console.log('main', document.getElementById('main'));
        // 01: 初始化echart 实例
        var myChart = echarts.init(document.getElementById('main'));
        // 02: 设置图表的配置项
        const dataArr1 = [5, 20, 36, 10, 10, 20];
        const dataArr2 = [10, 6, 7, 9, 20, 100]
        myChart.setOption({
            title: { // 标题设置
                text: 'ECharts 入门示例',
                subtext: '2306班级',
                left: 'left',
                textStyle: {
                    color: 'red'
                }
            },
            legend: { // 图例
                data: ['销量', '价钱']
            },
            tooltip: { // 提示框
                // 写法1:
                // formatter: `{a}:{b}:{c})`  
                // 写法2:
                // formatter: (params: any, ticket: any, callback: any) => {
                //     console.log(params);
                //     return `${params.name}:
                //             <br/>
                //             ${params.seriesName}: ${Math.floor(params.value / (dataArr1.reduce((sum, item) => sum += item, 0)) * 100) + '%'}`
                // }

            },
            toolbox: {  // 工具箱
                feature: {
                    saveAsImage: {},
                    restore: {},
                    dataView: {},
                    dataZoom: {},
                    magicType: {
                        type: ['line', 'bar', 'stack']
                    }
                }
            },
            xAxis: { // x轴
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {}, // y轴
            series: [ // 系列数据 可以有多个对象, 每一个对象就是一系列数据一类图
                {
                    name: '销量',
                    type: 'bar',
                    data: dataArr1
                },
                {
                    name: '价钱',
                    type: 'line',
                    data: dataArr2
                }
            ]
        });
    })
    return (
        <div>
            <div id='main' style={{
                width: '500px',
                height: '500px',
                border: '1px solid black'
            }}>

            </div>
        </div>
    )
}