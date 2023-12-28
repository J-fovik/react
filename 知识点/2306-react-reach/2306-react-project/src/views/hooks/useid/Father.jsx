import React from 'react'
import { useId } from 'react'
// useId: 该hook 可以生成一个唯一的id;

export default function Father() {

    const id = useId();
    console.log(id);
    // const id1 = useId()
    // console.log(id1);
    return (
        <div>
            <label htmlFor={id}>是否选中</label>
            <input type='checkbox' id={id} />
        </div>
    )
}
