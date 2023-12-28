import React from 'react';
import Appnavbar from '../components/Appnavbar';
import { Image, List, Ellipsis, Empty } from 'antd-mobile';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '@/assets/css/cart.scss';

// 引入异步任务
import { updateCartListActionAsync } from '@/store/actions/userActions';
export default function Cart() {
    const userid = useSelector(state => state.userid)
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartlist);
    console.log('cartList', cartList);
    useEffect(() => {
        // 请求数据
        dispatch(updateCartListActionAsync())
    }, []);
    return (
        <div>
            {/* 头部导航 */}
            <Appnavbar>{`购物车${100}`}</Appnavbar>
            {/*  购物车列表*/}
            {
                cartList ? <List>
                    {cartList.map(item => (
                        <List.Item
                            key={item.cartid}
                            prefix={
                                <Image
                                    src={item.img1}
                                    style={{ borderRadius: 20 }}
                                    fit='cover'
                                    width={40}
                                    height={40}
                                />
                            }
                            // 商品描述 下
                            description={item.description}
                        >
                            {/* 商品名称 上*/}
                            <Ellipsis className='proname' direction='end' rows={2} content={item.proname} />
                        </List.Item>
                    ))}
                </List> : <Empty
                    style={{ padding: '64px 0' }}
                    imageStyle={{ width: 128 }}
                    description='暂无数据'
                />
            }

        </div>
    )
}
