import React, { Component } from 'react';
import styled from 'styled-components'
console.log(styled);
const Box = styled.p`
    background-color: red;
`
const Box1 = styled(Box)`
    border: 5px solid green;
    font-size: 20px;
`

const Box2 = styled.div`
    width: 100px;
    height: 100px;
    background-color:yellow;
    font-size: ${(props)=>props.fontSize};

`
    

class Father extends Component {
    render() {
        return (
            <div>
                <Box>
                    <p>测试样式1</p>
                </Box>
                <Box1>
                    <p>测试样式2</p>
                </Box1>
                <Box2 fontSize='30px'>
                    <p>测试样式3</p>
                </Box2>
            </div>
        );
    }
}

export default Father;
