import React, { Component } from 'react'

export default class Category extends Component {
    render() {
        return (
            <div>Category</div>
        )
    }
    componentDidMount() {
        console.log('this-category', this);
    }
}
