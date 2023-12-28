import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Login from './views/Login';
import Index from './views/layout/Index';
import { useAppSelector } from '@/store/hooks'
import { Navigate } from 'react-router-dom';
const App: React.FC = () => {
  // 获取登录存的token
  const token = useAppSelector(state => state.users.token)
  //console.log('state', roken);

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={token ? <Navigate to='/'></Navigate> : <Login></Login>}></Route>
        <Route path='/*' element={token ? <Index></Index> : <Navigate to='/login'></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
