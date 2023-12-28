import React, { Component } from 'react';

class Son extends Component {
    state = {
        nameArr: ['貂蝉', '西施', '杨玉环', '王昭君']
    }


    componentDidMount(){
        this.props.getdatafromsonFn(this.state.nameArr)

    }
    render() {
        return (
            <div>
                son
            </div>
        );
    }
    // givedatatofather() {
    //     return this.state.nameArr
    // }
    
}

export default Son;
