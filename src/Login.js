import React, { useState } from 'react'
import { Link, NavLink ,useNavigate} from 'react-router-dom'
import './girisOnay';
 


function Login() {  

    const[values, setValues] = useState({
        ogrID : '',
        sifre : ''

    })
    const [errors,setErrors]= useState({}) 
    const handleInput = (event)=>{
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setValues(validation(values))
    }




    const navigate = useNavigate();

    const navigateToSifreSifirla = () => {
        // 👇️ navigate to /contacts
        navigate('/sifreSifirla');
      };
    

  return (

    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Yaz Okulu Öğrenci Bilgilendirme Sistemi</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="Öğr No."> <strong> Öğrenci Numarası </strong> </label>
                    <input type="integer" placeholder='Öğrenci Numarası' onChange={handleInput} className='form-control rounded-0' name='ogrID'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"> <strong> Şifre </strong> </label>
                    <input type="password" placeholder='Şifre' onChange={handleInput} className='form-control rounded-0' name='sifre'/>
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