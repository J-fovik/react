import React, { Component } from 'react';
// import Son from './Son'
import Sonfun from './Sonfun'
class Father extends Component {
    state={
        nameArr:['樱木花道', '流川枫', '赤木']
    }
    render() {
        return (
            <div>
                {/* <Son nameArr={this.state.nameArr}></Son> */}
                <Sonfun nameArr={this.state.nameArr}></Sonfun>
            </div>
        );
    }
}

export default Father;
