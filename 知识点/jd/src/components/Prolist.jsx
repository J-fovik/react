import React from 'react'
import { Ellipsis, Image } from 'antd-mobile'
import '@/assets/css/home/prolist.scss';
import { useHistory } from 'react-router-dom'
export default function Prolist(props) {
    const his = useHistory();
    return (
        <ul className='prolistbox'>
            {
                props.prolistArr.map(item => <li
                    key={item.proid}
                    onClick={() => {
                        his.push('/detail/' + item.proid)
                    }}
                >
                    <Image
                        lazy
                        src={item.img1}
                    />
                    <Ellipsis direction='end' rows={2} content={item.proname} />
                    <p>${item.originprice}元</p>
                </li>)
            }
        </ul>
    )
}
