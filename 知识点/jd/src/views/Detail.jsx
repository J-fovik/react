import React from 'react'
import { useParams } from 'react-router-dom'
import { getProDetail, getCartListApi, addCartApi } from '@/api/detail'
import { useEffect, useState, useRef } from 'react'
import Appnavbar from '@/components/Appnavbar'
import { Button, Mask, Space, Badge, Toast } from 'antd-mobile'
import { PlayOutline } from 'antd-mobile-icons';
import { useSelector } from 'react-redux'
import '@/assets/css/detail.scss';
import { useHistory } from 'react-router-dom';
// 引入轮播图组件
import Appswiper from '@/components/Appswiper'
export default function Detail() {
    const par = useParams()
    const [detailObj, setDetailObj] = useState({})
    const ref1 = useRef()
    const userid = useSelector(state => state.userid);
    // 定义购物车数量变量
    const [cartNum, setCartNum] = useState(0)
    const his = useHistory()
    // 定义获取购物车数量的方法
    const getcatlistFn = () => {
        getCartListApi({
            userid: userid
        }).then(res => {
            // console.log('res', res);
            if (res.data.data) {
                setCartNum(res.data.data.length)
            } else {
                setCartNum(0)
            }

        })
    }

    useEffect(() => {
        getProDetail(par).then(res => {
            // console.log('res', res);
            setDetailObj(res.data.data)

        })

        // 获取当前视频的播放时长(单位s)
        // 当浏览器能够开始播放指定的音频/视频时触发
        ref1.current.oncanplay = () => {
            //console.log(ref1.current.duration);
            document.querySelector('.duration').innerHTML = ref1.current.duration + 's'
        }

        // 获取购物车数据接口
        getcatlistFn()

    }, []);

    const { img1, img2, img3, img4 } = detailObj
    const bannerlist = [img1, img2, img3, img4].map((item, index) => {
        return {
            bannerid: index,
            img: item
        }
    })
    // 是否显示遮罩层
    const [visible, setVisible] = useState(false)
    // 加入购物车功能
    const addCarFn = () => {
        // 
        addCartApi({
            userid: userid,
            proid: detailObj.proid,
            num: 1
        }).then(res => {
            // console.log('res', res);
            Toast.show({
                icon: res.data.code == 200 ? 'success' : 'fail',
                content: res.data.message,
                duration: 1000
            })
            // 更新购物车数量
            getcatlistFn()

        })
    }
    return (
        <div className='detail'>
            {/* 头部导航组件 */}
            <Appnavbar>详情</Appnavbar>
            {/* 使用轮播图组件 */}
            <Appswiper bannerlist={bannerlist}></Appswiper>
            {/* 播放按钮 */}
            <Button shape='rounded' className='playBtn' onClick={() => {
                setVisible(true)
            }}>
                <PlayOutline></PlayOutline>
                <span className='duration'>时长</span>
            </Button>
            <video style={{
                display: 'none'
            }} ref={ref1} src='https://jvod.300hu.com/vod/product/b1024a62-8c46-464c-8ec7-f57d26cceb38/42f70c8e8bbb442e986874ec556fc882.mp4'></video>
            {/* 遮罩层 */}
            <Mask visible={visible} onMaskClick={() => {
                // 隐藏模态框
                setVisible(false)
                // 不显示video
            }}>
                <div className='overlayContent' >
                    {
                        visible ? <video controls autoPlay src='https://jvod.300hu.com/vod/product/b1024a62-8c46-464c-8ec7-f57d26cceb38/42f70c8e8bbb442e986874ec556fc882.mp4'></video> : <></>
                    }
                </div>
            </Mask>
            {/* 其他详情信息 */}
            <p className='price'>${detailObj.originprice}元</p>
            <p className='proname'>
                {detailObj.proname}
            </p>
            {/* 底部的加入购物车的tabbar */}
            <div className='addCarBar'>
                <div className='car' onClick={() => {
                    // 点击跳转到购物车
                    his.push('/cart')
                }}>
                    <Badge content={cartNum}>
                        <span className='iconfont icon-cart'></span>
                    </Badge>
                    <span>购物车</span>
                </div>
                <Space>
                    <Button shape='rounded' color='warning' onClick={addCarFn}>加入购物车</Button>
                    <Button shape='rounded' color='danger'>立即购买</Button>
                </Space>
            </div>
        </div>
    )
}
