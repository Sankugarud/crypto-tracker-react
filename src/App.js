import './App.css';
import Home from './components/home/Home';
import {Routes ,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Renderdata/Dashboard';
import CoinPage from './components/MainCoinPage/coinPage/CoinPage';
import ComparePage from './components/compare/CompareCoin/ComparePage';
import Header from './components/header/Header';
import { useState } from 'react';
function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  const backgroundColor = changeTheme ? 'white' : 'black';

  return (
    <div style={{backgroundColor:backgroundColor}} className="App">
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <Routes> 
        <Route path='/' element={<Home changeTheme={changeTheme}/>}></Route>
        <Route path='/dashboard' element={<Dashboard changeTheme={changeTheme}/>}></Route>
        <Route path='/coin/:coinId' element={<CoinPage changeTheme={changeTheme}/>}></Route>
        <Route path='/compare' element={<ComparePage changeTheme={changeTheme}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
