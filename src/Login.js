import React from 'react'
import { NavLink } from 'react-router-dom'
 

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="Öğr No.">Öğr No</label>
                    <input type="integer" placeholder='Öğrenci Numarası'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Şifre</label>
                    <input type="password" placeholder='Şifre'/>
                </div>
                <button className='btn btn-succes w-100 rounded-0'>Giriş Yap</button>
                <p></p>
                <a href='' target='blank'  >Şifre Sıfırla</a>
              
            </form>
        </div>

    </div>
  )
}

export default Login