import 'console-polyfill'
import './App.css';
//import Calender from './components/Calender';
import Drowdown from './components/Drowdown';
import SubAssebmly from './components/SubAssebmly';
import Paint from './components/Paint';
import Final from './components/Final';
import Production from './components/Production';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Drowdown />
      <Routes>
        <Route path='/' element={<Production />}></Route>
        <Route path='/subassembly' element={<SubAssebmly />}></Route>
        <Route path='/paint' element={<Paint />}></Route>
        <Route path='/final' element={<Final />}></Route>
      </Routes>
    </>
  );
}

export default App;
