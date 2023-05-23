import React from 'react'
import Login from './Login';
import { useNavigate} from 'react-router-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function SifreSifirla() {

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/' element={<SifreSifirla/>}></Route>
    </Routes>
    
    </BrowserRouter>

    const navigate = useNavigate();

    const navigateToHome = () => {
        // 👇️ navigate to /contacts
        navigate('/?');
      };

  return (

    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Şifre Sıfırla</h2>
        <form action="">
            <div className='mb-3'>
                <label htmlFor="e-mail"> <strong> E-mail </strong> </label>
                <input type="email" placeholder='iste.edu.tr uzantılı e-mail' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="e-mail"> <strong> Eski Şifre </strong> </label>
                <input type="password" placeholder='******' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password"> <strong>  Yeni Şifre </strong> </label>
                <input type="password" placeholder='******' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor=""> <strong> Şifre Tekrar </strong> </label>
                <input type="password" placeholder='******' className='form-control rounded-0'/>
            </div>
            <p></p>
            <button onClick={navigateToHome}  className='btn btn-default border w-100 bg-light' target='blank' c  >Giriş Sayfasına Dön</button>
          
        </form>
    </div>

</div>
  )
}

export default SifreSifirla