import { Component } from 'react'

export default class Son extends Component {
    render() {
        console.log(this);
        
        return (
            <div>Son-{this.props.user.username}-{this.props.user.age}</div>
        )
    }
}


