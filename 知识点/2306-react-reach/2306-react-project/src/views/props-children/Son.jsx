import React, { Component } from 'react'

export default class Son extends Component {
    render() {
        console.log(this);
        return (
            <div>Son--{this.props.children}</div>
        )
    }
}
