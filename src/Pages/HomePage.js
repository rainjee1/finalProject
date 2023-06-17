import React from 'react'
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import { useNavigate } from 'react-router-dom';

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function HomePage()
{

  const navigate= useNavigate();
 return  <SideNav
   onSelect={selected => {
       console.log(selected)
       navigate('/'+selected)
   }} 
    
   >  
     <SideNav.Toggle />
      <SideNav.Nav defaultSelected="HomePage">
      <NavItem eventKey="HomePage">
        <NavIcon><i className='fa-solid fa-house' style={{fontSize:"1.5em"}}/></NavIcon>
        <NavText>Anasayfa</NavText>
      </NavItem>
      <NavItem eventKey="Dersler">
        <NavIcon><i className='fa-solid fa-books' style={{fontSize:"1.5em"}}/></NavIcon>
        <NavText>Derslerim</NavText>
      </NavItem>
      <NavItem eventKey="Notlar">
        <NavIcon><i className='fa-thin fa-note' style={{fontSize:"1.5em"}}/></NavIcon>
        <NavText>Notlarim</NavText>
      </NavItem>
      <NavItem eventKey="Duyurular">
        <NavIcon><i className='fa-thin fa-note' style={{fontSize:"1.5em"}}/></NavIcon>
        <NavText>Duyurular</NavText>
      </NavItem>
      <NavItem eventKey="Ayarlar">
        <NavIcon><i className='fa-thin fa-note' style={{fontSize:"1.5em"}}/></NavIcon>
        <NavText>Ayarlar</NavText>
        <NavItem eventKey="Kullanici">
          <NavText>Kullanici</NavText>
        </NavItem>
        <NavItem eventKey="SifreSifirla"> 
          <NavText>Sifre Guncelle</NavText>
        </NavItem>
      </NavItem>
    </SideNav.Nav>

    </SideNav>
} 

export default HomePage;
