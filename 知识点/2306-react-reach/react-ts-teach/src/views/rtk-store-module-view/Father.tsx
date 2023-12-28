import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAge } from '../../store-module/modules/userslice'
import { addNum, updateSchoolListAsync } from '../../store-module/modules/shopslice'
console.log(updateSchoolListAsync);


type Props = {}
interface stateType {
    user: {
        count: number,
        userinfo: {
            name: string,
            age: number
        }
    },
    shop: {
        num: number,
        schoolList: Array<any>
    }
}



export default function Father({ }: Props) {
    const user = useSelector((state: stateType) => state.user)
    const shop = useSelector((state: stateType) => state.shop)
    // console.log(user, shop);
    const dispatch = useDispatch();
    useEffect(() => {
        // 方式1:注意: @ts-ignore  当前下方一行不校验ts
        // 方式2: dispatch 派发异步任务时, 会提示类型错误, 设置参数的类型
        dispatch(updateSchoolListAsync())
    }, [])
    return (
        <div>
            {/* user部分数据 */}
            <p onClick={() => {
                dispatch(addAge(10))
            }}>user:{user.userinfo.name}--{user.userinfo.age}</p>
            {/* shop 部分数据 */}
            <p>shop-num:{shop.num}</p>
            <ul>
                {
                    shop.schoolList.map(item => <li key={item.id}>{item.school_name}</li>)
                }
            </ul>
        </div>
    )
}