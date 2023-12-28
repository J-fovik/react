import React from 'react';
import Pts from 'prop-types'
console.log(Pts);
const Sonfun = (props) => {
    return (
        <div>
            <ul>
                {
                    props.nameArr.map((item,index)=><li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}
//设置类型约束
Sonfun.propTypes = {
    nameArr: Pts.array
}
// 设置默认值
Sonfun.defaultProps = {
    nameArr: ['赤木晴子', '安西教练']
}
export default Sonfun;
