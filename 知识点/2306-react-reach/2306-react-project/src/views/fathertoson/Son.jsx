import React, { Component } from 'react'

export default class Son extends Component {
    render() {
        //console.log('this-son', this);
        return (
            <div>
                <p>Son</p>
                {/* <p>{this.props.user.name}--{this.props.user.age}</p> */}
                {/* <p>{this.props.tosonFn().name}--{this.props.tosonFn().age}</p> */}
            </div>
        )
    }
    getdatafromfather(data) {
        console.log('data', data);
    }
    componentDidMount() {
        // console.log(this.props.tosonFn());
    }
}
