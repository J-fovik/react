import React, { Component } from 'react';
// es6 模块化导入图片
import imgnotfind from '../assets/image/404.jpg';

class Notfind extends Component {
   
    state = {
        imgurl: imgnotfind
    }
    render() {
        return (
            <div>
                <p>
                    <img src={this.state.imgurl} alt="" />
                </p>
            </div>
        );
    }
}

export default Notfind;
