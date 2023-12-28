import React, { Component } from 'react'

type Props = {
    count: number,
    // addCount: () => void
    addCount(): void
}

type State = {};

export default class Son extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <p onClick={() => {
                    this.props.addCount()
                }}>我是子组件---{this.props.count}</p>
            </div>
        )
    }
}