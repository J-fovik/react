import React from 'react'
import { useOnLine } from './myhook'
// 自定义hook 实现实时获取网络状态

export default function Father() {
    // 获取网络状态 使用bom 对象 
    // Bom 对象(Browser Object Model): window , history, location , screen , navigator
    // console.log('navigator', navigator.onLine);
    // navigator.onLine 获取当前的网络状态 ,返回值为boolean
    // true: 表示在线
    // false: 表示离线

    // 监听当前网络的状态, 当网络状态切换的时候, 可以实时获取状态
    // 给window 浏览器绑定时间 如下两个事件
    // online 事件, 当在线的时候触发
    // offline 事件. 当离线的时候会触发该事件



    return (
        <div>
            {
                useOnLine() ? '在线' : '离线'
            }
        </div>
    )
}
