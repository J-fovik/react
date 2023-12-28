// 函数组件的结构
// 2种模块化开发语法
// es6模块化语法
// 按需导出 export 变量   按需导入 // import{} from '路径'
// 默认导出  export default 变量   // 默认导入 import 变量 from '路径'

// common.js 模块化语法
// 导出: module.exports = {key:value}
// 导入: let 变量 = require(路径)

// 函数组件的特点:
// 01: 无状态(无数据) react@16.8之前,使用hooks辅助函数去模式状态
// 02: 无生命周期  使用hooks 模拟生命周期
// 03: 没有this(没有组件实例对象)
// 04: 有hooks(辅助工具函数)

// 引入函数子组件
import Son from "./Son"
const Father = () => {
    const footbalGirls = ['孙雯', '刘爱玲', '水庆霞'];
    return <div>
        <p>我是函数父组件</p>
        {/* 使用子组件 */}
        <Son footbalGirls={footbalGirls}></Son>
    </div>
}

// es6 模块化语法 
export default Father