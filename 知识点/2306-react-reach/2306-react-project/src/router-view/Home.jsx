import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>Home</div>
        )
    }
    componentDidMount() {
        console.log('this-home', this);
        //console.log(decodeURI(this.props.location.search));
    }
}
