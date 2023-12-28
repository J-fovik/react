import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>Cart</div>
        )
    }
    componentDidMount() {
        console.log('this-cart', this);
    }
}
