import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//  引入路由模式组件
import { BrowserRouter, HashRouter } from 'react-router-dom'
// 引入Provider组件
import { Provider } from 'react-redux'
// 导入仓库store
import store from './store-module'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

