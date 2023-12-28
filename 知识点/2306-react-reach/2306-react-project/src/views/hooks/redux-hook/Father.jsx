import React, { useEffect } from 'react'
// 获取仓库store中的数据
// useSelector用来获取仓库数据的
// useDisaptch 用来生成 dispatch 方法的, 派发任务
import { useSelector, useDispatch } from 'react-redux'

// 导入对应的actions
import { addNumAction, initSchoolListAsync } from '../../../store3/actions/shopAction'
import { addAgeAction } from '../../../store3/actions/userAction'
export default function Father() {
    const shop = useSelector(state => state.shop);
    const user = useSelector(state => state.user)
    console.log(shop, user);
    const dispatch = useDispatch();
    // console.log('dispatch', dispatch);
    useEffect(() => {
        dispatch(initSchoolListAsync())
    }, [])
    return (
        <div>
            {/* shop 模块数据 */}
            <p onClick={() => {
                dispatch(addNumAction(10))
            }}>shop-num:{shop.num}</p>
            <ul>
                {
                    shop.schoollist.map(item => <li key={item.id}>{item.school_name}</li>)
                }
            </ul>
            {/* user模块 */}
            <br />
            <hr />
            <p onClick={() => {
                dispatch(addAgeAction(5))
            }}>{user.userinfo.name}--{user.userinfo.age}</p>
        </div>
    )
}

