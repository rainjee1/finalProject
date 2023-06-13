import React , { useState }  from 'react'
import Login from './Login';
import { useNavigate} from 'react-router-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import   validation from './girisOnay';
import axios from "axios";



function SifreSifirla() {

    const[values, setValues] = useState({
        email : '',
        sifre : '',
        newpassword: '',
        newpassword2: ''
        

    })

    const [errors,setErrors]= useState({}) 
    const handleInput = (event)=>{
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values))
        if(errors.email === "" && errors.sifre=== "" && errors.newpassword === "" && errors.newpassword2 === "" ){
                axios.post('http://localhost:8081/ogrenci' ,values)
                .then(Response => {
                    navigate('/?')
                })
                .catch(err => console.log(err));
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
                <input type="email" placeholder='iste.edu.tr uzantılı e-mail' onChange={handleInput} name='email' className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'> {errors.email} </span> }
            </div>
            <div className='mb-3'>
                <label htmlFor="e-mail"> <strong> Eski Şifre </strong> </label>
                <input type="password" placeholder='******' name='sifre' onChange={handleInput} className='form-control rounded-0'/>
                {errors.sifre && <span className='text-danger'> {errors.sifre} </span> }
            </div>
            <div className='mb-3'>
                <label htmlFor="password"> <strong>  Yeni Şifre </strong> </label>
                <input type="password" placeholder='******' name='newpassword' onChange={handleInput} className='form-control rounded-0'/>
                {errors.sifre2 && <span className='text-danger'> {errors.sifre2} </span> }
            </div>
            <div className='mb-3'>
                <label htmlFor=""> <strong> Şifre Tekrar </strong> </label>
                <input type="password" placeholder='******' name='newpassword2' onChange={handleInput} className='form-control rounded-0'/>
                {errors.sifre2 && <span className='text-danger'> {errors.sifre2} </span> }
            </div>
            <p></p>
            <button onClick={navigateToHome}  className='btn btn-default border w-100 bg-light' target='blank' c  >Giriş Sayfasına Dön</button>
            <p></p>
            <button   className='btn btn-default border w-100 bg-light' target='blank' c  >Sıfırla</button>
          
        </form>
    </div>

</div>
  )
}

export default SifreSifirla