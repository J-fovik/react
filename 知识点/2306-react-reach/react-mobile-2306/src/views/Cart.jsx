import React from 'react';
import Appnavbar from '../components/Appnavbar';
import {
    Image,
    List,
    Ellipsis,
    Empty,
    Space,
    Stepper,
    Checkbox,
    Button,
    SwipeAction
} from 'antd-mobile';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import '@/assets/css/cart.scss';
// 引入购物车接口
import {
    removeCartItemApi,
    selectoneApi,
    selectAllApi,
    updatenumApi
} from '@/api/cart';

// 引入异步任务
import { updateCartListActionAsync } from '@/store/actions/userActions';
export default function Cart() {
    const userid = useSelector(state => state.userid);
    // console.log('userid', userid);
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartlist);
    // 定义全选状态
    const checkedAll = useMemo(() => {
        if (cartList.length > 0) {
            return cartList.every(item => item.flag)
        }
        return false
    }, [cartList]);
    // console.log('cartList', cartList);
    // console.log('更新');
    useEffect(() => {
        // 请求数据
        dispatch(updateCartListActionAsync())
    }, []);


    // 使用计算属性useMemo 计算总价
    // arr.reduce((sum,item)=>{return sum += item},0)
    // let arr = [1, 2, 3, 4, 5]
    //console.log(arr.reduce((sum, item) => { return sum += item }, 0))
    const totalPrice = useMemo(() => {
        return cartList.reduce((sum, item) => { return item.flag ? sum += item.originprice * item.num : sum }, 0)
    }, [cartList])
    const his = useHistory()
    return (
        <div className='cartbox'>
            {/* 头部导航 */}
            <Appnavbar>{`购物车(${cartList.length})`}</Appnavbar>
            {/*  购物车列表*/}
            {
                cartList.length > 0 ? <List>
                    {cartList.map(item => (
                        <SwipeAction
                            key={item.cartid}
                            // leftActions={leftActions}
                            rightActions={[
                                {
                                    key: 'delete',
                                    text: '删除',
                                    color: 'danger',
                                    onClick: async () => {
                                        // console.log('点击删除')
                                        removeCartItemApi({
                                            cartid: item.cartid
                                        }).then(res => {
                                            dispatch(updateCartListActionAsync())
                                        })
                                    },
                                }
                            ]}
                        >
                            <List.Item
                                prefix={
                                    <Space >
                                        <div onClick={e => e.stopPropagation()}>
                                            <Checkbox
                                                checked={item.flag}
                                                onChange={(bool) => {
                                                    // console.log('bool', bool)
                                                    // 调用单选接口
                                                    selectoneApi({
                                                        cartid: item.cartid,
                                                        flag: bool
                                                    }).then(res => {
                                                        dispatch(updateCartListActionAsync())
                                                    })
                                                }}
                                            />
                                        </div>
                                        <Image
                                            src={item.img1}
                                            style={{ borderRadius: 20 }}
                                            fit='cover'
                                            width={40}
                                            height={40}
                                        />
                                    </Space>

                                }
                                // 商品描述 下
                                description={
                                    <Space style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <span>${item.originprice.toFixed(2)}</span>
                                        <Stepper
                                            value={item.num}
                                            onChange={value => {
                                                console.log(value)
                                                // 调用接口更新购物车数据
                                                if (value == 0) {
                                                    removeCartItemApi({
                                                        cartid: item.cartid
                                                    }).then(res => {
                                                        dispatch(updateCartListActionAsync())
                                                    })

                                                    return
                                                }
                                                updatenumApi({
                                                    cartid: item.cartid,
                                                    num: value
                                                }).then(res => {
                                                    dispatch(updateCartListActionAsync())
                                                })
                                            }}
                                        />
                                    </Space>
                                }
                            >
                                {/* 商品名称 上*/}
                                <Ellipsis className='proname' direction='end' rows={2} content={item.proname} />
                            </List.Item>
                        </SwipeAction>
                    ))
                    }
                </List> : <Empty
                    style={{ padding: '64px 0' }}
                    imageStyle={{ width: 128 }}
                    description={
                        <Space style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h3>暂无数据</h3>
                            <Button
                                style={{
                                    marginTop: '10px'
                                }}
                                size='small'
                                color='danger'
                                onClick={() => {
                                    his.push('/home')
                                }}
                            >去购物</Button>
                        </Space>
                    }
                />
            }
            {/* 总价tabbar */}
            <div className='totalbar'>
                <div>
                    <Checkbox checked={checkedAll} onChange={(boolean) => {
                        //console.log('boolean', boolean)
                        selectAllApi({
                            userid: userid,
                            type: boolean
                        }).then(res => {
                            // console.log(res)
                            dispatch(updateCartListActionAsync())
                        })
                    }}></Checkbox>全选
                </div>
                <p>总价:{totalPrice.toFixed(2)}元</p>
                <Button type='primary' color='danger'>合计</Button>

            </div>
        </div>
    )
}
