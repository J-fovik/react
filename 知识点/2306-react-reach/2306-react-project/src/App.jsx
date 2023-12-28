
import './App.css';
// 引入函数组件
// import Father1 from './views/fun-component/Father';
// 引入类组件
// import Father2 from './views/cls-component/Father';
// import Myfun from './views/events/Myfun';
// import Mycls from './views/events/Mycls';
// import Father from './views/events-this/Father';
import Father from './views/createportal/Father';
//函数组件
function App() {
  return (
    <div className="App">
      {/* 使用函数子组件 */}
      {/* <Father1></Father1> */}
      {/* 使用类组件 */}
      {/* <Father2></Father2> */}
      {/* <Myfun></Myfun>
      <Mycls></Mycls> */}
      <Father></Father>
    </div>
  );
}

export default App;
