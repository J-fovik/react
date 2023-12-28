import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入第三方库 lodash 
import { cloneDeep } from 'lodash'

// 导入immutable
import { fromJS } from 'immutable'
// 引入全局的样式文件
import './index.css';
// 引入根组件
import App from './App';
// 导入仓库store
import store from './store4-immutable'
// 导入 react-redux 包中提供的组件Provider
import { Provider } from 'react-redux';
// 引入路由模式组件
import { HashRouter, BrowserRouter as Router } from 'react-router-dom'
// 创建根实例;
const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode 严格模式, 因为react18 废弃了一些语法,如果设置了严格模式.
// 控制台就会警告(当你使用废弃的语法的时候) ,当项目中使用一个第三方的react包,
// 所以 取消掉严格模式;

// 渲染根组件;
// 当执行 root.render()方法时,会调用函数组件中的函数方法,然后根据返回的dom结构. 
// 生成虚拟dom, 然后虚拟dom 转成真实dom, 渲染页面
// 当执行类组件的时候,就会实例化当前类,然后生成的实例化对象调用实例上的render方法
// 生成虚拟dom, 转真实dom 渲染页面
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);



// 第一种情况:
let obj = {
  a: 1,
  b: {
    c: 2
  }
}

// let obj1 = obj;
// console.log(obj1 === obj); //. true


// 第二种情况
// 引用地址不一样, 只拷贝了第一层数据,深层的没有拷贝
// let obj1 = { ...obj };
// // console.log(obj === obj1) // false
// obj1.a = 10;
// obj1.b.c = 20
// console.log('obj', obj);
// console.log('obj1', obj1);

// 第三种情况 
// 深拷贝

// let obj1 = cloneDeep(obj)
// obj1.a = 10;
// obj1.b.c = 20
// console.log('obj', obj);
// console.log('obj1', obj1);




// 第四种: 使用immutable 不可变数据
//语法: let immiobj = fromJS(js对象结构)
// immiobj的api 有
// 01: 设置数据 immiobj.set(key,val) 
// 01: 设置深层结构数据  immiobj.setIn(['key1',['key2],...],val)

// 02: 获取数据 immiobj.get(key)
// 02: 获取深层结构数据  immiobj.getIn(['key1','key2',...])

// 03: 修改第一层数据   immiobj.update('key',val)
// 03: 修改深层结构数据 immiobj.updateIn(['第一层属性','第二层属性',...],val)

// 04: 删除第一层数据  immiobj.delete(key)
// 04: 删除深层结构数据  immiobj.deleteIn([key1,'key2',key3...])


// immiobj数据.update(key,(val)=>返回的新数据) // key为要修改的属性, 返回的值为修改后的新值
let immObj = fromJS(obj);
let obj2 = immObj.toJS()
console.log(obj2 === obj);
// console.log('immObj', immObj);
//newImmObj 是对immObj 原对象的一个拷贝, 只拷贝更新的部分,不更新的部分不拷贝
// 还是使用原同一个内存空间的数据; 
// let newImmObj = immObj.update('a', (val) => val + 10);

// console.log('newImmObj', newImmObj);
// console.log(immObj.get('a'), immObj.getIn(['b', 'c'])); // 1 , 2
// console.log(newImmObj.get('a'), newImmObj.getIn(['b', 'c'])); // 11, 2

// const obj2 = newImmObj.toJS()
// obj2.b.c = 1000
// console.log('obj', obj);
// console.log('obj2', obj2);



// let newImmObj1 = newImmObj.updateIn(['b', 'c'], (val) => val + 10);
// console.log(newImmObj.getIn(['b', 'c']));
// console.log(newImmObj1.getIn(['b', 'c']));






