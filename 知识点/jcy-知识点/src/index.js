import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 导入仓库store
import store from './store3'
// 导入 react-redux 包中提供的组件Provider
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// 引入路由模式组件
import { HashRouter, BrowserRouter as Router } from 'react-router-dom'
// 创建根实例;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
     <Router>
      <App />
    </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let obj ={
  a:1,
  b:{
    c:2
  }
}
// let obj1 = {...obj}
// console.log(obj===obj1);


  