import React from 'react';
import { useState } from 'react';
const Father = () => {
    let [count,setcount] = useState(100)
    return (
        <div onClick={()=>{
            setcount((count)=>{
                return count+1
            })
        }}>
            <p>count:{count}</p>
        </div>
    );
}

export default Father;
