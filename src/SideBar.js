import React from 'react'
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBook, faHome, faNoteSticky, faUserGear } from '@fortawesome/free-solid-svg-icons';

import "@trendmicro/react-sidenav/dist/react-sidenav.css";


function SideBar()
{
  const navigate= useNavigate();
 return  ( <div class="sidebar sidebar-fixed siderbar-narrow-unfoldable"> <SideNav className="sidebar"
   onSelect={selected => {
       console.log(selected)
       navigate('/'+selected)
   }} 
    
   >,   
   
     <SideNav.Toggle />
      <SideNav.Nav defaultSelected='selected'>
      <NavItem eventKey="HomePage">
        <NavIcon><FontAwesomeIcon icon={faHome}/></NavIcon>
        <NavText>Anasayfa</NavText>
      </NavItem>
      <NavItem eventKey="Dersler">
        <NavIcon><FontAwesomeIcon icon={faBook}/></NavIcon>
        <NavText>Derslerim</NavText>
      </NavItem>
      <NavItem eventKey="Notlar">
        <NavIcon><FontAwesomeIcon icon={faNoteSticky}/></NavIcon>
        <NavText>Notlarim</NavText>
      </NavItem>
      <NavItem eventKey="Duyurular">
        <NavIcon><FontAwesomeIcon icon={faBell}/></NavIcon>
        <NavText>Duyurular</NavText>
      </NavItem>
      <NavItem eventKey="Ayarlar">
        <NavIcon><FontAwesomeIcon icon={faUserGear}/></NavIcon>
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

    </div>
   
   
   
 )

} 

export default SideBar;
