import React , { useState }  from 'react'
import Login from './Login';
import { Await, useNavigate} from 'react-router-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import errors from './girisOnay'
import { auth } from "./firebase";



function SifreSifirla() {
    const [email, setEmail] = useState('');
    const handleSubmit =(event) => {
        try {
           Await.auth().sendPasswordResetEmail(email);
            console.log('Şifre sıfırlama e-postası gönderildi.');
          } catch (error) {
            console.error('Şifre sıfırlama hatası:', error);
          }
        }
    


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
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="e-mail"> <strong> E-mail </strong> </label>
                <input type="email" placeholder='iste.edu.tr uzantılı e-mail'onChange={e => setEmail(e.target.value)} name='email' className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'> {errors.email} </span> }
            </div>
          
            <p></p>
            <button onClick={navigateToHome}  className='btn btn-default border w-100 bg-light' target='blank' c  >Giriş Sayfasına Dön</button>
            <p></p>
            <button onClick={handleSubmit}  className='btn btn-default border w-100 bg-light' target='blank' c  >Sıfırla</button>
          
        </form>
    </div>

</div>
  )
}

export default SifreSifirla