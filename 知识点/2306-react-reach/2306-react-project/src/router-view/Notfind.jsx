import React, { Component } from 'react'
// es6 模块化导入图片
import imgnotfind from '../assets/image/404.jpg';

export default class Notfind extends Component {
    state = {
        imgurl: imgnotfind
    }
    render() {
        return (
            <div>
                <img src={this.state.imgurl} />
            </div>
        )
    }
}
