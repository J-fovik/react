import React, { Component } from 'react';

class Son extends Component {
    render() {
        // console.log('this-son',this);
        return (
            <div>
                {/* <p>son-{this.props.user.name}</p> */}
                {/* <p>son-{this.props.tosonFn().name}{this.props.tosonFn().age}</p> */}
                <p>Son</p>
            </div>
        );
    }
    aaa(data){
        console.log('data',data);
    }
}

export default Son;
