import React from 'react'
import { Link, NavLink ,useNavigate} from 'react-router-dom'
 


function Login() {

    const navigate = useNavigate();

    const navigateToSifreSifirla = () => {
        // 👇️ navigate to /contacts
        navigate('/sifreSifirla');
      };
    

  return (

    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Yaz Okulu Öğrenci Bilgilendirme Sistemi</h2>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="Öğr No."> <strong> Öğrenci Numarası </strong> </label>
                    <input type="integer" placeholder='Öğrenci Numarası' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"> <strong> Şifre </strong> </label>
                    <input type="password" placeholder='Şifre' className='form-control rounded-0'/>
                </div>
                <button className='btn btn-succes w-100 rounded-100 '> <strong> Giriş Yap </strong> </button>
                <p></p>
                <button onClick={navigateToSifreSifirla}  className='btn btn-default border w-100 bg-light' target='blank' c  >Şifre Sıfırla</button>
              
            </form>
        </div>

    </div>
  )
}

export default Login