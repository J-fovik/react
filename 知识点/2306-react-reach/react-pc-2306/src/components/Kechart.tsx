import React, { useEffect } from 'react'
import * as echarts from 'echarts';
type Props = {
    isshowtooltip?: boolean,
    w?: string,
    h?: string,
    id: string,
    title?: string,
    kdata: {
        x: Array<string>,
        val: Array<Array<number>>
    }
};

export default function Kechart({ kdata, id, w, h, isshowtooltip, title }: Props) {
    console.log('kdata', kdata);
    useEffect(() => {
        var myChart = echarts.init(document.getElementById(id));
        window.addEventListener('resize', function () {
            myChart.resize();
        });
        let option: any = {
            xAxis: {
                data: kdata.x
            },
            yAxis: {},
            series: [
                {
                    type: 'candlestick',
                    data: kdata.val
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
        }}>Kechart</div>
    )
}