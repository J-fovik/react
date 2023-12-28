import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCount, jianCount } from '../../store/index'
type Props = {}

export default function Father({ }: Props) {
    const count = useSelector((state: { count: number }) => state.count)
    console.log('state', count);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                <button onClick={() => {
                    dispatch(addCount())
                }}>+1</button>
                state-count:{count}
                <button onClick={() => {
                    dispatch(jianCount(10))
                }}>-10</button>
            </p>
        </div>
    )
}