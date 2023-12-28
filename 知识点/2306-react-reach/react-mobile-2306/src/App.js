import './App.scss';
// 导入路由规则组件
import Index from '@/router/Index';
// 引入tababr 组件
import Apptabbar from '@/components/Apptabbar';
import { useLocation } from 'react-router-dom'
function App() {
  // 获取当前的路由信息
  const loc = useLocation();
  const notShowTabbarArr = ['/login', '/detail', '/regist', '/cart', '/mine']
  const isshowFlag = notShowTabbarArr.includes('/' + loc.pathname.split('/')[1])
  return (
    <div className="App">
      <Index></Index>
      {/* 使用tabbar 组件 */}
      {
        isshowFlag ? null : <Apptabbar></Apptabbar>
      }
    </div>
  );
}

export default App;
