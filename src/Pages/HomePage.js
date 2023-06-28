import React from 'react'



import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Navbar from '../Navbar';
import SideBar from '../SideBar';

import { CCard, CAlert,CCardImage,CCardBody, CButton, CCardTitle, CCardText } from '@coreui/react';

function HomePage()
{
  
 return  (
  <div class="content" className='sayfa'>
  
    
    <SideBar></SideBar>
    <Navbar></Navbar>
    <div class="MuiPaper-root-app-page-title MuiPaper-elevation-2" className='duyuru'>
      <div>
        <div class="app-page-title--first">
          <div class="app-page-title--heading">
          <CAlert color="danger">
 <b>Dikkat!</b> Yaz Okuluna ait kayitli dersiniz yoktur
</CAlert>
<CCard style={{ width: '18rem' }} className='crd'>

  <CCardBody className='crr'>
    <CCardTitle className='card'>OBS Sistemi</CCardTitle>
    <CCardText>
      Ders Kayidi ile ilgili bir yanlislik oldugunu dusunuyorsan OBS sistemini kontrol edebilirsin.
    </CCardText>
    <CButton href="https://obs.iste.edu.tr/oibs/ogrenci/login.aspx">ISTE OBS</CButton>
  </CCardBody>
</CCard>
<CCard style={{ width: '16rem' }} className='s'>

  <CCardBody className='crr'>
    <CCardTitle className='card'> Aktif Akademik Donem Bilgileri</CCardTitle>
    <CCardText className='txtbck'>
       <b>2022-2023 Yaz Okulu </b>
    </CCardText>
    
  
  </CCardBody>
</CCard>

<CCard style={{ width: '16rem' }} className='ogrenim'>

  <CCardBody className='crr'>
    <CCardTitle className='card'> Öğrenim Bilgileri</CCardTitle>
    <CCardText className='txtbck'>
   
      Mühendislik ve Doğa/Bilgisayar
      Mühendisliği(İÖ) 
      4.Sınıf
    </CCardText>

  </CCardBody>
</CCard>

          <div class="app-page-title--description">      </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <div class="speedial-wrapper"></div>
    </div>
  

  </div>
  
 )

    
  

} 

export default HomePage;
