import React from 'react'
import { Swiper } from 'antd-mobile'
export default function Appswiper(props) {
    // console.log('props', props);
    const { bannerlist } = props
    return (
        <Swiper autoplay autoplayInterval={1000} loop>{
            bannerlist.map(item => {
                return <Swiper.Item key={item.bannerid}>
                    <img style={{
                        width: '100%'
                    }} src={item.img} />
                </Swiper.Item>
            })
        }</Swiper>
    )
}
