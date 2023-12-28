import React from 'react';

const Myfun = () => {
    const handleClickFn=()=>{
        console.log('点击事件1');
    }
    return (
        <div>
            <p>函数组件</p>
            <button onClick={handleClickFn}>函数组件点击事件</button>
        </div>
    );
}

export default Myfun;
