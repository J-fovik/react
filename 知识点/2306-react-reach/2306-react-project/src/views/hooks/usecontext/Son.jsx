import React from 'react'
import Grandson from './Grandson'
import contextObj from './conxt'
const { Consumer } = contextObj
export default function Son() {
    return (
        <div>
            <p>son</p>
            <Consumer>
                {
                    (value) => {
                        //value 就是要消费的数据
                        return <ul>
                            {
                                value.map(item => <li key={item.id}>{item.name}</li>)
                            }
                        </ul>
                    }
                }
            </Consumer>
            <Grandson></Grandson>
        </div>
    )
}
