// 导入shop模块的任务
import {addNumAction,addNumActionAsync,initSchoolListAsync,addgoodsAction,addgoodsActionAsync} from '../../store2/actions/shopAction';
import React, { Component } from 'react';
import store2 from '../../store2'

console.log(store2);
console.log(store2.getState());

class Father extends Component {
    state= {
        ...store2.getState()
    }
    render() {
        const {shop,user}=this.state
        return (
            <div>
                {/* 商品模块 */}
                <p onClick={() => {
                    // 方式1: 2s后再派发修改任务
                    // setTimeout(() => {
                    //     store2.dispatch(addNumAction(5))
                    // }, 2000)

                    // // 方式2: 直接去派发一个异步的任务
                    // /// 任务就是2s后修改state数据中的num
                    store2.dispatch(addNumActionAsync(10))
                }}>store2中的num:{shop.num}</p>
                {/* 学校列表 */}
                <ul>
                    {
                        shop.schoollist.map(item => <li key={item.id}>{item.school_name}</li>)
                    }
                </ul>
                 {/* 商品goods数据 */}
                 <hr />
                <ol>
                    {
                        shop.goodsArr.map(item =>
                            <li key={item.id}>{item.proname}---{item.price}</li>
                        )
                    }
                </ol>
                <p>
                    <button onClick={() => {
                        // store2.dispatch(addgoodsAction(
                        //     {
                        //         id: shop.goodsArr[shop.goodsArr.length - 1].id + 1,
                        //         proname: '面膜',
                        //         price: 199
                        //     }
                        // ))

                        // 异步商品列表并赋值
                        store2.dispatch(addgoodsActionAsync(
                            {
                                        id: shop.goodsArr[shop.goodsArr.length - 1].id + 1,
                                        proname: '面膜',
                                        price: 199
                                    }
                        ))
                    }}>添加商品</button>
                </p>
            </div>
        );
    }
    componentDidMount(){
        store2.subscribe(()=>{
            this.setState({
                ...store2.getState()
            })
        })
         // 请求学校列表并赋值
         store2.dispatch(initSchoolListAsync())
         
    }
}

export default Father;
