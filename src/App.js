import React from 'react';
import Login from './Login';
import SifreSifirla from "./SifreSifirla"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Ayarlar from './Pages/Ayarlar';
import Dersler from './Pages/Dersler';
import Duyurular from './Pages/Duyurular';
import Kullanici from './Pages/Kullanici';



function App() {
  return (
    <BrowserRouter>
    <HomePage></HomePage>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/SifreSifirla' element={<SifreSifirla/>}></Route>
      <Route path='/HomePage' element={<HomePage/>}></Route>
      <Route path='/Ayarlar' element={<Ayarlar/>}></Route>
      <Route path='/Dersler' element={<Dersler/>}></Route>
      <Route path='/Duyurular' element={<Duyurular/>}></Route>
      <Route path='/Kullanici' element={<Kullanici/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
