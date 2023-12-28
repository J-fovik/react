import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import App from './App';
//引入全局清除默认样式的normalize.css 文件
import 'normalize.css';

// 导入store仓库
import store from '@/store'
import { Provider } from 'react-redux'
// 导入 路由模式组件
import { BrowserRouter, HashRouter } from 'react-router-dom'
// ++++
import { PersistGate } from 'redux-persist/lib/integration/react';
// +++
import { persistor } from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

// 项目的根目录需要创建一个craco.config.js 文件, 使用该文件可以对项目脚手架中内置的webpack 进行
// 默认的配置和修改操作,
// 该文件类似于 vue 项目中的vite.config.js // vue.config.js 

// react项目中使用webpack搭建的脚手架  craete-react-app

