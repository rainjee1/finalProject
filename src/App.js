import React from 'react';
import Login from './Login';
import SifreSifirla from "./SifreSifirla"
import home from './home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/SifreSifirla' element={<SifreSifirla/>}></Route>
      <Route path='/home' element={<home/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
