import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sifre, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, sifre });
      console.log(response.data);
      const navigateHome = () => {
        navigate('./Pages/HomePage');
      };
      // Başarılı giriş işlemi sonrası yönlendirme veya diğer işlemler burada yapılabilir
    } catch (error) {
      console.error(error.response.data);
      // Hata durumunda uygun işlemler burada yapılabilir
    }
  };




  const navigateToSifreSifirla = () => {
    navigate('/sifreSifirla');
  };

 
    

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Yaz Okulu Öğrenci Bilgilendirme Sistemi</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Öğrenci Mail</strong></label>
            <input type="email"  value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e) => setEmail(e.target.value)} placeholder='Öğrenci Mail' className='form-control rounded-0' name='email' />
          
          </div>
          <div className='mb-3'>
            <label htmlFor="sifre"><strong>Şifre</strong></label>
            <input type="password" class="form-control" autocomplete="current-password" placeholder='Şifre' onChange={e => setPassword(e.target.value)} className='form-control rounded-0' name='sifre' />
      
          </div>
          <button onClick={handleSubmit}  className='btn btn-success w-100 rounded-100'><strong>Giriş Yap</strong></button>
          <p></p>
          <button onClick={navigateToSifreSifirla} className='btn btn-default border w-100 bg-light' target='blank'>Şifre Sıfırla</button>
        </form>
      </div>
    </div>
  );
}

export default Login;



 /*const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post('http://localhost:8081/ogrenci', { email, password });
    console.log(response.data); // Giriş başarılıysa geri dönen verileri işleyebilirsiniz
  } catch (error) {
    console.error('Giriş hatası:', error);
  }
}; */


