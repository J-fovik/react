import React, { Component } from 'react'
//getSnapshotBeforeUpdate ()
// 执行时间: 初始化不执行; 更新前执行 componentDidUpdate 之前触发 ,render之后触发


// getSnapshotBeforeUpdate 生命周期
// 作用: 一般用来返回更新前的dom 信息的   (操作dom用的)
// 特点:必须有返回值, 返回值作为 componentDidUpdate 的参数使用,
// 所以该生命周期不能单独使用, 需要配合 componentDidUpdate一起使用

export default class Father extends Component {
    state = {
        bookArr: [{
            id: 1,
            bookname: '钢铁是怎样练成的',
            author: '列夫-托尔斯泰'
        },
        {
            id: 2,
            bookname: '一千零一夜',
            author: '无作者'
        },
        {
            id: 3,
            bookname: '聊斋',
            author: '蒲松林'
        }
        ]
    }
    render() {
        const { bookArr } = this.state
        return (
            <div>

                <p><button onClick={() => {
                    bookArr.push({
                        id: bookArr[bookArr.length - 1].id + 1,
                        bookname: '活着',
                        author: '余华'
                    });

                    this.setState({
                        bookArr: bookArr
                    })

                }}>添加书籍</button></p>
                <ul style={{
                    width: '500px',
                    height: '200px',
                    border: '1px solid red',
                    overflow: 'auto'
                }}>
                    {
                        bookArr.map(item => <li key={item.id}>{item.author}--{item.bookname}</li>)
                    }
                </ul>
            </div>
        )
    }

    getSnapshotBeforeUpdate(props, state) {
        // 可以获取dom 更新之前的一些旧dom 的信息
        //console.log(document.querySelector('ul').offsetHeight)
        // console.log('getSnapshotBeforeUpdate');

        return document.querySelector('ul').offsetHeight
    }
    componentDidUpdate(props, state, snapshot) {
        // console.log('snapshot', snapshot);
        // 设置ul 滚动条的高度
        // console.log('scrollHeight', document.querySelector('ul').scrollHeight);
        let ulbox = document.querySelector('ul')
        ulbox.scrollTop = ulbox.scrollHeight - snapshot

    }
}
