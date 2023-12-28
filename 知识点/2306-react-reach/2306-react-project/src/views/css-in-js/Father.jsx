import React, { Component } from 'react'

// react 设置样式的方式
// 01: 在当前组件中引入css 样式 (最常用)
// 02: 设置行内样式 (使用比较多)
// 03: 在index.html 页面中设置样式
// 04: 使用styled-components (css-in-js )



//导入 styled-components
import styled from 'styled-components'
// console.log('styled', styled);
// 使用css-in-js 之前, vscode 需要安装插件 vscode-styled-components

// 语法1:
const Box = styled.section`
    background-color: red;
    font-size: 30px;
`

// 语法2:实现样式的继承
const Box1 = styled(Box)`
   border:5px solid green;
   font-size: 20px;
`

// 语法3: 实现参数的传递
const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color:yellow;
  font-size :${(props) => props.fontSize ? props.fontSize : '12px'} ;
`



export default class Father extends Component {
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
        )
    }
}
