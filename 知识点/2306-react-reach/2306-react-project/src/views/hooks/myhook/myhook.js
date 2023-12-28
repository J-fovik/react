// 自定义hook;
// 思路: 希望通过该hook 可以获取当前的浏览器的网络状态;
// 定义一个函数,函数名以use开头;
// 将公共的js 写入该函数中
// 将网络状态 return 出去
import { useState } from 'react'
export function useOnLine() {
    const [line, setLine] = useState(navigator.onLine)

    // console.log('line', line);
    window.ononline = () => {
        // console.log('在线');
        setLine(true)
    }
    window.onoffline = () => {
        // console.log('离线');
        setLine(false)
    }

    return line
}