
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Father() {
    const state = useSelector(state => state.toJS())
    // console.log('state', state);
    const dispatch = useDispatch();
    return (
        <div>
            {/* user相关的数据 */}
            <p onClick={() => {
                dispatch({ type: '+', payload: 1 })
            }}>count:{state.user1.count}</p>

            <p onClick={() => {
                dispatch({ type: 'addAge', payload: 10 })
            }}>user:{state.user1.user.name}--{state.user1.user.age}</p>
        </div>
    )
}
