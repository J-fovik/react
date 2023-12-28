// 定义一个hoc 高阶组件函数;
import { Component } from 'react';
const hoc = (Com) => {
    return class Newcom extends Component {
        render() {
            console.log('Newcom-props', this.props);
            return <>
                {/*  {...this.props} 相当于将props对象中的数据展开 */}
                {
                    this.props.schoollist.length > 0 ? <Com {...this.props}></Com> :
                        <p>loading........</p>
                }

            </>
        }
    }
}

export default hoc