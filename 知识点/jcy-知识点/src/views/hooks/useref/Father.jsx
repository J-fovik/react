import React from 'react';
import { useState, useRef, createRef, useEffect } from 'react';
import Son from './Son';
const Father = () => {
    const [count, setCount] = useState(0)
    const ref1 = useRef()
    const ref2 = useRef()
    useEffect(() => {
        // console.log('ref1',ref1);
        console.log('ref1', ref1.current);
        console.log('ref2', ref2.current);
    })
    return (
        <div>
            <p ref={ref1}>count:{count}</p>
            <p><button onClick={() => {
                ref2.current.addAge()
            }}>修改子组件中的年龄</button></p>
            <Son ref={ref2}></Son>
        </div>
    );
}

export default Father;
