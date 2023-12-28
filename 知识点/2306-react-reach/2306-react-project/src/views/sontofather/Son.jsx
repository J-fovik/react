import React, { Component } from 'react'

export default class Son extends Component {
    state = {
        nameArr: ['貂蝉', '西施', '杨玉环', '王昭君']
    }
    render() {
        return (
            <div>Son</div>
        )
    }

    givedatatofather() {
        return this.state.nameArr
    }

    componentDidMount() {
        this.props.getdatafromsonFn(this.state.nameArr)
    }
}
