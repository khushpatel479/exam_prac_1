import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Lay from './Lay';
import Ajaxdata from './Ajaxdata';
import Data2 from './Data2';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  
<Routes>
<Route index element={<Lay/>} ></Route>       
<Route path='/form' element={<Form/>}></Route>
<Route path='/data' element={<Ajaxdata/>}></Route>
<Route path='/data2' element={<Data2/>}></Route>  
</Routes>
</BrowserRouter>
  );
}

export default App;
