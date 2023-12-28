import React from 'react';
import { useEffect, useState } from 'react';
import '@/assets/css/home/seckill.scss';
import { seckilllistApi } from '@/api/home'
export default function () {
    // 定义秒杀列表数组
    const [seckilllist, setSecKillList] = useState([]);
    // 定义秒杀列表分页(页码) 默认第一页
    const [page, setPage] = useState(1)

    const getkilllist = async () => {
        const res = await seckilllistApi({
            count: page,
            limitNum: 6
        })
        // console.log(res);
        setSecKillList([...seckilllist, ...res.data.data])
    }
    useEffect(() => {
        // 秒杀接口调用
        getkilllist()
    }, [page])

    // 定义滚动事件处理函数
    const scrollFn = (e) => {
        const { scrollWidth, scrollLeft, clientWidth } = e.target
        // console.log('scrollWidth', scrollWidth);
        // console.log('scrollLeft', scrollLeft);
        // console.log('clientWidth', clientWidth);
        // 判断滚动到右侧条件判断
        //console.log(scrollWidth - scrollLeft);
        if (Math.floor(scrollWidth - scrollLeft) - 1 <= clientWidth) {
            setPage(page + 1)
        }

    }
    return (
        <div>
            <h2 className='sectitle'>京东秒杀</h2>
            <ul className='seckillbox' onScroll={scrollFn}>
                {
                    seckilllist.map((item, index) => <li key={index}>
                        <img src={item.img1} />
                        <p>${item.originprice.toFixed(2)}</p>
                    </li>)
                }
            </ul>
        </div>
    )
}
