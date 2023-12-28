import React from 'react'
import { useEffect, useState } from 'react';
// 引入scss 样式文件
import '@/assets/css/home/home.scss';

// 引入antd 
import { InfiniteScroll, DotLoading, PullToRefresh } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep';

// 导入定义的接口请求
import { bannerlistApi, prolistApi } from '@/api/home';
// 引入头部组件
import Appheader from '@/components/Appheader'
// 引入轮播图组件
import Appswiper from '@/components/Appswiper';
// 引入导航组件
import Appnavlist from '@/components/Appnavlist';
// 引入秒杀列表组件
import Appseckill from '../components/Appseckill';
// 引入产品列表组件
import Prolist from '@/components/Prolist'
export default function Home() {
    const [bannerlist, setBannerList] = useState([])
    // 定义产品列表的分页
    const [count, setCount] = useState(1);
    // 定义产品列表的数组
    const [prolistArr, setProListArr] = useState([])
    // 定义是否可以加载更多flag
    const [hasMore, setHasMore] = useState(true)
    // 请求产品列表数据
    async function loadMore() {
        setCount(count + 1); // 该方法异步的, 直接获取修改后的值还是上一次的值
        // console.log('loadMore', count);
        const append = await prolistApi({
            count: count, //1 ,2
            limitNum: 10
        })
        setProListArr(prolistArr => [...prolistArr, ...append.data.data])
        setHasMore(append.data.data.length > 0)
        if (append.data.data.length == 0) {
            setCount(1)
        }
    }

    const InfiniteScrollContent = ({ hasMore }) => {
        return (
            <>
                {hasMore ? (
                    <>
                        <span>Loading</span>
                        <DotLoading />
                    </>
                ) : (
                    <span>--- 我是有底线的 ---</span>
                )}
            </>
        )
    }
    useEffect(() => {
        // 轮播图接口调用
        bannerlistApi().then(res => {
            // console.log(res);
            setBannerList(res.data.data)
        })
    }, [])

    return (
        <div className='home'>
            {/* 头部组件 */}
            <Appheader></Appheader>
            <PullToRefresh
                onRefresh={async () => {
                    await sleep(1000)
                    // console.log('下拉刷新')
                    // setData([...getNextData(), ...data])
                    // 重新请求数据
                    setProListArr([]);
                    // 设置可以上拉加载
                    setHasMore(true);
                    // 重新加载数据
                    loadMore()
                }}
            >
                {/* 轮播图组件 */}
                {
                    bannerlist.length > 0 ? <Appswiper bannerlist={bannerlist}></Appswiper> : <></>
                }
                {/* 导航组件 */}
                <Appnavlist></Appnavlist>
                {/* 秒杀组件 */}
                <Appseckill ></Appseckill>
                {/* 产品列表 */}
                <Prolist prolistArr={prolistArr}></Prolist>
                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} >
                    <InfiniteScrollContent hasMore={hasMore} />
                </InfiniteScroll>
            </PullToRefresh>
        </div>
    )
}
