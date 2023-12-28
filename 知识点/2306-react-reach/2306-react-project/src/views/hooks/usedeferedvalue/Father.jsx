import React from 'react';
import { useDeferredValue, useState, useEffect } from 'react';
// 当遇到高频操作, 可以使用 useDeferredValue降低高频次数, 
// 案例就是根据输入框的改变, 更新渲染dom, 达到防抖节流的作用.
export default function Father() {
    // 查询关键字
    const [keywords, setKeywords] = useState('');
    // 要遍历的数组
    const [listArr, setListArr] = useState([]);

    // 使用useDeferedvalue 对keywords 进行一个拷贝,生成一个副本
    const deferedKeywords = useDeferredValue(keywords)
    // console.log('deferedKeywords', deferedKeywords);
    //  当useEffect()监听的数据为keywords的时候, 则只要keywords 发生变化, 就出执行useEffect
    //  例如keywords 改变5次. 则useEffect执行5次, setListArr(filterlist) 设置5次. 
    //  导致页面渲染5次,需要创建5次. 

    //  当useEffect()监听的数据为 deferedKeywords,也就是副本数据, 由于副本的更新是在原数据
    //  keywords更新后更新,所以副本的更新有延迟, 所以当原数据改变5次, 副本更新延迟的原因
    //  所以最终导致副本更新的次数少于原数据更新的次数, 该案例中为副本更新了2次
    //  所以则useEffect执行2次,  setListArr(filterlist) 设置2次.浏览器渲染创建dom 只有2次


    // 以上操作 只针对高频操作
    useEffect(() => {
        // 给数组listArr =赋值
        let list = [];
        for (let i = 1; i <= 20000; i++) {
            list.push(i + '')
        }

        // 过滤 list
        const filterlist = list.filter(item => item.includes(keywords))
        setListArr(filterlist)
        console.log('执行');
    }, [deferedKeywords])

    return (
        <div>
            <p>
                <input type='text' value={keywords} onChange={(e) => {
                    setKeywords(e.target.value)
                }} />
            </p>
            {/* 遍历数组 */}
            <ul>
                {
                    listArr.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}
