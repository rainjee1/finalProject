import React from 'react';
import Login from './Login';
import SifreSifirla from "./SifreSifirla"
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/SifreSifirla' element={<SifreSifirla/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
