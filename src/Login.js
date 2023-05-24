import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import   validation from './girisOnay';
import axios from 'axios';


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
        setErrors(validation(values))
        if(errors.ogrNo === "" && errors.sifre===  ""){
            axios.post('http://localhost:8081/ogrenci' ,values)
            .then(res => {
                if(res.data === "Succes"){
                    navigate('/home');
                }
                else
                alert("Böyle bir öğrenci kaydı bulunmamaktadır.")
                
            })
            .catch(err => console.log(err));
    }
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
                    <label htmlFor="ogrNo"> <strong> Öğrenci Numarası </strong> </label>
                    <input type="integer" placeholder='Öğrenci Numarası' onChange={handleInput} className='form-control rounded-0' name='ogrNo'/>
                    {errors.ogrNo && <span className='text-danger'> {errors.ogrNo} </span> }
                </div>
                <div className='mb-3'>
                    <label htmlFor="sifre"> <strong> Şifre </strong> </label>
                    <input type="password" placeholder='Şifre' onChange={handleInput} className='form-control rounded-0' name='sifre'/>
                    {errors.sifre && <span className='text-danger'> {errors.sifre} </span> }
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