import React, { Component } from 'react';
import hoc from './hoc';
class Son extends Component {
    render() {
        console.log('son-this.props', this.props);
        return (
            <div>
                <ul>
                    {
                        this.props.schoolList.map((item)=>{
                            return <li key={item.id}>{item.school_name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default hoc(Son);
