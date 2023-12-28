import React, { useEffect } from 'react'
import * as echarts from 'echarts';
type Props = {
    isshowtooltip?: boolean,
    w?: string,
    h?: string,
    id: string,
    title?: string,
    lineData: Array<{
        x: string,
        val: string
    }>
};

export default function Lineechart({ lineData, id, w, h, isshowtooltip, title }: Props) {
    useEffect(() => {
        var myChart = echarts.init(document.getElementById(id));
        window.addEventListener('resize', function () {
            myChart.resize();
        });
        let option: any = {
            xAxis: {
                type: 'category',
                data: lineData.map(item => item.x)
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: lineData.map(item => item.val),
                    type: 'line'
                }
            ]
        }
        if (isshowtooltip) {
            option.tooltip = {}
        }
        if (title) {
            option.title = {
                text: title
            }
        }

        myChart.setOption(option)
    }, [])


    return (
        <div id={id} style={{
            width: w ? w : '500px',
            height: h ? h : '500px',
        }}></div>
    )
}